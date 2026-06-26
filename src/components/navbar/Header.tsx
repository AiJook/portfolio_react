import { useState } from "react"
import { Menu, X, Send } from "lucide-react"
import { Logo } from "./Logo"
import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"

const NAV_ITEMS = [
  { label: "Home",     href: "#hero" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",  href: "#contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div
        className="mx-auto max-w-7xl flex items-center justify-between rounded-full px-4 py-3"
        style={{
          background: "rgba(5, 5, 5, 0.7)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Logo />

        <DesktopNav navItems={NAV_ITEMS} />

        <a href="#contact" className="hidden items-center gap-2 rounded-full px-5 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-primary/90 hover:scale-105 sm:flex bg-primary shadow-[0_0_15px_rgba(20,184,166,0.3)]">
          Hire me
          <Send className="size-4" aria-hidden />
        </a>

        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          aria-label="Toggle navigation" 
          aria-expanded={mobileOpen} 
          className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/75 transition-colors hover:bg-white/10 sm:hidden cursor-pointer"
        >
          {mobileOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
        </button>
      </div>

      <div id="mobile-menu" className="max-w-7xl mx-auto px-2">
        <MobileNav isOpen={mobileOpen} navItems={NAV_ITEMS} />
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-slate-500 border-t border-white/5 bg-[#050505]">
      <p>© 2026 Sutthikan Butnangkul. All rights reserved.</p>
    </footer>
  )
}