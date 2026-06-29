import { useState } from "react"
import { Menu, X, Send, Moon, Sun } from "lucide-react"
import { Logo } from "./Logo"
import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"
import { useTheme } from "../../context/ThemeContext"

const NAV_ITEMS = [
  { label: "Home",     href: "#hero" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",  href: "#contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden sm:block fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4">
        <div className="mx-auto max-w-7xl w-full flex items-center justify-between rounded-full px-4 py-3 glass-panel">
          <Logo />

          <DesktopNav navItems={NAV_ITEMS} />

          <div className="flex items-center gap-2">
            <button 
              onClick={toggleTheme}
              className="flex size-10 items-center justify-center rounded-xl bg-surface-hover border border-border text-foreground hover:bg-surface transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
            </button>
            
            <a href="#contact" className="flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 bg-primary shadow-[0_0_15px_rgba(20,184,166,0.3)]">
              Hire me
              <Send className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Floating Action Button & Menu */}
      <div className="sm:hidden fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-none">
        
        {/* Mobile Menu */}
        <div className="pointer-events-auto">
          <MobileNav isOpen={mobileOpen} navItems={NAV_ITEMS} onClose={() => setMobileOpen(false)} />
        </div>

        {/* FAB */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          aria-label="Toggle navigation" 
          aria-expanded={mobileOpen} 
          className="pointer-events-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-transform hover:scale-105 active:scale-95 z-50"
        >
          {mobileOpen ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
        </button>
      </div>

    </>
  )
}
