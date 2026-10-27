import { ArrowUpRight, Download, Cloud, GitBranch, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKEDIN_URL } from "@/data/portfolio";

const focusAreas = [
  { icon: Cloud, title: "Cloud architecture", text: "AWS · Terraform · Hybrid connectivity" },
  { icon: GitBranch, title: "Delivery and automation", text: "CI/CD · Kubernetes · Serverless integrations" },
  { icon: Activity, title: "Operational insight", text: "FinOps · Observability · AI-assisted operations" },
];

const Hero = () => (
  <section id="home" className="hero-editorial relative overflow-hidden border-b border-border pt-32 pb-16 sm:pt-40 sm:pb-24">
    <div className="container grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
      <div className="lg:col-span-7">
        <p className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-primary"><span className="h-2 w-2 rounded-full bg-primary" /> Open to Senior Cloud and DevOps opportunities</p>
        <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-.055em] sm:text-7xl">Cilso Carvalho<span className="mt-5 block text-3xl font-normal tracking-[-.035em] text-muted-foreground sm:text-4xl">Senior Cloud &amp;<br />DevOps Engineer</span></h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">I design, automate and run production AWS infrastructure with Terraform, Kubernetes (EKS) and CI/CD — and weigh every decision against reliability, security and cost.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg"><a href="#projects">Explore my work <ArrowUpRight className="h-4 w-4" /></a></Button>
          <Button asChild variant="outline" size="lg"><a href="/Cilso_Carvalho_CV_EN.pdf" download><Download className="h-4 w-4" /> Download resume</a></Button>
        </div>
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground"><span>São Paulo, Brazil · Remote (UTC-3)</span><span>10+ years in IT</span><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">LinkedIn ↗</a></div>
      </div>
      <aside className="relative rounded-2xl border border-primary/20 bg-[#183b38] p-6 shadow-xl lg:col-span-5 sm:p-7">
        <div className="mb-5 flex items-center justify-between text-xs font-semibold uppercase tracking-[.18em] text-white/75"><span>Architecture in practice</span><span>01 / AIOps</span></div>
        <a href="?project=aiops" className="mb-6 block overflow-hidden rounded-lg border border-white/20 bg-white" aria-label="Explore AIOps architecture"><img src="/architecture/aiops.svg?v=aws-2026" width="1280" height="820" alt="AIOps architecture with official AWS Lambda, Bedrock, DynamoDB and API Gateway icons" className="w-full" /></a>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[.2em] text-white/65">Engineering focus</p>
        {focusAreas.map(({icon:Icon,title,text},index)=>(<div key={title} className={`flex gap-4 py-4 ${index ? "border-t border-white/15" : ""}`}><div className="mt-1 rounded-lg bg-white/10 p-2.5 text-[#b4e3d3]"><Icon className="h-5 w-5" /></div><div><h2 className="text-base font-semibold text-white">{title}</h2><p className="mt-1 text-sm leading-relaxed text-white/75">{text}</p></div></div>))}
        <a href="#certifications" className="inline-flex items-center gap-2 border-t border-white/15 pt-5 text-sm font-medium text-[#b4e3d3]">AWS certified · View credentials <ArrowUpRight className="h-4 w-4" /></a>
      </aside>
    </div>
  </section>
);
export default Hero;
