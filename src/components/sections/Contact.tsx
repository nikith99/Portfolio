"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, ArrowUpRight, Download } from "lucide-react"
import { footerData } from "@/data/footer"
import { heroData } from "@/data/hero"

function GithubIcon({ size = 18 }: { size?: number }) {
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
  visible: { transition: { staggerChildren: 0.09 } },
}

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "psrinikith05@gmail.com",
    href: footerData.social.email,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/s-nikith",
    href: footerData.social.linkedin,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/nikith99",
    href: footerData.social.github,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-28" style={{ background: "#09090b" }}>
      <div className="max-w-xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="section-label mb-3">Contact</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-slate-100 mb-3 leading-tight">
            Let&apos;s connect
          </motion.h2>
          <motion.p variants={fadeUp} className="text-slate-500 text-sm leading-relaxed mb-10">
            Open to new opportunities, infrastructure discussions, or just saying hello.
          </motion.p>

          {/* Links */}
          <motion.div variants={stagger} className="space-y-3 mb-8">
            {links.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between px-5 py-4 rounded-xl
                           border border-white/[0.07] bg-white/[0.02]
                           hover:bg-white/[0.05] hover:border-white/[0.12]
                           transition-all duration-200"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-slate-200 text-sm">{value}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-slate-600 group-hover:text-slate-300
                             group-hover:-translate-y-0.5 group-hover:translate-x-0.5
                             transition-all duration-150"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Resume CTA */}
          <motion.div variants={fadeUp}>
            <a
              href={heroData.cta.secondary.link}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg
                         bg-blue-500 text-white text-sm font-semibold
                         hover:bg-blue-600 active:scale-[0.99] transition-all duration-150
                         shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <Download size={15} /> Download Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
