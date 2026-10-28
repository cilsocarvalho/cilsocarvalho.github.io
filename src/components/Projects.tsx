import { Link } from "react-router-dom";
import Section from "@/components/Section";
import CaseStudy from "@/components/CaseStudy";
import StatusBadge from "@/components/StatusBadge";
import { caseStudies, type CaseStudyData } from "@/data/case-studies";

const FEATURED = 3;

const Diagram = ({ study, className = "" }: { study: CaseStudyData; className?: string }) => (
  <Link
    to={`?project=${study.slug}`}
    className={`sheet group block overflow-hidden rounded-md p-2 ${className}`}
    aria-label={`Open the ${study.title} case study`}
  >
    <img
      src={`/architecture/${study.slug}.svg?v=2026-10`}
      alt={`${study.title} — architecture diagram`}
      width="1280"
      height="820"
      loading="lazy"
      className="w-full rounded-sm transition-opacity group-hover:opacity-90"
    />
  </Link>
);

const Tags = ({ tags }: { tags: string[] }) => (
  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
    {tags.map((tag) => (
      <li key={tag} className="rounded border border-border px-2 py-0.5 text-[13px] text-muted-foreground">{tag}</li>
    ))}
  </ul>
);

const Projects = () => {
  const featured = caseStudies.slice(0, FEATURED);
  const more = caseStudies.slice(FEATURED);
  return (
    <Section
      id="projects"
      title="Case studies"
      subtitle="Systems from my work at LG CNS. Each one opens with the architecture, then the problem, what I built and the decisions behind it."
    >
      <ol className="divide-y divide-border border-y border-border">
        {featured.map((study) => (
          <li key={study.slug} className="grid gap-6 py-12 xl:grid-cols-12 xl:gap-12">
            <Diagram study={study} className="self-start xl:col-span-7" />
            <div className="flex flex-col xl:col-span-5">
              <StatusBadge status={study.status} />
              <h3 className="mt-4 text-[1.75rem] font-semibold leading-tight">{study.title}</h3>
              <p className="mt-3 leading-relaxed text-foreground/85">{study.summary}</p>
              <p className="mt-3 leading-relaxed text-muted-foreground">{study.result}</p>
              <Tags tags={study.tags} />
              <div className="mt-7"><CaseStudy slug={study.slug} /></div>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mt-20 text-2xl font-semibold">More systems</h3>
      <ul className="mt-8 grid gap-x-8 gap-y-14 md:grid-cols-2 2xl:grid-cols-3">
        {more.map((study) => (
          <li key={study.slug} className="flex flex-col">
            <Diagram study={study} />
            <div className="mt-5"><StatusBadge status={study.status} /></div>
            <h4 className="mt-3 text-xl font-semibold leading-snug">{study.title}</h4>
            <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">{study.summary}</p>
            <div className="mt-5"><CaseStudy slug={study.slug} /></div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
