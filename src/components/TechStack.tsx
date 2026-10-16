import { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiGooglecloud,
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiLinux,
  SiGooglebigquery,
  SiApacheairflow,
  SiMysql,
  SiJenkins,
  SiGithubactions,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";
import { Database } from "lucide-react";
import Section from "@/components/Section";
import { techStack } from "@/data/portfolio";

const iconMap: Record<string, IconType> = {
  aws: FaAws,
  gcp: SiGooglecloud,
  kubernetes: SiKubernetes,
  docker: SiDocker,
  terraform: SiTerraform,
  linux: SiLinux,
  bigquery: SiGooglebigquery,
  airflow: SiApacheairflow,
  mysql: SiMysql,
  jenkins: SiJenkins,
  githubactions: SiGithubactions,
  grafana: SiGrafana,
  prometheus: SiPrometheus,
};

const TechStack = () => (
  <Section
    id="stack"
    eyebrow="Technology Stack"
    title="Tools I build and operate with"
    subtitle="Hands-on, production-tested across cloud, containers, automation, data, and observability."
  >
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
      {techStack.map(({ name, iconKey }) => {
        const Icon = iconMap[iconKey] ?? Database;
        return (
          <div
            key={name}
            className="glass-card neon-border group flex flex-col items-center justify-center gap-3 rounded-xl p-5"
          >
            <Icon className="h-9 w-9 text-foreground/70 transition-all duration-300 group-hover:scale-110 group-hover:text-primary" />
            <span className="text-center text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
              {name}
            </span>
          </div>
        );
      })}
    </div>
  </Section>
);

export default TechStack;
