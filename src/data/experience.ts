/**
 * EXPERIENCE DATA
 * ==============
 * This file contains all your professional work experience.
 * It's structured to be easily maintainable and updatable.
 *
 * HOW TO EDIT THIS FILE:
 * 1. Each experience entry is clearly marked
 * 2. You can add or remove entries by copying the existing format
 * 3. Keep the structure consistent when adding new entries
 * 4. Make sure dates are in a consistent format (YYYY - YYYY or YYYY - Present)
 *
 * BEST PRACTICES:
 * - Keep entries in reverse chronological order (newest first)
 * - Use action verbs to start responsibility points
 * - Quantify achievements where possible (e.g., "Increased performance by 50%")
 * - Keep descriptions concise but informative
 * - Use consistent formatting for dates and locations
 *
 * TIP: Keep a backup of this file before making major changes!
 */

export const experienceData = {
  experience: [
    {
      role: "DevOps & Cloud Infrastructure Engineer",
      company: "Cummins Inc",
      location: "Indianapolis, IN (Remote)",
      duration: "July 2025 – Present",
      responsibilities: [
        "Designing and managing enterprise-scale AWS infrastructure across multiple high-priority Cummins projects — architecting and maintaining EC2, VPC, EKS, Lambda, API Gateway, CloudFront, Route53, RDS, and S3 using Terraform, AWS CloudFormation, and AWS SAM for fully automated, highly available, and audit-ready environments with built-in disaster recovery.",
        "Owning and continuously improving end-to-end Jenkins CI/CD pipelines integrated with Bitbucket and GitHub following GitOps principles, driving automated build, test, and deployment workflows using Maven, Ant, and Gradle with centralized artifact governance through JFrog Artifactory.",
        "Leading containerization and orchestration of enterprise microservices workloads using Docker, Kubernetes (EKS), Helm, and OpenShift — managing node scaling, namespace governance, and zero-downtime deployments across all environments.",
        "Driving infrastructure automation and security compliance across RedHat, Ubuntu, CentOS, and Windows server environments using Ansible, Chef, and Puppet — ensuring every Cummins environment is production-consistent, security-hardened, and fully compliant.",
        "Architecting and maintaining a unified enterprise observability platform using CloudWatch, Datadog, Grafana, Prometheus, and Splunk — providing real-time system intelligence, proactive alerting, and complete end-to-end production visibility.",
        "Developing Python, Bash, PowerShell, Java, and Go automation solutions and integrating Apache Kafka for event-driven pipeline workflows, leveraging Azure and GCP services for multi-cloud infrastructure requirements and cost optimization.",
        "Overseeing production database operations for RDS, MySQL, Oracle, MongoDB, and Cassandra under peak enterprise loads, integrating Spring Boot and RESTful APIs for seamless application connectivity."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Sundaram Finance",
      location: "India (Onsite)",
      duration: "Dec 2022 – Nov 2023",
      responsibilities: [
        "Independently owned and managed the complete AWS infrastructure for Sundaram Finance's financial applications — provisioning and securing EC2, VPC, RDS, S3, IAM, CloudFront, Route53, Lambda, and API Gateway while ensuring high availability, disaster recovery, and strict financial industry security and compliance standards.",
        "Introduced and implemented Terraform and AWS CloudFormation for infrastructure as code, completely eliminating manual provisioning, optimizing infrastructure costs, and delivering version-controlled, repeatable infrastructure across development, staging, and production environments.",
        "Designed and maintained the full CI/CD delivery pipeline using Jenkins connected to Bitbucket and GitHub, managing builds through Maven and Gradle with clean artifact governance via JFrog Artifactory across Agile delivery cycles.",
        "Automated server configuration and environment setup using Chef and Ansible, ensuring RedHat Linux and Windows servers stayed consistently configured and reducing time spent on manual environment preparation.",
        "Built and managed Docker container images for application and middleware deployments, maintaining consistent and reliable runtime environments across development and staging throughout multiple project cycles.",
        "Wrote Python, Bash, Perl, and Ruby scripts to handle routine operational tasks including deployments, log management, and environment checks — directly reducing manual workload and improving day-to-day team efficiency.",
        "Assisted in setting up infrastructure monitoring and alerting using CloudWatch and ELK Stack, improving system health visibility and response times across project environments."
      ]
    },
    {
      role: "Associate DevOps Engineer",
      company: "Wipro",
      location: "India (Onsite)",
      duration: "Jan 2020 – Nov 2022",
      responsibilities: [
        "Supported provisioning and management of AWS infrastructure including EC2, VPC, S3, RDS, IAM, and CloudWatch across multiple project environments, actively contributing to production deployments and developing strong cloud operations fundamentals.",
        "Configured and maintained Jenkins pipelines integrated with Git to automate application builds and deployments, managing build processes using Maven and Ant with consistent artifact versioning through JFrog Artifactory.",
        "Automated server configuration and environment setup using Chef and Ansible, ensuring RedHat Linux and Windows servers stayed consistently configured across projects.",
        "Built and managed Docker container images for application and middleware deployments, supporting consistent and reliable runtime environments across development and staging.",
        "Wrote Python, Bash, Perl, and Ruby scripts to handle routine operational tasks including deployments, log management, and environment checks.",
        "Assisted in setting up infrastructure monitoring and alerting using CloudWatch and ELK Stack, actively working with open-source monitoring tools across the DevOps ecosystem.",
        "Worked with Java-based application builds using Maven and Ant, managed source code operations using Git including branching, merging, and release tagging, and supported MySQL and MongoDB database tasks."
      ]
    }
  ]
};
