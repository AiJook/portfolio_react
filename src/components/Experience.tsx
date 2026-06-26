import { ArrowRight } from "lucide-react";

// Inlined Github SVG to prevent missing export errors
const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const timelineData = [
  {
    type: "experience",
    title: "Full-stack Developer Intern",
    entity: "Metamedia Technology Co.ltd",
    duration: "Dec 2025 - Mar 2026",
    location: "Sathon Square, Bangkok",
    description: "Worked on the Longdo Map Stats project, a web application for visualizing usage statistics. Developed the Front-end using Nuxt.js and the Back-end using Golang. Designed RESTful APIs and built statistical data visualizations.",
    tags: ["Nuxt.js", "Golang", "RESTful APIs", "Data Visualization"],
    logoText: "MMT",
  },
  {
    type: "project",
    title: "Lost & Found (Senior Project)",
    entity: "Mobile Application",
    duration: "Jan 2025 - Oct 2025",
    description: "Mobile application for posting lost and found items. Features a Visual Search system using the SIFT library to analyze images, ownership verification, private chat, and automatic notifications.",
    tags: ["Flutter", "Golang", "Firebase", "MySQL", "Visual Search"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    link: "#",
  },
  {
    type: "project",
    title: "Smart Blood Bank",
    entity: "Web Application",
    duration: "May 2025 - Jul 2025",
    description: "Contributed to the development of a platform for managing blood donation processes in hospitals. Responsible for developing frontend functionality and prototyping responsive web interfaces.",
    tags: ["Flutter", "Figma", "Retrofit", "Authentication"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    link: "#",
  },
  {
    type: "project",
    title: "PaJook Delivery (Mini Project)",
    entity: "Mobile Application",
    duration: "Oct 2024 - Dec 2024",
    description: "Developed an application for on-demand rider booking to handle item pickup and delivery. Implemented real-time location tracking for senders, recipients, and riders.",
    tags: ["Flutter", "Firebase", "NoSQL", "Realtime Tracking"],
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
    link: "#",
  },
  {
    type: "project",
    title: "Anihot (Mini Project)",
    entity: "Web Application",
    duration: "2023",
    description: "Developed a full-stack web application inspired by FaceMash and implemented the Elo Rating algorithm to calculate and update character rankings based on user votes.",
    tags: ["Angular", "Node.js", "MySQL", "Elo Rating"],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    link: "#",
  },
];

export function Experience() {
  return (
    <section className="py-24 relative" id="experience">
      {/* Decorative gradient blur */}
      <div className="absolute right-0 top-1/3 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-sm font-bold tracking-widest text-secondary uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-secondary"></span>
            Career & Projects
          </h2>
          <h3 className="text-4xl md:text-6xl font-heading font-bold text-white">
            The Journey
          </h3>
        </div>

        <div className="relative">
          {/* Vertical Neon Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary/50 via-primary/30 to-transparent -translate-x-1/2" />

          <div className="space-y-20">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-center group ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[20px] md:left-1/2 top-8 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="w-5 h-5 rounded-full bg-background border-4 border-secondary shadow-[0_0_15px_rgba(14,165,233,0.6)] group-hover:scale-125 transition-transform duration-300" />
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content */}
                  <div className="w-full pl-12 md:pl-0 md:w-1/2">
                    <div className="glass-panel p-8 rounded-3xl glass-panel-hover relative overflow-hidden">
                      
                      {/* Sub-bg glow */}
                      <div className={`absolute -top-24 ${isEven ? '-left-24' : '-right-24'} w-48 h-48 ${item.type === 'experience' ? 'bg-secondary/20' : 'bg-primary/20'} rounded-full blur-3xl transition-colors`} />

                      {/* Image for projects */}
                      {item.imageUrl && (
                         <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative group/img">
                            <div className="absolute inset-0 bg-[#050505]/40 group-hover/img:bg-transparent transition-colors z-10" />
                            <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-700" />
                            {item.link && (
                              <a href={item.link} className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-colors border border-white/10">
                                <GithubIcon className="size-5" />
                              </a>
                            )}
                         </div>
                      )}

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 relative z-10">
                        <div>
                          <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                            {item.duration}
                          </div>
                          <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-secondary transition-colors">
                            {item.title}
                          </h4>
                          <p className={`text-lg font-medium ${item.type === 'experience' ? 'text-secondary' : 'text-primary'}`}>
                            {item.entity}
                          </p>
                        </div>
                        {item.logoText && (
                           <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-lg font-bold text-white shadow-lg">
                             {item.logoText}
                           </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 leading-relaxed mb-6 relative z-10">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 relative z-10">
                        {item.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 text-xs font-medium text-slate-300 border border-white/5">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}