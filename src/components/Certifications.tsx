import Section from "@/components/Section";
import { certifications } from "@/data/portfolio";
import { Award } from "lucide-react";

const Certifications = () => (
  <Section
    id="certifications"
    eyebrow="Certifications"
    title="Certification history"
    subtitle="Award years from my resume."
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
            <span className="mt-2 inline-block rounded-full border border-border/60 px-2 py-0.5 text-[11px] text-muted-foreground">
              {cert.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Certifications;
