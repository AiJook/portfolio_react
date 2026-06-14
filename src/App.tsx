import { useEffect } from "react"

import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Experience } from "./components/Experience"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Header } from "./components/navbar/Header"

export default function App() {
  useEffect(() => {
    // ลอจิกแอนิเมชันค่อย ๆ โผล่ตอนเลื่อนหน้าจอลงมาแบบดั้งเดิมของคุณ
    const observerOptions = { threshold: 0.1 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0")
          entry.target.classList.remove("opacity-0", "translate-y-10")
        }
      })
    }, observerOptions)

    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("transition-all", "duration-1000", "opacity-0", "translate-y-10")
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-background text-on-surface selection:bg-primary/30">
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}