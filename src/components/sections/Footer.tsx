export default function Footer() {
  return (
    <footer className="py-7 border-t border-white/[0.05]" style={{ background: "#09090b" }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-slate-600 text-sm">
          © {new Date().getFullYear()} Sri Nikith Poddaturi
        </p>
        <p className="text-slate-700 text-xs font-mono">
          Next.js · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  )
}
