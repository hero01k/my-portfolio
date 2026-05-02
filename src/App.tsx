import { motion } from "motion/react";
import { Hero } from "./components/Hero";
import { LogoMarquee } from "./components/LogoMarquee";
import { BackgroundEffect } from "./components/BackgroundEffect";
import { Timeline } from "./components/Timeline";
import { Skills } from "./components/Skills";
import { TwitterCarousel } from "./components/TwitterCarousel";
import { ProjectBento } from "./components/ProjectBento";
import { Contact } from "./components/Contact";
import { Menu, X, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Update scroll state for background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 left-0 w-full z-[100] transition-all duration-300 ${
      scrolled ? "py-2 px-8 bg-crypto-black/80 backdrop-blur-xl border-b border-white/5" : "p-8 bg-transparent"
    } flex justify-between items-center`}>
      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-crypto-blue/30 shadow-[0_0_10px_rgba(0,255,0,0.3)]">
            <img src="/profile.jpg" alt="Munem" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <span className="text-[11px] font-mono tracking-[0.4em] text-white uppercase font-black group-hover:text-crypto-blue transition-colors">0xMunem_Bro</span>
      </div>
      
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-10 items-center">
        {["Timeline", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs font-mono uppercase tracking-[0.4em] font-bold text-white hover:text-crypto-blue transition-all relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-crypto-blue group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#00ff00]"></span>
          </a>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-white/50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 bg-crypto-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 z-40 p-12"
        >
          <button className="absolute top-8 right-8 text-white/40" onClick={() => setIsOpen(false)}>
            <X size={32} />
          </button>
          {["Timeline", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="font-display text-5xl font-black uppercase tracking-tighter text-white hover:text-crypto-blue transition-all"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

export default function App() {
  return (
    <div className="relative bg-crypto-black min-h-screen text-white font-sans selection:bg-crypto-blue/30 overflow-x-clip">
      <BackgroundEffect />
      <Navbar />
      
      <main className="relative z-10 p-4 md:p-8">
        <Hero />
        <LogoMarquee />
        
        <div className="max-w-7xl mx-auto space-y-32">
          <Timeline />
          <Skills />
          <TwitterCarousel />
          <ProjectBento />
          <Contact />
        </div>
      </main>

      <footer className="py-12 mt-12 mb-8">
      </footer>
    </div>
  );
}
