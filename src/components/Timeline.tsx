import Section from "@/components/Section";
import { timeline } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

const Timeline = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    title="Career positioning & impact"
    subtitle="From enterprise infrastructure to AWS cloud engineering — 10+ years in IT."
  >
    <div className="relative mx-auto max-w-3xl">
      {/* vertical line */}
      <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-blue to-purple sm:left-5" />
      <div className="space-y-8">
        {timeline.map((item) => (
          <div key={`${item.role}-${item.company}`} className="relative pl-12 sm:pl-16">
            <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow sm:h-10 sm:w-10">
              <Briefcase className="h-4 w-4" />
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">{item.role}</h3>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                  {item.period}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-blue">{item.company}</p>
              <ul className="mt-4 space-y-2">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Timeline;
