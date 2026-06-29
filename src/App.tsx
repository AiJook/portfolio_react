import { useEffect } from "react"

import { Footer } from "./components/Footer"
import { Header } from "./components/navbar/Header"
import { Skills } from "./components/skills"
import { Experience } from "./components/Experience"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { ThemeProvider } from "./context/ThemeContext"
import { AudioPlayer } from "./components/AudioPlayer"

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
    <ThemeProvider>
      <div className="bg-background text-foreground selection:bg-primary/30 min-h-screen">
        <AudioPlayer />
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}