import Section from "@/components/Section";
import CaseStudy from "@/components/CaseStudy";
import { Link } from "react-router-dom";
import { projects } from "@/data/portfolio";
import {
  ServerCog, Boxes, LineChart, Database, Network, GitBranch, CheckCircle2, LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  ServerCog, Boxes, LineChart, Database, Network, GitBranch,
};

const Projects = () => (
  <Section
    id="projects"
    eyebrow="Case Studies"
    title="Selected cloud and automation projects"
    subtitle="My contributions, technical decisions, and delivery status across cloud and automation projects."
  >
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project) => {
        const Icon = icons[project.icon] ?? ServerCog;
        return (
          <article
            key={project.title}
            className="glass-card neon-border group relative flex flex-col overflow-hidden rounded-2xl p-6 sm:p-8"
          >

            <Link to={`?project=${project.slug}`} className="mb-7 block overflow-hidden rounded-xl border border-border bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary" aria-label={`Preview architecture: ${project.title}`}>
              <img src={`/architecture/${project.slug}.svg?v=aws-2026`} alt={`${project.title} architecture preview`} width="1280" height="820" loading="lazy" className="w-full transition-transform duration-500 group-hover:scale-[1.025]" />
            </Link>
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <span className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {project.category}
              </span>
            </div>

            <h3 className="font-display text-xl font-semibold leading-snug">{project.title}</h3>
            <p className="mt-2 text-sm font-medium text-foreground/80">{project.summary}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

            <div className="mt-5 space-y-2 rounded-xl border border-border/50 bg-background/30 p-4">
              {project.outcomes.map((o) => (
                <div key={o} className="flex items-center gap-2 text-sm text-foreground/85">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {o}
                </div>
              ))}
            </div>

            <details className="mt-5 rounded-xl border border-border/60 p-4">
              <summary className="cursor-pointer font-medium text-primary">Contribution and scope</summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.details}</p>
            </details>
            <CaseStudy slug={project.slug} />
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  </Section>
);

export default Projects;
