import { ArrowRight, Download, Mail } from "lucide-react";
import { LinkedinSvg } from "./icon/IconSvg";

const GithubIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

export function Hero() {
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
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                            Sutthikan <br />
                            <span className="text-gradient">Butnangkul</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-slate-400 font-medium">
                            Full-Stack Developer
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
                            Building scalable web and mobile applications with Go, Nuxt.js, and Flutter. Focused on creating elegant solutions to complex problems.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]"
                        >
                            View My Work
                            <ArrowRight className="size-4" />
                        </a>
                        <a
                            href="#"
                            className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-semibold flex items-center gap-2 hover:bg-white/10 transition-all hover:-translate-y-1"
                        >
                            <Download className="size-4" />
                            Download CV
                        </a>
                    </div>

                    <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                        <a href="https://github.com/sutthikan-butnangkul" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-all">
                            <GithubIcon className="size-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/sutthikan-butnangkul" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-all">
                            <LinkedinSvg className="size-5" />
                        </a>
                        <a href="mailto:SutthikanwithB@gmail.com" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-all">
                            <Mail className="size-5" />
                        </a>
                    </div>
                </div>

                {/* Right Content - Abstract Tech Visual */}
                <div className="hidden lg:flex justify-center relative">
                    <div className="relative w-full aspect-square max-w-[500px]">
                        {/* Decorative abstract elements */}
                        <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute inset-8 rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]" />
                        <div className="absolute inset-16 rounded-full border border-primary/10 animate-[spin_10s_linear_infinite]" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 rounded-2xl glass-panel animate-float flex items-center justify-center flex-col gap-4 border-primary/30">
                                <div className="flex gap-4 text-primary">
                                    <span className="material-symbols-outlined text-4xl">code_blocks</span>
                                    <span className="material-symbols-outlined text-4xl">database</span>
                                    <span className="material-symbols-outlined text-4xl">api</span>
                                </div>
                                <div className="text-xl font-bold font-heading tracking-widest text-gradient">FULL-STACK</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}