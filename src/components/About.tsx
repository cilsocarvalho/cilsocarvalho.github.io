import Section from "@/components/Section";
import { Cloud, Workflow, Database, ShieldCheck, Cpu } from "lucide-react";

const highlights = [
  { icon: Cloud, label: "Cloud Engineering" },
  { icon: Workflow, label: "DevOps Automation" },
  { icon: Database, label: "Data Platforms" },
  { icon: ShieldCheck, label: "Security & Governance" },
  { icon: Cpu, label: "Production Support" },
];

const About = () => (
  <Section id="about" eyebrow="About" title="Reliable cloud infrastructure, end to end">
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <p className="text-lg leading-relaxed text-foreground/85">
          I am an IT professional with strong experience in infrastructure, cloud operations, DevOps
          automation, database environments, and data platforms. My current focus is on Cloud
          Engineering, AWS infrastructure, GCP data services, Kubernetes, Terraform, CI/CD automation,
          BigQuery, Apache Airflow, and production support for critical environments.
        </p>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          I have hands-on experience with cloud migration, Infrastructure as Code, Linux environments,
          database operations, monitoring, incident troubleshooting, and automation of operational
          processes. My goal is to deliver secure, scalable, reliable, and cost-efficient technology
          solutions.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-2">
        {highlights.map(({ icon: Icon, label }) => (
          <div key={label} className="glass-card neon-border flex flex-col items-start gap-3 rounded-xl p-5">
            <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default About;
