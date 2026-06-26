import { Terminal, Layout, Server, Database, Cloud, Wrench } from "lucide-react";

// ข้อมูล Skills อ้างอิงจาก Resume
const skillCategories = [
    {
        title: "Programming Languages",
        icon: <Terminal className="size-6 text-fuchsia-400" />,
        skills: ["Go", "TypeScript", "Dart", "Java", "PHP", "Python"],
        glow: "hover:shadow-[0_0_30px_rgba(232,121,249,0.15)] hover:border-fuchsia-500/30",
    },
    {
        title: "Frontend Development",
        icon: <Layout className="size-6 text-cyan-400" />,
        skills: ["Flutter", "Nuxt.js", "Angular", "HTML", "CSS", "Tailwind CSS", "Flowbite", "ApexCharts"],
        glow: "hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:border-cyan-500/30",
    },
    {
        title: "Backend Development",
        icon: <Server className="size-6 text-blue-400" />,
        skills: ["Gin", "GORM", "Node.js", "Spring Boot", "RESTful APIs"],
        glow: "hover:shadow-[0_0_30px_rgba(96,165,250,0.15)] hover:border-blue-500/30",
    },
    {
        title: "Database & Caching",
        icon: <Database className="size-6 text-emerald-400" />,
        skills: ["MySQL", "PostgreSQL", "Firebase", "Redis"],
        glow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.15)] hover:border-emerald-500/30",
    },
    {
        title: "DevOps",
        icon: <Cloud className="size-6 text-orange-400" />,
        skills: ["Docker", "Firebase Hosting", "Portainer"],
        glow: "hover:shadow-[0_0_30px_rgba(251,146,60,0.15)] hover:border-orange-500/30",
    },
    {
        title: "Tools & Collab",
        icon: <Wrench className="size-6 text-indigo-400" />,
        skills: ["Git", "Postman", "Figma", "VSCode", "AI Dev"],
        glow: "hover:shadow-[0_0_30px_rgba(129,140,248,0.15)] hover:border-indigo-500/30",
    },
];

export function Skills() {
    return (
        <section className="py-24 relative" id="skills">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 flex items-center justify-center gap-2">
                        <span className="w-8 h-[1px] bg-primary"></span>
                        Technical Arsenal
                        <span className="w-8 h-[1px] bg-primary"></span>
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-white">
                        Tools & Technologies
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className={`glass-panel p-8 rounded-3xl transition-all duration-500 ${category.glow} group`}
                        >
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/5 group-hover:border-white/10 transition-colors">
                                <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                                    {category.icon}
                                </div>
                                <h4 className="text-xl font-bold text-white">
                                    {category.title}
                                </h4>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 text-sm font-medium rounded-xl bg-white/5 text-slate-300 border border-white/5 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}