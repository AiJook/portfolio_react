import { useState, useRef } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../../lib/utils" // แก้ไข path ตามโปรเจกต์ของคุณ
import { useOutsideClick } from "../../hooks/useOutsideClick"

interface ChildItem {
  label: string
  href: string
  Icon: React.FC<{ className?: string }>
}

export function DesktopNav({ portfolioItems }: { portfolioItems: ChildItem[] }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // เรียกใช้ Hook บรรทัดเดียวลอจิกข้างหลังทำงานให้ทันที!
  useOutsideClick(dropdownRef, () => setDropdownOpen(false))

  return (
    <nav aria-label="Main navigation" className="hidden items-center gap-0.5 sm:flex">
      <span className="mx-2 h-0.75 w-0.75 rounded-full bg-white/20" aria-hidden />

      <a href="/" aria-current="page" className="nav-link relative rounded-[6px] px-[0.7rem] py-[0.35rem] text-[13.5px] text-white transition-colors hover:bg-white/5">
        Home
      </a>
      <a href="/about" className="nav-link relative rounded-[6px] px-[0.7rem] py-[0.35rem] text-[13.5px] text-white/75 transition-colors hover:bg-white/5 hover:text-white">
        About
      </a>

      {/* กล่องข้อความ Portfolio Dropdown */}
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          className="nav-link relative flex items-center gap-[3px] rounded-[6px] px-[0.7rem] py-[0.35rem] text-[13.5px] text-white/75 transition-colors hover:bg-white/5 hover:text-white bg-transparent border-none cursor-pointer"
        >
          Portfolio
          <ChevronDown className={cn("size-[11px] opacity-60 transition-transform duration-200", dropdownOpen && "rotate-180 opacity-100")} aria-hidden />
        </button>

        {dropdownOpen && (
          <div role="menu" className="absolute left-1/2 top-[calc(100%+8px)] z-50 min-w-[160px] -translate-x-1/2 rounded-xl border border-white/10 bg-[rgba(20,20,28,0.97)] p-[6px] shadow-[0_8px_24px_rgba(0,0,0,0.5)] backdrop-blur-xl animate-fadeSlideDown">
            {portfolioItems.map(({ label, href, Icon }) => (
              <a key={label} href={href} role="menuitem" className="flex items-center gap-2 rounded-[8px] px-[0.7rem] py-[0.45rem] text-[13px] text-white/75 transition-colors hover:bg-[rgba(127,119,221,0.14)] hover:text-white">
                <Icon className="size-[14px] text-[#7F77DD] opacity-80" aria-hidden />
                {label}
              </a>
            ))}
          </div>
        )}
      </div>

      <a href="/contact" className="nav-link relative rounded-[6px] px-[0.7rem] py-[0.35rem] text-[13.5px] text-white/75 transition-colors hover:bg-white/5 hover:text-white">
        Contact
      </a>

      <span className="mx-1 h-[3px] w-[3px] rounded-full bg-white/20" aria-hidden />
    </nav>
  )
}