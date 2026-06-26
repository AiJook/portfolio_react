export function About() {
  return (
    <section className="py-24 relative" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary"></span>
            About Me
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-white">
            Driven by curiosity,<br/>defined by execution.
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Intro - spanning 2 cols */}
          <div className="md:col-span-2 glass-panel p-8 rounded-3xl glass-panel-hover flex flex-col justify-center">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-2xl">person</span>
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">The Developer</h4>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              I am a Computer Science graduate with hands-on experience in full-stack development through intensive internships and complex academic projects. I specialize in Go, Nuxt.js, and Flutter.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              I am a fast learner who continuously seeks to improve technical and problem-solving skills. Currently looking for an opportunity to grow as a Full-stack Developer while contributing to impactful and scalable systems.
            </p>
          </div>

          {/* Education */}
          <div className="glass-panel p-8 rounded-3xl glass-panel-hover flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Education</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-slate-200">Bachelor of Science</h5>
                  <p className="text-slate-400 text-sm">Computer Science</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-slate-300 text-sm">Mahasarakham University</p>
                  <p className="text-slate-500 text-sm">Thailand</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="text-sm text-slate-400">Expected Graduation</p>
              <p className="text-lg font-bold text-gradient">May 2026</p>
              <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-slate-300 border border-white/10">
                GPAX: 3.68
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}