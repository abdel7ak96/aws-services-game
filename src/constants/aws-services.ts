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
				description:
					"A web service that you can use to automate the movement and transformation of data. With it, you can define data-driven workflows, so that tasks can be dependent on the successful completion of previous tasks.",
			},
			{
				id: "Lake-Formation",
				name: "Lake Formation",
				description:
					"A managed service that makes it easy to set up, secure, and manage your data lakes. It helps you discover your data sources and then catalog, cleanse, and transform the data. You can useit to secure the data and ingest it into an Amazon Simple Storage Service (Amazon S3) data lake.",
			},
			{
				id: "OpenSearch-Service",
				name: "Open Search",
				description:
					"A managed service that makes it easy to deploy, operate, and scale OpenSearch, a popular open-source search and analytics engine. OpenSearch Service also offers security options, high availability, data durability, and direct access to the OpenSearch API.",
			},
			{
				id: "Athena",
				name: "Athena",
				description:
					"An interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. Athena is serverless, so there is no infrastructure to setup or manage, and you pay only for the queries you run. To get started, simply point to your data in S3, define the schema, and start querying using standard SQL.",
			},
			{
				id: "QuickSight",
				name: "QuickSight",
				description:
					"A cloud-native, serverless, business intelligence with native ML integrations and usage-based pricing, allowing insights for all users.",
			},
			{
				id: "Kinesis",
				name: "Kinesis",
				description:
					"A service makes it easy to collect, process, and analyze video and data streams in real time.",
			},
			{
				id: "Glue",
				name: "Glue",
				description:
					"A scalable, serverless data integration service that makes it easy to discover, prepare, and combine data for analytics, machine learning, and application development.",
			},
			{
				id: "Redshift",
				name: "Redshift",
				description:
					"a fast, fully managed, petabyte-scale data warehouse service that makes it simple and cost-effective to efficiently analyze all your data using your existing business intelligence tools. It is optimized for datasets ranging from a few hundred gigabytes to a petabyte or more and costs less than $1,000 per terabyte per year, a tenth the cost of most traditional data warehousing solutions.",
			},
			{
				id: "EMR",
				name: "EMR",
				description:
					"a web service that makes it easy to process vast amounts of data efficiently using Apache Hadoop and services offered by Amazon Web Services.",
			},
		],
	},
	{
		category: "App-Integration",
		services: [
			{
				id: "MQ",
				name: "MQ",
				description:
					"a managed message broker service that makes it easy to set up and operate message brokers in the cloud. It provides interoperability with your existing applications and services. It works with your existing applications and services without the need to manage, operate, or maintain your own messaging system.",
			},
			{
				id: "API-Gateway",
				name: "API Gateway",
				description:
					"A Service that enables you to create and deploy your own REST and WebSocket APIs at any scale. You can create robust, secure, and scalable APIs that access Amazon Web Services or other web services, as well as data that’s stored in the AWS Cloud. You can create APIs to use in your own client applications, or you can make your APIs available to third-party app developers.",
			},
			{
				id: "AppSync",
				name: "AppSync",
				description:
					"An enterprise-level, fully managed API management service that connects applications to events, data, and AI models.",
			},
			{
				id: "EventBridge",
				name: "Event Bridge",
				description:
					"A serverless event bus service that makes it easy to connect your applications with data from a variety of sources. EventBridge delivers a stream of real-time data from your own applications, software-as-a-service (SaaS) applications, and AWS services and routes that data to targets such as AWS Lambda. You can set up routing rules to determine where to send your data to build application architectures that react in real time to all of your data sources. EventBridge enables you to build event-driven architectures that are loosely coupled and distributed.",
			},
			{
				id: "Step-Functions",
				name: "Step Functions",
				description: "A service that makes it easy to coordinate the components of distributed applications as a series of steps in a visual workflow. You can quickly build and run state machines to execute the steps of your application in a reliable and scalable fashion.",
			},
			{
				id: "Simple-Queue-Service",
				name: "SQS",
				description: " A fully managed message queuing service that makes it easy to decouple and scale microservices, distributed systems, and serverless applications. Amazon SQS moves data between distributed application components and helps you decouple these components.",
			},
			{
				id: "AppFlow",
				name: "AppFlow",
				description: "A fully managed API integration service that you use to connect your software as a service (SaaS) applications to AWS services, and securely transfer data. Use it to manage and automate your data transfers without needing to write code.",
			},
			{
				id: "Simple-Notification-Service",
				name: "SNS",
				description: "A web service that enables applications, end-users, and devices to instantly send and receive notifications from the cloud.",
			},
		],
	},
	{
		category: "Cloud-Financial-Management",
		services: [
			{
				id: "Cost-and-Usage-Report",
				name: "Cost-and-Usage-Report",
				description: "A servive that contains the most comprehensive set of AWS cost and usage data available, including additional metadata about AWS services, pricing, and reservations.",
			},
			{
				id: "Cost-Explorer",
				name: "Cost Explorer",
				description: "A service has an easy-to-use interface that lets you visualize, understand, and manage your AWS cloud costs and usage over time.",
			},
			{
				id: "Savings-Plans",
				name: "Savings Plans",
				description: "A flexible pricing model that provides up to 72% savings on your AWS usage compared to On-Demand prices.",
			},
			{
				id: "Budgets",
				name: "Budgets",
				description: "The simplest way to monitor your AWS spend and be alerted when you exceed or are forecasted to exceed your desired spending limit.",
			},
			{
				id: "Reserved-Instance-Reporting",
				name: "Reserved Instance Reporting",
				description: "A service that allows you to manage and monitor your Amazon EC2, Amazon RDS, Amazon OpenSearch Service, Amazon ElastiCache, and Amazon Redshift reservations with reserved instance—specific cost management solutions.",
			},
		],
	},
	{
		category: "Compute",
		services: [
			{
				id: "EC2-Auto-Scaling",
				name: "EC2 Auto Scaling",
				description: "A service that helps you maintain application availability and define how to scale Amazon EC2 capacity to meet the demands of your application.",
			},
			{
				id: "Elastic-Beanstalk",
				name: "Elastic Beanstalk",
				description: "A service that helps you deploy and manage web applications with capacity provisioning, app health monitoring, and more.",
			},
			{
				id: "App-Runner",
				name: "App Runner",
				description: "A fully managed service that makes it easy for you to deploy from source code or a container image directly to a scalable and secure web application.",
			},
			{
				id: "EC2",
				name: "EC2",
				description: "A service that provides secure, resizable compute in the cloud, offering the broadest choice of processor, storage, networking, OS, and purchase model.",
			},
			{
				id: "Batch",
				name: "Batch",
				description: "A service that allows developers, scientists, and engineers to efficiently process hundreds of thousands of batch and machine learning computing jobs on AWS.",
			},
			{
				id: "Local-Zones",
				name: "Local Zones",
				description: "A type of AWS infrastructure deployment that make it possible to run low latency applications closer to end users or on-premises installations in a specific geography.",
			},
			{
				id: "Lambda",
				name: "Lambda",
				description: "A serverless compute service for running code without having to provision or manage servers. You pay only for the compute time you consume.",
			},
			{
				id: "Lightsail",
				name: "Lightsail",
				description: "An easy-to-use virtual private server (VPS) that offers simple management of cloud resources such as containers, at low, predictable prices.",
			},
		],
	},
	{
		category: "Containers",
		services: [
			{
				id: "Elastic-Container-Service",
				name: "ECS",
				description: "A serivce that provides a fully managed container service solution that’s easy to use, scalable, secure, and reliable.",
			},
			{
				id: "Fargate",
				name: "Fargate",
				description: "a serverless compute engine for containers that works with both Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes (EKS).",
			},
			{
				id: "EKS-Cloud",
				name: "EKS",
				description: "A managed service and certified Kubernetes conformant to run Kubernetes on AWS and on-premises.",
			},
			{
				id: "Elastic-Container-Registry",
				name: "ECR",
				description: "a fully managed Docker container registry that makes it easy to store, share, and deploy container images.",
			},
			{
				id: "Red-Hat-OpenShift-Service-on-AWS",
				name: "ROSA",
				description: "A service that uses SQL to analyze structured and semi-structured data across data warehouses, operational databases, and data lakes, using AWS-designed hardware and machine learning to deliver the best price performance at any scale.",
			},
		],
	},
	{
		category: "Database",
		services: [
			{
				id: "Aurora",
				name: "Aurora",
				description: "A global-scale relational database service built for the cloud with full MySQL and PostgreSQL compatibility.",
			},
			{
				id: "RDS",
				name: "Amazon Relational Database Service (RDS)",
				description: "A fully managed, open-source cloud database service that allows you to easily operate and scale your relational database of choice, including Amazon Aurora, PostgreSQL, SQL Server, and MySQL",
			},
			{
				id: "Neptune",
				name: "Neptune",
				description: "A fast, fully managed database service powering graph use cases such as identity graphs, knowledge graphs, and fraud detection.",
			},
			{
				id: "DocumentDB",
				name: "Document DB",
				description: "A fast, reliable, and fully managed database service that makes it easy for you to set up, operate, and scale MongoDB-compatible databases.",
			},
			{
				id: "ElastiCache",
				name: "ElastiCache",
				description: "A fully managed Redis- and Memcached-compatible service delivering real-time, cost-optimized performance for modern applications with 99.99% availability.",
			},
			{
				id: "Timestream",
				name: "Timestream",
				description: "A fast, scalable, serverless time series database service for Internet of Things (IoT) and operational applications that helps you store and analyze time series data.",
			},
			{
				id: "MemoryDB-for-Redis",
				name: "Memory DB",
				description: "A Redis-compatible, durable, in-memory database service that delivers ultra-fast performance.",
			},
			{
				id: "DynamoDB",
				name: "DynamoDB",
				description: "A fully managed, serverless, key-value NoSQL database that runs high-performance applications at any scale, with built-in security, continuous backups, and automated multi-region replication.",
			},
		],
	},
	{
		category: "Developer-Tools",
		services: [
			{
				id: "Command-Line-Interface",
				name: "CLI",
				description: "A unified tool that provides a consistent interface for interacting with all parts of Amazon Web Services.",
			},
			{
				id: "X-Ray",
				name: "X-Ray",
				description: "A service that helps you debug and analyze your microservices applications with request tracing so you can find the root cause of issues and performance bottlenecks.",
			},
			{
				id: "CodePipeline",
				name: "Code Pipeline",
				description: "A service that automates the build, test, and deploy phases of your release process each time a code change occurs.",
			},
			{
				id: "CodeDeploy",
				name: "Code Deploy",
				description: "A service that makes it easier for you to rapidly release new features, avoid downtime during application deployment, and handle the complexity of updating your applications.",
			},
			{
				id: "CodeBuild",
				name: "Code Build",
				description: "A fully managed build service that compiles your source code, runs unit tests, and produces artifacts that are ready to deploy.",
			},
			{
				id: "CodeCommit",
				name: "Code Commit",
				description: "A managed source control repository that makes it easier for teams to securely collaborate on code with contributions encrypted in transit and at rest.",
			},
			{
				id: "CodeArtifact",
				name: "Code Artifact",
				description: "A managed artifact repository service that lets you securely store, publish, and share software packages.",
			},
		],
	},
	{
		category: "Networking-Content-Delivery",
		services: [
			{
				id: "VPC-Lattice",
				name: "VPC",
				description: "A service to securely connect your applications and services by defining policies for network access, traffic management, and monitoring.",
			},
			{
				id: "Route-53",
				name: "Route 53",
				description: "A highly available and scalable cloud domain name system (DNS) service. Enables to customize DNS routing policies to reduce latency.",
			},
			{
				id: "Client-VPN",
				name: "Client VPN",
				description: "A service to securely connect your remote workforce to resources within both AWS and your on-premises network.",
			},
			{
				id: "CloudFront",
				name: "Cloud Front",
				description: "A content delivery network (CDN) service that helps you distribute your static and dynamic content quickly and reliably with high speed performance, security, and developer ease-of-use.",
			},
			{
				id: "Elastic-Load-Balancing",
				name: "ELB",
				description: "Automatically distributes incoming application traffic across multiple targets and virtual appliances in one or more Availability Zones (AZs).",
			},
			{
				id: "Global-Accelerator",
				name: "Global Accelerator",
				description: "A networking service that simplifies traffic management and improves performance by up to 60%.",
			},
			{
				id: "Direct-Connect",
				name: "Direct Connect",
				description: "A cloud service that links your network directly to AWS to deliver consistent, low-latency performance.",
			},
			{
				id: "Transit-Gateway",
				name: "Transit Gateway",
				description: "Connects virtual private cloud and on-premises networks through a central hub. It acts as a highly scalable cloud router so you can easily add to your network.",
			},
		],
	},
	{
		category: "Storage",
		services: [
			{
				id: "File-Cache",
				name: "File Cache",
				description: "A service that provides a high-speed cache on AWS that makes it easier to process file data with highly scalable performance, regardless of where the data is stored.",
			},
			{
				id: "Backup",
				name: "Backup",
				description: "A service that lets you centrally manage and automate backups across AWS services and third-party applications.",
			},
			{
				id: "Snowball",
				name: "Snowball",
				description: "A petabyte-scale data transport service that uses secure devices to transfer large amounts of data into and out of the AWS Cloud. It addresses challenges like high network costs, long transfer times, and security concerns to migrate data as efficiently as possible.",
			},
			{
				id: "Elastic-Block-Store",
				name: "Amazon Elastic Block Store (EBS)",
				description: "An easy to use, high-performance cloud Storage Area Network (SAN).",
			},
			{
				id: "EFS",
				name: "EFS",
				description: "A simple, serverless, elastic, set-and-forget file system that automatically grows and shrinks as you add and remove files with no need for management or provisioning. You can use it with Amazon EC2, AWS Lambda, Amazon ECS, Amazon EKS and other AWS compute instances, or with on-premises servers.",
			},
			{
				id: "Storage-Gateway",
				name: "Storage Gateway",
				description: "A service that connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between your on-premises IT environment and the AWS storage infrastructure in the AWS Cloud.",
			},
			{
				id: "Simple-Storage-Service",
				name: "Amazon Simple Storage Service (Amazon S3)",
				description: "Storage for the internet. You can use it to store and retrieve any amount of data at any time, from anywhere on the web.",
			},
			{
				id: "FSx",
				name: "FSx",
				description: "makes it easy and cost effective to launch, run, and scale feature-rich, high-performance file systems in the cloud. It supports a wide range of workloads with its reliability, security, scalability, and broad set of capabilities.\nIt is built on the latest AWS compute, networking, and disk technologies to provide high performance and lower TCO. And as a fully managed service, it handles hardware provisioning, patching, and backups -- freeing you up to focus on your applications, your end users, and your business.",
			},
		],
	},
	{
		category: "Security-Identity-Compliance",
		services: [
			{
				id: "Cognito",
				name: "Cognito",
				description: "A developer-centric and cost-effective customer identity and access management (CIAM) service that scales to millions of users.",
			},
			{
				id: "GuardDuty",
				name: "Guard Duty",
				description: "A threat detection service that monitors for malicious activity and anomalous behavior to protect AWS accounts, workloads, and data.",
			},
			{
				id: "Identity-and-Access-Management",
				name: "IAM",
				description: "A service that allows you to specify who or what can access services and resources in AWS, centrally manage fine-grained permissions, and analyze access to refine permissions across AWS.",
			},
			{
				id: "Inspector",
				name: "Inspector",
				description: "An automated vulnerability management service that continually scans AWS workloads for software vulnerabilities.",
			},
			{
				id: "Key-Management-Service",
				name: "KMS",
				description: "An encryption and key management service scaled for the cloud. Its keys and functionality are used by other AWS services, and you can use them to protect data in your own applications that use AWS.",
			},
			{
				id: "Security-Hub",
				name: "Security Hub",
				description: "A cloud security posture management service that automates best practice checks, aggregates alerts, and supports automated remediation.",
			},
			{
				id: "Shield",
				name: "Shield",
				description: "A managed distributed denial of service (DDoS) protection service that safeguards applications running on AWS.",
			},
			{
				id: "Secrets-Manager",
				name: "Secrets Manager",
				description: "A service that allows you to rotate, manage, and retrieve database credentials, API keys, and other secrets through their lifecycle.",
			},
			{
				id: "WAF",
				name: "WAF",
				description: "A web application firewall that helps protect apps and APIs against bots and exploits that consume resources, skew metrics, or cause downtime.",
			},
			{
				id: "Macie",
				name: "Macie",
				description: "A service that discovers sensitive data using machine learning and pattern matching, provides visibility into data security risks, and enables automated protection against those risks.",
			},
			{
				id: "Certificate-Manager",
				name: "Certificate Manager",
				description: "A service that helps you provision, manage, and deploy public and private SSL/TLS certificates with AWS services and your internal connected resources.",
			},
			{
				id: "CloudHSM",
				name: "Cloud HSM",
				description: "A service that provides total access management control and protection for your encryption keys with secure and compliant hardware security modules (HSMs).",
			},
			{
				id: "Firewall-Manager",
				name: "Firewall Manager",
				description: "A service that allows you to centrally configure and manage your firewall rules across accounts and applications.",
			},
		],
	},
];
