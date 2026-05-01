import { motion } from "motion/react";
import { Send, Twitter, Linkedin, MessageCircle, Mail } from "lucide-react";

export function Contact() {
  const socials = [
    { name: "Email", handle: "munemhossain497@gmail.com", icon: Mail, url: "mailto:munemhossain497@gmail.com", color: "hover:text-crypto-blue" },
    { name: "Telegram", handle: "@munemvai", icon: Send, url: "https://t.me/munemvai", color: "hover:text-crypto-blue" },
    { name: "Twitter", handle: "@0xmunem_bro", icon: Twitter, url: "https://x.com/0xmunem_bro", color: "hover:text-[#1DA1F2]" },
    { name: "Discord", handle: "@0xmunem_bro", icon: MessageCircle, url: "https://discord.gg/", color: "hover:text-[#5865F2]" },
  ];

  return (
    <section id="contact" className="py-32 px-4 relative border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        <div className="lg:w-1/4 lg:sticky top-20 h-fit">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6"
          >
            CON<span className="text-crypto-blue">TACT</span>
          </motion.h2>
          <p className="text-white/40 text-[11px] font-mono leading-relaxed uppercase tracking-widest border-l border-crypto-blue/30 pl-4">
            SECURE HANDSHAKE: OPEN<br/>
            Munem Hossain is currently evaluating strategic growth partnerships and tier-1 moderate missions.
          </p>
        </div>

        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 10, backgroundColor: "rgba(0, 255, 0, 0.03)" }}
                className={`flex items-center justify-between p-6 glass hover:border-crypto-blue/20 transition-all duration-300 group ${social.color}`}
              >
                <div className="flex items-center gap-4">
                  <social.icon size={18} className="text-white/20 group-hover:text-crypto-blue transition-colors" />
                  <div>
                    <p className="font-bold tracking-widest uppercase text-[10px] text-white/80">{social.name}</p>
                    <p className="text-[10px] font-mono text-white/30 uppercase">{social.handle}</p>
                  </div>
                </div>
                <span className="font-mono text-[8px] opacity-0 group-hover:opacity-100 transition-all tracking-tighter text-crypto-blue">ID.ENCRYPTED</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
