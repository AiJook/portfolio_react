import { Code2, Layout, Database, Wrench } from "lucide-react";
import { Item, ItemContent, ItemDescription, ItemTitle } from "./ui/item";

// จำลองข้อมูล Skills เพื่อให้โค้ดสะอาดและดูแลง่าย
const skillCategories = [
    {
        title: "Backend",
        icon: <Code2 className="size-5 text-blue-400" />,
        skills: ["C#", "ASP.NET Core", ".NET 8/9", "Web API", "EF Core", "MediatR", "CQRS", "JWT"],
    },
    {
        title: "Frontend",
        icon: <Layout className="size-5 text-cyan-400" />,
        skills: ["Next.js", "React", "TypeScript", "Angular", "HTML", "CSS", "Responsive UI"],
    },
    {
        title: "Database",
        icon: <Database className="size-5 text-emerald-400" />,
        skills: ["SQL Server", "PostgreSQL", "MySQL", "Stored Procedure", "Database Design"],
    },
    {
        title: "Tools & Architecture",
        icon: <Wrench className="size-5 text-indigo-400" />,
        skills: ["Microservices", "RabbitMQ", "Docker", "GitHub", "Swagger", "Postman", "Clean Architecture"],
    },
];

export function Skills() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-12">
            {/* หัวข้อ Section */}
            <h2 className="text-2xl font-bold tracking-tight text-foreground mb-8">
                Skills
            </h2>

            {/* Grid การ์ดแยก 4 คอลัมน์ (ปรับตามขนาดหน้าจออัตโนมัติ) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillCategories.map((category) => (
                    <Item
                        key={category.title}
                        variant="outline"
                        className="p-6 bg-slate-950/40 border-slate-800/60 rounded-2xl backdrop-blur-sm hover:border-slate-700 transition-colors"
                    >
                        <ItemContent className="space-y-4">
                            {/* หัวข้อหมวดหมู่ + ไอคอน */}
                            <div className="flex items-center gap-2">
                                {category.icon}
                                <ItemTitle className="text-lg font-semibold text-slate-100">
                                    {category.title}
                                </ItemTitle>
                            </div>

                            {/* รายการแท็กสกิลย่อยด้านใน */}
                            <ItemDescription className="flex flex-wrap gap-2 pt-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900/80 text-slate-300 border border-slate-800/80 hover:bg-slate-800/50 hover:text-white transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </ItemDescription>
                        </ItemContent>
                    </Item>
                ))}
            </div>
        </section>
    );
}