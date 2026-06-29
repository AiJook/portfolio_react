import { Send, Home, User, Briefcase, Mail, Code2, Moon, Sun } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"

interface NavItem {
  label: string
  href: string
}

interface MobileNavProps {
  isOpen: boolean
  navItems: NavItem[]
  onClose?: () => void
}

export function MobileNav({ isOpen, navItems, onClose }: MobileNavProps) {
  const { theme, toggleTheme } = useTheme()

  if (!isOpen) return null

  const MOBILE_ICONS: Record<string, React.FC<{ className?: string }>> = {
    Home, About: User, Skills: Code2, Experience: Briefcase, Contact: Mail,
  }

  return (
    <nav aria-label="Mobile navigation" className="flex animate-fadeSlideUp flex-col gap-2 p-4 rounded-3xl bg-surface/95 backdrop-blur-2xl border border-border shadow-[0_10px_40px_rgba(0,0,0,0.3)] w-[calc(100vw-3rem)] max-w-[300px] mb-2 origin-bottom-right">
      {navItems.map((item) => {
        const Icon = MOBILE_ICONS[item.label] ?? Home

        return (
          <a 
            key={item.label} 
            href={item.href} 
            onClick={onClose}
            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-surface-hover hover:text-foreground"
          >
            <Icon className="size-5 text-primary" aria-hidden />
            {item.label}
          </a>
        )
      })}

      <div className="mt-2 pt-4 border-t border-border flex gap-2">
        <button 
          onClick={() => { toggleTheme(); onClose?.(); }}
          className="flex items-center justify-center size-12 rounded-2xl bg-surface-hover border border-border text-foreground transition-colors hover:bg-surface"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
        </button>
        <a 
          href="#contact" 
          onClick={onClose}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 shadow-[0_0_15px_rgba(20,184,166,0.3)]"
        >
          Hire me
          <Send className="size-4" aria-hidden />
        </a>
      </div>
    </nav>
  )
}