import { useState } from "react";

const AVATAR = "https://avatars.githubusercontent.com/u/92828760?s=240&v=4";
const facts = [
  { term: "Today", value: "Cloud infrastructure at LG CNS" },
  { term: "Scope", value: "12+ AWS accounts, 3 GCP environments" },
  { term: "Experience", value: "10+ years in IT" },
  { term: "Certification", value: "AWS Solutions Architect – Associate" },
  { term: "Based in", value: "São Paulo, Brazil — remote, UTC-3" },
  { term: "Languages", value: "Portuguese, English" },
];
import { Download, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LINKEDIN_URL, GITHUB_URL } from "@/data/portfolio";
import { caseStudies, heroDiagrams } from "@/data/case-studies";

const Hero = () => {
  const [active, setActive] = useState(heroDiagrams[0].slug);
  const [photoOk, setPhotoOk] = useState(true);
  const study = caseStudies.find((c) => c.slug === active)!;

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div className="container">
        <div className="max-w-4xl">
          <div className="flex items-center gap-5 sm:gap-7">
            {photoOk ? (
              <img src={AVATAR} alt="" width="96" height="96" onError={() => setPhotoOk(false)} className="h-16 w-16 shrink-0 rounded-full border border-border object-cover sm:h-24 sm:w-24" />
            ) : null}
            <h1 className="text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] sm:text-7xl">Cilso Carvalho</h1>
          </div>
          <p className="mt-4 text-xl font-medium sm:text-2xl">Senior Cloud &amp; DevOps Engineer — AWS, Terraform, Kubernetes</p>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted-foreground">
            I design and run production AWS infrastructure: 12+ accounts, hybrid networking with BGP and Direct Connect,
            Kubernetes on EKS, containers on ECS and AI-assisted operations on Amazon Bedrock. 10+ years in IT, from data-center operations to cloud architecture.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg"><a href="#projects">See the case studies</a></Button>
            <Button asChild variant="outline" size="lg"><a href="/Cilso_Carvalho_CV_EN.pdf" download><Download className="h-4 w-4" /> Download résumé</a></Button>
          </div>
          <dl className="mt-10 grid max-w-4xl grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((f) => (
              <div key={f.term} className="border-b border-border py-3 pr-6">
                <dt className="text-sm text-muted-foreground">{f.term}</dt>
                <dd className="mt-0.5 text-[16px]">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 flex gap-4 text-[15px]">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"><Github className="h-4 w-4" /> GitHub</a>
          </div>
        </div>

        <figure className="sheet mt-14 overflow-hidden rounded-lg">
          <div role="tablist" aria-label="Architecture diagrams" className="flex gap-1 overflow-x-auto border-b border-border bg-white px-3 pt-3">
            {heroDiagrams.map((d) => (
              <button
                key={d.slug}
                role="tab"
                aria-selected={active === d.slug}
                aria-controls="hero-diagram"
                onClick={() => setActive(d.slug)}
                className={`-mb-px shrink-0 whitespace-nowrap rounded-t-md border px-4 py-2.5 text-[15px] font-medium transition-colors ${
                  active === d.slug
                    ? "border-border border-b-[hsl(var(--console))] bg-console text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
          <div id="hero-diagram" role="tabpanel" className="overflow-x-auto p-3 sm:p-5">
            <img
              key={active}
              src={`/architecture/${active}.svg?v=2026-10b`}
              alt={`${study.title} — architecture diagram`}
              width="1280"
              height="820"
              className="w-full rounded border border-border bg-white sm:min-w-[760px]"
            />
          </div>
          <figcaption className="flex flex-wrap items-baseline justify-between gap-3 border-t border-border bg-white px-5 py-4">
            <span className="text-[15px] text-muted-foreground">{study.summary}</span>
            <Link to={`?project=${study.slug}`} className="shrink-0 text-[15px] font-semibold text-primary hover:underline">Read the case study</Link>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
