import Section from "@/components/Section";
import { certifications, trainingBadges } from "@/data/portfolio";
import { Award, ArrowUpRight } from "lucide-react";

const Certifications = () => (
  <Section
    id="certifications"
    eyebrow="Certifications"
    title="Certifications and verified badges"
    subtitle="Official credential links and dates checked against my public Credly wallet in October 2026."
  >
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {certifications.map((cert) => (
        <div key={cert.name} className="glass-card neon-border flex items-start gap-4 rounded-2xl p-5">
          <div className="mt-0.5 rounded-lg bg-accent/15 p-2.5 text-accent">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-sm font-semibold leading-snug">{cert.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
            <p className="mt-2 text-xs text-muted-foreground">{cert.issued}</p>
            <span className={`mt-2 inline-block rounded-full border px-2 py-0.5 text-xs ${cert.expired ? "border-border text-muted-foreground" : "border-primary/30 text-primary"}`}>
              {cert.status}
            </span>
            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline" aria-label={`View credential: ${cert.name}`}>
              View credential <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
    <details className="mt-8 rounded-2xl border border-border bg-background/30 p-5 sm:p-6">
      <summary className="cursor-pointer font-display text-lg font-semibold text-primary">Training badges ({trainingBadges.length})</summary>
      <p className="mt-3 text-sm text-muted-foreground">Course and training achievements, separate from professional certifications.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {trainingBadges.map((badge) => (
          <a key={badge.url} href={badge.url} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border p-4 transition-colors hover:border-primary/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">
            <h3 className="text-sm font-semibold leading-relaxed">{badge.name}</h3>
            <p className="mt-2 text-xs text-muted-foreground">{badge.issuer}</p>
            <p className="mt-1 text-xs text-muted-foreground">{badge.status}</p>
            <span className="mt-3 flex items-center gap-1 text-sm text-primary">View badge <ArrowUpRight className="h-4 w-4" /></span>
          </a>
        ))}
      </div>
    </details>
    <p className="mt-6 text-sm text-muted-foreground">Additional credentials listed on my resume: Oracle Cloud Infrastructure Foundations and Oracle Cloud Data Management Foundations (2023).</p>
    <a href="https://www.credly.com/users/cilso-carvalho/badges/credly" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">View public Credly wallet <ArrowUpRight className="h-4 w-4" /></a>
  </Section>
);

export default Certifications;
