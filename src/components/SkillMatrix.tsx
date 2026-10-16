import Section from "@/components/Section";
import { skillMatrix } from "@/data/portfolio";
import { Cloud, Workflow, Database, LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = { Cloud, Workflow, Database };
const accentClass: Record<string, string> = {
  primary: "text-primary",
  blue: "text-blue",
  purple: "text-purple",
};

const SkillMatrix = () => (
  <Section
    id="matrix"
    eyebrow="Skill Matrix"
    title="Cloud · DevOps · Data"
    subtitle="Areas of hands-on experience. Explore the projects for context and contribution."
  >
    <div className="grid gap-6 lg:grid-cols-3">
      {skillMatrix.map((col) => {
        const Icon = icons[col.icon] ?? Cloud;
        return (
          <div key={col.title} className="glass-card neon-border rounded-2xl p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-gradient-primary p-2.5 text-primary-foreground shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className={`font-display text-xl font-bold ${accentClass[col.accent]}`}>{col.title}</h3>
            </div>
            <div className="space-y-4">
              {col.skills.map((s) => (
                <div key={s.label}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-foreground/85">{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </Section>
);

export default SkillMatrix;
