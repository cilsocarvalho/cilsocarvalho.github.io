import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKEDIN_URL, GITHUB_URL, EMAIL } from "@/data/portfolio";

const Contact = () => (
  <section id="contact" aria-labelledby="contact-title" className="border-t border-border bg-console py-20 lg:py-24">
    <div className="container"><div className="max-w-3xl">
      <h2 id="contact-title" className="text-3xl font-semibold sm:text-[2.5rem] sm:leading-[1.1]">Let's talk</h2>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        I'm open to senior Cloud, DevOps and Platform Engineering roles, remote from Brazil (UTC-3) with full overlap with US business hours.
        Email is the fastest way to reach me.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg"><a href={`mailto:${EMAIL}`}><Mail className="h-4 w-4" /> {EMAIL}</a></Button>
        <Button asChild variant="outline" size="lg"><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a></Button>
        <Button asChild variant="outline" size="lg"><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github className="h-4 w-4" /> GitHub</a></Button>
      </div>
    </div></div>
  </section>
);

export default Contact;
