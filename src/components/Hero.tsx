import {  WavesArrowDown } from "lucide-react";
import { Item, ItemActions, ItemContent, ItemTitle } from "./ui/item";

export function Hero() {
    return (

        <div className="max-w-container-max mx-auto px-md w-full grid md:grid-cols-12 gap-lg items-center">
            <div className=" md:col-span-7 space-y-md items-center justify-center ">
                <div className="text-sm inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-widest">
                    <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
                    Available for Full-Stack Opportunities
                </div>
                <div className="py-4 space-y-lg">
                    <h1 className="scroll-m-20 pb-2 text-3xl text-primary font-semibold tracking-tight first:mt-0">
                        <span className="text-4xl italic inline-block bg-linear-to-r from-[#005F73] via-[#0A9396] to-[#52D8C9] bg-size-[300%_auto] bg-clip-text text-transparent animate-[shimmer_6s_linear_infinite]">Building</span>,{" "}
                        <span className="text-4xl italic inline-block bg-linear-to-r from-[#005F73] via-[#0A9396] to-[#52D8C9] bg-size-[300%_auto] bg-clip-text text-transparent animate-[shimmer_6s_linear_infinite]">learning</span>, and{" "}
                        <span className="text-4xl italic inline-block bg-linear-to-r from-[#005F73] via-[#0A9396] to-[#52D8C9] bg-size-[300%_auto] bg-clip-text text-transparent animate-[shimmer_6s_linear_infinite]">evolving</span> with technology.
                    </h1>
                    <p className="font-body-lg text-muted-foreground text-on-surface-variant max-w-xl">
                        Computer Science graduate with hands-on experience in full-stack development through internship and academic projects. Skilled in Go, Nuxt.js, and Flutter, with experience building RESTful APIs, web applications, and mobile applications. A fast learner who continuously seeks to improve technical and problem-solving skills, and currently looking for an opportunity to grow as a Full-stack Developer while contributing to impactful and scalable systems.          </p>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
                        <Item
                            variant="outline"
                            asChild
                            className="w-auto flex-none rounded-full overflow-hidden"
                        >
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-6xl"
                                style={{
                                    background: "linear-gradient(135deg, #534AB7 0%, #1D9E75 100%)",
                                    animation: "glowPulse 6s ease-in-out infinite",
                                }}
                            >
                                <ItemContent className="gap-0 px-2">
                                    <ItemTitle className="text-white">Download CV</ItemTitle>
                                </ItemContent>
                                <ItemActions>
                                    {/* วงกลมสีขาวครอบไอคอน */}
                                    <span className="flex size-8 items-center justify-center rounded-full bg-white">
                                        <WavesArrowDown className="size-4 text-[#534AB7]" />
                                    </span>
                                </ItemActions>  
                            </a>
                        </Item>
                        <Item
                            variant="outline"
                            asChild
                            className="w-auto flex-none rounded-full overflow-hidden"
                        >
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-6xl"
                                style={{
                                    background: "",
                                    animation: "glowPulse 6s ease-in-out infinite",
                                }}
                            >
                                <ItemContent className="gap-0 px-2">
                                    <ItemTitle className="text-[#534AB7]">My Projects</ItemTitle>
                                    
                                </ItemContent>
                                <ItemActions>
                                    {/* วงกลมสีขาวครอบไอคอน */}
                                    <span className="flex size-8 items-center justify-center rounded-full bg-[#534AB7]">
                                        <WavesArrowDown className="size-4 text-white" />
                                    </span>
                                </ItemActions>
                            </a>
                        </Item>
                        
                    </div>
                </div>
            </div>

            {/* <div className="md:col-span-5 relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden border border-outline-variant/20 glass-card">
                        <img
                            alt="Alex Rivera Portrait"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7oYvxX-myKIMLDUKEyhA7jRQwLDfwGmyDVSuD3mFn6b0TOyXfwYN1BIeTCZqGitx8bw-1Rt25_7ydbAyOpOcdTqvzA9No925oEaCaqrTMydABH8afxaL6eYhwrhRqB2cNOLAgxG-2hl5pbW_wYjVj0SBFw8yU7kQwe-ONdjK_iEFWj-79wxUn0AuJR-9jnMqWq515RsNQOHCfm3-dyYP7iktpwiWLqI8YoUHrdw9KMjJsII6byQH3XFPPnlxj_vnuozgMju_ka4M"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 p-md glass-card rounded-xl border border-primary/20 animate-bounce">
                        <div className="font-label-sm text-label-sm text-primary uppercase">Years Experience</div>
                        <div className="font-display-lg text-headline-md text-on-surface">08+</div>
                    </div>
                </div> */}

        </div>
    )
}