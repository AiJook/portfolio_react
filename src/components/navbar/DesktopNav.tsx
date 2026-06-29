interface NavItem {
  label: string
  href: string
}

export function DesktopNav({ navItems }: { navItems: NavItem[] }) {
  return (
    <nav aria-label="Main navigation" className="hidden items-center gap-2 sm:flex">
      {navItems.map((item) => (
        <a 
          key={item.label}
          href={item.href} 
          className="relative rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-surface hover:text-foreground hover:scale-105"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}