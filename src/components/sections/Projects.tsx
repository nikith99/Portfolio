"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowUpRight } from "lucide-react"
import { projectsData } from "@/data/projects"

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Projects() {
  const [featured, ...rest] = projectsData.projects

  return (
    <section id="projects" className="py-28" style={{ background: "#0d0d10" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="section-label mb-3">My Work</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-100">
            Projects
          </motion.h2>
        </motion.div>

        {/* Featured ─────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mb-5"
        >
          <div className="relative rounded-xl border border-blue-500/20 bg-gradient-to-br
                          from-blue-950/30 via-[#0d0d10] to-violet-950/20 p-7 md:p-10
                          hover:border-blue-500/35 transition-colors duration-300 overflow-hidden">
            {/* Faint grid inside card */}
            <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

            <div className="relative z-10">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="px-2.5 py-1 rounded-md text-xs font-medium
                                 bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  Featured Project
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs text-slate-500
                                 border border-white/[0.07] bg-white/[0.02]">
                  Personal Build
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3 leading-snug">
                {featured.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-2xl">
                {featured.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-1.5 mb-7">
                {featured.technologies.map((t) => (
                  <span key={t}
                    className="px-2.5 py-0.5 rounded-md text-[11px] text-slate-500
                               border border-white/[0.06] bg-white/[0.02]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5">
                {featured.githubLink && (
                  <a href={featured.githubLink} target="_blank" rel="noreferrer"
                     className="flex items-center gap-2 text-sm font-medium text-slate-300
                                hover:text-white transition-colors">
                    <GithubIcon size={15} /> View on GitHub
                    <ArrowUpRight size={13} className="text-slate-600" />
                  </a>
                )}
                {featured.demoLink && (
                  <a href={featured.demoLink} target="_blank" rel="noreferrer"
                     className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors">
                    <ExternalLink size={13} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid ─────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {rest.map((project, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="card-base rounded-xl p-6 flex flex-col"
            >
              <h3 className="text-slate-100 font-semibold text-base mb-2 leading-snug">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1 line-clamp-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.slice(0, 5).map((t) => (
                  <span key={t}
                    className="px-2 py-0.5 rounded text-[11px] text-slate-500
                               border border-white/[0.06] bg-white/[0.02]">
                    {t}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="px-2 py-0.5 rounded text-[11px] text-slate-600
                                   border border-white/[0.05]">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer"
                     className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors">
                    <GithubIcon size={13} /> GitHub
                  </a>
                )}
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noreferrer"
                     className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors">
                    <ExternalLink size={12} /> Visit
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
