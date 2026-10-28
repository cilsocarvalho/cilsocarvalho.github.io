import { Link } from "react-router-dom";
import Section from "@/components/Section";
import CaseStudy from "@/components/CaseStudy";
import StatusBadge from "@/components/StatusBadge";
import { caseStudies } from "@/data/case-studies";

const Projects = () => (
  <Section
    id="projects"
    title="Case studies"
    subtitle="Systems from my work at LG CNS. Each one opens with the architecture, then the problem, what I built and the decisions behind it."
  >
    <ol className="divide-y divide-border border-y border-border">
      {caseStudies.map((study) => (
        <li key={study.slug} className="grid gap-6 py-10 lg:grid-cols-12 lg:gap-10">
          <Link
            to={`?project=${study.slug}`}
            className="sheet group block overflow-hidden rounded-md p-2 lg:col-span-7"
            aria-label={`Open the ${study.title} case study`}
          >
            <img
              src={`/architecture/${study.slug}.svg?v=2026-10`}
              alt={`${study.title} — architecture diagram`}
              width="1280"
              height="820"
              loading="lazy"
              className="w-full rounded-sm border border-border bg-white transition-opacity group-hover:opacity-90"
            />
          </Link>
          <div className="flex flex-col lg:col-span-5">
            <StatusBadge status={study.status} />
            <h3 className="mt-4 text-2xl font-semibold leading-snug">{study.title}</h3>
            <p className="mt-3 leading-relaxed text-foreground/85">{study.summary}</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">{study.result}</p>
            <ul className="mt-5 flex flex-wrap gap-x-2 gap-y-2" aria-label="Technologies">
              {study.tags.map((tag) => (
                <li key={tag} className="rounded border border-border px-2 py-0.5 text-[13px] text-muted-foreground">{tag}</li>
              ))}
            </ul>
            <div className="mt-6"><CaseStudy slug={study.slug} /></div>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Projects;
