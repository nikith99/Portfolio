"use client"

import { motion } from "framer-motion"

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as any } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const categories = [
  {
    title: "Cloud Platforms",
    skills: ["AWS (EC2, VPC, S3, EKS, Lambda, RDS, CloudFront, Route53, IAM)", "Microsoft Azure", "Google Cloud Platform (GCP)"],
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform", "AWS CloudFormation", "AWS SAM"],
  },
  {
    title: "CI/CD & DevOps",
    skills: ["Jenkins", "GitOps", "Maven", "Apache Ant", "Gradle", "JFrog Artifactory", "Bitbucket Pipelines"],
  },
  {
    title: "Containers & Orchestration",
    skills: ["Docker", "Kubernetes (EKS)", "Helm", "OpenShift"],
  },
  {
    title: "Configuration Management",
    skills: ["Ansible", "Chef", "Puppet"],
  },
  {
    title: "Monitoring & Observability",
    skills: ["CloudWatch", "Datadog", "Grafana", "Prometheus", "ELK Stack", "Splunk"],
  },
  {
    title: "Scripting & Languages",
    skills: ["Python", "Bash / Shell", "PowerShell", "Go (Golang)", "Java", "Perl", "Ruby"],
  },
  {
    title: "Databases",
    skills: ["Amazon RDS", "MySQL", "Oracle", "MongoDB", "Cassandra"],
  },
  {
    title: "Messaging & Streaming",
    skills: ["Apache Kafka"],
  },
  {
    title: "Source Control",
    skills: ["Git", "GitHub", "Bitbucket"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28" style={{ background: "#0d0d10" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="section-label mb-3">Tech Stack</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-100">
            Technical Skills
          </motion.h2>
        </motion.div>

        {/* Table layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="divide-y divide-white/[0.05]"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 py-5 group"
            >
              {/* Category label */}
              <p className="text-sm font-medium text-slate-300 pt-0.5 md:pt-1 shrink-0">
                {cat.title}
              </p>

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md text-xs text-slate-400
                               border border-white/[0.07] bg-white/[0.03]
                               hover:text-slate-200 hover:border-white/[0.14] hover:bg-white/[0.06]
                               transition-all duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
