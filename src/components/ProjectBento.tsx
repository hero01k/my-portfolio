import { motion } from "motion/react";
import { ExternalLink, Database, Globe, Zap, Disc, Send, Cpu } from "lucide-react";

const projects = [
  {
    title: "Warden Protocol",
    role: "Lead Moderator",
    achievement: "SECURED ENVIRONMENT",
    stats: "400K+ Users",
    icon: Database,
    image: "/warden.jpg",
    size: "col-span-2 row-span-2",
    url: "https://x.com/wardenprotocol",
  },
  {
    title: "HyperCroc",
    role: "Moderator",
    achievement: "SYSTEM ACCESS",
    stats: "Yield Strategy",
    icon: Globe,
    image: "/hypercroc.jpg",
    size: "col-span-1 row-span-1",
    url: "https://x.com/Hypercroc_xyz",
  },
  {
    title: "Perle Labs",
    role: "Moderator",
    achievement: "GROWTH HACK",
    stats: "Alpha Early Access",
    icon: Zap,
    image: "/perle.jpg",
    size: "col-span-1 row-span-1",
    url: "https://x.com/PerleLabs",
  },
  {
    title: "OpenLedger",
    role: "Ambassador",
    achievement: "DATA LAYER",
    stats: "Beta Network",
    icon: Database,
    image: "/openledger.jpg",
    size: "col-span-1 row-span-1",
    url: "https://x.com/OpenledgerHQ",
  },
  {
    title: "Newton",
    role: "Moderator",
    achievement: "AI PROTOCOL",
    stats: "Testnet Access",
    icon: Cpu,
    image: "/newton.jpg",
    size: "col-span-1 row-span-1",
    url: "https://x.com/newton_xyz",
  },
];

export function ProjectBento() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/4 lg:sticky top-20 h-fit">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2"
          >
            PRO<span className="text-crypto-blue">JECTS</span>
          </motion.h2>
          <p className="text-crypto-blue font-mono uppercase tracking-widest text-[11px] border-l border-crypto-blue/30 pl-4">VERIFIED SYSTEM LOGS</p>
          
          <div className="mt-12 flex flex-col gap-4 opacity-40 font-mono text-[10px] tracking-widest uppercase">
            <span>MODERATION</span>
            <span>AMBASSADOR</span>
            <span>STRATEGY</span>
          </div>
        </div>

        <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-2 gap-4 auto-rows-[120px] md:auto-rows-[160px]">
          {projects.map((item, index) => {
            const Component = item.url ? "a" : "div";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, rotateX: -2, rotateY: 2 }}
                className={`${item.size} glass p-8 relative group overflow-hidden border-white/5 hover:border-crypto-blue/30 transition-all duration-500 cursor-pointer`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Component 
                  href={item.url} 
                  target={item.url ? "_blank" : undefined}
                  rel={item.url ? "noopener noreferrer" : undefined}
                  className="absolute inset-0 z-20"
                />
                <div className="absolute inset-0 z-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-crypto-black/60 group-hover:bg-crypto-black/20 transition-colors duration-700" />
                </div>
                
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <item.icon size={120} strokeWidth={0.5} />
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black uppercase leading-none tracking-tight">{item.title}</h3>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-[10px] font-mono text-white/40 uppercase mb-1">{item.role}</p>
                      <p className="text-lg font-bold text-white/80">{item.stats}</p>
                    </div>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-crypto-blue" />
                  </div>
                </div>
                
                {/* Scanline effect */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-crypto-blue/5 to-transparent h-[200%] w-full -top-full group-hover:top-full transition-all duration-1000 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
