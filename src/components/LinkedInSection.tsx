import { useState } from "react";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Copy, Check, Linkedin } from "lucide-react";
import {
  LINKEDIN_URL,
  linkedinHeadline,
  linkedinAbout,
  linkedinExperience,
  linkedinSkills,
} from "@/data/portfolio";

const CopyBlock = ({
  label,
  text,
  children,
  full,
}: {
  label: string;
  text: string;
  children?: React.ReactNode;
  full?: boolean;
}) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className={`glass-card neon-border rounded-2xl p-6 ${full ? "lg:col-span-2" : ""}`}>
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-primary">{label}</h3>
        <Button variant="glow" size="sm" onClick={copy}>
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
      {children ?? (
        <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{text}</p>
      )}
    </div>
  );
};

const LinkedInSection = () => (
  <Section
    id="linkedin"
    eyebrow="LinkedIn Profile Update"
    title="Copy-ready content for your LinkedIn"
    subtitle="Optimized headline, About, experience, and skills — paste directly into your profile to boost recruiter visibility."
  >
    <div className="grid gap-6 lg:grid-cols-2">
      <CopyBlock label="Recommended Headline" text={linkedinHeadline} full />

      <CopyBlock label="Recommended About" text={linkedinAbout} />

      <CopyBlock label="Recommended Current Experience" text={linkedinExperience} />

      <CopyBlock label="Recommended Skills to Add" text={linkedinSkills.join(", ")} full>
        <div className="flex flex-wrap gap-2">
          {linkedinSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-border/60 bg-muted/40 px-2.5 py-1 text-xs text-foreground/85"
            >
              {skill}
            </span>
          ))}
        </div>
      </CopyBlock>
    </div>

    <div className="mt-8">
      <Button asChild variant="hero" size="lg">
        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-4 w-4" /> View LinkedIn Profile
        </a>
      </Button>
    </div>
  </Section>
);

export default LinkedInSection;
