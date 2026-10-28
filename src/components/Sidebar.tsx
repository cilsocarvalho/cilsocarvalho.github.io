import { useEffect, useState } from "react";
import { Download, Linkedin, Github, Mail } from "lucide-react";
import { navItems, LINKEDIN_URL, GITHUB_URL, EMAIL } from "@/data/portfolio";

const Sidebar = () => {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = navItems.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[var(--sidebar-w)] flex-col border-r border-border bg-background px-7 py-8 lg:flex">
      <a href="#home" className="block">
        <span className="block text-xl font-semibold tracking-tight">Cilso Carvalho</span>
        <span className="mt-3 block leading-snug text-muted-foreground">
          Cloud &amp; DevOps engineering<br />AWS architecture<br />Platform operations
        </span>
      </a>
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        LG CNS — São Paulo, Brazil<br />Remote, UTC-3
      </p>

      <nav aria-label="Sections" className="mt-auto">
        <ul className="border-t border-border">
          {navItems.map((item) => {
            const on = active === item.href.slice(1);
            return (
              <li key={item.href} className="border-b border-border">
                <a
                  href={item.href}
                  aria-current={on ? "true" : undefined}
                  className={`relative flex py-3 pl-4 text-[15px] transition-colors ${on ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  <span className={`absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded bg-primary transition-opacity ${on ? "opacity-100" : "opacity-0"}`} aria-hidden="true" />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <a href="/Cilso_Carvalho_CV_EN.pdf" download className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-input px-4 py-2.5 text-[15px] font-semibold hover:border-foreground/40 hover:bg-secondary">
          <Download className="h-4 w-4" /> Download résumé
        </a>
        <div className="mt-5 flex gap-4 text-muted-foreground">
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-5 w-5" /></a>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary"><Github className="h-5 w-5" /></a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="hover:text-primary"><Mail className="h-5 w-5" /></a>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
