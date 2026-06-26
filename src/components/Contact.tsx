import { Mail, MapPin, Send, Phone } from "lucide-react";
import { LinkedinSvg } from "./icon/IconSvg";

// Inlined Github SVG
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function Contact() {
  return (
    <section className="py-24 relative" id="contact">
      {/* Decorative gradient blur */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Info */}
          <div>
            <div className="mb-12">
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary"></span>
                Get In Touch
              </h2>
              <h3 className="text-3xl md:text-6xl font-heading font-bold text-white mb-6">
                Let's build <br />
                <span className="text-gradient">something great.</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                Open for consulting, permanent roles, or just technical discussions over coffee. I am always looking for new opportunities to push boundaries.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:SutthikanwithB@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail className="size-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Email Me</div>
                  <div className="text-xl font-medium text-slate-200 group-hover:text-primary transition-colors">SutthikanwithB@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone className="size-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Phone</div>
                  <div className="text-xl font-medium text-slate-200">065-362-9420</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Location</div>
                  <div className="text-xl font-medium text-slate-200">Bangkok, Thailand</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-12 mt-12 border-t border-white/5">
              <a href="https://github.com/sutthikan-butnangkul" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 hover:bg-white/5 transition-all">
                <GithubIcon className="size-5" />
              </a>
              <a href="https://www.linkedin.com/in/sutthikan-butnangkul" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 hover:bg-white/5 transition-all">
                <LinkedinSvg className="size-5" />
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border-white/5">
            <h4 className="text-2xl font-bold text-white mb-8">Send a Message</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Name</label>
                  <input
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-slate-700"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Company</label>
                  <input
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-slate-700"
                    placeholder="Tech Inc."
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                <input
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-slate-700"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                <textarea
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-slate-700 resize-none"
                  placeholder="How can I help you?"
                  rows={5}
                ></textarea>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                Send Message <Send className="size-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}