import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKEDIN_URL, GITHUB_URL, EMAIL } from "@/data/portfolio";

const Contact = () => (
  <section id="contact" className="relative overflow-hidden py-24 lg:py-32">
    <div className="absolute inset-0 bg-gradient-glow" />
    <div className="container relative z-10">
      <div className="glass-card mx-auto max-w-3xl rounded-3xl p-10 text-center lg:p-14">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
        <h2 className="font-display text-3xl font-bold sm:text-4xl">
          Let&apos;s connect and build <span className="gradient-text">reliable cloud platforms</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Open to senior Cloud, DevOps and Platform Engineering roles — remote from Brazil (UTC-3), full overlap with US business hours.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="hero" size="lg">
            <a href={`mailto:${EMAIL}`}><Mail className="h-4 w-4" /> {EMAIL}</a>
          </Button>
          <Button asChild variant="glow" size="lg">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
