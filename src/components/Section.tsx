import { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, title, subtitle, children, className = "" }: SectionProps) => (
  <section id={id} aria-labelledby={`${id}-title`} className={`border-t border-border py-20 lg:py-24 ${className}`}>
    <div className="container">
      <div className="mb-12 max-w-2xl">
        <h2 id={`${id}-title`} className="text-3xl font-semibold sm:text-[2.5rem] sm:leading-[1.1]">{title}</h2>
        {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

export default Section;
