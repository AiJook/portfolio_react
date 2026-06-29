import { useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";

import img16 from "../assets/LongdoMapStats/16.png";
import img17 from "../assets/LongdoMapStats/17.png";
import img18 from "../assets/LongdoMapStats/18.png";
import img19 from "../assets/LongdoMapStats/19.png";
import img20 from "../assets/LongdoMapStats/20.png";
import img21 from "../assets/LongdoMapStats/21.png";
import img22 from "../assets/LongdoMapStats/22.png";

import laf1 from "../assets/LAF/AuthenPage.png";
import laf2 from "../assets/LAF/CreatePostPage.png";
import laf3 from "../assets/LAF/DetailPostVerPage.png";
import laf4 from "../assets/LAF/HomePage.png";
import laf5 from "../assets/LAF/NotiPage.png";
import laf6 from "../assets/LAF/ProfilePage.png";
import laf7 from "../assets/LAF/SearchPage.png";
import laf8 from "../assets/LAF/QuestionPage.png";

import pajook1 from "../assets/Pdelivery/authen.png";
import pajook2 from "../assets/Pdelivery/designPajook.png";
import pajook3 from "../assets/Pdelivery/maps.png";
import pajook4 from "../assets/Pdelivery/insert.png";
import pajook5 from "../assets/Pdelivery/search.png";
import pajook6 from "../assets/Pdelivery/status.png";

import anihot1 from "../assets/anihot/authen.png";
import anihot2 from "../assets/anihot/designanihot.png";
import anihot3 from "../assets/anihot/home.png";
import anihot4 from "../assets/anihot/rank.png";
import anihot5 from "../assets/anihot/upload.png";
import anihot6 from "../assets/anihot/vote.png";


interface ProjectData {
  type: string;
  title: string;
  entity: string;
  duration: string;
  location?: string;
  description: string;
  tags: string[];
  logoText?: string;
  imageUrl?: string;
  linkFe?: string;
  linkBe?: string;
  gallery?: string[];
  longDescription?: string;
  features?: string[];
}

const timelineData: ProjectData[] = [
  {
    type: "experience",
    title: "Full-stack Developer Intern",
    entity: "Metamedia Technology Co.ltd",
    duration: "Dec 2025 - Mar 2026",
    location: "Sathon Square, Bangkok",
    description: "Worked on the Longdo Map Stats project, a web application for visualizing usage statistics. Developed the Front-end using Nuxt.js and the Back-end using Golang.",
    tags: ["Nuxt.js", "Golang", "RESTful APIs", "Data Visualization", "ApexCharts", "Flowbite", "Redis", "PostgreSQL"],
    logoText: "MM",
    // imageUrl: img16,
    gallery: [
      img16,
      img17,
      img18,
      img19,
      img20,
      img21,
      img22
    ],
    longDescription: "During my internship at Metamedia Technology, I took ownership of the Longdo Map Stats dashboard. This critical internal tool allowed the business team to monitor API usage and user engagement across the Longdo Map platform.",
    features: [
      "Designed and implemented RESTful APIs using Go, Gin, and GORM to support map statistics and analytics.",
      "Built responsive dashboard interfaces with ApexCharts and Flowbite for interactive data visualization.",
      "Optimized data retrieval by implementing Redis caching, improving API response times and reducing database workload.",
      "Integrated data from MySQL and PostgreSQL to provide unified statistical insights for dashboard visualization."
    ]
  },
  {
    type: "project",
    title: "Lost & Found (Senior Project)",
    entity: "Mobile Application",
    duration: "Jan 2025 - Oct 2025",
    description: "Mobile application for posting lost and found items. Features a Visual Search system using the SIFT library to analyze images.",
    tags: ["Flutter", "Golang", "Firebase", "MySQL", "Visual Search", "SIFT", "OpenCV", "RESTful APIs", "Onesignal", "Push Notification", "Hexagonal Architecture", "Authentication", "Chat System", "Firebase Storage"],
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    linkFe: "https://github.com/AiJook/landf_project.git",
    linkBe: "https://github.com/AiJook/landf_backend.git",
    gallery: [
      laf1,
      laf2,
      laf3,
      laf4,
      laf5,
      laf6,
      laf7,
      laf8
    ],
    longDescription: "Lost & Found is a comprehensive mobile solution designed to solve the problem of lost items on campus. The core innovation is its SIFT-based visual search, allowing users to simply take a picture of a found item to instantly match it with reports.",
    features: [
      "Integrated OpenCV with SIFT algorithm for image feature matching.",
      "Real-time private chat system built with Firebase.",
      "Secure ownership verification flow using multi-step validation.",
      "Cross-platform mobile experience engineered with Flutter."
    ]
  },
  {
    type: "project",
    title: "Smart Blood Bank",
    entity: "Web Application",
    duration: "May 2025 - Jul 2025",
    description: "Contributed to the development of a platform for managing blood donation processes in hospitals. Prototyped responsive web interfaces.",
    tags: ["Flutter", "Figma", "Retrofit", "Authentication", "Flutter Web", "RESTful APIs"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
    ],
    longDescription: "A collaborative web application aimed at digitizing and streamlining the blood donation process for local hospitals. I was primarily responsible for transforming Figma designs into fully functional Flutter web components.",
    features: [
      "Contributed to the development of the Smart Blood Bank System, a platform for managing blood donation processes in hospitals.",
      "Responsible for developing frontend functionality for web applications.",
      "Designed and prototyped responsive web interfaces using Figma before implementation."
    ]
  },
  {
    type: "project",
    title: "PaJook Delivery (Mini Project)",
    entity: "Mobile Application",
    duration: "Oct 2024 - Dec 2024",
    description: "Developed an application for on-demand rider booking to handle item pickup and delivery. Implemented real-time location tracking.",
    tags: ["Flutter", "Firebase", "NoSQL", "Realtime Tracking", "mobile Application", "delivery", "Google Maps"],
    imageUrl: pajook2,
    gallery: [
      pajook2,
      pajook1,
      pajook3,
      pajook4,
      pajook5,
      pajook6
    ],
    longDescription: "A fast-paced mini-project mimicking popular delivery apps. The goal was to master real-time database synchronization and map integration.",
    features: [
      "Live GPS tracking on map using Google Maps Flutter plugin.",
      "Real-time state synchronization via Firebase Firestore.",
      "Role-based access control for Riders, Senders, and Recipients."
    ]
  },
  {
    type: "project",
    title: "Anihot (Mini Project)",
    entity: "Web Application",
    duration: "2023",
    description: "Developed a full-stack web application inspired by FaceMash and implemented the Elo Rating algorithm to calculate character rankings.",
    tags: ["Angular", "Node.js", "MySQL", "Elo Rating", "web Application", "RESTful APIs", "faceMash"],
    imageUrl: anihot3,
    gallery: [
      anihot1,
      anihot2,
      anihot3,
      anihot4,
      anihot5,
      anihot6
    ],
    longDescription: "A fun, interactive voting platform for anime characters. Users are presented with two characters and must choose one, which dynamically updates their global Elo rating.",
    features: [
      "Custom implementation of the Elo Rating mathematical model.",
      "Responsive Single Page Application built with Angular.",
      "RESTful API backend handled by Node.js and Express.",
      "Relational data modeling in MySQL."
    ]
  },
];

export function Experience() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project: ProjectData) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.gallery) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery!.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject?.gallery) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.gallery!.length - 1 : prev - 1));
    }
  };

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
          <h3 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
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

                  {/* Card Content - Clickable to open modal */}
                  <div className="w-full pl-12 md:pl-0 md:w-1/2">
                    <div
                      onClick={() => openModal(item)}
                      className="glass-panel p-8 rounded-3xl glass-panel-hover relative overflow-hidden cursor-pointer"
                    >
                      {/* Interactive overlay indicator */}
                      <div className="absolute inset-0 bg-transparent group-hover:bg-surface/5 transition-colors z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
                        <span className="px-6 py-3 rounded-full bg-background/80 text-foreground font-bold border border-border flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          View Details <ArrowRight className="size-4" />
                        </span>
                      </div>

                      {/* Sub-bg glow */}
                      <div className={`absolute -top-24 ${isEven ? '-left-24' : '-right-24'} w-48 h-48 ${item.type === 'experience' ? 'bg-secondary/20' : 'bg-primary/20'} rounded-full blur-3xl transition-colors`} />

                      {/* Image for projects */}
                      {item.imageUrl && (
                        <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative group/img">
                          <div className="absolute inset-0 bg-[#050505]/40 group-hover/img:bg-transparent transition-colors z-10" />
                          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transform group-hover/img:scale-110 transition-transform duration-700" />
                        </div>
                      )}

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 relative z-10">
                        <div>
                          <div className="inline-block px-3 py-1 rounded-full bg-surface-hover border border-border text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                            {item.duration}
                          </div>
                          <h4 className="text-2xl font-bold text-foreground mb-1 group-hover:text-secondary transition-colors">
                            {item.title}
                          </h4>
                          <p className={`text-lg font-medium ${item.type === 'experience' ? 'text-secondary' : 'text-primary'}`}>
                            {item.entity}
                          </p>
                        </div>
                        {item.logoText && (
                          <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-border flex items-center justify-center text-lg font-bold text-white shadow-lg">
                            {item.logoText}
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 relative z-10">
                        {item.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-lg bg-surface-hover text-xs font-medium text-foreground border border-border">
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

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fadeSlideDown">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={closeModal}
          />

          {/* Modal Container */}
          <div className="absolute inset-0 md:inset-auto md:relative w-full h-[100dvh] md:h-auto md:max-w-4xl md:max-h-[90vh] bg-surface md:border md:border-border rounded-none md:rounded-3xl overflow-hidden shadow-none md:shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row">

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <X className="size-5" />
            </button>

            {/* Left: Image Carousel */}
            <div className="w-full h-[35vh] md:h-auto md:w-1/2 relative bg-black shrink-0 group/carousel">
              {selectedProject.gallery && selectedProject.gallery.length > 0 ? (
                <>
                  <div className="w-full h-full relative bg-[#050505] flex items-center justify-center">
                    <img
                      src={selectedProject.gallery[currentImageIndex]}
                      alt={`${selectedProject.title} screenshot`}
                      className="w-full h-full object-contain transition-opacity duration-500"
                    />
                  </div>

                  {/* Carousel Controls */}
                  {selectedProject.gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-primary"
                      >
                        <ChevronLeft className="size-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity hover:bg-primary"
                      >
                        <ChevronRight className="size-5" />
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.gallery.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-primary w-4' : 'bg-white/30'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="w-full h-64 md:h-full flex items-center justify-center bg-slate-900">
                  <span className="text-slate-500">No images available</span>
                </div>
              )}
            </div>

            {/* Right: Deep Details */}
            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 overflow-y-auto flex-1 bg-background pb-12 md:pb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-wider text-primary mb-4">
                {selectedProject.type === 'experience' ? 'Work Experience' : 'Project Highlight'}
              </div>

              <h4 className="text-3xl font-bold text-foreground mb-2">
                {selectedProject.title}
              </h4>
              <p className="text-xl font-medium text-muted-foreground mb-6 pb-6 border-b border-border">
                {selectedProject.entity}
              </p>

              <div className="space-y-6">
                <div>
                  <h5 className="text-sm font-bold tracking-widest text-foreground/50 uppercase mb-3">Overview</h5>
                  <p className="text-foreground/80 leading-relaxed text-sm">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                {selectedProject.features && (
                  <div>
                    <h5 className="text-sm font-bold tracking-widest text-foreground/50 uppercase mb-3">Key Features & Impact</h5>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h5 className="text-sm font-bold tracking-widest text-foreground/50 uppercase mb-3">Tech Stack</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 rounded-lg bg-surface-hover text-xs font-medium text-foreground border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* {selectedProject.linkFe && (
                  <div>
                    <a
                      href={selectedProject.linkFe}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]"
                    >
                      <GithubIcon className="size-5" />
                      Frontend Source Code
                    </a>
                  </div>
                )} */}

                {/* {selectedProject.linkBe && (
                  <div>
                    <a
                      href={selectedProject.linkBe}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]"
                    >
                      <GithubIcon className="size-5" />
                      Backend Source Code
                    </a>
                  </div>
                )} */}
              </div>
            </div>

          </div>
        </div>
        , document.body)}
    </section>
  );
}