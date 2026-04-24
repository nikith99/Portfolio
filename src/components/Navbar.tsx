"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { heroData } from "@/data/hero"

const navLinks = [
  { name: "About",      href: "#about" },
  { name: "Skills",     href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects",   href: "#projects" },
  { name: "Education",  href: "#education" },
  { name: "Contact",    href: "#contact" },
]

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ background: scrolled ? "rgba(9,9,11,0.85)" : "transparent" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300
                  ${scrolled ? "backdrop-blur-xl border-b border-white/[0.06]" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="text-slate-200 font-bold text-lg tracking-tight">
          SN<span className="text-blue-400">.</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 text-sm text-slate-500 hover:text-slate-200
                         rounded-lg hover:bg-white/[0.05] transition-all duration-150"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Resume */}
        <div className="hidden md:block">
          <a
            href={heroData.cta.secondary.link}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1.5 text-sm font-medium text-blue-400
                       border border-blue-500/25 rounded-lg
                       hover:bg-blue-500/10 hover:border-blue-500/40
                       transition-all duration-150"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden w-8 h-8 flex items-center justify-center
                     rounded-lg text-slate-400 hover:text-slate-200
                     hover:bg-white/[0.05] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            style={{ background: "rgba(9,9,11,0.95)" }}
            className="md:hidden overflow-hidden border-b border-white/[0.06] backdrop-blur-xl"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 px-3 text-slate-400 hover:text-slate-200 text-sm
                             rounded-lg hover:bg-white/[0.04] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/[0.05] my-2" />
              <a
                href={heroData.cta.secondary.link}
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 text-blue-400 text-sm font-medium"
              >
                Download Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
