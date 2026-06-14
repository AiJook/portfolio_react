export function Experience() {
  const journey = [
    {
      role: "Senior Software Engineer",
      company: "TechNova Solutions",
      duration: "2021 — Present",
      desc: "Leading the migration of a legacy monolithic platform to a modern microservices architecture using Node.js and AWS, improving system reliability by 40%."
    },
    {
      role: "Full-Stack Developer",
      company: "Global Dev Systems",
      duration: "2018 — 2021",
      desc: "Developed core features for a collaborative task management SaaS, focusing on real-time data sync using WebSockets and optimized React rendering."
    }
  ]

  return (
    <section className="py-xl bg-surface-container-lowest relative overflow-hidden" id="experience">
      <div className="max-w-container-max mx-auto px-md relative z-10">
        <h2 className="font-headline-md text-headline-md text-on-surface mb-lg text-center">Career Journey</h2>
        <div className="max-w-3xl mx-auto space-y-lg">
          {journey.map((item, idx) => (
            <div key={idx} className="relative pl-lg border-l-2 border-outline-variant/30">
              <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ring-4 ring-background transition-all ${idx === 0 ? "bg-primary" : "bg-outline-variant hover:bg-primary"}`}></div>
              <div className="mb-xs flex justify-between items-start">
                <h4 className="font-headline-sm text-headline-sm text-on-surface">{item.role}</h4>
                <span className={`font-label-md text-label-md ${idx === 0 ? "text-primary" : "text-on-surface-variant"}`}>{item.duration}</span>
              </div>
              <div className="text-on-surface-variant font-label-md text-label-md mb-sm uppercase tracking-wider">{item.company}</div>
              <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}