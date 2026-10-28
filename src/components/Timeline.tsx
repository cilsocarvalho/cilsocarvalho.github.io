import Section from "@/components/Section";
import { timeline } from "@/data/portfolio";

const Timeline = () => (
  <Section
    id="experience"
    title="Experience"
    subtitle="From enterprise infrastructure to AWS cloud engineering, over 10+ years in IT."
  >
    <ol className="max-w-4xl divide-y divide-border border-y border-border">
      {timeline.map((item) => (
        <li key={`${item.role}-${item.company}`} className="grid gap-2 py-8 sm:grid-cols-[11rem_1fr] sm:gap-8">
          <p className="text-[15px] tabular-nums text-muted-foreground">{item.period}</p>
          <div>
            <h3 className="text-xl font-semibold">{item.role}</h3>
            <p className="mt-0.5 font-medium text-primary">{item.company}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-foreground/85 marker:text-muted-foreground">
              {item.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  </Section>
);

export default Timeline;
