"use client"

import { motion } from "framer-motion"
import { ArrowRight, Linkedin, Mail, Download } from "lucide-react"
import { heroData } from "@/data/hero"
import { footerData } from "@/data/footer"

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const socials = [
  { icon: GithubIcon, href: footerData.social.github,  label: "GitHub" },
  { icon: Linkedin,   href: footerData.social.linkedin, label: "LinkedIn" },
  { icon: Mail,       href: footerData.social.email,    label: "Email" },
]

const stats = [
  { value: "4+",  label: "Years Experience" },
  { value: "3",   label: "Companies" },
  { value: "2",   label: "AWS Certifications" },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#09090b" }}
    >
      {/* ── Background ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-grid opacity-40" />
        {/* soft glow — top left */}
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-blue-600/[0.07] blur-[140px]" />
        {/* soft glow — bottom right */}
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-violet-700/[0.06] blur-[140px]" />
      </div>

      {/* ── Content ────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-10 rounded-full
                     border border-white/[0.1] bg-white/[0.04] text-sm text-slate-400"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open to new opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.8rem,8vw,6.5rem)] font-bold tracking-tight leading-[1.05] mb-5"
        >
          <span className="text-slate-100">Sri Nikith </span>
          <span className="gradient-text">Poddaturi</span>
        </motion.h1>

        {/* Role — monospace label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="text-base md:text-lg text-slate-400 font-mono tracking-wide mb-6"
        >
          DevOps &amp; Cloud Infrastructure Engineer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.26 }}
          className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Building secure, scalable cloud infrastructure — from Terraform-automated AWS environments
          to end-to-end Jenkins CI/CD pipelines — that keeps engineering teams shipping reliably.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-14"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                       bg-blue-500 text-white text-sm font-semibold
                       hover:bg-blue-600 active:scale-[0.98] transition-all duration-150
                       shadow-[0_0_24px_rgba(59,130,246,0.3)]"
          >
            View My Work <ArrowRight size={15} />
          </a>
          <a
            href={heroData.cta.secondary.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                       border border-white/[0.1] bg-white/[0.04] text-slate-200 text-sm font-semibold
                       hover:bg-white/[0.08] hover:border-white/[0.16] active:scale-[0.98] transition-all duration-150"
          >
            <Download size={15} /> Download Resume
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="flex items-center justify-center gap-0 mb-10"
        >
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className="text-center px-6 md:px-10">
                <p className="text-2xl md:text-3xl font-bold text-slate-100">{s.value}</p>
                <p className="text-xs text-slate-600 mt-1">{s.label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-8 bg-white/[0.08]" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.52, duration: 0.6 }}
          className="flex items-center justify-center gap-2"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.03]
                         flex items-center justify-center text-slate-500
                         hover:text-slate-200 hover:border-white/[0.16] hover:bg-white/[0.07]
                         transition-all duration-150"
            >
              <Icon size={15} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll cue ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/[0.12] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
