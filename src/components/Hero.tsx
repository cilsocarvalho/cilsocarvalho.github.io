import { Linkedin, FolderGit2, Download, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKEDIN_URL, GITHUB_URL, heroBadges } from "@/data/portfolio";

const floatingCards = [
  { label: "AWS", sub: "Cloud", className: "left-[2%] top-[6%]", duration: "5s", delay: "0s" },
  { label: "Kubernetes", sub: "Amazon EKS", className: "right-[4%] top-[0%]", duration: "4.2s", delay: "0.6s" },
  { label: "Terraform", sub: "IaC", className: "left-[10%] bottom-[8%]", duration: "4.8s", delay: "1.1s" },
  { label: "BigQuery", sub: "DataOps", className: "right-[8%] bottom-[2%]", duration: "5.4s", delay: "0.3s" },
];

const Hero = () => (
  <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
    {/* Layered background */}
    <div className="absolute inset-0 bg-gradient-glow" />
    <div className="absolute inset-0 grid-bg animate-grid-pan opacity-70" />
    <div className="absolute -top-24 left-[-10%] h-[32rem] w-[32rem] rounded-full bg-accent/15 blur-[140px] animate-pulse-glow" />
    <div className="absolute bottom-[-10%] right-[-8%] h-96 w-96 rounded-full bg-primary/15 blur-[120px] animate-pulse-glow" />

    <div className="container relative z-10 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        {/* Left content */}
        <div className="lg:col-span-7">
          <div className="mb-8 inline-flex animate-fade-up items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to Senior Cloud and DevOps opportunities
          </div>

          <h1
            className="animate-fade-up text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.05s" }}
          >
            Cilso
            <br />
            <span className="gradient-text text-glow">Carvalho</span>
          </h1>

          <p
            className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-foreground/85 sm:text-xl"
            style={{ animationDelay: "0.1s" }}
          >
            Cloud Engineer building reliable, automated, and cost-efficient platforms on{" "}
            <span className="font-medium text-primary">AWS &amp; GCP</span> — with{" "}
            <span className="font-medium text-primary">Kubernetes, Terraform</span> and{" "}
            <span className="font-medium text-primary">Data Infrastructure</span> automation.
          </p>

          <div
            className="mt-7 flex animate-fade-up flex-wrap items-center gap-2.5"
            style={{ animationDelay: "0.15s" }}
          >
            {heroBadges.map((badge) => (
              <span
                key={badge}
                className="glass-card rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground/85"
              >
                {badge}
              </span>
            ))}
          </div>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ animationDelay: "0.2s" }}
          >
            <Button asChild variant="hero" size="lg">
              <a href="#projects">
                <FolderGit2 className="h-4 w-4" /> View Projects
              </a>
            </Button>
            <Button asChild variant="glow" size="lg">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/Cilso_Carvalho_CV_EN.pdf" download>
                <Download className="h-4 w-4" /> Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Right visual: floating glass cards + terminal */}
        <div className="relative hidden h-[460px] lg:col-span-5 lg:block">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[90px]" />

          {floatingCards.map(({ label, sub, className, duration, delay }) => (
            <div
              key={label}
              className={`absolute animate-float ${className}`}
              style={{ animationDuration: duration, animationDelay: delay }}
            >
              <div className="glass-card flex min-w-[120px] flex-col gap-1 rounded-2xl px-5 py-4">
                <span className="text-sm font-semibold text-foreground">{label}</span>
                <span className="text-[11px] uppercase tracking-widest text-primary">{sub}</span>
              </div>
            </div>
          ))}

          {/* Terminal panel */}
          <div className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2">
            <div className="rounded-2xl border border-primary/20 bg-popover/80 p-5 shadow-glow backdrop-blur-xl">
              <div className="mb-3 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/60" />
              </div>
              <div className="space-y-1 font-mono text-[12px] leading-relaxed">
                <p className="text-primary">$ terraform apply</p>
                <p className="text-muted-foreground">Plan: 12 to add, 0 to change.</p>
                <p className="text-muted-foreground">Creating aws_eks_cluster…</p>
                <p className="flex items-center gap-1 text-foreground">
                  <ArrowRight className="h-3 w-3 text-primary" /> cluster_active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
