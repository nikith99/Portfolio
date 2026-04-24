/**
 * ABOUT SECTION DATA
 * =================
 * This file contains all the information that appears in the About section of your portfolio.
 * It's structured as a JavaScript object with different sections for your introduction,
 * skills, and highlights.
 * 
 * HOW TO EDIT THIS FILE:
 * 1. Each section is clearly marked with comments
 * 2. You can modify the text content directly
 * 3. For skills, you can add or remove technologies
 * 
 * TIP: Keep a backup of this file before making major changes!
 */

// Export the data so it can be used in other files
export const aboutData = {
  // INTRODUCTION SECTION
  // -------------------
  // This section contains your personal introduction and collaboration message
  // You can modify the text to match your own experience and interests
  introduction: {
    // Add or remove paragraphs as needed
    paragraphs: [
      "I’m a DevOps & Cloud Infrastructure Engineer with 4+ years of progressive experience across the financial services and manufacturing industries. I’ve grown from supporting enterprise DevOps teams at Wipro to independently owning all cloud operations at Sundaram Finance, and currently designing and leading enterprise-scale AWS infrastructure projects alongside US-based teams at Cummins Inc.",
      "I bring strong hands-on expertise in AWS, Terraform, Docker, Kubernetes, Jenkins, Ansible, Python, ELK Stack, Datadog, and Kafka across multi-cloud environments including Azure and GCP. I hold AWS Certified Cloud Practitioner and AWS Certified Developer certifications, and consistently deliver secure, scalable, and production-ready infrastructure that helps engineering teams move faster and operate more reliably."
    ],
    // Your collaboration message - feel free to modify this text
    collaboration: "I’m always excited to collaborate on infrastructure challenges, automation projects, and cloud architecture initiatives. Whether it’s building CI/CD pipelines, designing fault-tolerant AWS environments, or scripting automation solutions, I’m ready to contribute and keep learning."
  },

  // HIGHLIGHTS SECTION
  // -----------------
  // This section shows your recent achievements and academic accomplishments
  // You can add or remove items from both arrays
  highlights: {
    // Recent professional achievements
    recent: [
      "4+ years of DevOps & cloud engineering experience across financial services and manufacturing industries.",
      "Designed and managed enterprise-scale AWS infrastructure (EC2, VPC, EKS, Lambda, RDS, S3, CloudFront) using Terraform, CloudFormation, and AWS SAM.",
      "Built and maintained end-to-end Jenkins CI/CD pipelines with GitOps principles, JFrog Artifactory, Maven, Ant, and Gradle.",
      "Led containerization and orchestration of microservices using Docker, Kubernetes (EKS), Helm, and OpenShift.",
      "Automated infrastructure and security compliance across Linux and Windows environments using Ansible, Chef, and Puppet.",
      "Architected enterprise observability platforms with CloudWatch, Datadog, Grafana, Prometheus, Splunk, and ELK Stack.",
      "Developed automation scripts in Python, Bash, PowerShell, Go, and integrated Kafka for event-driven pipelines.",
      "Implemented Terraform and CloudFormation IaC at Sundaram Finance, eliminating manual provisioning and optimizing costs.",
      "Holds AWS Certified Cloud Practitioner and AWS Certified Developer – Associate certifications.",
      "Experienced with multi-cloud environments including AWS, Azure, and GCP across active enterprise projects."
    ],
    // Academic and learning achievements
    academic: [
      "Master's Degree in Management Information Systems — University of Illinois at Springfield (Jan 2024 – May 2025)",
      "Bachelor's Degree in Electronics and Communication Engineering",
      "AWS Certified Cloud Practitioner",
      "AWS Certified Developer – Associate",
      "Active contributor to open-source DevOps tools and platforms"
    ]
  },

  // SKILLS SECTION
  // -------------
  // This section lists all your technical skills with their icons
  // To add a new skill:
  // 1. Copy an existing skill object
  // 2. Change the name to your new skill
  // 3. Update the icon URL (see instructions below)
  // 
  // How to find skill icons:
  // 1. Visit https://devicon.dev/
  // 2. Search for your technology
  // 3. Click on the icon
  // 4. Copy the SVG URL
  // 5. Replace the icon URL in the skill object
  skills: [
    {
      name: "AWS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"
    },
    {
      name: "Terraform",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg"
    },
    {
      name: "Docker",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"
    },
    {
      name: "Kubernetes",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg"
    },
    {
      name: "Jenkins",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg"
    },
    {
      name: "Ansible",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ansible/ansible-original.svg"
    },
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
    },
    {
      name: "Linux",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
    },
    {
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
    },
    {
      name: "Grafana",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg"
    },
    {
      name: "Prometheus",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original.svg"
    },
    {
      name: "Azure",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg"
    },
    {
      name: "GCP",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg"
    },
    {
      name: "Bash",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg"
    },
    {
      name: "GitHub",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
    },
    {
      name: "MySQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
    },
    {
      name: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "Kafka",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original.svg"
    }
  ]
}; 
