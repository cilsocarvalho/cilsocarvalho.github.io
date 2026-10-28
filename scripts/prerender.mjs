// Runs after `vite build`. Puts the rendered page into dist/index.html, so crawlers,
// link previews, ATS parsers and AI tools that don't execute JavaScript can read it,
// and writes one static page per case study at /case-studies/<slug>/.
import { createServer } from "vite";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE = "https://cilsocarvalho.github.io";
const DIST = path.resolve("dist");
const DIAGRAM_VERSION = "2026-10c";

const esc = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// React warns that useLayoutEffect does nothing on the server; that is expected here.
const originalError = console.error;
console.error = (...args) => {
  if (typeof args[0] === "string" && args[0].includes("useLayoutEffect does nothing on the server")) return;
  originalError(...args);
};

const vite = await createServer({
  configFile: path.resolve("vite.config.ts"),
  server: { middlewareMode: true, hmr: false },
  appType: "custom",
  logLevel: "error",
});

try {
  const { renderHome, caseStudies } = await vite.ssrLoadModule("/scripts/prerender-entry.tsx");

  // 1. Home page
  const indexPath = path.join(DIST, "index.html");
  const template = await readFile(indexPath, "utf8");
  const marker = '<div id="root"></div>';
  if (!template.includes(marker)) throw new Error("root marker not found in dist/index.html");
  await writeFile(indexPath, template.replace(marker, `<div id="root">${renderHome()}</div>`));

  // 2. One static page per case study
  for (const [i, study] of caseStudies.entries()) {
    const prev = caseStudies[i - 1];
    const next = caseStudies[i + 1];
    const url = `${SITE}/case-studies/${study.slug}/`;
    const diagram = `/architecture/${study.slug}.svg?v=${DIAGRAM_VERSION}`;
    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(study.title)} | Cilso Carvalho</title>
<meta name="description" content="${esc(study.summary)}" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="article" />
<meta property="og:title" content="${esc(study.title)}" />
<meta property="og:description" content="${esc(study.summary)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${SITE}/architecture/${study.slug}.svg" />
<style>
  :root { color-scheme: light; --fg: #0f172a; --muted: #475569; --line: #e2e8f0; --accent: #1d4ed8; --bg: #ffffff; --soft: #f8fafc; }
  * { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--fg); font: 17px/1.65 "Work Sans", system-ui, -apple-system, "Segoe UI", sans-serif; }
  .wrap { max-width: 980px; margin: 0 auto; padding: 32px 16px 64px; }
  a { color: var(--accent); }
  .back { font-size: 15px; text-decoration: none; }
  .status { display: inline-block; margin-top: 28px; padding: 2px 10px; border: 1px solid var(--line); border-radius: 999px; font-size: 13px; font-weight: 600; color: var(--muted); }
  h1 { margin: 12px 0 8px; font-size: clamp(28px, 4vw, 40px); line-height: 1.15; }
  .summary { margin: 0; color: var(--muted); font-size: 19px; max-width: 70ch; }
  figure { margin: 28px 0 0; padding: 10px; border: 1px solid var(--line); border-radius: 8px; background: var(--soft); }
  figure img { display: block; width: 100%; height: auto; background: #fff; border-radius: 4px; }
  figcaption { margin-top: 8px; font-size: 14px; }
  .grid { display: grid; gap: 28px 48px; margin-top: 32px; }
  @media (min-width: 860px) { .grid { grid-template-columns: 1fr 1fr; } }
  h2 { margin: 0 0 8px; font-size: 19px; }
  p, li { color: #1e293b; }
  ol, ul { margin: 0; padding-left: 22px; }
  li + li { margin-top: 8px; }
  .result { margin-top: 36px; padding-top: 24px; border-top: 1px solid var(--line); }
  .result p { font-size: 19px; max-width: 75ch; }
  .tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; padding: 0; list-style: none; }
  .tags li { margin: 0; padding: 2px 10px; border-radius: 6px; background: var(--soft); border: 1px solid var(--line); font-size: 14px; color: var(--muted); }
  nav.pager { display: flex; justify-content: space-between; gap: 16px; margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--line); font-size: 15px; }
  footer { margin-top: 32px; font-size: 14px; color: var(--muted); }
</style>
</head>
<body>
<main class="wrap">
  <a class="back" href="/#projects">&larr; All case studies</a>
  <div><span class="status">${esc(study.status)}</span></div>
  <h1>${esc(study.title)}</h1>
  <p class="summary">${esc(study.summary)}</p>
  <figure>
    <img src="${diagram}" alt="Architecture diagram: ${esc(study.title)}" width="1280" height="820" />
    <figcaption><a href="${diagram}">Open the diagram full size</a></figcaption>
  </figure>
  <div class="grid">
    <section><h2>The problem</h2><p>${esc(study.problem)}</p></section>
    <section><h2>What I built</h2><p>${esc(study.built)}</p></section>
    <section><h2>How it works</h2><ol>${study.flow.map((s) => `<li>${esc(s)}</li>`).join("")}</ol></section>
    <section><h2>Key decisions</h2><ul>${study.decisions.map((s) => `<li>${esc(s)}</li>`).join("")}</ul></section>
  </div>
  <section class="result"><h2>Result</h2><p>${esc(study.result)}</p>
    <ul class="tags">${study.tags.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
  </section>
  <nav class="pager">
    <span>${prev ? `<a href="/case-studies/${prev.slug}/">&larr; ${esc(prev.title)}</a>` : ""}</span>
    <span>${next ? `<a href="/case-studies/${next.slug}/">${esc(next.title)} &rarr;</a>` : ""}</span>
  </nav>
  <footer>Cilso Carvalho, Senior Cloud &amp; DevOps Engineer &middot; <a href="/">cilsocarvalho.github.io</a> &middot; <a href="https://www.linkedin.com/in/cilso-carvalho/">LinkedIn</a>. Account IDs, IPs and internal names are removed from all diagrams.</footer>
</main>
</body>
</html>
`;
    const dir = path.join(DIST, "case-studies", study.slug);
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, "index.html"), html);
  }

  // 3. Sitemap with every page
  const urls = [`${SITE}/`, ...caseStudies.map((s) => `${SITE}/case-studies/${s.slug}/`)];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${u}</loc></url>`)
    .join("\n")}\n</urlset>\n`;
  await writeFile(path.join(DIST, "sitemap.xml"), sitemap);

  console.log(`prerender: home + ${caseStudies.length} case studies`);
} finally {
  await vite.close();
}
