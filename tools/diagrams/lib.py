"""Small SVG builder for AWS-style architecture diagrams.

Follows the AWS Architecture Icons conventions: official service icons,
group boxes (AWS Cloud, account, Region, VPC, subnets, AZ) with their
standard colors, orthogonal connectors and numbered steps.
"""
import html
import re
from pathlib import Path

HERE = Path(__file__).parent
ICONS = HERE / "icons"
FONT = "'Helvetica Neue',Helvetica,Arial,sans-serif"
INK = "#232F3E"
MUTED = "#545B64"
LINE = "#545B64"

BRAND = {
    "googlebigquery": "#4386FA", "apacheairflow": "#017CEE", "googlecloud": "#4285F4",
    "googlecloudcomposer": "#4285F4", "googlecloudstorage": "#4285F4", "grafana": "#F46800",
    "jira": "#0052CC", "laravel": "#FF2D20", "openjdk": "#437291", "php": "#777BB4",
    "vmware": "#607078", "strongswan": "#E00033", "ubuntu": "#E95420", "vuedotjs": "#42B883",
    "terraform": "#7B42BC", "argo": "#EF7B4D", "bitbucket": "#0052CC", "kubernetes": "#326CE5",
}

GROUPS = {
    # kind: (stroke, fill, dashed, icon, label color)
    "cloud": ("#232F3E", "none", False, "group/AWSCloudlogo.svg", "#232F3E"),
    "account": ("#E7157B", "none", False, "group/AWSAccount.svg", "#E7157B"),
    "region": ("#00A4A6", "none", True, "group/Region.svg", "#00A4A6"),
    "vpc": ("#8C4FFF", "none", False, "group/VirtualprivatecloudVPC.svg", "#8C4FFF"),
    "private": ("none", "#E6F6F7", False, "group/Privatesubnet.svg", "#00A4A6"),
    "public": ("none", "#F2F6E8", False, "group/Publicsubnet.svg", "#7AA116"),
    "az": ("#00A4A6", "none", True, None, "#00A4A6"),
    "dc": ("#7D8998", "none", False, "group/Corporatedatacenter.svg", "#5A6B86"),
    "asg": ("#ED7100", "none", True, "group/AutoScalinggroup.svg", "#ED7100"),
    "generic": ("#7D8998", "none", True, None, "#5A6B86"),
    "gcp": ("#4285F4", "none", False, "brand:googlecloud", "#1A73E8"),
    "eks": ("#ED7100", "#fff", True, "aws/AmazonElasticKubernetesService.svg", "#C45500"),
}

STATUS = {
    "IN PRODUCTION": ("#E8F5EE", "#1D8102"),
    "IMPLEMENTED": ("#E8F5EE", "#1D8102"),
    "ARCHITECTURE": ("#EEF2FB", "#2459C9"),
    "IN DEVELOPMENT": ("#FFF4E5", "#B95E00"),
    "OPERATIONS": ("#FFF4E5", "#B95E00"),
}


def _inner(svg_text):
    svg_text = re.sub(r"<\?xml[^>]*>", "", svg_text)
    svg_text = re.sub(r"<title>.*?</title>", "", svg_text, flags=re.S)
    m = re.search(r"<svg([^>]*)>(.*)</svg>", svg_text, flags=re.S)
    attrs, body = m.group(1), m.group(2)
    vb = re.search(r'viewBox="([^"]+)"', attrs).group(1)
    return vb, body


def esc(t):
    return html.escape(t, quote=True)


def text_w(t, size):
    return len(t) * size * 0.56


class Diagram:
    def __init__(self, slug, title, subtitle, status, w=1280, h=820):
        self.slug, self.w, self.h = slug, w, h
        self.title, self.subtitle, self.status = title, subtitle, status
        self.back, self.mid, self.glabels, self.front = [], [], [], []
        self.nodes = {}

    # ---------- icons ----------
    def icon(self, ref, x, y, s):
        if ref.startswith("brand:"):
            name = ref[6:]
            vb, body = _inner((ICONS / "brand" / f"{name}.svg").read_text())
            c = BRAND[name]
            pad = s * 0.2
            return (f'<rect x="{x}" y="{y}" width="{s}" height="{s}" fill="{c}"/>'
                    f'<svg x="{x+pad}" y="{y+pad}" width="{s-2*pad}" height="{s-2*pad}" viewBox="{vb}">'
                    f'<g fill="#fff">{body}</g></svg>')
        vb, body = _inner((ICONS / ref).read_text())
        return f'<svg x="{x}" y="{y}" width="{s}" height="{s}" viewBox="{vb}">{body}</svg>'

    # ---------- groups ----------
    def group(self, x, y, w, h, kind, label, sub=None):
        stroke, fill, dashed, icon, lc = GROUPS[kind]
        da = ' stroke-dasharray="6 4"' if dashed else ""
        sw = 0 if stroke == "none" else 1.5
        self.back.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"{da}/>')
        halo = fill if fill != "none" else "#fff"
        ht = f' stroke="{halo}" stroke-width="5" paint-order="stroke"'
        out = []
        if kind == "az":
            out.append(f'<text x="{x + w/2}" y="{y+20}" text-anchor="middle" font-family="{FONT}" font-size="12" font-weight="700" fill="{lc}"{ht}>{esc(label)}</text>')
        else:
            tx = x + 10
            if icon:
                out.append(self.icon(icon, x, y, 30))
                tx = x + 38
            out.append(f'<text x="{tx}" y="{y+19}" font-family="{FONT}" font-size="12.5" font-weight="700" fill="{lc}"{ht}>{esc(label)}</text>')
            if sub:
                out.append(f'<text x="{tx + text_w(label, 12.5) + 8}" y="{y+19}" font-family="{FONT}" font-size="11.5" fill="{MUTED}"{ht}>{esc(sub)}</text>')
        self.glabels.append("".join(out))

    def stack(self, x, y, w, h, n=3, color="#4285F4"):
        """Offset shadow rectangles behind a group to show replicated environments."""
        out = []
        for i in range(n - 1, 0, -1):
            out.append(f'<rect x="{x + 7*i}" y="{y + 7*i}" width="{w}" height="{h}" fill="#fff" stroke="{color}" stroke-opacity="0.45" stroke-width="1.2"/>')
        self.back.append("".join(out))

    # ---------- nodes ----------
    def node(self, nid, cx, cy, icon, label, sub=None, s=52):
        x, y = cx - s / 2, cy - s / 2
        out = [self.icon(icon, x, y, s)]
        lines = label.split("\n")
        ty = y + s + 17
        for ln in lines:
            out.append(f'<text x="{cx}" y="{ty}" text-anchor="middle" font-family="{FONT}" font-size="13" font-weight="700" fill="{INK}">{esc(ln)}</text>')
            ty += 16
        if sub:
            for ln in sub.split("\n"):
                out.append(f'<text x="{cx}" y="{ty}" text-anchor="middle" font-family="{FONT}" font-size="11.5" fill="{MUTED}">{esc(ln)}</text>')
                ty += 14
        self.front.append("".join(out))
        self.nodes[nid] = dict(cx=cx, cy=cy, s=s, bottom=ty - 8)

    def chip(self, x, y, icon, label, s=30):
        """Small icon with its label on the right — for supporting services."""
        self.front.append(self.icon(icon, x, y, s) +
                          f'<text x="{x + s + 8}" y="{y + s/2 + 4.5}" font-family="{FONT}" font-size="12" font-weight="700" fill="{INK}">{esc(label)}</text>')

    def a(self, nid, side, off=0):
        n = self.nodes[nid]
        h = n["s"] / 2 + 4
        if side == "l":
            return (n["cx"] - h, n["cy"] + off)
        if side == "r":
            return (n["cx"] + h, n["cy"] + off)
        if side == "t":
            return (n["cx"] + off, n["cy"] - h)
        if side == "b":
            return (n["cx"] + off, n["bottom"] + 6)
        if side == "bi":  # bottom of icon (for edges that pass the label sideways)
            return (n["cx"] + off, n["cy"] + h)
        raise ValueError(side)

    # ---------- edges ----------
    def edge(self, pts, label=None, at=None, dashed=False, both=False, step=None, step_at=None, color=LINE, anchor="middle"):
        d = "M" + " L".join(f"{x:.1f} {y:.1f}" for x, y in pts)
        da = ' stroke-dasharray="5 4"' if dashed else ""
        ms = ' marker-start="url(#arrowS)"' if both else ""
        self.mid.append(f'<path d="{d}" fill="none" stroke="{color}" stroke-width="1.6"{da}{ms} marker-end="url(#arrow)"/>')
        if label:
            if at is None:
                (x1, y1), (x2, y2) = pts[len(pts) // 2 - 1], pts[len(pts) // 2]
                at = ((x1 + x2) / 2, (y1 + y2) / 2)
            self.label(at[0], at[1], label, anchor=anchor)
        if step is not None:
            sx, sy = step_at if step_at else pts[0]
            self.step(sx, sy, step)

    def label(self, x, y, t, anchor="middle"):
        lines = t.split("\n")
        w = max(text_w(l, 11) for l in lines) + 10
        h = 15 * len(lines) + 3
        bx = x - w / 2 if anchor == "middle" else (x - 5 if anchor == "start" else x - w + 5)
        out = [f'<rect x="{bx:.1f}" y="{y - h/2:.1f}" width="{w:.1f}" height="{h}" rx="3" fill="#fff" fill-opacity="0.94"/>']
        ty = y - h / 2 + 13
        for l in lines:
            out.append(f'<text x="{x:.1f}" y="{ty:.1f}" text-anchor="{anchor}" font-family="{FONT}" font-size="11" fill="{MUTED}">{esc(l)}</text>')
            ty += 15
        self.front.append("".join(out))

    def step(self, x, y, n):
        self.front.append(
            f'<circle cx="{x}" cy="{y}" r="11" fill="{INK}"/>'
            f'<text x="{x}" y="{y+4.3}" text-anchor="middle" font-family="{FONT}" font-size="12" font-weight="700" fill="#fff">{n}</text>')

    def note(self, x, y, t, size=11.5, color=MUTED, anchor="start", weight="400"):
        self.front.append(f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-family="{FONT}" font-size="{size}" font-weight="{weight}" fill="{color}">{esc(t)}</text>')

    # ---------- output ----------
    def svg(self):
        bg, fg = STATUS[self.status]
        sw = text_w(self.status, 11) + 26
        head = (
            f'<rect width="{self.w}" height="{self.h}" fill="#fff"/>'
            f'<text x="32" y="50" font-family="{FONT}" font-size="26" font-weight="700" fill="{INK}">{esc(self.title)}</text>'
            f'<text x="32" y="76" font-family="{FONT}" font-size="13.5" fill="{MUTED}">{esc(self.subtitle)}</text>'
            f'<rect x="{self.w - 32 - sw}" y="30" width="{sw}" height="24" rx="12" fill="{bg}"/>'
            f'<circle cx="{self.w - 32 - sw + 13}" cy="42" r="3.5" fill="{fg}"/>'
            f'<text x="{self.w - 32 - sw + 22}" y="46" font-family="{FONT}" font-size="11" font-weight="700" letter-spacing="0.6" fill="{fg}">{esc(self.status)}</text>'
            f'<line x1="32" y1="96" x2="{self.w - 32}" y2="96" stroke="#E9EBED"/>'
        )
        foot = (
            f'<text x="32" y="{self.h - 18}" font-family="{FONT}" font-size="11" fill="#879196">Cilso Carvalho · cilsocarvalho.github.io</text>'
            f'<text x="{self.w - 32}" y="{self.h - 18}" text-anchor="end" font-family="{FONT}" font-size="11" fill="#879196">Public reference view · account IDs, IPs and internal names removed</text>'
        )
        defs = (
            '<defs>'
            f'<marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="{LINE}"/></marker>'
            f'<marker id="arrowS" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="{LINE}"/></marker>'
            '</defs>'
        )
        body = "".join(self.back) + "".join(self.mid) + "".join(self.glabels) + "".join(self.front)
        return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {self.w} {self.h}" role="img" aria-label="{esc(self.title)}">'
                f'<title>{esc(self.title)}</title>{defs}{head}{body}{foot}</svg>')

    def save(self, out_dir, focus=None):
        """Write the full diagram and, with focus=(x, y, w, h), a cropped
        close-up of the core of the architecture used for cards and phones."""
        p = Path(out_dir) / f"{self.slug}.svg"
        full = self.svg()
        p.write_text(full)
        if focus:
            x, y, w, h = focus
            crop = full.replace(f'viewBox="0 0 {self.w} {self.h}"', f'viewBox="{x} {y} {w} {h}"', 1)
            (Path(out_dir) / f"{self.slug}-focus.svg").write_text(crop)
        return p
