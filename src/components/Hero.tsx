import { useState } from "react";
import { Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NetworkBackdrop from "@/components/NetworkBackdrop";
import { caseStudies, heroDiagrams } from "@/data/case-studies";

const facts = [
  { term: "Today", value: "Cloud infrastructure at LG CNS" },
  { term: "Scope", value: "12+ AWS accounts, 3 GCP environments" },
  { term: "Experience", value: "10+ years in IT" },
  { term: "Certification", value: "AWS Solutions Architect – Associate" },
  { term: "Based in", value: "São Paulo, Brazil — remote, UTC-3" },
  { term: "Languages", value: "Portuguese, English" },
];

const Hero = () => {
  const [active, setActive] = useState(heroDiagrams[0].slug);
  const study = caseStudies.find((c) => c.slug === active)!;

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-24 lg:pt-28">
      <div className="absolute inset-x-0 top-0 h-[44rem]"><NetworkBackdrop /></div>
      <div className="container relative">
        <p className="text-lg text-muted-foreground">Cilso Carvalho — Senior Cloud &amp; DevOps Engineer</p>
        <h1 className="mt-5 max-w-[14ch] text-[2.9rem] font-semibold leading-[0.98] tracking-[-0.04em] sm:text-7xl xl:text-[5.5rem]">
          Production AWS, from the BGP session to the Bedrock prompt.
        </h1>
        <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-muted-foreground">
          I design and run cloud platforms end to end: Kubernetes on EKS and containers on ECS, hybrid networks over
          Site-to-Site VPN and Direct Connect, Terraform for everything, and AI-assisted operations on Amazon Bedrock.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg"><a href="#projects">See the case studies</a></Button>
          <Button asChild variant="outline" size="lg" className="lg:hidden"><a href="/Cilso_Carvalho_CV_EN.pdf" download><Download className="h-4 w-4" /> Download résumé</a></Button>
        </div>

        <dl className="mt-16 grid max-w-5xl grid-cols-1 border-t border-border sm:grid-cols-2 xl:grid-cols-3">
          {facts.map((f) => (
            <div key={f.term} className="border-b border-border py-4 pr-6">
              <dt className="text-sm text-muted-foreground">{f.term}</dt>
              <dd className="mt-1 text-[17px]">{f.value}</dd>
            </div>
          ))}
        </dl>

        <figure className="sheet mt-16 overflow-hidden rounded-lg">
          <div role="tablist" aria-label="Architecture diagrams" className="flex gap-1 overflow-x-auto border-b border-border px-3 pt-3">
            {heroDiagrams.map((d) => (
              <button
                key={d.slug}
                role="tab"
                aria-selected={active === d.slug}
                aria-controls="hero-diagram"
                onClick={() => setActive(d.slug)}
                className={`-mb-px shrink-0 whitespace-nowrap rounded-t-md border px-4 py-2.5 text-[15px] font-medium transition-colors ${
                  active === d.slug
                    ? "border-border border-b-background bg-background text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
          <div id="hero-diagram" role="tabpanel" className="overflow-x-auto bg-background p-3 sm:p-5">
            <img
              key={active}
              src={`/architecture/${active}.svg?v=2026-10`}
              alt={`${study.title} — architecture diagram`}
              width="1280"
              height="820"
              className="w-full rounded sm:min-w-[760px]"
            />
          </div>
          <figcaption className="flex flex-wrap items-baseline justify-between gap-3 border-t border-border px-5 py-4">
            <span className="text-[15px] text-muted-foreground">{study.summary}</span>
            <Link to={`?project=${study.slug}`} className="shrink-0 text-[15px] font-semibold text-primary hover:underline">Read the case study</Link>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
