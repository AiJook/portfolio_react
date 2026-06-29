import { useState } from "react";
import { Mail, MapPin, Send, Phone, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { GithubIcon, LinkedinSvg } from "./icon/IconSvg";

import profile1 from "../assets/profile/IMG_0237.jpg";
// import profile2 from "../assets/profile/IMG_1894.jpg";
// import profile3 from "../assets/profile/IMG_2591.jpg";
// import profile4 from "../assets/profile/IMG_2603.jpg";
// import profile5 from "../assets/profile/IMG_4751.jpg";
import profile6 from "../assets/profile/IMG_8172.jpg";
import profile7 from "../assets/profile/IMG_4615.jpg";



const PROFILE_IMAGES = [
  profile1,
  profile6,
  profile7
];


export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % PROFILE_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? PROFILE_IMAGES.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const currentX = e.touches[0].clientX;
    const diff = touchStartX - currentX;

    if (diff > 50) {
      nextImage();
      setTouchStartX(null);
    } else if (diff < -50) {
      prevImage();
      setTouchStartX(null);
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
  };

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
    <section className="py-24 relative overflow-hidden" id="contact">
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
              <h3 className="text-3xl md:text-6xl font-heading font-bold text-foreground mb-6">
                Let's build <br />
                <span className="text-gradient">something great.</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Open for consulting, permanent roles, or just technical discussions over coffee. I am always looking for new opportunities to push boundaries.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:SutthikanwithB@gmail.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail className="size-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Email Me</div>
                  <div className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">SutthikanwithB@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone className="size-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Phone</div>
                  <div className="text-xl font-medium text-foreground">065-362-9420</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Location</div>
                  <div className="text-xl font-medium text-foreground">Bangkok, Thailand</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-12 mt-12 border-t border-border">
              <a href="https://github.com/AiJook" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-all">
                <GithubIcon className="size-5" />
              </a>
              <a href="https://www.linkedin.com/in/sutthikan-butnangkul" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary transition-all">
                <LinkedinSvg className="size-5" />
              </a>
            </div>
          </div>

          {/* Right Side: Form & Profile Slider */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl border-border relative overflow-hidden flex flex-col gap-8">

            {/* Success Overlay */}
            <div className={`absolute inset-0 bg-background/90 backdrop-blur-sm z-30 flex items-center justify-center transition-all duration-500 ${isSuccess ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <div className="flex flex-col items-center text-center p-6 transform transition-transform duration-500 scale-100">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="size-8 text-green-400" />
                </div>
                <h4 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h4>
                <p className="text-muted-foreground mb-6">Thank you for reaching out. I will get back to you as soon as possible.</p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-2 rounded-full border border-border text-foreground hover:bg-surface-hover transition-colors"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Profile Slider */}
            <div 
              className="w-full h-48 md:h-64 rounded-2xl overflow-hidden relative group/slider shrink-0 border border-border shadow-inner bg-surface"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={PROFILE_IMAGES[currentImageIndex] || profile1}
                alt="Profile"
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              {/* Overlay Gradient for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

              {/* Controls */}
              <button
                onClick={prevImage}
                type="button"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md border border-border text-foreground flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-primary hover:text-white shadow-lg z-20"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                onClick={nextImage}
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md border border-border text-foreground flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-primary hover:text-white shadow-lg z-20"
              >
                <ChevronRight className="size-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {PROFILE_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 bg-primary' : 'w-2 bg-foreground/30 hover:bg-foreground/50'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-foreground mb-6">Send a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <input type="hidden" name="access_key" value="a0c1617f-52cf-4d0e-8eee-660d5d6ab4bc" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Your Name</label>
                    <input
                      name="name"
                      required
                      className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground disabled:opacity-50"
                      placeholder="John Doe"
                      type="text"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Company (Optional)</label>
                    <input
                      name="company"
                      className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground disabled:opacity-50"
                      placeholder="Tech Inc."
                      type="text"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Email Address</label>
                  <input
                    name="email"
                    required
                    className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground disabled:opacity-50"
                    placeholder="john@example.com"
                    type="email"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    required
                    className="w-full bg-background border border-border rounded-xl px-5 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none disabled:opacity-50"
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
      </div>
    </section>
  )

}