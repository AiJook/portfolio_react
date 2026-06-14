import { useState } from "react"
import { ChevronDown, Send, Home, User, Briefcase, Mail } from "lucide-react"
import { cn } from "../../lib/utils"

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string; Icon: React.FC<{ className?: string }> }[]
}

interface MobileNavProps {
  isOpen: boolean
  navItems: NavItem[]
}

export function MobileNav({ isOpen, navItems }: MobileNavProps) {
  const [subOpen, setSubOpen] = useState(false)

  if (!isOpen) return null

  const MOBILE_ICONS: Record<string, React.FC<{ className?: string }>> = {
    Home, About: User, Portfolio: Briefcase, Contact: Mail,
  }

  return (
    <nav aria-label="Mobile navigation" className="flex animate-fadeSlideDown flex-col gap-[2px] px-1 pb-1 pt-[0.5rem]">
      {navItems.map((item) => {
        const Icon = MOBILE_ICONS[item.label] ?? Home

        if (item.children) {
          return (
            <div key={item.label}>
              <button onClick={() => setSubOpen(!subOpen)} aria-expanded={subOpen} className="flex w-full items-center gap-2 rounded-[8px] bg-transparent px-3 py-[0.6rem] text-left text-[14px] text-white/75 transition-colors hover:bg-white/5 hover:text-white border-none cursor-pointer">
                <Icon className="size-[15px] text-[#7F77DD]" aria-hidden />
                {item.label}
                <ChevronDown className={cn("ml-auto size-[12px] opacity-50 transition-transform duration-200", subOpen && "rotate-180")} aria-hidden />
              </button>
              {subOpen && (
                <div className="ml-6 border-l-[1.5px] border-[rgba(127,119,221,0.25)] pl-4">
                  {item.children.map(({ label, href, Icon: SubIcon }) => (
                    <a key={label} href={href} className="flex items-center gap-2 rounded-[8px] px-3 py-[0.5rem] text-[13px] text-white/70 transition-colors hover:bg-white/5 hover:text-white">
                      <SubIcon className="size-[14px] text-[#7F77DD]" aria-hidden />
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )
        }

        return (
          <a key={item.label} href={item.href} className="flex items-center gap-2 rounded-[8px] px-3 py-[0.6rem] text-[14px] text-white/75 transition-colors hover:bg-white/5 hover:text-white">
            <Icon className="size-[15px] text-[#7F77DD]" aria-hidden />
            {item.label}
          </a>
        )
      })}

      <a href="/contact" className="mt-2 flex items-center justify-center gap-[6px] rounded-full px-4 py-[0.4rem] text-[13px] font-medium text-white transition-opacity hover:opacity-90" style={{ background: "linear-gradient(135deg, #534AB7, #1D9E75)" }}>
        <Send className="size-[13px]" aria-hidden />
        Hire me
      </a>
    </nav>
  )
}