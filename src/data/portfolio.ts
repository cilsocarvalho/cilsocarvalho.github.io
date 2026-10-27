export const LINKEDIN_URL = "https://www.linkedin.com/in/cilso-carvalho/";
export const GITHUB_URL = "https://github.com/cilsocarvalho";
export const EMAIL = "cilsocarvalho@gmail.com";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },

  { label: "Credentials", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const heroBadges = ["AWS", "Kubernetes", "Terraform", "CI/CD", "Observability", "FinOps"];

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
    "slug": "aiops",
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
    "slug": "hybrid-connectivity",
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
    "slug": "finops",
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
    "slug": "analytics-library",
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
    "slug": "sales-portal",
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
    "slug": "gcp-data",
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
  {
    "name": "AWS Certified Solutions Architect – Associate",
    "issuer": "Amazon Web Services",
    "status": "Valid until 2 Aug 2027",
    "issued": "Issued 2 Aug 2024",
    "url": "https://www.credly.com/badges/9c02a2f3-107b-46a3-8b1e-8bfbcf747ff0",
    "expired": false,
    "tier": "primary"
  },
  {
    "name": "AWS Certified Cloud Practitioner",
    "issuer": "Amazon Web Services",
    "status": "Valid until 2 Aug 2027",
    "issued": "Issued 8 Oct 2022",
    "url": "https://www.credly.com/badges/aa332bb5-b63b-41eb-8557-986e988c490e",
    "expired": false,
    "tier": "secondary"
  },
  {
    "name": "Microsoft Certified: Azure Fundamentals",
    "issuer": "Microsoft",
    "status": "No expiry shown on badge",
    "issued": "Issued 27 May 2023",
    "url": "https://www.credly.com/badges/e7b69824-0334-4faa-96ab-31288aaac450",
    "expired": false,
    "tier": "secondary"
  },
  {
    "name": "HashiCorp Certified: Terraform Associate (002)",
    "issuer": "HashiCorp · Credly issuer: IBM Professional Certification",
    "status": "Expired 21 Apr 2025",
    "issued": "Issued 21 Apr 2023",
    "url": "https://www.credly.com/badges/d3982f18-d102-4586-9489-69cd2c609c60",
    "expired": true,
    "tier": "secondary"
  }
];

export const trainingBadges = [
  {
    "name": "LFEL1004: Authentication & Authorization for Web/API",
    "issuer": "The Linux Foundation",
    "status": "Issued 1 Jan 2026",
    "url": "https://www.credly.com/badges/fe735064-0913-4fd5-9519-3bfe63afaa44"
  },
  {
    "name": "LFD140: GitHub for Open Standards Development",
    "issuer": "The Linux Foundation",
    "status": "Issued 6 Oct 2025",
    "url": "https://www.credly.com/badges/a79023c7-878e-4153-88a9-0d2011c5c06e"
  },
  {
    "name": "LFEL1009: Getting Started with OpenTofu",
    "issuer": "The Linux Foundation",
    "status": "Issued 8 Jul 2025",
    "url": "https://www.credly.com/badges/cec0ec6b-2072-4a24-840b-88f0d279d37d"
  },
  {
    "name": "LFS167: Introduction to Jenkins",
    "issuer": "The Linux Foundation",
    "status": "Issued 8 Nov 2024",
    "url": "https://www.credly.com/badges/aa104ab5-410d-4440-b787-c1deb9810531"
  },
  {
    "name": "AWS Educate Getting Started with Security",
    "issuer": "Amazon Web Services",
    "status": "Issued 12 Jun 2024",
    "url": "https://www.credly.com/badges/a0d02742-b464-4f07-8607-f6020be5284e"
  },
  {
    "name": "AWS Knowledge: Cloud Essentials",
    "issuer": "Amazon Web Services",
    "status": "Issued 15 Feb 2024",
    "url": "https://www.credly.com/badges/aab91a00-3294-452d-b997-09558db00d6d"
  },
  {
    "name": "AWS Educate Getting Started with Storage",
    "issuer": "Amazon Web Services",
    "status": "Issued 14 Dec 2022",
    "url": "https://www.credly.com/badges/c903f7d9-2dfa-4b58-8801-64a54ab80464"
  },
  {
    "name": "AWS Educate Getting Started with Compute",
    "issuer": "Amazon Web Services",
    "status": "Issued 12 Dec 2022",
    "url": "https://www.credly.com/badges/cc9586dc-67fa-402d-a53f-409150deca96"
  },
  {
    "name": "AWS Educate Getting Started with Networking",
    "issuer": "Amazon Web Services",
    "status": "Issued 11 Dec 2022",
    "url": "https://www.credly.com/badges/1738b56c-1a0f-4cc8-ab01-9fe23b171f22"
  }
];

// ---- LinkedIn Profile Update content ----
export const linkedinHeadline =
  "Senior Cloud & DevOps Engineer | AWS · Terraform · Kubernetes (EKS) | AWS Certified Solutions Architect | Remote from Brazil";

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
