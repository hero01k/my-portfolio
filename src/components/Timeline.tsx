import { motion } from "motion/react";

const events = [
  {
    year: "MODERATOR",
    title: "Eco-System Enforcement",
    role: "Warden Protocol | HyperCroc | Perle Labs",
    description: "Maintaining community integrity and high-speed response across core protocol channels.",
    color: "from-green-500",
  },
  {
    year: "AMBASSADOR",
    title: "Project Representation",
    role: "Antix | MagicNewton | Yappo | CaseFun",
    description: "Strategic advocacy and localized community expansion for top-tier Web3 gaming and DeFi projects.",
    color: "from-green-400",
  },
  {
    year: "2022 - PRES",
    title: "Growth Evolution",
    role: "Independent Growth Hacker",
    description: "Scaling Decentralized Autonomous Organizations and community labs through metric-driven engagement.",
    color: "from-white",
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-24 px-4 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 md:sticky top-20 h-fit">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6"
          >
            TIME<span className="text-crypto-blue">LINE</span>
          </motion.h2>
          <p className="text-[11px] text-white/40 font-mono leading-relaxed uppercase tracking-widest hidden md:block border-l border-crypto-blue/30 pl-4">
            Proven track record in high-stakes protocol moderation and strategic ambassador programs.
          </p>
        </div>
        
        <div className="md:w-2/3 relative border-l border-white/10 pl-10 ml-4 md:ml-0">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="mb-16 relative"
            >
              <div className="absolute left-[-45px] top-1.5 w-2 h-2 bg-crypto-blue rounded-full border-4 border-crypto-black shadow-[0_0_10px_rgba(0,255,0,0.5)]" />
              
              <div className="flex flex-col gap-1 mb-4">
                <span className="font-mono text-[10px] text-crypto-blue uppercase tracking-widest">{event.year}</span>
                <h3 className="text-xl font-bold tracking-tight text-white uppercase">{event.title}</h3>
              </div>
              
              <div className="p-0 transition-all duration-500">
                <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-3">{event.role}</p>
                <p className="text-white/40 text-sm leading-relaxed max-w-lg">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
