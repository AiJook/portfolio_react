export function About() {
  const skills = ["TypeScript", "React/Next.js", "Node.js", "Python", "PostgreSQL", "Docker", "Kubernetes"]

  return (
    <section className="py-xl bg-surface-container-lowest" id="about">
      <div className="max-w-container-max mx-auto px-md">
        <div className="mb-lg max-w-2xl">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-sm">The Strategic Approach</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Building software is about more than syntax—it's about creating value, ensuring reliability, and enabling growth through technical excellence.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-md">
          {/* Strengths */}
          <div className="p-lg glass-card rounded-xl border-outline-variant/10 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-md group-hover:bg-primary group-hover:text-on-primary transition-all">
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">Professional Strengths</h3>
            <ul className="space-y-xs font-body-md text-body-md text-on-surface-variant">
              {["Scalable Microservices", "UI/UX Design Systems", "Cloud Infrastructure (AWS)", "Performance Optimization"].map((item) => (
                <li key={item} className="flex items-center gap-xs">
                  <span className="w-1 h-1 bg-primary rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Objectives */}
          <div className="p-lg glass-card rounded-xl border-outline-variant/10 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary mb-md group-hover:bg-tertiary group-hover:text-on-tertiary transition-all">
              <span className="material-symbols-outlined">flag</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">Career Objectives</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Aiming to lead cross-functional engineering teams in building next-generation AI platforms and contributing to open-source ecosystems that define the future of the web.</p>
          </div>

          {/* Tech Stack */}
          <div className="p-lg glass-card rounded-xl border-outline-variant/10 hover:border-primary/30 transition-all group">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-md group-hover:bg-secondary group-hover:text-on-secondary transition-all">
              <span className="material-symbols-outlined">layers</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-sm">Tech Stack</h3>
            <div className="flex flex-wrap gap-xs pt-xs">
              {skills.map((skill) => (
                <span key={skill} className="px-sm py-1 bg-surface-container rounded-full text-primary font-label-sm text-label-sm border border-outline-variant/20">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}