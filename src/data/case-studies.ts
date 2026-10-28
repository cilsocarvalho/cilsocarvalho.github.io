export type CaseStatus = "In production" | "In development" | "Implemented" | "Architecture" | "Operations";

export interface CaseStudyData {
  slug: string;
  title: string;
  status: CaseStatus;
  summary: string;
  problem: string;
  built: string;
  flow: string[];
  decisions: string[];
  result: string;
  tags: string[];
}

// Order matters: this is the order on the page.
export const caseStudies: CaseStudyData[] = [
  {
    slug: "family-club",
    title: "LG Family Club platform on Amazon ECS",
    status: "In production",
    summary:
      "Containerized platform on Amazon ECS inside a Control Tower multi-account landing zone, with Aurora, ElastiCache, SQS and EventBridge.",
    problem:
      "The platform needed a production home that isolates workloads by account, scales user-facing and background work independently, and keeps security guardrails in one place.",
    built:
      "Designed and implemented the AWS architecture: a Control Tower landing zone with a security account and a workload account in us-east-1, ECS services for the API and for background workers in private subnets, Aurora for relational data, ElastiCache for caching and sessions, SQS for asynchronous jobs and EventBridge for events and schedules. GuardDuty findings are centralized in the security account.",
    flow: [
      "Users reach the Application Load Balancer over HTTPS, the only public entry point.",
      "The load balancer routes requests to ECS API services in private subnets.",
      "API services enqueue work on SQS; worker services consume jobs and EventBridge events.",
      "Services read and write Aurora and use ElastiCache for caching and sessions.",
    ],
    decisions: [
      "Control Tower accounts and guardrails separate security and governance from workloads.",
      "Separate API and worker ECS services, so background load never slows user requests.",
      "Compute and data stay in private subnets; only the load balancer is public.",
      "SQS for durable asynchronous work, EventBridge for scheduled and domain events.",
    ],
    result:
      "A production platform with isolated accounts, independently scalable services and centralized threat detection.",
    tags: ["Amazon ECS", "Aurora", "ElastiCache", "SQS", "EventBridge", "Control Tower"],
  },
  {
    slug: "hybrid-connectivity",
    title: "Hybrid connectivity with Site-to-Site VPN and BGP",
    status: "In production",
    summary:
      "Dynamic routing between the corporate data center and an AWS Organization through a shared Transit Gateway, with isolated route tables per environment.",
    problem:
      "On-premises systems and workloads spread across 12+ AWS accounts needed private, redundant connectivity, with production and non-production traffic kept apart.",
    built:
      "Implemented and operate a Site-to-Site VPN with two IPsec tunnels and eBGP sessions to a StrongSwan and Bird2 customer gateway on Ubuntu, terminating on a Transit Gateway in a network account. The Transit Gateway is shared with workload accounts through AWS RAM, uses isolated route tables per environment, and the tunnel pre-shared keys live in Secrets Manager. Client VPN gives engineers remote admin access. I also put optional Route 53 Resolver resources behind a Terraform switch and removed them, cutting cost without affecting VPN access.",
    flow: [
      "The customer gateway brings up two IPsec tunnels and BGP sessions with AWS.",
      "The VPN attaches to the Transit Gateway, which learns on-premises routes through BGP.",
      "Per-environment route tables send traffic only to the matching production or non-production VPCs.",
    ],
    decisions: [
      "BGP instead of static routes, so failover and new prefixes need no manual route changes.",
      "One Transit Gateway in a network account, shared with AWS RAM, instead of a VPN per VPC.",
      "Separate route tables per environment keep non-production isolated from production.",
      "Pre-shared keys stored in Secrets Manager.",
    ],
    result:
      "Private, dynamically routed connectivity from the data center to every environment, managed from one network account.",
    tags: ["Site-to-Site VPN", "Transit Gateway", "BGP", "AWS RAM", "StrongSwan", "Terraform"],
  },
  {
    slug: "eks-platform",
    title: "Occurrence management platform on Amazon EKS",
    status: "In development",
    summary:
      "Carrier-facing microservices on Amazon EKS across three Availability Zones, deployed with Argo CD and connected to on-premises systems over AWS Direct Connect.",
    problem:
      "Carriers report shipment occurrences through different protocols (REST, SOAP and others), and every occurrence has to reach the on-premises system of record reliably, with a cloud copy available for analytics.",
    built:
      "Designed and documented the AWS architecture, now running in the development environment: API Gateway exposes the carrier APIs and reaches an internal load balancer through a VPC Link; an EKS cluster across three Availability Zones runs separate controllers for REST, SOAP and generic interfaces plus a queue consumer; images live in Amazon ECR and Argo CD syncs Kubernetes manifests from Bitbucket. Occurrences are stored in DynamoDB and buffered in SQS with a dead-letter queue, the on-premises Oracle cluster is reached through Direct Connect (partner hosted connection, private VIF), and a scheduled export lands data in S3 for Glue and Athena. CloudWatch, Managed Grafana, CloudTrail, IAM and Certificate Manager cover operations and security.",
    flow: [
      "Carriers call the APIs over HTTPS through API Gateway.",
      "A VPC Link forwards requests to an internal load balancer in private subnets.",
      "Kubernetes Ingress and Services route each call to the REST, SOAP or interface controller pods.",
      "Controllers publish occurrences to SQS; the consumer processes them and failed messages go to a dead-letter queue.",
      "Direct Connect, over a private VIF, links the VPC to the on-premises Oracle system of record.",
    ],
    decisions: [
      "Worker nodes stay private in three Availability Zones; only API Gateway faces the internet, through a VPC Link.",
      "One deployment per protocol (REST, SOAP, interfaces), so each scales and ships on its own.",
      "GitOps: Argo CD applies manifests from Bitbucket and pulls images from ECR.",
      "SQS with a dead-letter queue decouples carriers from back-end processing.",
      "Direct Connect instead of a VPN for steady, private access to the on-premises database.",
    ],
    result:
      "A design where carrier occurrences enter through one managed API, run on independently scalable services, reach the on-premises system privately and land in the data lake for analytics. Validated in the development environment.",
    tags: ["Amazon EKS", "Argo CD", "API Gateway", "SQS", "Direct Connect", "DynamoDB"],
  },
  {
    slug: "aiops",
    title: "AIOps SRE module on Amazon Bedrock",
    status: "Implemented",
    summary:
      "CloudWatch alarms trigger a Lambda agent that asks Amazon Nova Pro for grounded, validated recommendations and posts them to Slack and Jira.",
    problem:
      "On-call engineers needed incident context and a next step fast, across many accounts, without waiting on a model call every time someone opened the dashboard.",
    built:
      "Built a Python Lambda agent triggered by CloudWatch alarms through SNS. It uses Bedrock tool calling with Amazon Nova Pro, read-only tools and runbooks as grounding, validates every account, service and runbook reference, then stores snapshots in DynamoDB and notifies Slack and Jira. A separate read API serves the team dashboard, including a Jira kanban view shown on the team TV.",
    flow: [
      "A CloudWatch alarm in a monitored account reaches the agent through SNS.",
      "The agent calls Amazon Nova Pro with read-only tools and runbooks as context.",
      "Recommendations are validated and stored in DynamoDB.",
      "The agent notifies Slack and opens or updates Jira tickets.",
    ],
    decisions: [
      "Model work runs asynchronously; the dashboard only reads stored results.",
      "Read-only tools: the agent recommends, engineers remediate.",
      "Every account, service and runbook reference is checked before it is shown.",
      "Jira and Slack credentials kept in Secrets Manager.",
    ],
    result:
      "Alerts arrive with context and a validated next step, in the tools the team already uses.",
    tags: ["Amazon Bedrock", "Nova Pro", "Lambda", "DynamoDB", "CloudWatch", "Python"],
  },
  {
    slug: "occurrences-ai",
    title: "Occurrences Report Intelligence",
    status: "In production",
    summary:
      "Conversational analytics: business users ask questions in Portuguese, English or Korean and get answers from Athena, written by Amazon Nova Pro.",
    problem:
      "Business teams needed answers from occurrence data without writing SQL or waiting for an analyst.",
    built:
      "Built a production assistant: CloudFront serves a vanilla JavaScript app, Cognito signs users in, API Gateway and Lambda run multi-turn conversations, and Amazon Nova Pro on Bedrock turns questions into Athena queries using schema context, then explains the results. CloudWatch custom metrics track usage and errors, and the interface supports Portuguese, English and Korean.",
    flow: [
      "Users sign in with Cognito and open the web app through CloudFront.",
      "Questions go through API Gateway, with a JWT authorizer, to the conversation Lambda.",
      "Amazon Nova Pro writes the SQL and later explains the results in the user's language.",
      "Athena runs the query over occurrence data in S3.",
    ],
    decisions: [
      "SQL generation grounded in an explicit schema context.",
      "Multi-turn conversations, so users can refine a question instead of starting over.",
      "Cognito tokens validated at API Gateway before any model call.",
      "Custom CloudWatch metrics to watch usage and errors in production.",
    ],
    result:
      "Business users get answers from occurrence data on their own, in their own language.",
    tags: ["Amazon Bedrock", "Nova Pro", "Athena", "Lambda", "Cognito", "CloudFront"],
  },
  {
    slug: "finops",
    title: "Multi-account FinOps reporting",
    status: "Implemented",
    summary:
      "Monthly cost views by project, account and environment from the Cost & Usage Report, with an Excel export and email summaries.",
    problem:
      "Finance and engineering needed to review monthly cost across 12+ accounts without reconciling dashboards and spreadsheets that disagreed.",
    built:
      "Built a Python 3.12 Lambda, scheduled by EventBridge, that queries the Cost & Usage Report through Glue and Athena, writes per-account CSV and JSON/HTML reports to S3, serves a cost dashboard through CloudFront and sends SNS email summaries. The dashboard and the Excel export use the same period-aware cost model.",
    flow: [
      "EventBridge invokes the report Lambda on a monthly schedule.",
      "The Lambda runs cost queries in Athena over the cataloged Cost & Usage Report.",
      "Per-account reports are published to S3.",
      "Teams open the dashboard through CloudFront and receive email summaries.",
    ],
    decisions: [
      "One cost model behind both the dashboard and the export, so totals always match.",
      "Reports resolve the selected month instead of mixing current and historical data.",
      "Allocation by account and environment kept explicit in the model.",
    ],
    result:
      "Dashboard totals and exported workbooks reconcile, and every team gets a monthly summary without asking.",
    tags: ["Cost & Usage Report", "Athena", "Glue", "Lambda", "EventBridge", "CloudFront"],
  },
  {
    slug: "carrier-integration",
    title: "Carrier Integration Portal",
    status: "In production",
    summary:
      "Event-driven shipment flow between LG systems and carriers on SQS FIFO queues, Lambda, API Gateway and DynamoDB.",
    problem:
      "Shipments must reach several carriers in order and exactly once, and status updates must come back reliably to LG systems and operations.",
    built:
      "Designed the event-driven architecture now running in production: orders reach AWS over Transit Gateway and move through FIFO queues (carrier-payload, carrier-dispatch and carrier-status), each with its own Lambda consumer. Carrier webhooks enter through API Gateway, shipment state lives in DynamoDB and Grafana gives operations a live view. The design went through several iterations following AWS Architecture Icons and Well-Architected guidance.",
    flow: [
      "LG logistics systems send shipment orders to AWS over Transit Gateway.",
      "A Lambda consumer builds the carrier-specific payload from the payload queue.",
      "The dispatch consumer calls each carrier API.",
      "Carriers post status webhooks, which update shipment state in DynamoDB.",
    ],
    decisions: [
      "FIFO queues per stage for ordering and deduplication.",
      "Separate build, dispatch and status consumers, so each stage scales and retries on its own.",
      "A private hybrid path over Transit Gateway for LG systems.",
    ],
    result:
      "In production, a slow or failing carrier never blocks the others, and every status change can be traced.",
    tags: ["SQS FIFO", "Lambda", "API Gateway", "DynamoDB", "Transit Gateway", "Grafana"],
  },
  {
    slug: "sales-portal",
    title: "Sales ADM Portal migration to AWS",
    status: "Architecture",
    summary:
      "Lift-and-shift of a Laravel/PHP and Java portal from VMware to sa-east-1 with WAF, an Application Load Balancer, EC2 and RDS for Oracle Multi-AZ.",
    problem:
      "An on-premises sales administration portal on VMware needed a path to AWS that keeps access restricted and adds database resilience.",
    built:
      "Designed the target architecture and migration plan: AWS WAF with an IP set allow-list in front of an Application Load Balancer, EC2 application servers in private subnets across two Availability Zones, and RDS for Oracle (License Included) in Multi-AZ. Delivered current- and target-state diagrams, cost estimates and the executive presentation.",
    flow: [
      "Sales teams connect over HTTPS from approved IP ranges.",
      "AWS WAF allows only the IP set and forwards to the load balancer.",
      "The load balancer spreads traffic across EC2 servers in two Availability Zones.",
    ],
    decisions: [
      "Lift-and-shift first to leave VMware quickly; modernize afterwards.",
      "RDS for Oracle License Included, so licensing is part of the service.",
      "WAF IP allow-list keeps the portal internal-only.",
      "Multi-AZ database for automatic failover.",
    ],
    result:
      "A complete target architecture, cost model and executive deck for the migration decision.",
    tags: ["EC2", "RDS for Oracle", "AWS WAF", "ALB", "Multi-AZ", "sa-east-1"],
  },
  {
    slug: "analytics-library",
    title: "CDP Analytics Library",
    status: "Implemented",
    summary:
      "Authenticated reporting portal for LG Brazil marketing: Vue on CloudFront and S3, Cognito, API Gateway, Lambda and SES, all provisioned with Terraform.",
    problem:
      "Marketing teams needed one place for analytics reports, with controlled access and notifications that never expose mailing lists.",
    built:
      "Built the portal and its AWS integrations with Terraform: a Vue app on S3 behind CloudFront, Cognito sign-in, API Gateway with a JWT authorizer, Lambda for report and notification logic, and SES sending individual emails to a controlled recipient list.",
    flow: [
      "Users open the portal through CloudFront.",
      "API calls go through API Gateway, protected by Cognito tokens.",
      "Lambda sends notifications through SES, one email per recipient.",
    ],
    decisions: [
      "A shared Vue shell and reusable components for every report page.",
      "API origin protected behind CloudFront and Cognito.",
      "One email per recipient instead of exposing mailing lists.",
    ],
    result: "Marketing teams use one authenticated portal for reports and notifications.",
    tags: ["Vue", "CloudFront", "Cognito", "Lambda", "SES", "Terraform"],
  },
  {
    slug: "gcp-data",
    title: "GCP data pipelines and warehouse",
    status: "Operations",
    summary:
      "Operating Cloud Composer (Airflow) pipelines and the BigQuery warehouse across three Google Cloud environments.",
    problem:
      "Marketing and CDP analytics depend on scheduled pipelines; when a DAG fails, warehouse data goes stale.",
    built:
      "Operate and troubleshoot three GCP environments: Cloud Composer DAG dependencies, imports, configuration and authentication, Cloud Storage landing and BigQuery datasets. Validate SQL outputs before downstream teams use them.",
    flow: [
      "Source data lands in Cloud Storage.",
      "Composer DAGs load it into raw BigQuery datasets.",
      "SQL transforms build the curated warehouse.",
      "Analytics teams query the warehouse for dashboards and CDP work.",
    ],
    decisions: [
      "Fix dependency and configuration failures at the source before re-running downstream tasks.",
      "Validate warehouse outputs after each fix.",
      "Keep parent and child DAG behavior explicit.",
    ],
    result:
      "Failed runs are traced to a root cause and fixed at the source, keeping warehouse data current.",
    tags: ["Cloud Composer", "Airflow", "BigQuery", "Cloud Storage", "SQL"],
  },
];

export const heroDiagrams = [
  { slug: "family-club", label: "Containers on ECS" },
  { slug: "eks-platform", label: "Microservices on EKS" },
  { slug: "hybrid-connectivity", label: "Hybrid networking" },
  { slug: "aiops", label: "AIOps on Bedrock" },
];
