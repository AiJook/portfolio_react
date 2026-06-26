import { ArrowRight } from "lucide-react";
import { IconSvgGitHub } from "./icon/IconSvg";

const projectData = [
  {
    title: "Lost & Found (Senior Project)",
    category: "Mobile Application",
    description: "Mobile application for posting lost and found items. Features SIFT-based visual search, ownership verification, private chat, and auto-notifications.",
    tags: ["Flutter", "Golang", "Firebase", "MySQL", "Visual Search"],
    githubUrl: "#",
    caseStudyUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Smart Blood Bank",
    category: "Web Application",
    description: "Platform for managing blood donation processes in hospitals. Built frontend functionality and designed responsive web interfaces using Figma.",
    tags: ["Flutter", "Figma", "Retrofit", "Authentication"],
    githubUrl: "#",
    caseStudyUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "PaJook Delivery",
    category: "Mobile Application",
    description: "On-demand rider booking app to handle item pickup and delivery. Implemented real-time location tracking for senders, recipients, and riders.",
    tags: ["Flutter", "Firebase", "Realtime Tracking"],
    githubUrl: "#",
    caseStudyUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Anihot",
    category: "Web Application",
    description: "FaceMash-inspired app utilizing the Elo Rating algorithm to calculate and update character rankings based on continuous user votes.",
    tags: ["Angular", "Node.js", "MySQL", "Elo Rating"],
    githubUrl: "#",
    caseStudyUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
  },
];

export function Projects() {
  return (
    <section className="py-24 relative" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-primary"></span>
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white">
              Featured Work
            </h3>
          </div>
          <a href="https://github.com/sutthikan-butnangkul" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium">
            View all on GitHub <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden glass-panel border-white/5 hover:border-primary/30 transition-all duration-500"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-60 group-hover:opacity-100"
                />

                {/* Top Tags */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-bold text-white tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content area */}
              <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-3xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-300 text-sm md:text-base line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium text-slate-400 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <a href={project.githubUrl} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors backdrop-blur-md">
                      <IconSvgGitHub className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}