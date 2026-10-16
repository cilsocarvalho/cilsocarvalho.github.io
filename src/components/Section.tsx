import { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const Section = ({ id, eyebrow, title, subtitle, children, className = "" }: SectionProps) => (
  <section id={id} className={`relative py-20 lg:py-28 ${className}`}>
    <div className="container">
      <div className="mb-12 max-w-2xl">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-4 leading-relaxed text-muted-foreground">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

export default Section;
