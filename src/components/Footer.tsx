export function Footer() {
  return (
    <footer className="w-full py-lg bg-surface-container-lowest border-t border-outline-variant/5">
      <div className="max-w-container-max mx-auto px-md flex flex-col md:flex-row justify-between items-center gap-md">
        <div className="font-label-md text-label-md font-bold text-on-surface">ALEX_RIVERA.EXE</div>
        <div className="font-label-md text-label-md text-on-surface-variant">© 2026 Alex Rivera. Built with Precision.</div>
        <div className="flex gap-lg">
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" href="#">Github</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" href="#">LinkedIn</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" href="#">Source</a>
        </div>
      </div>
    </footer>
  )
}