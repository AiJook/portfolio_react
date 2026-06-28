import { useState } from "react";
import { Mail, MapPin, Send, Phone, CheckCircle2, X } from "lucide-react";
import { LinkedinSvg } from "./icon/IconSvg";

// Inlined Github SVG
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset(); // Clear the form
        setTimeout(() => setIsSuccess(false), 5000); // Auto-hide after 5s
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <a href="https://github.com/AiJook" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 hover:bg-white/5 transition-all">
                <GithubIcon className="size-5" />
              </a>
              <a href="https://www.linkedin.com/in/sutthikan-butnangkul" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:border-primary/50 hover:bg-white/5 transition-all">
                <LinkedinSvg className="size-5" />
              </a>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border-white/5 relative overflow-hidden">
            
            {/* Success Overlay */}
            <div className={`absolute inset-0 bg-[#050505]/90 backdrop-blur-sm z-20 flex items-center justify-center transition-all duration-500 ${isSuccess ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className="flex flex-col items-center text-center p-6 transform transition-transform duration-500 scale-100">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="size-8 text-green-400" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-slate-400 mb-6">Thank you for reaching out. I will get back to you as soon as possible.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

            <h4 className="text-2xl font-bold text-white mb-8">Send a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <input type="hidden" name="access_key" value="a0c1617f-52cf-4d0e-8eee-660d5d6ab4bc" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Name</label>
                  <input
                    name="name"
                    required
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-slate-700 disabled:opacity-50"
                    placeholder="John Doe"
                    type="text"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Company (Optional)</label>
                  <input
                    name="company"
                    className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-slate-700 disabled:opacity-50"
                    placeholder="Tech Inc."
                    type="text"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                <input
                  name="email"
                  required
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-slate-700 disabled:opacity-50"
                  placeholder="john@example.com"
                  type="email"
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full bg-[#050505] border border-white/10 rounded-xl px-5 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-slate-700 resize-none disabled:opacity-50"
                  placeholder="How can I help you?"
                  rows={5}
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(20,184,166,0.3)] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending... <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /></>
                ) : (
                  <>Send Message <Send className="size-5" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}