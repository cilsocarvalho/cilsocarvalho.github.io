import { Download } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import StatusBadge from "@/components/StatusBadge";
import { caseStudies } from "@/data/case-studies";

const CaseStudy = ({ slug }: { slug: string }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return null;
  const src = `/architecture/${study.slug}.svg?v=2026-10b`;
  return (
    <Dialog open={searchParams.get("project") === slug} onOpenChange={(open) => {
      setSearchParams((current) => {
        const next = new URLSearchParams(current);
        if (open) next.set("project", slug);
        else next.delete("project");
        return next;
      }, { replace: true });
    }}>
      <DialogTrigger asChild>
        <Button variant="outline" aria-label={`Read the case study: ${study.title}`}>Read the case study</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-6xl overflow-x-hidden overflow-y-auto rounded-lg bg-background p-5 sm:p-10">
        <DialogHeader className="min-w-0 pr-6 text-left">
          <div><StatusBadge status={study.status} /></div>
          <DialogTitle className="mt-3 text-2xl font-semibold leading-tight sm:text-4xl">{study.title}</DialogTitle>
          <DialogDescription className="mt-2 max-w-[70ch] text-base leading-relaxed">{study.summary}</DialogDescription>
        </DialogHeader>

        <figure className="sheet mt-4 min-w-0 rounded-md p-2 sm:p-3">
          <div className="overflow-x-auto"><img src={src} alt={`${study.title} — architecture diagram`} width="1280" height="820" className="min-w-[760px] w-full rounded-sm border border-border bg-white" /></div>
          <a href={src} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-1 text-sm font-medium text-primary hover:underline">Open the diagram full size</a>
        </figure>

        <div className="mt-6 grid gap-x-12 gap-y-8 lg:grid-cols-2">
          <section>
            <h3 className="text-lg font-semibold">The problem</h3>
            <p className="mt-2 leading-relaxed text-foreground/85">{study.problem}</p>
          </section>
          <section>
            <h3 className="text-lg font-semibold">What I built</h3>
            <p className="mt-2 leading-relaxed text-foreground/85">{study.built}</p>
          </section>
          <section>
            <h3 className="text-lg font-semibold">How it works</h3>
            <p className="mt-1 text-sm text-muted-foreground">Numbers match the markers in the diagram.</p>
            <ol className="mt-3 space-y-3">
              {study.flow.map((step, i) => (
                <li key={step} className="flex gap-3 leading-relaxed text-foreground/85">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-[13px] font-semibold text-background">{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>
          <section>
            <h3 className="text-lg font-semibold">Key decisions</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-foreground/85 marker:text-primary">
              {study.decisions.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        </div>

        <section className="mt-8 border-t border-border pt-6">
          <h3 className="text-lg font-semibold">Result</h3>
          <p className="mt-2 max-w-[75ch] text-lg leading-relaxed">{study.result}</p>
        </section>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button variant="outline" asChild className="w-fit">
            <a href={src} download={`${study.slug}-architecture.svg`}><Download className="h-4 w-4" /> Download the diagram</a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Icons from the <a href="https://aws.amazon.com/architecture/icons/" target="_blank" rel="noopener noreferrer" className="text-primary underline">AWS Architecture Icons</a>. Account IDs, IPs and internal names are removed.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudy;
