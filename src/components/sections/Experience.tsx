"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, ChevronDown } from "lucide-react"
import { experienceData } from "@/data/experience"

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.14 } },
}

const PREVIEW = 3

function JobCard({ job }: { job: typeof experienceData.experience[0] }) {
  const [expanded, setExpanded] = useState(false)
  const shown = expanded ? job.responsibilities : job.responsibilities.slice(0, PREVIEW)
  const hasMore = job.responsibilities.length > PREVIEW

  return (
    <div className="card-base rounded-xl p-6 md:p-7">
      {/* Top row */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
        <div>
          <h3 className="text-slate-100 font-semibold text-base leading-snug">{job.role}</h3>
          <p className="text-blue-400 text-sm mt-0.5 font-medium">{job.company}</p>
        </div>
        <span className="self-start shrink-0 text-xs font-mono text-slate-500
                         border border-white/[0.07] rounded-md px-2.5 py-1 bg-white/[0.02]">
          {job.duration}
        </span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1.5 mb-5">
        <MapPin size={11} className="text-slate-600" />
        <span className="text-xs text-slate-600">{job.location}</span>
      </div>

      {/* Responsibilities */}
      <ul className="space-y-2.5">
        {shown.map((resp, j) => (
          <li key={j} className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed">
            <span className="mt-[7px] w-1 h-1 rounded-full bg-blue-500/50 flex-shrink-0" />
            {resp}
          </li>
        ))}
      </ul>

      {/* Expand toggle */}
      {hasMore && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
          {expanded
            ? "Show less"
            : `${job.responsibilities.length - PREVIEW} more responsibilities`}
        </button>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28" style={{ background: "#09090b" }}>
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="section-label mb-3">Work History</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-100">
            Experience
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
          className="relative"
        >
          {/* Line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent" />

          {experienceData.experience.map((job, i) => (
            <motion.div key={i} variants={fadeUp} className="relative pl-10 mb-8 last:mb-0">
              {/* Dot */}
              <div className="absolute left-0 top-[22px] w-3.5 h-3.5 rounded-full
                              bg-[#09090b] border-2 border-blue-500
                              shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              <JobCard job={job} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
