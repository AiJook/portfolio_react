import { useState } from "react"
import { Menu, X, Send, LayoutGrid, Pencil, Image } from "lucide-react"
import { Logo } from "./Logo"
import { DesktopNav } from "./DesktopNav"
import { MobileNav } from "./MobileNav"

const NAV_ITEMS = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  {
    label: "Portfolio",
    href: "#",
    children: [
      { label: "Projects", href: "/projects", Icon: LayoutGrid },
      { label: "Blog",     href: "/blog",     Icon: Pencil },
      { label: "Gallery",  href: "/gallery",  Icon: Image },
    ],
  },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const portfolioItems = NAV_ITEMS.find((i) => i.children)?.children || []

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      {/* Pill bar หลัก */}
      <div
        className="flex items-center justify-between rounded-full px-3 py-2"
        style={{
          background: "rgba(20,20,28,0.92)",
          border: "0.5px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 1px 2px rgba(0,0,0,0.4), inset 0 0.5px 0 rgba(255,255,255,0.06)",
        }}
      >
        <Logo />

        {/* เมนูหน้าจอคอมพิวเตอร์ */}
        <DesktopNav portfolioItems={portfolioItems} />

        {/* ปุ่ม CTA หน้าจอคอมพิวเตอร์ */}
        <a href="/contact" className="hidden items-center gap-[6px] rounded-full px-[0.9rem] py-[0.4rem] text-[13px] font-medium text-white transition-all duration-200 hover:-translate-y-px hover:opacity-90 active:scale-[0.97] sm:flex" style={{ background: "linear-gradient(135deg, #534AB7, #1D9E75)" }}>
          <Send className="size-[13px]" aria-hidden />
          Hire me
        </a>

        {/* ปุ่มแฮมเบอร์เกอร์สำหรับมือถือ */}
        <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation" aria-expanded={mobileOpen} aria-controls="mobile-menu" className="flex size-[34px] items-center justify-center rounded-[8px] border border-white/10 bg-white/5 text-white/75 transition-colors hover:bg-white/10 sm:hidden cursor-pointer">
          {mobileOpen ? <X className="size-[18px]" aria-hidden /> : <Menu className="size-[18px]" aria-hidden />}
        </button>
      </div>

      {/* เมนูหน้าจอมือถือ */}
      <div id="mobile-menu">
        <MobileNav isOpen={mobileOpen} navItems={NAV_ITEMS} />
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="py-4 text-center text-sm text-white/40">
      <p>© 2026 My Portfolio. All rights reserved.</p>
    </footer>
  )
}