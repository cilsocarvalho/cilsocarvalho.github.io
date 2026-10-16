export const caseStudies = [
  {
    "slug": "finops",
    "title": "FinOps Cost Visibility",
    "status": "Implemented",
    "problem": "Finance and engineering need to review costs by month, project, and account without reconciling conflicting dashboard and spreadsheet totals.",
    "contribution": "Developed project-level cost views and an Excel-compatible export, integrating the selected reporting period and chargeback data into a shared calculation path.",
    "decisions": [
      "Use one cost model for both the visual matrix and spreadsheet export.",
      "Resolve data for the selected month instead of mixing current and historical periods.",
      "Keep account and environment allocation rules explicit in the reporting model."
    ],
    "result": "The project matrix and exported workbook use the same period-aware cost basis, making financial review and reconciliation more consistent.",
    "verification": [
      "Source review confirms that both the displayed matrix and export call the same cost-model function.",
      "The backend implements Athena query execution and report retrieval from S3."
    ],
    "boundary": "This public overview excludes invoices, costs, account identifiers, and internal allocation rules. No savings percentage is claimed.",
    "nodes": [
      "AWS billing data",
      "Athena and Lambda",
      "Reports in S3",
      "Dashboard and XLS"
    ],
    "diagramCaption": "Simplified reporting path. AI-assisted analysis is an additional backend capability; the financial matrix uses deterministic calculations."
  },
  {
    "slug": "analytics-library",
    "title": "CDP Analytics Library",
    "status": "Implemented",
    "problem": "Business users need a central place for analytics and reports, while access and outbound notifications remain controlled.",
    "contribution": "Developed the analytics portal and its AWS integrations, with Terraform-managed infrastructure, Cognito authentication, and protected notification APIs.",
    "decisions": [
      "Use a shared Vue application shell and reusable components.",
      "Authenticate portal sessions and protect API origin access.",
      "Send individual notifications with recipient controls rather than exposing mailing lists."
    ],
    "result": "An authenticated reporting portal combines analytics content and controlled email notifications through a shared cloud delivery path.",
    "verification": [
      "Repository documentation identifies Cognito, CloudFront, S3, API Gateway, Lambda, and SES.",
      "Notification controls restrict access and recipient handling."
    ],
    "boundary": "Business reports, user data, credentials, and internal URLs are omitted. The diagram abstracts authentication and static/API branches.",
    "nodes": [
      "Authenticated user",
      "CloudFront portal",
      "API Gateway / Lambda",
      "SES notifications"
    ],
    "diagramCaption": "Simplified notification path. Cognito supplies authentication; static portal assets are served from S3."
  },
  {
    "slug": "aiops",
    "title": "AI Assisted Operations",
    "status": "Implemented workflow",
    "problem": "Operators need incident context and actionable recommendations without waiting for a long model invocation during each dashboard request.",
    "contribution": "Developed a Python workflow that combines operational snapshots, runbooks, and Bedrock tool calling, validates recommendations, and persists results for API consumption.",
    "decisions": [
      "Run collection and model work asynchronously in a worker.",
      "Ground recommendations in existing snapshots and runbooks.",
      "Validate account, service, and runbook references before exposing recommendations.",
      "Keep agent tools read-only and separate advice from remediation."
    ],
    "result": "The dashboard can read persisted operational snapshots while the worker handles collection and recommendation generation separately.",
    "verification": [
      "The worker and HTTP API have separate Lambda entry points.",
      "The agent validates recommendation references and controls invocation frequency."
    ],
    "boundary": "The implemented agent recommends actions; it does not perform autonomous remediation. Source review does not establish model accuracy or an incident-resolution improvement percentage.",
    "nodes": [
      "Operational snapshots",
      "Worker and runbooks",
      "Bedrock tool calling",
      "Validated recommendations"
    ],
    "diagramCaption": "Simplified recommendation flow. Results are persisted in DynamoDB and consumed by the API and dashboard."
  },
  {
    "slug": "hybrid-connectivity",
    "title": "Hybrid AWS Connectivity",
    "status": "Implemented and assessed",
    "problem": "Corporate systems need controlled access to AWS workloads, with network cost and restricted inbound connectivity taken into account.",
    "contribution": "Worked on Client VPN, Transit Gateway, routing, DNS, and security controls; reviewed Resolver costs and assessed alternatives for restricted return connectivity.",
    "decisions": [
      "Separate VPN routing from optional hybrid DNS resolver infrastructure.",
      "Gate Resolver resources through Terraform configuration.",
      "Treat a reverse tunnel as a service-level alternative, not as VPC-wide routing."
    ],
    "result": "The documented infrastructure change removed optional Resolver resources while preserving Client VPN connectivity. A service-level reverse bridge remained an assessed alternative.",
    "verification": [
      "Terraform contains a conditional switch for the Resolver module.",
      "The historical change record documents preserved VPN access and distinguishes the undeployed reverse bridge."
    ],
    "boundary": "The diagram summarizes the VPN access pattern and omits IPs, routes, certificates, account IDs, and gateway identifiers. It does not depict the assessed reverse bridge as deployed.",
    "nodes": [
      "Corporate client",
      "AWS Client VPN",
      "Transit Gateway",
      "Private VPC workloads"
    ],
    "diagramCaption": "Sanitized access overview. Network details and optional DNS components are omitted."
  },
  {
    "slug": "sales-portal",
    "title": "Sales Portal Migration Architecture",
    "status": "Architecture proposal",
    "problem": "An on-premises sales administration portal requires a migration design that considers resilience, controlled access, and ongoing cloud cost.",
    "contribution": "Prepared current-state and target-state diagrams, AWS architecture options, cost considerations, and executive presentations for technical and business review.",
    "decisions": [
      "Preserve controlled source access in the proposed design.",
      "Separate ingress, private application compute, and database responsibilities.",
      "Document current-state constraints and target-state resilience considerations."
    ],
    "result": "A documented migration proposal supports architecture and budget discussions. It is not presented as a completed migration.",
    "verification": [
      "Local architecture files include current-state, target-state, and access-control diagrams.",
      "Executive presentations and a cost document support the planning work."
    ],
    "boundary": "Target architecture only. No deployment, availability improvement, or migration completion is claimed. Internal topology, sizing, and financial figures are omitted.",
    "nodes": [
      "Authorized users",
      "WAF and load balancer",
      "Private application tier",
      "Database tier"
    ],
    "diagramCaption": "Sanitized target-state proposal, not deployed infrastructure."
  },
  {
    "slug": "gcp-data",
    "title": "GCP Data Operations",
    "status": "Operational support",
    "problem": "Analytics workflows need dependable orchestration, data validation, and investigation of failed or blocked tasks.",
    "contribution": "Supported BigQuery and Cloud Composer workflows, investigating Airflow DAG dependencies, imports, configuration, authentication, and task failures.",
    "decisions": [
      "Investigate dependency and configuration failures before changing downstream processing.",
      "Validate SQL outputs and preserve source-data semantics.",
      "Keep orchestration behavior explicit across parent and child workflows."
    ],
    "result": "Operational support connects workflow diagnosis with data validation and documented failure causes.",
    "verification": [
      "The supplied CV documents BigQuery and Cloud Composer work.",
      "Local project history includes DAG dependency, import, configuration, and authentication investigations."
    ],
    "boundary": "This is an illustrative operational workflow, not a complete data-platform topology. No throughput, availability, or recovery-time metric is claimed.",
    "nodes": [
      "Composer / Airflow",
      "Workflow investigation",
      "BigQuery / SQL",
      "Data validation"
    ],
    "diagramCaption": "Illustrative workflow showing the areas of operational contribution."
  }
];
