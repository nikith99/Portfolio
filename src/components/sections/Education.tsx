"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, BadgeCheck } from "lucide-react"
import { educationData } from "@/data/education"

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export default function Education() {
  return (
    <section id="education" className="py-28" style={{ background: "#0d0d10" }}>
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="section-label mb-3">Background</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-100">
            Education &amp; Certifications
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Education */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-5">
              <GraduationCap size={16} className="text-blue-400" />
              <span className="text-slate-300 text-sm font-semibold">Education</span>
            </motion.div>

            <div className="space-y-4">
              {educationData.education.map((edu, i) => (
                <motion.div key={i} variants={fadeUp} className="card-base rounded-xl p-6">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap size={14} className="text-blue-400" />
                    </div>
                    {edu.duration && (
                      <span className="text-[11px] font-mono text-slate-600 border border-white/[0.07]
                                       rounded px-2 py-0.5 shrink-0">
                        {edu.duration}
                      </span>
                    )}
                  </div>
                  <h4 className="text-slate-100 font-semibold text-sm leading-snug mb-1">{edu.degree}</h4>
                  <p className="text-blue-400 text-xs mb-3">{edu.school}</p>
                  <ul className="space-y-1">
                    {edu.achievements.map((a, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-700 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-5">
              <Award size={16} className="text-amber-400" />
              <span className="text-slate-300 text-sm font-semibold">Certifications</span>
            </motion.div>

            <div className="space-y-4">
              {educationData.certifications.map((cert, i) => (
                <motion.div key={i} variants={fadeUp} className="card-base rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                      <Award size={14} className="text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-slate-100 font-semibold text-sm leading-snug">{cert.name}</h4>
                      <p className="text-amber-400/80 text-xs mt-0.5">{cert.organization}</p>
                    </div>
                    <span className="text-[11px] font-mono text-slate-600 border border-white/[0.07]
                                     rounded px-2 py-0.5 shrink-0">
                      {cert.issuedDate}
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed pl-11">{cert.description}</p>
                </motion.div>
              ))}

              {/* Verified badge */}
              <motion.div variants={fadeUp}
                className="card-base rounded-xl p-5 flex items-center gap-3">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"
                  alt="AWS"
                  className="w-8 object-contain opacity-80"
                />
                <div className="flex-1">
                  <p className="text-slate-200 text-sm font-medium">Amazon Web Services</p>
                  <p className="text-slate-600 text-xs mt-0.5">2 active certifications</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <BadgeCheck size={15} className="text-emerald-400" />
                  <span className="text-xs text-emerald-400">Verified</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
