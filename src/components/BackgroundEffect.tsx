import { motion } from "motion/react";
import { Coins, Shield, Users, Zap, Globe, Cpu } from "lucide-react";

const icons = [
  { icon: Coins, color: "text-blue-500", size: 40, top: "10%", left: "10%" },
  { icon: Shield, color: "text-purple-500", size: 30, top: "20%", left: "80%" },
  { icon: Users, color: "text-green-500", size: 50, top: "60%", left: "5%" },
  { icon: Zap, color: "text-yellow-500", size: 35, top: "80%", left: "70%" },
  { icon: Globe, color: "text-cyan-500", size: 45, top: "40%", left: "90%" },
  { icon: Cpu, color: "text-indigo-500", size: 25, top: "70%", left: "40%" },
];

export function BackgroundEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Sleek Grid System */}
      <div className="absolute inset-0 cyber-grid opacity-100" />
      
      {/* Kinetic Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-crypto-blue/10 blur-[120px] rounded-full" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-crypto-purple/10 blur-[120px] rounded-full" 
      />

      <div className="absolute inset-0 bg-linear-to-b from-crypto-black via-transparent to-crypto-black" />
    </div>
  );
}
