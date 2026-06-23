import { FileText } from "lucide-react";
import { Item, ItemContent, ItemDescription, ItemTitle } from "./ui/item";

// จำลองข้อมูลโปรเจกต์ตามภาพถ่ายของคุณ
const projectData = [
  {
    title: "Distributed Product Management System",
    description: "Distributed architecture with product, stock, order, and auth modules.",
    tags: [".NET", "Next.js", "SQL Server", "RabbitMQ", "CQRS"],
    githubUrl: "#",
    caseStudyUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80", // เปลี่ยนเป็นพาธรูปภาพจริงของคุณในโฟลเดอร์ assets ได้เลย
    isDeveloping: false,
  },
  {
    title: "Smart Expense & Finance Tracker",
    description: "Track daily expenses, budgets, reports, and financial summaries.",
    tags: [".NET API", "Next.js", "EF Core", "Charts"],
    githubUrl: "#",
    caseStudyUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
    isDeveloping: true, // ใส่สถานะ "กำลังพัฒนา"
  },
  {
    title: "Mini CRM System",
    description: "Manage customer profiles, follow-ups, sales opportunities, and reports.",
    tags: ["CRM", "TypeScript", "SQL Server", "JWT"],
    githubUrl: "#",
    caseStudyUrl: "#",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&q=80",
    isDeveloping: true,
  },
];

export function Projects() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* หัวข้อ Section */}
      <h2 className="text-2xl font-bold tracking-tight text-slate-100 mb-8">
        Projects
      </h2>

      {/* Grid ควบคุมการแสดงผลการ์ดโปรเจกต์ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <Item
            key={index}
            variant="outline"
            className="group flex flex-col overflow-hidden bg-slate-950/40 border-slate-900 rounded-2xl backdrop-blur-sm hover:border-slate-800 transition-all duration-300"
          >
            {/* โซนรูปภาพด้านบนการ์ด */}
            <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-900 bg-slate-900/50">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />

              {/* ป้ายกำกับ "กำลังพัฒนา" สีเหลืองทองมุมขวาบน */}
              {project.isDeveloping && (
                <span className="absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 backdrop-blur-md">
                  กำลังพัฒนา
                </span>
              )}
            </div>

            {/* โซนเนื้อหาข้อมูลโปรเจกต์ */}
            <ItemContent className="flex flex-col flex-1 p-6 space-y-4">
              <div className="space-y-2 flex-1">
                <ItemTitle className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors line-clamp-1">
                  {project.title}
                </ItemTitle>
                <ItemDescription className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </ItemDescription>
              </div>

              {/* รายการแท็กเทคโนโลยี (เรียงแนวนอนแบบพันรอบเมื่อพื้นที่ไม่พอ) */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900 text-slate-400 border border-slate-800/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ปุ่ม Action ลิงก์ไปภายนอกที่ท้ายการ์ด */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-900/60 text-sm">
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-medium"
                >

                  View GitHub
                </a>
                <a
                  href={project.caseStudyUrl}
                  className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-medium"
                >
                  <FileText className="size-4" />
                  Case Study
                </a>
              </div>
            </ItemContent>
          </Item>
        ))}
      </div>
    </section>
  );
}