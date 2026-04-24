"use client"

import { motion } from "framer-motion"
import { MapPin, Briefcase, GraduationCap, Award } from "lucide-react"
import { aboutData } from "@/data/about"

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const info = [
  { icon: MapPin,        label: "Location",       value: "Indianapolis, IN" },
  { icon: Briefcase,     label: "Current Role",   value: "DevOps Engineer @ Cummins Inc" },
  { icon: GraduationCap, label: "Education",      value: "M.S. Management Information Systems" },
  { icon: Award,         label: "Certifications", value: "AWS CCP  ·  AWS Developer Associate" },
]

export default function About() {
  return (
    <section id="about" className="py-28" style={{ background: "#09090b" }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start"
        >
          {/* Left */}
          <div>
            <motion.p variants={fadeUp} className="section-label mb-3">About Me</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-100 mb-7 leading-tight">
              Turning complexity into{" "}
              <span className="gradient-text">reliable infrastructure</span>
            </motion.h2>

            {aboutData.introduction.paragraphs.map((para, i) => (
              <motion.p key={i} variants={fadeUp} className="text-slate-400 text-sm leading-relaxed mb-4">
                {para}
              </motion.p>
            ))}

            <motion.blockquote
              variants={fadeUp}
              className="mt-6 pl-4 border-l-2 border-blue-500/40 text-slate-500 text-sm leading-relaxed italic"
            >
              {aboutData.introduction.collaboration}
            </motion.blockquote>
          </div>

          {/* Right */}
          <motion.div variants={stagger} className="space-y-3">
            {/* Info card */}
            <motion.div variants={fadeUp} className="card-base rounded-xl p-6">
              <p className="section-label mb-5">Quick Info</p>
              <div className="space-y-4">
                {info.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={13} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-600 uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-slate-200 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3">
              {[
                { value: "4+", label: "Years" },
                { value: "3",  label: "Companies" },
                { value: "2",  label: "AWS Certs" },
              ].map((s) => (
                <div key={s.label}
                  className="card-base rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-slate-100">{s.value}</p>
                  <p className="text-[11px] text-slate-600 mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
