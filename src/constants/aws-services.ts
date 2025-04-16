export type Service = {
	id: string;
	name: string;
	description: string;
};

export type Category = {
	category: string;
	services: Service[];
};

export const servicesData: Category[] = [
	{
		category: "Analytics",
		services: [
			{
				id: "Data-Pipeline",
				name: "Data Pipeline",
				description: "lorem ipsum"
			},
			{
				id: "Lake-Formation",
				name: "Lake Formation",
				description: "lorem ipsum"
			},
			{
				id: "OpenSearch-Service",
				name: "Open Search",
				description: "lorem ipsum"
			},
			{
				id: "Athena",
				name: "Athena",
				description: "lorem ipsum"
			},
			{
				id: "QuickSight",
				name: "QuickSight",
				description: "lorem ipsum"
			},
			{
				id: "Kinesis",
				name: "Kinesis",
				description: "lorem ipsum"
			},
			{
				id: "Glue",
				name: "Glue",
				description: "lorem ipsum"
			},
			{
				id: "Redshift",
				name: "Redshift",
				description: "lorem ipsum"
			},
			{
				id: "EMR",
				name: "EMR",
				description: "lorem ipsum"
			}
		]
	},
	{
		category: "App-Integration",
		services: [
			{
				id: "MQ",
				name: "MQ",
				description: "lorem ipsum"
			},
			{
				id: "API-Gateway",
				name: "API Gateway",
				description: "lorem ipsum"
			},
			{
				id: "AppSync",
				name: "AppSync",
				description: "lorem ipsum"
			},
			{
				id: "EventBridge",
				name: "Event Bridge",
				description: "lorem ipsum"
			},
			{
				id: "Step-Functions",
				name: "Step Functions",
				description: "lorem ipsum"
			},
			{
				id: "Simple-Queue-Service",
				name: "SQS",
				description: "lorem ipsum"
			},
			{
				id: "AppFlow",
				name: "AppFlow",
				description: "lorem ipsum"
			},
			{
				id: "Simple-Notification-Service",
				name: "SNS",
				description: "lorem ipsum"
			}
		]
	},
	{
		category: "Cloud-Financial-Management",
		services: [
			{
				id: "Cost-and-Usage-Report",
				name: "Cost & Usage Report",
				description: "lorem ipsum"
			},
			{
				id: "Reserved-Instance-Reporting",
				name: "Reserved Instance Reporting",
				description: "lorem ipsum"
			},
			{
				id: "Cost-Explorer",
				name: "Cost Explorer",
				description: "lorem ipsum"
			},
			{
				id: "Budgets",
				name: "Budgets",
				description: "lorem ipsum"
			}
		]
	},
	{
		category: "Compute",
		services: [
			{
				id: "EC2-Auto-Scaling",
				name: "EC2 Auto Scaling",
				description: "lorem ipsum"
			},
			{
				id: "Elastic-Beanstalk",
				name: "Elastic Beanstalk",
				description: "lorem ipsum"
			},
			{
				id: "App-Runner",
				name: "App Runner",
				description: "lorem ipsum"
			},
			{
				id: "EC2",
				name: "EC2",
				description: "lorem ipsum"
			},
			{
				id: "Batch",
				name: "Batch",
				description: "lorem ipsum"
			},
			{
				id: "Local-Zones",
				name: "Local Zones",
				description: "lorem ipsum"
			},
			{
				id: "Lambda",
				name: "Lambda",
				description: "lorem ipsum"
			},
			{
				id: "Lightsail",
				name: "Lightsail",
				description: "lorem ipsum"
			}
		]
	},
	{
		category: "Containers",
		services: [
			{
				id: "Elastic-Container-Service",
				name: "ECS",
				description: "lorem ipsum"
			},
			{
				id: "Fargate",
				name: "Fargate",
				description: "lorem ipsum"
			},
			{
				id: "EKS-Cloud",
				name: "EKS",
				description: "lorem ipsum"
			},
			{
				id: "Elastic-Container-Registry",
				name: "ECR",
				description: "lorem ipsum"
			},
			{
				id: "Red-Hat-OpenShift-Service-on-AWS",
				name: "ROSA",
				description: "lorem ipsum"
			}
		]
	},
	{
		category: "Database",
		services: [
			{
				id: "Aurora",
				name: "Aurora",
				description: "lorem ipsum"
			},
			{
				id: "RDS",
				name: "RDS",
				description: "lorem ipsum"
			},
			{
				id: "Neptune",
				name: "Neptune",
				description: "lorem ipsum"
			},
			{
				id: "DocumentDB",
				name: "Document DB",
				description: "lorem ipsum"
			},
			{
				id: "ElastiCache",
				name: "ElastiCache",
				description: "lorem ipsum"
			},
			{
				id: "Timestream",
				name: "Timestream",
				description: "lorem ipsum"
			},
			{
				id: "MemoryDB-for-Redis",
				name: "Memory DB",
				description: "lorem ipsum"
			},
			{
				id: "DynamoDB",
				name: "DynamoDB",
				description: "lorem ipsum"
			}
		]
	},
	{
		category: "Developer-Tools",
		services: [
			{
				id: "Command-Line-Interface",
				name: "CLI",
				description: "lorem ipsum"
			},
			{
				id: "X-Ray",
				name: "X-Ray",
				description: "lorem ipsum"
			},
			{
				id: "CodePipeline",
				name: "Code Pipeline",
				description: "lorem ipsum"
			},
			{
				id: "CodeDeploy",
				name: "Code Deploy",
				description: "lorem ipsum"
			},
			{
				id: "CodeBuild",
				name: "Code Build",
				description: "lorem ipsum"
			},
			{
				id: "CodeCommit",
				name: "Code Commit",
				description: "lorem ipsum"
			},
			{
				id: "CodeArtifact",
				name: "Code Artifact",
				description: "lorem ipsum"
			}
		]
	},
	{
		category: "Networking-Content-Delivery",
		services: [
			{
				id: "VPC-Lattice",
				name: "VPC",
				description: "lorem ipsum"
			},
			{
				id: "Route-53",
				name: "Route 53",
				description: "lorem ipsum"
			},
			{
				id: "Client-VPN",
				name: "Client VPN",
				description: "lorem ipsum"
			},
			{
				id: "CloudFront",
				name: "Cloud Front",
				description: "lorem ipsum"
			},
			{
				id: "Elastic-Load-Balancing",
				name: "ELB",
				description: "lorem ipsum"
			},
			{
				id: "Global-Accelerator",
				name: "Global Accelerator",
				description: "lorem ipsum"
			},
			{
				id: "Direct-Connect",
				name: "Direct Connect",
				description: "lorem ipsum"
			},
			{
				id: "Transit-Gateway",
				name: "Transit Gateway",
				description: "lorem ipsum"
			}
		]
	},
	{
		category: "Storage",
		services: [
			{
				id: "File-Cache",
				name: "File Cache",
				description: "lorem ipsum"
			},
			{
				id: "Backup",
				name: "Backup",
				description: "lorem ipsum"
			},
			{
				id: "Snowball",
				name: "Snowball",
				description: "lorem ipsum"
			},
			{
				id: "Elastic-Block-Store",
				name: "EBS",
				description: "lorem ipsum"
			},
			{
				id: "EFS",
				name: "EFS",
				description: "lorem ipsum"
			},
			{
				id: "Storage-Gateway",
				name: "Storage Gateway",
				description: "lorem ipsum"
			},
			{
				id: "Simple-Storage-Service",
				name: "S3",
				description: "lorem ipsum"
			},
			{
				id: "FSx",
				name: "FSx",
				description: "lorem ipsum"
			}
		]
	},
	{
		category: "Security-Identity-Compliance",
		services: [
			{
				id: "Cognito",
				name: "Cognito",
				description: "lorem ipsum"
			},
			{
				id: "GuardDuty",
				name: "Guard Duty",
				description: "lorem ipsum"
			},
			{
				id: "Identity-and-Access-Management",
				name: "IAM",
				description: "lorem ipsum"
			},
			{
				id: "Inspector",
				name: "Inspector",
				description: "lorem ipsum"
			},
			{
				id: "Key-Management-Service",
				name: "KMS",
				description: "lorem ipsum"
			},
			{
				id: "Security-Hub",
				name: "Security Hub",
				description: "lorem ipsum"
			},
			{
				id: "Shield",
				name: "Shield",
				description: "lorem ipsum"
			},
			{
				id: "Secrets-Manager",
				name: "Secrets Manager",
				description: "lorem ipsum"
			},
			{
				id: "WAF",
				name: "WAF",
				description: "lorem ipsum"
			},
			{
				id: "Macie",
				name: "Macie",
				description: "lorem ipsum"
			},
			{
				id: "Certificate-Manager",
				name: "Certificate Manager",
				description: "lorem ipsum"
			},
			{
				id: "CloudHSM",
				name: "Cloud HSM",
				description: "lorem ipsum"
			},
			{
				id: "Firewall-Manager",
				name: "Firewall Manager",
				description: "lorem ipsum"
			}
		]
	}
];
