"""Architecture diagrams for the portfolio case studies.

Run:  python3 tools/diagrams/diagrams.py   (writes public/architecture/*.svg)
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from lib import Diagram  # noqa: E402

OUT = Path(__file__).resolve().parents[2] / "public" / "architecture"
A = "aws/"


def family_club():
    d = Diagram("family-club", "LG Family Club — containerized platform on Amazon ECS",
                "Multi-account landing zone (Control Tower) · us-east-1 · ECS, Aurora, ElastiCache, SQS, EventBridge",
                "IN PRODUCTION")
    d.node("users", 85, 305, A + "Users.svg", "Platform users")
    d.group(165, 115, 1085, 655, "cloud", "AWS Cloud")
    # governance account
    d.group(185, 150, 225, 600, "account", "Security & governance")
    d.node("ct", 297, 400, A + "AWSControlTower.svg", "AWS Control Tower", "Landing zone\nand guardrails")
    d.node("org", 297, 545, A + "AWSOrganizations.svg", "AWS Organizations", "Multi-account\nstructure")
    d.node("gd", 297, 680, A + "AmazonGuardDuty.svg", "Amazon GuardDuty", "Threat detection", s=46)
    # workload account
    d.group(430, 150, 800, 600, "account", "Workload account")
    d.group(450, 185, 760, 550, "region", "us-east-1")
    d.group(470, 220, 545, 495, "vpc", "VPC")
    d.group(490, 255, 505, 120, "public", "Public subnets")
    d.group(490, 390, 505, 140, "private", "Private subnets — application")
    d.group(490, 545, 505, 150, "private", "Private subnets — data")
    d.node("alb", 620, 305, A + "ElasticLoadBalancing.svg", "Application Load Balancer", s=44)
    d.node("api", 620, 448, A + "AmazonElasticContainerService.svg", "Amazon ECS", "API / web services", s=46)
    d.node("wrk", 860, 448, A + "AmazonElasticContainerService.svg", "Amazon ECS", "Worker services", s=46)
    d.node("db", 620, 605, A + "AmazonAurora.svg", "Amazon Aurora", "Relational data", s=46)
    d.node("cache", 860, 605, A + "AmazonElastiCache.svg", "Amazon ElastiCache", "Cache & sessions", s=46)
    d.node("sqs", 1112, 300, A + "AmazonSimpleQueueService.svg", "Amazon SQS", "Async job queues", s=46)
    d.node("eb", 1112, 520, A + "AmazonEventBridge.svg", "Amazon EventBridge", "Events & schedules", s=46)

    d.edge([(113, 305), (594, 305)], "HTTPS", at=(300, 305), step=1, step_at=(140, 305))
    d.edge([d.a("alb", "b"), (620, 421)], step=2, step_at=(645, 368))
    d.edge([(647, 438), (740, 438), (740, 290), (1085, 290)], "enqueue jobs", at=(910, 290), step=3, step_at=(740, 345))
    d.edge([d.a("sqs", "b"), (1112, 438), (887, 438)], "consume", at=(1000, 438))
    d.edge([(1085, 520), (960, 520), (960, 458), (887, 458)], "events", at=(1010, 520))
    d.edge([d.a("api", "b"), (620, 578)], step=4, step_at=(596, 522))
    d.edge([(650, 516), (650, 537), (860, 537), (860, 578)])
    d.edge([(410, 400), (430, 400)], dashed=True)
    d.edge([(410, 680), (430, 680)], dashed=True)
    d.label(420, 382, "guardrails")
    d.label(420, 662, "findings")
    return d


def hybrid():
    d = Diagram("hybrid-connectivity", "Hybrid connectivity — Site-to-Site VPN with BGP and Transit Gateway",
                "On-premises ↔ AWS Organization · dynamic routing · isolated route tables per environment",
                "IN PRODUCTION")
    d.group(30, 115, 285, 470, "dc", "Corporate data center")
    d.node("net", 172, 230, A + "Officebuilding.svg", "Corporate network", "Internal systems")
    d.node("cgw", 172, 440, A + "AmazonVPCCustomerGateway.svg", "Customer gateway", "StrongSwan (IPsec)\nBird2 (BGP) on Ubuntu")
    d.node("eng", 172, 690, A + "Users.svg", "Remote engineers", "Certificate-based access")

    d.group(345, 115, 905, 655, "cloud", "AWS Cloud · AWS Organization")
    d.group(365, 150, 440, 600, "account", "Network account")
    d.node("s2s", 470, 280, A + "AWSSitetoSiteVPN.svg", "Site-to-Site VPN", "2 IPsec tunnels\neBGP sessions")
    d.node("sm", 690, 280, A + "AWSSecretsManager.svg", "Secrets Manager", "Tunnel pre-shared keys")
    d.node("tgw", 470, 470, A + "AWSTransitGateway.svg", "Transit Gateway", "Route tables per\nenvironment")
    d.node("ram", 690, 640, A + "AWSResourceAccessManager.svg", "AWS RAM", "Shares the TGW", s=46)
    d.node("cvpn", 470, 670, A + "AWSClientVPN.svg", "Client VPN", "Remote admin access", s=46)

    d.group(830, 150, 400, 285, "account", "Production accounts")
    d.group(850, 190, 360, 225, "vpc", "Production VPCs")
    d.group(870, 228, 320, 165, "private", "Private subnets")
    d.note(1030, 300, "Production workloads", size=13, color="#232F3E", anchor="middle", weight="700")
    d.note(1030, 322, "Dedicated TGW route table", anchor="middle")
    d.note(1030, 342, "Routes propagated by BGP", anchor="middle")

    d.group(830, 465, 400, 285, "account", "Non-production accounts")
    d.group(850, 505, 360, 225, "vpc", "Dev / QA VPCs")
    d.group(870, 543, 320, 165, "private", "Private subnets")
    d.note(1030, 615, "Non-production workloads", size=13, color="#232F3E", anchor="middle", weight="700")
    d.note(1030, 637, "Isolated from production", anchor="middle")
    d.note(1030, 657, "routing domain", anchor="middle")

    d.edge([d.a("net", "b"), (172, 410)], "LAN", at=(172, 378))
    d.edge([(202, 440), (330, 440), (330, 280), (440, 280)], "IPsec over internet · BGP", at=(330, 362), both=True, step=1, step_at=(255, 440))
    d.edge([d.a("s2s", "b"), (470, 440)], "VPN attachment", at=(470, 410), step=2, step_at=(495, 385))
    d.edge([(664, 280), (502, 280)], "PSKs", at=(583, 280), dashed=True)
    d.edge([(500, 455), (560, 455), (560, 205), (830, 205), (830, 300), (850, 300)], "prod route table", at=(700, 205), step=3, step_at=(560, 250))
    d.edge([(500, 485), (785, 485), (785, 615), (850, 615)], "non-prod route table", at=(660, 485))
    d.edge([(716, 655), (830, 655)], "share TGW", at=(772, 655), dashed=True)
    d.edge([(202, 690), (440, 690)], "TLS", at=(330, 690))
    d.edge([d.a("cvpn", "t"), d.a("tgw", "b")], "via VPC\nattachment", at=(470, 610))
    return d


def aiops():
    d = Diagram("aiops", "AIOps SRE module — Amazon Bedrock recommendations for operations",
                "Serverless · CloudWatch alarms → Lambda agent → Amazon Nova Pro tool calling → Slack, Jira and team dashboard",
                "IMPLEMENTED")
    d.group(30, 115, 1220, 655, "cloud", "AWS Cloud")
    d.group(50, 150, 230, 600, "account", "Monitored accounts")
    d.node("cw", 165, 300, A + "AmazonCloudWatch.svg", "Amazon CloudWatch", "Alarms, metrics, logs")
    d.node("res", 165, 540, A + "Gear.svg", "Workloads", "Services under watch", s=46)
    d.group(305, 150, 925, 600, "account", "Operations account")
    d.node("sns", 420, 300, A + "AmazonSimpleNotificationService.svg", "Amazon SNS", "Alarm fan-out")
    d.node("agent", 640, 300, A + "AWSLambda.svg", "AWS Lambda", "AIOps agent (Python)\nread-only tools")
    d.node("br", 870, 300, A + "AmazonBedrock.svg", "Amazon Bedrock", "Amazon Nova Pro\ntool calling")
    d.node("kb", 870, 500, A + "Documents.svg", "Runbooks", "Grounding context", s=46)
    d.node("sec", 420, 500, A + "AWSSecretsManager.svg", "Secrets Manager", "Jira & Slack tokens")
    d.node("ddb", 640, 500, A + "AmazonDynamoDB.svg", "Amazon DynamoDB", "Validated snapshots\nand recommendations")
    d.node("chat", 1110, 300, A + "Chat.svg", "Slack & Jira", "Alerts and tickets", s=46)
    d.node("team", 420, 680, A + "Users.svg", "SRE team", "Dashboard on team TV", s=44)
    d.node("apigw", 640, 680, A + "AmazonAPIGateway.svg", "API Gateway", s=44)
    d.node("api", 870, 680, A + "AWSLambda.svg", "Read API (Lambda)", s=44)

    d.edge([(193, 300), (392, 300)], "alarm", at=(300, 300), step=1, step_at=(230, 300))
    d.edge([(165, 514), d.a("cw", "b")], "telemetry", at=(165, 440), dashed=True)
    d.edge([(448, 300), (612, 300)], "trigger", at=(530, 300))
    d.edge([(668, 300), (842, 300)], "prompt + tools", at=(755, 300), both=True, step=2, step_at=(700, 300))
    d.edge([d.a("kb", "t"), d.a("br", "b")], "context", at=(870, 430))
    d.edge([d.a("agent", "b"), (640, 472)], "validate &\npersist", at=(690, 425), step=3, step_at=(615, 420))
    d.edge([(448, 500), (540, 500), (540, 318), (612, 318)], "tokens", at=(540, 420), dashed=True)
    d.edge([(640, 272), (640, 210), (1110, 210), (1110, 274)], "notify", at=(990, 210), step=4, step_at=(800, 210))
    d.edge([(442, 680), (616, 680)], "HTTPS", at=(530, 680))
    d.edge([(664, 680), (846, 680)])
    d.edge([(870, 656), (870, 615), (640, 615), d.a("ddb", "b")], "read", at=(760, 615))
    return d


def finops():
    d = Diagram("finops", "FinOps reporting — multi-account cost visibility",
                "Cost & Usage Report → Glue + Athena → scheduled Lambda → dashboard, XLS export and email summaries",
                "IMPLEMENTED")
    d.group(30, 115, 1220, 655, "cloud", "AWS Cloud · AWS Organization")
    d.group(50, 150, 250, 600, "account", "Management (payer) account")
    d.node("org", 175, 260, A + "AWSOrganizations.svg", "AWS Organizations", "12+ linked accounts")
    d.node("cur", 175, 445, A + "AWSCostandUsageReport.svg", "Cost & Usage Report", "Hourly billing data")
    d.node("bucket", 175, 630, A + "AmazonSimpleStorageService.svg", "Amazon S3", "CUR bucket")
    d.group(325, 150, 905, 600, "account", "Reporting account")
    d.node("sched", 440, 260, A + "AmazonEventBridge.svg", "Amazon EventBridge", "Monthly schedule")
    d.node("fn", 680, 260, A + "AWSLambda.svg", "AWS Lambda", "Report generator\nPython 3.12")
    d.node("glue", 440, 450, A + "AWSGlue.svg", "AWS Glue", "Data Catalog — CUR tables")
    d.node("ath", 680, 450, A + "AmazonAthena.svg", "Amazon Athena", "Cost by project,\naccount, environment")
    d.node("rep", 920, 260, A + "AmazonSimpleStorageService.svg", "Amazon S3", "CSV per account\nJSON / HTML reports")
    d.node("cf", 1120, 260, A + "AmazonCloudFront.svg", "Amazon CloudFront", "Cost dashboard")
    d.node("sns", 920, 450, A + "AmazonSimpleNotificationService.svg", "Amazon SNS", "Email summaries")
    d.node("fin", 1120, 640, A + "Users.svg", "Finance & engineering", "Monthly views\nXLS export", s=46)

    d.edge([d.a("org", "b"), (175, 413)], "consolidated billing", at=(175, 370))
    d.edge([d.a("cur", "b"), (175, 600)], "delivers", at=(175, 560))
    d.edge([(205, 630), (440, 630), (440, 515)], "catalog", at=(330, 630))
    d.edge([(468, 260), (650, 260)], "invoke", at=(560, 260), step=1, step_at=(500, 260))
    d.edge([(468, 450), (650, 450)], "schema", at=(560, 450))
    d.edge([d.a("fn", "b"), (680, 420)], "SQL", at=(680, 385), both=True, step=2, step_at=(705, 385))
    d.edge([(710, 260), (890, 260)], "publish", at=(800, 260), step=3, step_at=(745, 260))
    d.edge([(950, 260), (1090, 260)], "origin", at=(1020, 260))
    d.edge([(712, 278), (800, 278), (800, 450), (890, 450)], "summary", at=(800, 400))
    d.edge([(1120, 322), (1120, 608)], "HTTPS", at=(1120, 470), step=4, step_at=(1145, 400))
    d.edge([(920, 512), (920, 640), (1090, 640)], "email", at=(1000, 640))
    return d


def occurrences():
    d = Diagram("occurrences-ai", "Occurrences Report Intelligence — conversational analytics on Bedrock",
                "Ask questions in PT / EN / KO · Amazon Nova Pro writes and explains Athena queries over occurrence data",
                "IN PRODUCTION")
    d.node("users", 85, 300, A + "Users.svg", "Business users", "PT · EN · KO")
    d.group(170, 115, 1080, 655, "cloud", "AWS Cloud")
    d.node("cf", 300, 300, A + "AmazonCloudFront.svg", "Amazon CloudFront", "Web app (vanilla JS)")
    d.node("s3w", 300, 520, A + "AmazonSimpleStorageService.svg", "Amazon S3", "Static frontend")
    d.node("cog", 300, 690, A + "AmazonCognito.svg", "Amazon Cognito", "User sign-in", s=44)
    d.node("apigw", 520, 300, A + "AmazonAPIGateway.svg", "API Gateway", "JWT authorizer")
    d.node("fn", 740, 300, A + "AWSLambda.svg", "AWS Lambda", "Multi-turn\nconversation handler")
    d.node("br", 960, 300, A + "AmazonBedrock.svg", "Amazon Bedrock", "Amazon Nova Pro")
    d.node("ath", 740, 520, A + "AmazonAthena.svg", "Amazon Athena", "Generated SQL\nwith schema context")
    d.node("lake", 960, 520, A + "AmazonSimpleStorageService.svg", "Amazon S3", "Occurrence data")
    d.node("cw", 1150, 300, A + "AmazonCloudWatch.svg", "CloudWatch", "Usage & error metrics", s=46)

    d.edge([(113, 300), (272, 300)], "HTTPS", at=(190, 300), step=1, step_at=(140, 300))
    d.edge([(113, 690), (276, 690)], "sign in", at=(190, 690), dashed=True)
    d.edge([d.a("users", "b"), (85, 690), (113, 690)], dashed=True)
    d.edge([d.a("cf", "b"), (300, 492)], "origin", at=(300, 445))
    d.edge([(328, 300), (492, 300)], "/api", at=(410, 300))
    d.edge([(324, 690), (520, 690), (520, 362)], "tokens", at=(520, 600), dashed=True)
    d.edge([(548, 300), (712, 300)], step=2, step_at=(630, 300))
    d.edge([(768, 300), (932, 300)], "question → SQL\nresults → answer", at=(850, 255), both=True, step=3, step_at=(800, 300))
    d.edge([(740, 362), (740, 492)], "run query", at=(740, 445), step=4, step_at=(765, 410))
    d.edge([(768, 520), (932, 520)], "scan", at=(850, 520))
    d.edge([(760, 270), (760, 205), (1150, 205), (1150, 274)], "custom metrics", at=(1000, 205), dashed=True)
    return d


def carrier():
    d = Diagram("carrier-integration", "Carrier Integration Portal — event-driven logistics on SQS FIFO",
                "Ordered, idempotent shipment flow between LG systems and carriers · Transit Gateway to on-premises",
                "IN PRODUCTION")
    d.group(30, 115, 205, 300, "dc", "On-premises")
    d.node("lg", 132, 300, A + "Officebuilding.svg", "LG logistics\nsystems", "Shipment orders")
    d.group(260, 115, 860, 655, "cloud", "AWS Cloud")
    d.node("tgw", 365, 300, A + "AWSTransitGateway.svg", "Transit Gateway", "Private hybrid link")
    d.node("q1", 545, 300, A + "AmazonSimpleQueueService.svg", "SQS FIFO", "carrier-payload")
    d.node("f1", 725, 300, A + "AWSLambda.svg", "Lambda", "Build carrier payload")
    d.node("q2", 905, 300, A + "AmazonSimpleQueueService.svg", "SQS FIFO", "carrier-dispatch")
    d.node("f2", 905, 500, A + "AWSLambda.svg", "Lambda", "Dispatch to carrier API")
    d.node("carriers", 1190, 500, A + "Internet.svg", "Carriers", "External APIs")
    d.node("apigw", 1030, 680, A + "AmazonAPIGateway.svg", "API Gateway", "Status webhooks", s=44)
    d.node("q3", 845, 680, A + "AmazonSimpleQueueService.svg", "SQS FIFO", "carrier-status", s=44)
    d.node("f3", 665, 680, A + "AWSLambda.svg", "Lambda", "Status consumer", s=44)
    d.node("ddb", 485, 680, A + "AmazonDynamoDB.svg", "DynamoDB", "Shipment state", s=44)
    d.node("graf", 132, 680, "brand:grafana", "Grafana", "Operations dashboards", s=44)

    d.edge([(160, 300), (337, 300)], "orders", at=(250, 300), step=1, step_at=(195, 300))
    d.edge([(393, 300), (517, 300)])
    d.edge([(573, 300), (697, 300)], step=2, step_at=(635, 300))
    d.edge([(753, 300), (877, 300)])
    d.edge([d.a("q2", "b"), (905, 472)], step=3, step_at=(930, 440))
    d.edge([(933, 500), (1162, 500)], "HTTPS", at=(1050, 500))
    d.edge([(1190, 562), (1190, 680), (1056, 680)], "status events", at=(1190, 625), step=4, step_at=(1215, 600))
    d.edge([(1006, 680), (871, 680)])
    d.edge([(819, 680), (691, 680)])
    d.edge([(639, 680), (511, 680)], "upsert", at=(575, 680))
    d.edge([(459, 680), (158, 680)], "query", at=(320, 680))
    return d


def sales_portal():
    d = Diagram("sales-portal", "Sales ADM Portal — lift-and-shift from VMware to AWS",
                "Laravel/PHP and Java application · sa-east-1 · WAF IP allow-list · RDS for Oracle Multi-AZ",
                "ARCHITECTURE")
    d.group(30, 115, 245, 400, "dc", "Current state")
    d.node("vm", 152, 250, "brand:vmware", "VMware VMs", "Laravel/PHP + Java", s=48)
    d.node("ora", 152, 420, A + "Database.svg", "Oracle database", "On-premises", s=46)
    d.node("users", 152, 660, A + "Users.svg", "Sales teams", "Approved IP ranges")
    d.group(300, 115, 950, 655, "cloud", "AWS Cloud")
    d.group(320, 150, 910, 600, "region", "South America (São Paulo) · sa-east-1")
    d.node("waf", 410, 300, A + "AWSWAF.svg", "AWS WAF", "IP set allow-list")
    d.node("cw", 1162, 470, A + "AmazonCloudWatch.svg", "CloudWatch", "Metrics &\nalarms", s=44)
    d.group(500, 185, 595, 545, "vpc", "VPC")
    d.group(518, 222, 560, 95, "public", "Public subnets")
    d.node("alb", 797, 260, A + "ElasticLoadBalancing.svg", "Application Load Balancer", s=40)
    d.group(518, 335, 270, 380, "az", "Availability Zone A")
    d.group(808, 335, 270, 380, "az", "Availability Zone B")
    d.group(530, 365, 246, 150, "private", "Private app subnet")
    d.group(820, 365, 246, 150, "private", "Private app subnet")
    d.group(530, 530, 246, 170, "private", "Private data subnet")
    d.group(820, 530, 246, 170, "private", "Private data subnet")
    d.node("ec2a", 653, 435, A + "AmazonEC2.svg", "Amazon EC2", "App server", s=44)
    d.node("ec2b", 943, 435, A + "AmazonEC2.svg", "Amazon EC2", "App server", s=44)
    d.node("rdsa", 653, 605, A + "AmazonRDS.svg", "RDS for Oracle", "Primary · License Included", s=44)
    d.node("rdsb", 943, 605, A + "AmazonRDS.svg", "RDS for Oracle", "Multi-AZ standby", s=44)

    d.edge([(180, 660), (410, 660), d.a("waf", "b")], "HTTPS", at=(300, 660), step=1, step_at=(230, 660))
    d.edge([(438, 270), (773, 270)], "allowed traffic", at=(610, 270), step=2, step_at=(470, 270))
    d.edge([(787, 285), (787, 330), (653, 330), (653, 411)], step=3, step_at=(720, 330))
    d.edge([(807, 285), (807, 330), (943, 330), (943, 411)])
    d.edge([d.a("ec2a", "b"), (653, 581)])
    d.edge([d.a("ec2b", "b"), (943, 520), (673, 520), (673, 581)])
    d.edge([(677, 605), (919, 605)], "sync replication", at=(798, 590), dashed=True, both=True)
    d.edge([(180, 250), (318, 250)], "lift & shift", at=(248, 232), dashed=True)
    d.edge([(1138, 470), (1097, 470)], dashed=True)
    return d


def analytics():
    d = Diagram("analytics-library", "CDP Analytics Library — authenticated reporting portal",
                "Vue application · Cognito · CloudFront + S3 · API Gateway, Lambda and SES · provisioned with Terraform",
                "IMPLEMENTED")
    d.node("users", 85, 300, A + "Users.svg", "Marketing teams", "LG Brazil")
    d.group(170, 115, 900, 655, "cloud", "AWS Cloud")
    d.node("cf", 300, 300, A + "AmazonCloudFront.svg", "Amazon CloudFront", "Portal + API routing")
    d.node("s3", 300, 520, A + "AmazonSimpleStorageService.svg", "Amazon S3", "Vue application")
    d.node("cog", 520, 520, A + "AmazonCognito.svg", "Amazon Cognito", "User pool")
    d.node("apigw", 520, 300, A + "AmazonAPIGateway.svg", "API Gateway", "Protected endpoints")
    d.node("fn", 740, 300, A + "AWSLambda.svg", "AWS Lambda", "Report & notification\nlogic")
    d.node("ses", 950, 300, A + "AmazonSimpleEmailService.svg", "Amazon SES", "Individual emails")
    d.node("rcpt", 1170, 300, A + "Email.svg", "Recipients", "Controlled list", s=46)
    d.node("tf", 1170, 640, "brand:terraform", "Terraform", "Provisions every\nresource", s=44)

    d.edge([(113, 300), (272, 300)], "HTTPS", at=(190, 300), step=1, step_at=(140, 300))
    d.edge([d.a("cf", "b"), (300, 492)], "static assets", at=(300, 445))
    d.edge([d.a("users", "b"), (85, 625), (520, 625), d.a("cog", "b")], "sign in", at=(300, 625), dashed=True)
    d.edge([(328, 300), (492, 300)], "/api", at=(410, 300), step=2, step_at=(355, 300))
    d.edge([(520, 492), (520, 362)], "JWT", at=(520, 445), dashed=True)
    d.edge([(548, 300), (712, 300)])
    d.edge([(768, 300), (922, 300)], "send", at=(845, 300), step=3, step_at=(800, 300))
    d.edge([(978, 300), (1145, 300)])
    d.edge([(1146, 640), (1072, 640)], "IaC", at=(1110, 640), dashed=True)
    return d


def gcp_data():
    d = Diagram("gcp-data", "GCP data platform — pipelines and data warehouse",
                "Cloud Composer (Airflow) orchestration · Cloud Storage landing · BigQuery warehouse · three environments",
                "OPERATIONS")
    d.node("src", 85, 520, A + "Documents.svg", "Data sources", "CDP & marketing")
    d.stack(170, 115, 1050, 640)
    d.group(170, 115, 1050, 640, "gcp", "Google Cloud", "three environment projects")
    d.node("comp", 700, 270, "brand:googlecloudcomposer", "Cloud Composer", "Managed Airflow · DAG scheduling")
    d.node("gcs", 330, 520, "brand:googlecloudstorage", "Cloud Storage", "Landing zone")
    d.node("raw", 580, 520, "brand:googlebigquery", "BigQuery", "Raw datasets")
    d.node("dw", 830, 520, "brand:googlebigquery", "BigQuery", "Curated warehouse")
    d.node("bi", 1090, 520, A + "Users.svg", "Analytics teams", "Dashboards & CDP")

    d.edge([(113, 520), (302, 520)], "ingest", at=(210, 520), step=1, step_at=(140, 520))
    d.edge([(358, 520), (552, 520)], "load", at=(455, 520), step=2, step_at=(400, 520))
    d.edge([(608, 520), (802, 520)], "SQL transforms", at=(705, 520), step=3, step_at=(650, 520))
    d.edge([(858, 520), (1062, 520)], "query", at=(960, 520), step=4, step_at=(900, 520))
    d.edge([(672, 290), (330, 290), (330, 492)], dashed=True)
    d.edge([(700, 345), (700, 420), (580, 420), (580, 492)], dashed=True)
    d.edge([(728, 290), (830, 290), (830, 492)], dashed=True)
    d.label(470, 290, "schedule & retry")
    d.label(640, 420, "run tasks")
    d.label(790, 290, "validate")
    d.note(695, 690, "The same DAGs and datasets run in each of the three environments", anchor="middle")
    return d


def eks_platform():
    d = Diagram("eks-platform", "Occurrence management platform — microservices on Amazon EKS",
                "Carrier APIs via API Gateway + VPC Link · EKS across 3 AZs · GitOps with Argo CD · SQS + DLQ · Direct Connect to on-premises",
                "IN DEVELOPMENT")
    d.node("car", 60, 250, A + "Internet.svg", "Carriers", "Partner systems", s=44)
    d.node("bb", 60, 355, "brand:bitbucket", "Bitbucket", "K8s manifests", s=40)
    d.group(120, 108, 970, 664, "cloud", "AWS Cloud")
    d.chip(262, 116, A + "AmazonCloudWatch.svg", "CloudWatch", s=26)
    d.chip(392, 116, A + "AmazonManagedGrafana.svg", "Managed Grafana", s=26)
    d.chip(560, 116, A + "AWSCloudTrail.svg", "CloudTrail", s=26)
    d.chip(682, 116, A + "AWSIdentityandAccessManagement.svg", "IAM", s=26)
    d.chip(760, 116, A + "AWSCertificateManager.svg", "Certificate Manager", s=26)
    d.group(140, 160, 930, 600, "region", "AWS Region")
    d.node("apigw", 250, 250, A + "AmazonAPIGateway.svg", "API Gateway", "Carrier-facing APIs", s=46)
    d.node("ddb", 250, 555, A + "AmazonDynamoDB.svg", "Amazon DynamoDB", "Occurrence records", s=46)
    d.group(365, 195, 525, 455, "vpc", "VPC")
    d.group(470, 228, 405, 64, "public", "Public subnets")
    d.chip(640, 246, A + "AmazonVPCNATGateway.svg", "NAT gateway per AZ", s=28)
    d.group(380, 305, 495, 332, "private", "Private subnets · 3 Availability Zones")
    d.node("elb", 425, 440, A + "ElasticLoadBalancing.svg", "Load balancer", "internal", s=40)
    d.stack(480, 375, 380, 245, n=3, color="#ED7100")
    d.group(480, 375, 380, 245, "eks", "Amazon EKS cluster")
    d.node("ing", 545, 440, "brand:kubernetes", "Ingress", s=38)
    d.node("svc", 665, 440, "brand:kubernetes", "Services", s=38)
    d.node("argo", 795, 440, "brand:argo", "Argo CD", "GitOps sync", s=38)
    d.node("p1", 530, 555, A + "AmazonElasticContainerServiceContainer1.svg", "REST", "controller", s=34)
    d.node("p2", 615, 555, A + "AmazonElasticContainerServiceContainer1.svg", "SOAP", "controller", s=34)
    d.node("p3", 700, 555, A + "AmazonElasticContainerServiceContainer1.svg", "Interface", "controller", s=34)
    d.node("p4", 790, 555, A + "AmazonElasticContainerServiceContainer1.svg", "Queue", "consumer", s=34)
    d.node("ecr", 985, 300, A + "AmazonElasticContainerRegistry.svg", "Amazon ECR", "Image repositories", s=44)
    d.node("sqs", 985, 455, A + "AmazonSimpleQueueService.svg", "Amazon SQS", "Occurrence queue", s=44)
    d.node("dlq", 985, 575, A + "AmazonSimpleQueueServiceQueue.svg", "Dead-letter queue", s=36)
    d.node("vgw", 890, 650, A + "AmazonVPCVPNGateway.svg", "", s=32)
    d.note(912, 636, "Virtual private gateway", size=12, color="#232F3E", weight="700")
    d.group(1105, 108, 150, 450, "dc", "On-premises")
    d.node("ora", 1180, 210, A + "Database.svg", "Oracle cluster", "System of record", s=42)
    d.node("rtr", 1180, 400, A + "AmazonVPCCustomerGateway.svg", "Customer router", "Corporate backbone", s=42)
    d.node("dx", 1180, 650, A + "AWSDirectConnect.svg", "Direct Connect", "Partner hosted\nconnection", s=42)
    d.group(365, 668, 695, 80, "generic", "Analytics export")
    d.chip(380, 700, A + "AmazonEventBridge.svg", "Schedule", s=28)
    d.chip(505, 700, A + "AWSLambda.svg", "Export job", s=28)
    d.chip(640, 700, A + "AmazonSimpleStorageService.svg", "Data lake", s=28)
    d.chip(770, 700, A + "AWSGlue.svg", "Crawler", s=28)
    d.chip(890, 700, A + "AmazonAthena.svg", "Athena SQL", s=28)

    d.edge([(84, 250), (223, 250)], "HTTPS", at=(150, 250), step=1, step_at=(105, 232))
    d.edge([(277, 250), (425, 250), (425, 416)], "VPC Link", at=(330, 250), step=2, step_at=(425, 300))
    d.edge([(84, 355), (795, 355), (795, 417)], "pull manifests", at=(300, 355), dashed=True)
    d.edge([(449, 440), (522, 440)])
    d.edge([(568, 440), (642, 440)])
    d.edge([(772, 440), (690, 440)], dashed=True)
    d.label(731, 424, "apply")
    d.edge([d.a("svc", "b"), (665, 512), (530, 512), (530, 534)], step=3, step_at=(690, 495))
    d.edge([(665, 512), (700, 512), (700, 534)])
    d.edge([(615, 512), (615, 534)])
    d.edge([(963, 300), (905, 300), (905, 410), (876, 410)], "pull images", at=(905, 388), dashed=True)
    d.edge([(963, 470), (850, 470), (850, 555), (811, 555)], "publish / consume", at=(905, 470), both=True, step=4, step_at=(850, 512))
    d.edge([d.a("sqs", "b"), (985, 553)], dashed=True)
    d.edge([(510, 560), (277, 560)], "read / write", at=(420, 560))
    d.edge([(1158, 650), (910, 650)], "private VIF", at=(1085, 668), both=True, step=5, step_at=(1110, 632))
    d.edge([d.a("rtr", "b"), (1180, 625)], both=True)
    d.edge([d.a("ora", "b"), (1180, 376)], both=True)
    d.edge([d.a("ddb", "b"), (250, 659), (519, 659), (519, 696)], "extract", at=(380, 659))
    for x1, x2 in [(474, 502), (610, 637), (740, 767), (856, 887)]:
        d.edge([(x1, 714), (x2, 714)])
    return d


ALL = [eks_platform, family_club, hybrid, aiops, finops, occurrences, carrier, sales_portal, analytics, gcp_data]

# Close-up crops (x, y, w, h) at the 1280×820 aspect ratio, for cards and phones.
FOCUS = {
    "eks-platform": (350, 180, 760, 487),
    "family-club": (430, 140, 820, 525),
    "hybrid-connectivity": (25, 105, 830, 532),
    "aiops": (300, 140, 940, 602),
    "finops": (315, 140, 935, 599),
    "occurrences-ai": (20, 180, 1000, 641),
    "sales-portal": (300, 140, 950, 609),
    "analytics-library": (20, 200, 1000, 641),
    "gcp-data": (20, 215, 1160, 743),
}

if __name__ == "__main__":
    only = set(sys.argv[1:])
    for f in ALL:
        d = f()
        if only and d.slug not in only:
            continue
        print(d.save(OUT))  # pass FOCUS.get(d.slug) to also write close-up crops
