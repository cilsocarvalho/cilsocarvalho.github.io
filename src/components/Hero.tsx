import { ArrowUpRight, Download, Cloud, GitBranch, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKEDIN_URL } from "@/data/portfolio";

const focusAreas = [
  { icon: Cloud, title: "Cloud architecture", text: "AWS and GCP · Terraform · Hybrid connectivity" },
  { icon: GitBranch, title: "Delivery and automation", text: "CI/CD · Kubernetes · Serverless integrations" },
  { icon: Activity, title: "Operational insight", text: "FinOps · Observability · AI-assisted operations" },
];

const Hero = () => (
  <section id="home" className="border-b border-border pt-32 pb-16 sm:pt-40 sm:pb-24">
    <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
      <div className="lg:col-span-7">
        <p className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary"><span className="h-2 w-2 rounded-full bg-primary" /> Open to Senior Cloud and DevOps opportunities</p>
        <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-.055em] sm:text-7xl">Cilso Carvalho<span className="mt-5 block text-3xl font-normal tracking-[-.035em] text-muted-foreground sm:text-4xl">Cloud Engineer &amp;<br />Platform Specialist</span></h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">I build and support cloud infrastructure, automate delivery, and connect engineering decisions to reliability and cost visibility.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg"><a href="#projects">Explore my work <ArrowUpRight className="h-4 w-4" /></a></Button>
          <Button asChild variant="outline" size="lg"><a href="/Cilso_Carvalho_CV_EN.pdf" download><Download className="h-4 w-4" /> Download resume</a></Button>
        </div>
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"><span>São Paulo, Brazil</span><span>10+ years in IT</span><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">LinkedIn ↗</a></div>
      </div>
      <aside className="rounded-2xl border border-border bg-card p-7 lg:col-span-5 sm:p-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[.2em] text-muted-foreground">Engineering focus</p>
        {focusAreas.map(({icon:Icon,title,text},index)=>(<div key={title} className={`flex gap-4 py-6 ${index ? "border-t border-border" : "pt-0"}`}><div className="mt-1 rounded-lg bg-secondary p-2.5 text-primary"><Icon className="h-5 w-5" /></div><div><h2 className="text-lg font-semibold">{title}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></div></div>))}
        <a href="#certifications" className="inline-flex items-center gap-2 border-t border-border pt-5 text-sm font-medium text-primary">AWS certified · View credentials <ArrowUpRight className="h-4 w-4" /></a>
      </aside>
    </div>
  </section>
);
export default Hero;
