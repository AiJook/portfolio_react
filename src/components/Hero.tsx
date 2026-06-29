import { useState, useEffect } from "react";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinSvg } from "./icon/IconSvg";


export function Hero() {
    const [downloadCount, setDownloadCount] = useState<number>(0);

    useEffect(() => {
        const count = localStorage.getItem("cv_download_count");
        if (count) {
            setDownloadCount(parseInt(count, 10));
        } else {
            setDownloadCount(55);
            localStorage.setItem("cv_download_count", "55");
        }
    }, []);

    const handleDownload = () => {
        setDownloadCount(prev => {
            const newCount = prev + 1;
            localStorage.setItem("cv_download_count", newCount.toString());
            return newCount;
        });
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium animate-pulse-glow">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for new opportunities
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                            Sutthikan <br />
                            <span className="text-gradient">Butnangkul</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
                            Software Developer
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed">
                            Building scalable web and mobile applications with Go, Nuxt.js, and Flutter. Focused on creating elegant solutions to complex problems.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 pt-4">
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#experience"
                                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]"
                            >
                                View My Work
                                <ArrowRight className="size-4" />
                            </a>
                            <div className="relative group/dl">
                                <a
                                    href="/software_engineer_sutthikan_butnangkul.pdf"
                                    download="Resume_Software_Engineer_Sutthikan_Butnangkul.pdf"
                                    onClick={handleDownload}
                                    className="px-6 py-3 h-full rounded-xl border border-border bg-surface-hover text-foreground font-semibold flex items-center gap-2 hover:bg-surface transition-all hover:-translate-y-1 relative z-10"
                                >
                                    <Download className="size-4" />
                                    Download CV
                                </a>
                                {/* Badge count indicator */}
                                <div className="absolute -top-3 -right-3 px-2 py-0.5 rounded-full bg-secondary text-primary-foreground text-[10px] font-bold shadow-[0_0_10px_rgba(14,165,233,0.5)] border border-border group-hover/dl:scale-110 transition-transform z-20">
                                    {downloadCount}
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 pl-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(14,165,233,1)]" />
                            Downloaded {downloadCount} times
                        </p>
                    </div>

                    <div className="flex items-center gap-4 pt-8 border-t border-border">
                        <a href="https://github.com/AiJook" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-surface-hover hover:bg-primary hover:text-white transition-all text-muted-foreground">
                            <GithubIcon className="size-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/sutthikan-butnangkul" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-surface-hover hover:bg-primary hover:text-white transition-all text-muted-foreground">
                            <LinkedinSvg className="size-5" />
                        </a>
                        <a href="mailto:SutthikanwithB@gmail.com" className="p-3 rounded-full bg-surface-hover hover:bg-primary hover:text-white transition-all text-muted-foreground">
                            <Mail className="size-5" />
                        </a>
                    </div>
                </div>

                {/* Right Content - Abstract Tech Visual */}
                <div className="hidden lg:flex justify-center relative items-center min-h-[500px]">
                    <div className="relative w-full aspect-square max-w-[450px] flex items-center justify-center">

                        {/* Radar Sweep Effect */}
                        <div className="absolute inset-0 rounded-full border border-primary/20 overflow-hidden opacity-50">
                            <div className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-tr from-primary/30 to-transparent origin-top-left animate-[spin_3s_linear_infinite]" />
                        </div>

                        {/* Radial Skill Stats (Background SVG) */}
                        <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-60 hover:opacity-100 transition-opacity duration-500" viewBox="0 0 100 100">
                            {/* Coding Logic (85%) */}
                            <circle cx="50" cy="50" r="48" stroke="#14b8a6" strokeWidth="0.5" fill="none" strokeDasharray="301" strokeDashoffset="45" className="animate-[pulse-glow_4s_ease-in-out_infinite]" />
                            {/* UI/UX (80%) */}
                            <circle cx="50" cy="50" r="40" stroke="#0ea5e9" strokeWidth="1" fill="none" strokeDasharray="251" strokeDashoffset="50" className="animate-[pulse-glow_5s_ease-in-out_infinite]" />
                            {/* DB & Cloud (75%) */}
                            <circle cx="50" cy="50" r="32" stroke="#8b5cf6" strokeWidth="1.5" fill="none" strokeDasharray="201" strokeDashoffset="50" className="animate-[pulse-glow_6s_ease-in-out_infinite]" />
                        </svg>

                        {/* Orbit 1 (Outer - DevOps / Tools) */}
                        <div className="absolute inset-0 rounded-full border border-secondary/20 animate-[spin_25s_linear_infinite] hover:[animation-play-state:paused]">
                            {/* Docker/Box */}
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-background rounded-full border border-secondary/50 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.5)] animate-[spin_25s_linear_infinite_reverse]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                            </div>
                            {/* Cloud */}
                            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-background rounded-full border border-secondary/50 flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.5)] animate-[spin_25s_linear_infinite_reverse]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
                            </div>
                        </div>

                        {/* Orbit 2 (Middle - Frontend) */}
                        <div className="absolute inset-8 rounded-full border border-primary/30 animate-[spin_15s_linear_infinite_reverse] hover:[animation-play-state:paused]">
                            {/* Code / React */}
                            <div className="absolute top-1/4 -left-4 w-9 h-9 bg-background rounded-full border border-primary/50 flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.6)] animate-[spin_15s_linear_infinite]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                            </div>
                            {/* Smartphone / Flutter */}
                            <div className="absolute bottom-1/4 -right-4 w-9 h-9 bg-background rounded-full border border-primary/50 flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.6)] animate-[spin_15s_linear_infinite]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>
                            </div>
                        </div>

                        {/* Orbit 3 (Inner - Backend) */}
                        <div className="absolute inset-16 rounded-full border border-purple-500/30 animate-[spin_10s_linear_infinite] hover:[animation-play-state:paused]">
                            {/* Server */}
                            <div className="absolute -top-3 left-1/4 w-8 h-8 bg-background rounded-full border border-purple-500/60 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.7)] animate-[spin_10s_linear_infinite_reverse]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2" /><rect width="20" height="8" x="2" y="14" rx="2" ry="2" /><line x1="6" x2="6.01" y1="6" y2="6" /><line x1="6" x2="6.01" y1="18" y2="18" /></svg>
                            </div>
                            {/* Database */}
                            <div className="absolute -bottom-3 right-1/4 w-8 h-8 bg-background rounded-full border border-purple-500/60 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.7)] animate-[spin_10s_linear_infinite_reverse]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></svg>
                            </div>
                        </div>

                        {/* Center Core - Developer Status Radar */}
                        <div className="absolute z-10 w-44 h-44 rounded-full glass-panel flex flex-col items-center justify-center gap-3 border-primary/40 shadow-[0_0_40px_rgba(20,184,166,0.25)] hover:shadow-[0_0_60px_rgba(20,184,166,0.5)] hover:scale-105 transition-all duration-500 cursor-pointer group bg-background/80 backdrop-blur-2xl">

                            {/* Avatar/Initial with rotating gradient border */}
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary via-purple-500 to-secondary p-[2px] group-hover:rotate-180 transition-transform duration-700">
                                <div className="w-full h-full bg-background rounded-full flex items-center justify-center group-hover:-rotate-180 transition-transform duration-700">
                                    <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SB</span>
                                </div>
                            </div>

                            {/* Status Indicator */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="flex items-center gap-2 bg-surface-hover px-3 py-1 rounded-full border border-border">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,1)]" />
                                    <span className="text-[10px] font-bold text-green-600 dark:text-green-400 tracking-widest uppercase">System Active</span>
                                </div>
                                <span className="text-[10px] text-muted-foreground font-medium tracking-wide">Available for Hire</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}