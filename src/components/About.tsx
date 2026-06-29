export function About() {
  return (
    <section className="py-24 relative" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary"></span>
            About Me
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
            Driven by curiosity,<br />defined by execution.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main Intro - spanning 2 cols */}
          <div className="md:col-span-2 glass-panel p-8 rounded-3xl glass-panel-hover flex flex-col justify-center">
            <div className="w-fit p-2 h-auto rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-2xl">summary</span>
            </div>
            <h4 className="text-2xl font-bold text-foreground mb-4">The Developer</h4>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I enjoy building software that is both functional and visually engaging. As a recent <span className="text-primary">Computer Science</span> graduate, I've worked on full-stack web and mobile projects using modern technologies such as React, Node.js, Flutter, and Tailwind CSS.            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I value clean code, thoughtful user experiences, and continuous learning. I'm a fast learner who enjoys exploring new tools—including AI—to improve development workflows and create meaningful software solutions.            </p>
          </div>

          {/* Education */}
          <div className="glass-panel p-8 rounded-3xl glass-panel-hover flex flex-col">
            <div>
              <div className="w-fit p-2 h-auto rounded-xl bg-secondary/20 flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined text-2xl">Education</span>
              </div>
              {/* <h4 className="text-xl font-bold text-white mb-4">Education</h4> */}
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-foreground">Bachelor of Science</h5>
                  <p className="text-muted-foreground text-sm">Computer Science</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-foreground/80 text-sm">Mahasarakham University</p>
                  <p className="text-muted-foreground text-sm">Thailand</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-6 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground">Expected Graduation</p>
                <p className="text-lg font-bold text-gradient">May 2026</p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-hover text-xs font-medium text-foreground border border-border">
                GPAX 3.68
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}