import { useState } from "react"

const PROJECT_DATA = [
  {
    title: "Nova Finance",
    desc: "Real-time asset tracking platform with advanced risk analytics and automated trading triggers.",
    tags: ["Next.js", "GraphQL", "Redis"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxzhA7xvKU2UT_f-zDqKgcfwWsnTeyA6UQnkHormeyyCw8EaqTjy5X18CTI_zcsb_OYdLehAqArExWCZNCBL5LJkrJtgkXOn9m92DFZo-9pCO8LVnGT2HGrXCbHQ_bvPKIGLw6a_je9o5mCSzqLs2x4lwNDI-E0gp__tgp28IX1vMTSmEmM4ILH4CLLQNNwyX_sw7IaRPutuB1axgxu6qVqcbzcHkAozbsPqacLF5VMGGQI19nIL3mPT8cv1Bi5KR0UXN6kKrlgDM"
  },
  {
    title: "Sentinel Shield",
    desc: "Enterprise-grade security layer for cloud native applications with Zero Trust architecture.",
    tags: ["Go", "Kubernetes", "Terraform"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJCKgAr5zvwcwnm7QcBEm7eTaIGEBeIOwQpQXf1ZyO7u2XA2u060DL0qQCJaHv48JYdM01pyel-iV0-CCd2gUEyoO7xYdu32dEqVnfd6TixiBWItEVtQONmWc111Dauvj-GjrbZjUW3-JqaLi4NlhGX73dm-nJArh9rr_h77I8k1CXr9ICD_iQe0a2aloR5jKqp_Kx8Omgr9BJAlrORjtY9vNnOjun3Ac93SpV9FThOGIXfyM5Axr3nwriauWw4EDNyxtMqwhGaf8"
  },
  {
    title: "Prism Generative",
    desc: "A creative coding sandbox for generating procedural animations using WebGL and Three.js.",
    tags: ["TypeScript", "WebGL", "GLSL"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAa3r2bEkpg4Te3gKeJ32cThAiYfBarTkbxPbzT78gjacbMeOQyq_jrWtIajt1qUHzmtwPeAgKfmDRoIzndXvFs3HELvpSoJFMt9be_VyrrQV5jP9YIh3AswAiVPXb-HSKFDFVCPygD2RO6Xb9DpADb6jw4IWgwdAHInhGPOblFAyyeKqtf-u2DivS-IShMJQp1Fkd8dCLBN-xlhc_8Rd0F-T8AMyhHIcNtX8voBeGYOCvs4c6zEt8bSPkhhAGU14ViD0GyxVvRfs"
  }
]

export function Projects() {
  const [activeTab, setActiveTab] = useState("All Projects")
  const tabs = ["All Projects", "Full-Stack", "Infrastructure", "Experimental"]

  return (
    <section className="py-xl" id="projects">
      <div className="max-w-container-max mx-auto px-md">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-md mb-lg">
          <div className="max-w-xl">
            <h2 className="font-headline-md text-headline-md text-on-surface mb-sm">Selected Work</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">A showcase of technical architecture and product design, ranging from complex fintech dashboards to generative art tools.</p>
          </div>
          
          <div className="flex items-center gap-xs overflow-x-auto pb-xs">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-md py-2 rounded-lg font-label-md text-label-md whitespace-nowrap transition-colors ${
                  activeTab === tab ? "bg-primary text-on-primary font-bold" : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {PROJECT_DATA.map((proj) => (
            <div key={proj.title} className="project-card group glass-card rounded-xl overflow-hidden border border-outline-variant/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              <div className="h-64 overflow-hidden relative">
                <img alt={proj.title} className="project-image w-full h-full object-cover transition-transform duration-700" src={proj.img} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-lg space-y-sm">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">{proj.title}</h3>
                  <a className="text-primary hover:scale-110 transition-transform" href="#" target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined">open_in_new</span>
                  </a>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">{proj.desc}</p>
                <div className="flex flex-wrap gap-xs pt-md">
                  {proj.tags.map((t) => (
                    <span key={t} className="px-sm py-1 bg-primary/5 text-primary rounded-full font-label-sm text-label-sm border border-primary/10">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-lg text-center">
          <button className="bg-transparent border border-outline-variant/30 text-on-surface px-lg py-sm rounded-lg font-label-md text-label-md font-bold hover:border-primary hover:text-primary transition-all active:scale-95 inline-flex items-center gap-xs">
            View All Archives <span className="material-symbols-outlined">history</span>
          </button>
        </div>
      </div>
    </section>
  )
}