import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-12 relative overflow-hidden bg-background border-t border-border">
      {/* Decorative gradient blur */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[80%] md:w-1/2 h-[200px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-surface-hover border border-border flex items-center justify-center">
            <Code2 className="size-5 text-primary" />
          </div>
          <span className="font-heading font-bold text-lg text-foreground tracking-widest">SUTTHIKAN<span className="text-primary">.DEV</span></span>
        </div>

        {/* Made with React Indicator */}
        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-hover border border-border hover:bg-surface transition-colors shadow-[0_0_15px_rgba(97,218,251,0.1)]">
          <span className="text-sm font-medium text-muted-foreground">Crafted with</span>
          
          {/* React Logo Spinner */}
          <svg
            className="size-5 text-[#61DAFB] animate-[spin_8s_linear_infinite]"
            viewBox="-11.5 -10.23174 23 20.46348"
            fill="currentColor"
          >
            <circle cx="0" cy="0" r="2.05" />
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
          <span className="text-sm font-bold text-foreground tracking-wide">React</span>
          <span className="text-sm font-medium text-muted-foreground">& Tailwind CSS</span>
        </div>

        {/* Copyright & Links */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <div className="text-sm font-medium text-muted-foreground">
            © {new Date().getFullYear()} Sutthikan Butnangkul
          </div>
          <div className="text-xs text-muted-foreground/80">
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}