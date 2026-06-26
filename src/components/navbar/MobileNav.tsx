import { Send, Home, User, Briefcase, Mail, Code2 } from "lucide-react"

interface NavItem {
  label: string
  href: string
}

interface MobileNavProps {
  isOpen: boolean
  navItems: NavItem[]
}

export function MobileNav({ isOpen, navItems }: MobileNavProps) {
  if (!isOpen) return null

  const MOBILE_ICONS: Record<string, React.FC<{ className?: string }>> = {
    Home, About: User, Skills: Code2, Experience: Briefcase, Contact: Mail,
  }

  return (
    <nav aria-label="Mobile navigation" className="flex animate-fadeSlideDown flex-col gap-2 p-4 mt-2 rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 shadow-2xl">
      {navItems.map((item) => {
        const Icon = MOBILE_ICONS[item.label] ?? Home

        return (
          <a 
            key={item.label} 
            href={item.href} 
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
          >
            <Icon className="size-5 text-primary" aria-hidden />
            {item.label}
          </a>
        )
      })}

      <div className="mt-4 pt-4 border-t border-white/10">
        <a 
          href="#contact" 
          className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90 shadow-[0_0_15px_rgba(20,184,166,0.3)]"
        >
          Hire me
          <Send className="size-4" aria-hidden />
        </a>
      </div>
    </nav>
  )
}