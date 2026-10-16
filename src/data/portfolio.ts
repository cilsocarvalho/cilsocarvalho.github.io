export const LINKEDIN_URL = "https://www.linkedin.com/in/cilso-carvalho/";
export const GITHUB_URL = "https://github.com/cilsocarvalho";
export const EMAIL = "cilsocarvalho@gmail.com";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },

  { label: "Contact", href: "#contact" },
];

export const heroBadges = ["AWS", "GCP", "Kubernetes", "Terraform", "DataOps", "FinOps"];

// Brand technology stack — iconKey maps to react-icons in TechStack.tsx
export const techStack = [
  { name: "AWS", iconKey: "aws" },
  { name: "Google Cloud", iconKey: "gcp" },
  { name: "Kubernetes", iconKey: "kubernetes" },
  { name: "Docker", iconKey: "docker" },
  { name: "Terraform", iconKey: "terraform" },
  { name: "Linux", iconKey: "linux" },
  { name: "BigQuery", iconKey: "bigquery" },
  { name: "Airflow", iconKey: "airflow" },
  { name: "MySQL", iconKey: "mysql" },
  { name: "Oracle", iconKey: "oracle" },
  { name: "Jenkins", iconKey: "jenkins" },
  { name: "GitHub Actions", iconKey: "githubactions" },
  { name: "Grafana", iconKey: "grafana" },
  { name: "Prometheus", iconKey: "prometheus" },
];

// Skill matrix — Cloud / DevOps / Data
export const skillMatrix = [
  {
    title: "Cloud",
    icon: "Cloud",
    accent: "primary",
    skills: [
      { label: "AWS Infrastructure" },
      { label: "GCP Data Platform" },
      { label: "Networking & VPC" },
      { label: "IAM & Security" },
      { label: "Cloud Governance" },
      { label: "FinOps & Cost Mgmt" },
    ],
  },
  {
    title: "DevOps",
    icon: "Workflow",
    accent: "blue",
    skills: [
      { label: "Terraform / IaC" },
      { label: "Kubernetes / EKS" },
      { label: "Docker" },
      { label: "CI/CD Pipelines" },
      { label: "GitHub Actions / Jenkins" },
      { label: "Automation Scripting" },
    ],
  },
  {
    title: "Data",
    icon: "Database",
    accent: "purple",
    skills: [
      { label: "BigQuery" },
      { label: "Apache Airflow" },
      { label: "MySQL / InnoDB" },
      { label: "Oracle Database" },
      { label: "SQL & Pipelines" },
      { label: "Data Validation" },
    ],
  },
];

export const skillGroups = [
  {
    title: "Cloud Platforms",
    icon: "Cloud",
    items: [
      "AWS EC2", "ECS", "EKS", "Lambda", "S3", "RDS", "VPC", "IAM",
      "CloudWatch", "WAF", "Route 53", "CloudFront",
      "GCP BigQuery", "Cloud Storage", "Apache Airflow / Composer",
    ],
  },
  {
    title: "DevOps & Automation",
    icon: "Workflow",
    items: [
      "Terraform", "Docker", "Kubernetes", "Jenkins", "GitHub Actions",
      "Bitbucket Pipelines", "ArgoCD", "CI/CD", "Infrastructure as Code",
    ],
  },
  {
    title: "Data & Databases",
    icon: "Database",
    items: [
      "BigQuery", "Apache Airflow", "MySQL", "Oracle Database", "SQL",
      "Data Pipeline Troubleshooting", "Data Validation",
    ],
  },
  {
    title: "Monitoring & Operations",
    icon: "Activity",
    items: [
      "CloudWatch", "Grafana", "Prometheus", "Linux",
      "Incident Investigation", "Production Support", "Troubleshooting",
    ],
  },
  {
    title: "Security & Governance",
    icon: "ShieldCheck",
    items: [
      "IAM", "Access Control", "AWS WAF", "LGPD Awareness",
      "Cloud Governance", "Well-Architected Practices",
    ],
  },
  {
    title: "FinOps & Optimization",
    icon: "PiggyBank",
    items: [
      "AWS Cost Management", "Cloud Cost Reports", "Automation",
      "AI-assisted Reporting", "Resource Optimization",
    ],
  },
];

export const projects = [
  {
    "title": "FinOps Cost Visibility",
    "icon": "LineChart",
    "category": "Implemented",
    "summary": "Monthly cloud costs by project, account, and environment.",
    "description": "Developed project cost views, chargeback reporting, and Excel-compatible exports. A shared cost model keeps dashboard totals and exported reports consistent.",
    "outcomes": [
      "Monthly cost views",
      "Consistent dashboard and export totals",
      "Validated release"
    ],
    "tags": [
      "AWS",
      "FinOps",
      "CloudFront"
    ],
    "details": "My contribution: cost-model integration, reporting controls, exports, and release validation. Internal financial data and account identifiers are excluded."
  },
  {
    "title": "CDP Analytics Library",
    "icon": "Database",
    "category": "Implemented",
    "summary": "Authenticated portal for analytics and business reporting.",
    "description": "Developed a Vue portal supported by Terraform-managed AWS infrastructure, with Cognito authentication, report delivery, and protected email notification APIs.",
    "outcomes": [
      "Cognito authentication",
      "Protected API and SES notifications",
      "Shared reporting interface"
    ],
    "tags": [
      "Terraform",
      "Vue",
      "Cognito",
      "Lambda"
    ],
    "details": "My contribution: portal development, cloud infrastructure, integrations, and deployment validation. Corporate reports and member data are excluded."
  },
  {
    "title": "AI Assisted Operations",
    "icon": "GitBranch",
    "category": "Implemented workflow",
    "summary": "Bedrock recommendations grounded in operational snapshots.",
    "description": "Developed a Python AIOps workflow using Bedrock tool calling, runbooks, validated recommendations, and asynchronous Lambda and DynamoDB snapshots.",
    "outcomes": [
      "Read-only agent tools",
      "Validated recommendation references",
      "Asynchronous operational snapshots"
    ],
    "tags": [
      "Bedrock",
      "Python",
      "Lambda",
      "DynamoDB"
    ],
    "details": "My contribution: operational data integration and AI-assisted automation. The agent advises on incidents and best practices; it does not execute remediation. No unverified model-performance claims are made."
  },
  {
    "title": "Hybrid AWS Connectivity",
    "icon": "Network",
    "category": "Implemented and assessed",
    "summary": "Hybrid access with cost-conscious networking decisions.",
    "description": "Worked on Client VPN, Transit Gateway, DNS, routing, and security controls. Optimized Route 53 Resolver infrastructure while preserving VPN access.",
    "outcomes": [
      "VPN access preserved",
      "Resolver cost optimization",
      "Network alternatives assessed"
    ],
    "tags": [
      "Client VPN",
      "Transit Gateway",
      "Terraform"
    ],
    "details": "My contribution: network analysis, infrastructure changes, and connectivity checks. A reverse-tunnel bridge was assessed as an alternative; it was not deployed or verified in the documented work."
  },
  {
    "title": "Sales Portal Migration Architecture",
    "icon": "ServerCog",
    "category": "Architecture proposal",
    "summary": "AWS migration planning for an on-premises sales portal.",
    "description": "Prepared current-state and target-state architecture diagrams, cost considerations, and executive presentations for migration planning and technical review.",
    "outcomes": [
      "As-is and to-be architecture",
      "AWS cost considerations",
      "Executive decision materials"
    ],
    "tags": [
      "AWS",
      "Migration",
      "Architecture"
    ],
    "details": "My contribution: architecture documentation and migration planning. This is a proposal, not a completed production migration. Internal topology and infrastructure identifiers are excluded."
  },
  {
    "title": "GCP Data Operations",
    "icon": "Database",
    "category": "Operational support",
    "summary": "BigQuery and Cloud Composer workflows for analytics.",
    "description": "Supported data workflows and investigated Airflow dependencies, configuration, imports, and task failures, with SQL validation and operational troubleshooting.",
    "outcomes": [
      "Airflow troubleshooting",
      "SQL validation",
      "Data workflow support"
    ],
    "tags": [
      "GCP",
      "BigQuery",
      "Airflow"
    ],
    "details": "My contribution: data workflow troubleshooting and validation. No unsupported volume, availability, or performance metrics are claimed."
  }
];

export const timeline = [
  {
    "role": "Cloud Systems Specialist",
    "company": "LG CNS",
    "period": "2024 \u2013 Present",
    "points": [
      "Build and maintain AWS infrastructure using Terraform.",
      "Work with GitHub Actions, Argo CD, Kubernetes, and EKS deployments.",
      "Support AWS and GCP workloads, integrations, monitoring, and hybrid connectivity."
    ]
  },
  {
    "role": "Cloud Administrator & Application Operations Lead",
    "company": "Algar Tech",
    "period": "2019 \u2013 2024",
    "points": [
      "Led migration of critical Epson do Brasil applications from on-premises infrastructure to AWS.",
      "Maintained AWS workloads, reusable Terraform modules, hybrid networking, Linux, Oracle, and MySQL."
    ]
  },
  {
    "role": "Infrastructure Technician & Team Lead",
    "company": "Randstad",
    "period": "2016 \u2013 2019",
    "points": [
      "Led a team of 10 field technicians and coordinated IT service delivery."
    ]
  },
  {
    "role": "Infrastructure Technician",
    "company": "Capgemini",
    "period": "2013 \u2013 2016",
    "points": [
      "Administered Active Directory, DNS, DHCP, and WSUS in enterprise environments."
    ]
  }
];

export const certifications = [
  { name: "HashiCorp Certified: Terraform Associate", issuer: "HashiCorp", status: "Awarded 2023" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", status: "Awarded 2022" },
  { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", status: "Awarded 2024" },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", status: "Awarded 2023" },
  { name: "Oracle Cloud Infrastructure Foundations", issuer: "Oracle", status: "Awarded 2023" },
  { name: "Oracle Cloud Data Management Foundations", issuer: "Oracle", status: "Awarded 2023" },
];

// ---- LinkedIn Profile Update content ----
export const linkedinHeadline =
  "Cloud Engineer | AWS & GCP | DevOps | Kubernetes | Terraform | BigQuery | Airflow | Infrastructure Automation";

export const linkedinAbout = `I am an IT professional with strong experience in infrastructure, cloud operations, DevOps automation, database environments, and data platforms.

My current focus is on Cloud Engineering, AWS infrastructure, GCP data services, Kubernetes, Terraform, CI/CD automation, BigQuery, Apache Airflow, and production support for critical environments.

I have hands-on experience with cloud migration, Infrastructure as Code, Linux environments, database operations, monitoring, incident troubleshooting, and automation of operational processes.

My background includes working with AWS services such as EC2, ECS, EKS, Lambda, S3, RDS, VPC, IAM, CloudWatch, WAF, Route 53, and CloudFront, as well as GCP services such as BigQuery, Cloud Storage, and Apache Airflow.

I am also experienced in database technologies such as MySQL, Oracle, and SQL, supporting backup, restore, troubleshooting, performance analysis, and high availability environments.

I am continuously improving my skills in cloud architecture, DevOps practices, data engineering, FinOps, AI automation, and cloud governance, with the goal of delivering secure, scalable, reliable, and cost-efficient technology solutions.`;

export const linkedinExperience = `Cloud / Infrastructure / Data Specialist
LG CNS

- Support cloud infrastructure and data platform operations across AWS and GCP environments.
- Work with AWS services including EC2, ECS, EKS, Lambda, S3, RDS, VPC, IAM, CloudWatch, WAF, Route 53, and CloudFront.
- Support GCP data services, including BigQuery, Cloud Storage, and Apache Airflow workflows.
- Analyze, troubleshoot, and support data pipelines related to CDP and marketing data initiatives.
- Work with infrastructure automation, CI/CD pipelines, Terraform, Docker, Kubernetes, and Git-based workflows.
- Support production environments, incident investigation, access governance, monitoring, and operational improvements.
- Collaborate with local and global teams to support cloud, infrastructure, data, and governance initiatives.`;

export const linkedinSkills = [
  "AWS", "GCP", "Terraform", "Kubernetes", "Docker", "DevOps", "CI/CD", "Linux",
  "BigQuery", "Apache Airflow", "MySQL", "Oracle Database", "Cloud Infrastructure",
  "Infrastructure as Code", "Cloud Migration", "AWS Lambda", "Amazon ECS", "Amazon EKS",
  "IAM", "CloudWatch", "Data Engineering", "SQL", "GitHub Actions", "Jenkins", "FinOps",
];
