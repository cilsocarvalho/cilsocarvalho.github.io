import { Download, ArrowUpRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { caseStudies } from "@/data/case-studies";

const CaseStudy = ({ slug }: { slug: string }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return null;
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
        <Button variant="glow" className="mt-5 w-full" aria-label={`Read case study: ${study.title}`}>
          Read case study <ArrowUpRight className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-6xl overflow-x-hidden overflow-y-auto rounded-2xl border-primary/20 bg-background p-5 sm:p-8">
        <DialogHeader className="min-w-0 pr-5 text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{study.status}</p>
          <DialogTitle className="font-display text-2xl leading-snug sm:text-3xl">{study.title}</DialogTitle>
          <DialogDescription className="leading-relaxed">{study.problem}</DialogDescription>
        </DialogHeader>
        <figure className="mt-3 min-w-0 max-w-full">
          <div className="max-w-full overflow-x-auto rounded-xl border border-border"><img src={`/architecture/${study.slug}.svg`} alt={`${study.title}: ${study.nodes.join(" → ")}`} width="1280" height="820" className="min-w-[800px] w-full" /></div>
          <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.diagramCaption} <a href={`/architecture/${study.slug}.svg`} target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">Open full-size diagram</a></figcaption>
        </figure>
        {study.slug !== "gcp-data" && <p className="text-xs text-muted-foreground">Service icons from the <a href="https://aws.amazon.com/architecture/icons/" target="_blank" rel="noopener noreferrer" className="text-primary underline">official AWS Architecture Icons</a>. Public reference view; no AWS endorsement implied.</p>}
        <div className="grid gap-6 sm:grid-cols-2">
          <section>
            <h3 className="mb-2 font-display text-lg font-semibold">My contribution</h3>
            <p className="text-sm leading-relaxed text-foreground/85">{study.contribution}</p>
          </section>
          <section>
            <h3 className="mb-2 font-display text-lg font-semibold">Technical decisions</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/85">
              {study.decisions.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section>
            <h3 className="mb-2 font-display text-lg font-semibold">Outcome</h3>
            <p className="text-sm leading-relaxed text-foreground/85">{study.result}</p>
          </section>
          <section>
            <h3 className="mb-2 font-display text-lg font-semibold">Evidence reviewed</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/85">
              {study.verification.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
        </div>
        <aside className="mt-2 rounded-xl border border-border bg-muted/30 p-4 text-sm leading-relaxed text-muted-foreground">
          <h3 className="mb-1 font-semibold text-foreground">Scope and delivery status</h3>
          {study.boundary}
        </aside>
        <Button variant="outline" asChild className="w-fit">
          <a href={`/architecture/${study.slug}.svg`} download><Download className="h-4 w-4" /> Download architecture diagram</a>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default CaseStudy;
