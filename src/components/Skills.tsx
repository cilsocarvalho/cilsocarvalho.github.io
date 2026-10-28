import Section from "@/components/Section";
import { skillGroups } from "@/data/portfolio";

const Skills = () => (
  <Section id="skills" title="Skills" subtitle="What I use day to day, grouped by the problems it solves.">
    <dl className="grid max-w-5xl gap-x-12 gap-y-8 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div key={group.title} className="border-t border-border pt-4">
          <dt className="font-semibold">{group.title}</dt>
          <dd className="mt-2 leading-relaxed text-muted-foreground">{group.items.join(", ")}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default Skills;
