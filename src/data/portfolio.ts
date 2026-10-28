export const LINKEDIN_URL = "https://www.linkedin.com/in/cilso-carvalho/";
export const GITHUB_URL = "https://github.com/cilsocarvalho";
export const EMAIL = "cilsocarvalho@gmail.com";

export const navItems = [
  { label: "Case studies", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
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
  { title: "AWS compute & containers", icon: "Cloud", items: ["Amazon ECS", "Amazon EKS", "EC2", "Lambda", "Elastic Beanstalk", "Docker", "Kubernetes"] },
  { title: "Networking & hybrid", icon: "Cloud", items: ["VPC design", "Transit Gateway", "Site-to-Site VPN", "BGP", "Client VPN", "Route 53", "CloudFront", "AWS WAF"] },
  { title: "Infrastructure as code & delivery", icon: "Workflow", items: ["Terraform", "CloudFormation", "GitHub Actions", "Jenkins", "Bitbucket Pipelines", "CI/CD"] },
  { title: "Data & databases", icon: "Database", items: ["Aurora", "RDS (Oracle, MySQL)", "DynamoDB", "ElastiCache", "Athena", "Glue", "BigQuery", "Cloud Composer / Airflow"] },
  { title: "Observability & operations", icon: "Activity", items: ["CloudWatch", "Prometheus", "Grafana", "Linux (RHEL, Ubuntu)", "Incident response"] },
  { title: "Security, governance & FinOps", icon: "ShieldCheck", items: ["AWS Organizations", "Control Tower", "IAM", "GuardDuty", "Secrets Manager", "Cost & Usage Report", "Cost allocation"] },
  { title: "AI for operations", icon: "Activity", items: ["Amazon Bedrock", "Amazon Nova", "Tool calling", "Python"] },
];

export const timeline = [
  {
    "role": "System Specialist (Cloud Infrastructure)",
    "company": "LG CNS",
    "period": "Sep 2025 – Present",
    "points": [
      "Primary infrastructure administrator for 12+ AWS accounts and 3 GCP data pipeline and data warehouse environments.",
      "Implemented and operate production hybrid connectivity between AWS and on-premises (Site-to-Site and Client VPN, Transit Gateway, BGP).",
      "Built an AI-assisted operations workflow on Amazon Bedrock and multi-account FinOps reporting (Athena, Lambda, CloudFront).",
      "Build and maintain AWS infrastructure as code with Terraform and CI/CD pipelines.",
      "Recognized as LG CNS Brasil Merit Employee 2026."
    ]
  },
  {
    "role": "Cloud Administrator",
    "company": "Positivo S+ · Epson do Brasil account",
    "period": "Jul 2022 – Sep 2025",
    "points": [
      "Continued cloud administration of the Epson do Brasil account after it moved from Algar Tech.",
      "Maintained AWS workloads (VPC, EC2, RDS, S3, Lambda, CloudWatch, Elastic Beanstalk) with Terraform and CloudFormation.",
      "Operated hybrid infrastructure: RHEL Linux, Oracle 19c, MySQL and Windows Server, with CloudWatch monitoring and logging."
    ]
  },
  {
    "role": "Cloud Administrator",
    "company": "Algar Tech · Epson do Brasil account",
    "period": "Sep 2019 – Jun 2022",
    "points": [
      "Led the migration of critical Epson do Brasil applications from on-premises infrastructure to AWS.",
      "Provisioned and maintained AWS infrastructure with Terraform and CloudFormation."
    ]
  },
  {
    "role": "IT Infrastructure Technician",
    "company": "Randstad Technologies US",
    "period": "Nov 2015 – Sep 2019",
    "points": [
      "Led a team of 10 field technicians; administered Active Directory and Google Workspace access for 500+ employees.",
      "Administered DNS, DHCP and VPN services for distributed teams."
    ]
  },
  {
    "role": "IT Infrastructure Technician",
    "company": "Capgemini",
    "period": "Oct 2013 – Nov 2015",
    "points": [
      "Administered Active Directory, DNS, DHCP and WSUS for an enterprise environment of 1,000+ users."
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
