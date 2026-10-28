import Section from "@/components/Section";
import { Cloud, Workflow, Network, ShieldCheck, Activity } from "lucide-react";

const highlights = [
  { icon: Cloud, label: "Cloud Engineering" },
  { icon: Workflow, label: "DevOps Automation" },
  { icon: Network, label: "Hybrid Networking" },
  { icon: ShieldCheck, label: "Security & Governance" },
  { icon: Activity, label: "Observability" },
];

const About = () => (
  <Section id="about" eyebrow="About" title="Reliable cloud infrastructure, end to end">
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <p className="text-lg leading-relaxed text-foreground/85">
          Cloud and DevOps engineer focused on AWS, with 10+ years in IT, from infrastructure
          operations to cloud architecture. I design, automate and run production infrastructure
          with Terraform, Kubernetes (EKS) and CI/CD.
        </p>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          At LG CNS I am the primary infrastructure owner across multiple AWS accounts and
          environments: hybrid networking with Transit Gateway and BGP, AI-assisted operations on
          Amazon Bedrock, multi-account FinOps reporting and observability for cloud and on-premises
          workloads. I work infrastructure-as-code first, replace manual steps with pipelines, and
          weigh every design against reliability, security and cost.
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
