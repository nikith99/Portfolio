/**
 * PROJECTS DATA
 * ============
 * This file contains all your project information.
 * It's structured to be easily maintainable and updatable.
 *
 * HOW TO EDIT THIS FILE:
 * 1. Each project entry is clearly marked
 * 2. You can add or remove projects by copying the existing format
 * 3. Keep the structure consistent when adding new entries
 * 4. Make sure all links (demo, github) are valid
 *
 * BEST PRACTICES:
 * - Keep projects in order of importance or recency
 * - Use clear, concise descriptions
 * - List relevant technologies used
 * - Include both demo and code links when available
 * - Use high-quality images/videos
 *
 * TIP: Keep a backup of this file before making major changes!
 */

export const projectsData = {
  projects: [
    {
      title: "J.A.R.V.I.S — Iron Man Style AI Assistant",
      description: "A personal AI assistant inspired by Iron Man's J.A.R.V.I.S., built entirely from scratch on macOS. Features a 'Hey Jarvis' wake word listener, AI-powered conversations via Groq's LLaMA 3.3 70B, local speech-to-text using OpenAI Whisper, macOS text-to-speech responses, and a fully animated Iron Man-themed GUI with a pulsing arc reactor. Supports system commands: opening apps, searching Google, controlling volume, taking screenshots, and telling time/date.",
      technologies: ["Python", "Groq API", "OpenAI Whisper", "Tkinter", "SpeechRecognition", "sounddevice", "macOS"],
      demoLink: null,
      githubLink: "https://github.com/nikith99/jarvis-ai",
      image: null,
      video: null
    },
    {
      title: "Enterprise AWS Infrastructure — Cummins Inc",
      description: "Designed and managed enterprise-scale AWS infrastructure across multiple Cummins projects using Terraform, AWS CloudFormation, and AWS SAM. Architected highly available environments with EC2, VPC, EKS, Lambda, API Gateway, CloudFront, Route53, RDS, and S3. Built end-to-end Jenkins CI/CD pipelines, led Kubernetes container orchestration with zero-downtime deployments, and maintained a unified observability platform using CloudWatch, Datadog, Grafana, Prometheus, and Splunk.",
      technologies: ["AWS", "Terraform", "Kubernetes", "Docker", "Jenkins", "Ansible", "Grafana", "Datadog", "Python"],
      demoLink: "https://www.cummins.com",
      githubLink: null,
      image: null,
      video: null
    },
    {
      title: "Cloud Infrastructure Automation — Sundaram Finance",
      description: "Independently owned and managed complete AWS infrastructure for Sundaram Finance's financial applications. Introduced Terraform and AWS CloudFormation for infrastructure as code, eliminating manual provisioning entirely. Built full CI/CD pipelines using Jenkins, Bitbucket, Maven, Gradle, and JFrog Artifactory. Automated server configuration using Chef and Ansible, set up ELK Stack monitoring, and managed Docker container environments across development, staging, and production.",
      technologies: ["AWS", "Terraform", "CloudFormation", "Jenkins", "Docker", "Ansible", "Chef", "ELK Stack", "Python"],
      demoLink: null,
      githubLink: null,
      image: null,
      video: null
    }
  ]
};
