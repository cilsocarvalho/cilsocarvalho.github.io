import Section from "@/components/Section";
import { skillGroups } from "@/data/portfolio";
import { Cloud, Workflow, Database, Activity, ShieldCheck, PiggyBank, LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Cloud, Workflow, Database, Activity, ShieldCheck, PiggyBank,
};

const Skills = () => (
  <Section
    id="skills"
    eyebrow="Skills"
    title="Engineering expertise"
    subtitle="Cloud, delivery, data, and operations — connected to the project work above."
  >
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group) => {
        const Icon = icons[group.icon] ?? Cloud;
        return (
          <div key={group.title} className="glow-card rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-lg bg-gradient-primary p-2.5 text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border/60 bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </Section>
);

export default Skills;
