import { motion } from "motion/react";

interface SkillItem {
  title: string;
  level: string;
  desc: string;
  color: string;
  textColor: string;
  border: string;
}

const skills: SkillItem[] = [
  {
    title: "Community Management",
    level: "98%",
    desc: "Psychology-driven member engagement and loyalty structures.",
    color: "bg-crypto-blue",
    textColor: "text-crypto-blue",
    border: "hover:border-crypto-blue/50",
  },
  {
    title: "Content Creation",
    level: "85%",
    desc: "High-impact narrative design and Web3-native content strategy.",
    color: "bg-white",
    textColor: "text-white",
    border: "hover:border-white/50",
  },
  {
    title: "Regional Community Growth",
    level: "92%",
    desc: "Localization and country-specific community management (BD/Asia).",
    color: "bg-crypto-blue",
    textColor: "text-crypto-blue",
    border: "hover:border-crypto-blue/50",
  },
  {
    title: "Moderation Tech",
    level: "95%",
    desc: "Discord/Telegram automation and bot-driven community security.",
    color: "bg-white",
    textColor: "text-white",
    border: "hover:border-white/50",
  },
];

function SkillBar({ skill, index }: { skill: SkillItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`p-6 glass rounded-none border border-white/5 ${skill.border} transition-all duration-500 cursor-default group`}
    >
      <div className="flex justify-between items-center mb-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{skill.title}</span>
        <span className={`text-[10px] font-mono ${skill.textColor}`}>{skill.level}</span>
      </div>
      <div className="w-full h-[1px] bg-white/10 mb-4">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: skill.level }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
          className={`h-full ${skill.color} shadow-[0_0_10px_rgba(0,255,0,0.5)]`} 
        />
      </div>
      <p className="text-[9px] text-white/30 leading-relaxed font-mono uppercase tracking-tighter">
        {skill.desc}
      </p>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-white/[0.01] border-y border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/4 lg:sticky top-20 h-fit">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6"
          >
            SKI<span className="text-crypto-blue">LLS</span>
          </motion.h2>
          <p className="text-[11px] text-white/40 font-mono leading-relaxed uppercase tracking-widest border-l border-crypto-blue/30 pl-4">
            Quantitative analysis of operational competencies in high-growth Web3 environments.
          </p>
        </div>
        
        <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <SkillBar key={skill.title} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
