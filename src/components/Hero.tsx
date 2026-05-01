import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="hero" className="relative min-vh-screen flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl z-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-10 group"
        >
          <div className="absolute inset-0 bg-crypto-blue/20 rounded-full blur-2xl group-hover:bg-crypto-blue/40 transition-all duration-500" />
          <div className="relative w-full h-full rounded-full border-2 border-crypto-blue/30 overflow-hidden glass p-1">
            <img 
              src="/profile.jpg" 
              alt="Munem Hossain" 
              className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('flex', 'items-center', 'justify-center', 'bg-crypto-black');
                const span = document.createElement('span');
                span.className = 'text-crypto-blue font-black text-2xl';
                span.innerText = '0xM';
                e.currentTarget.parentElement?.appendChild(span);
              }}
            />
          </div>
        </motion.div>

        <h1 className="font-display font-black tracking-tighter leading-[0.9] mb-8 text-white mt-8">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              textShadow: [
                "0 0 0px rgba(0, 255, 0, 0)",
                "0 0 20px rgba(0, 255, 0, 0.5)",
                "0 0 0px rgba(0, 255, 0, 0)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              opacity: { duration: 0.8 },
              y: { duration: 0.8 }
            }}
            className="block text-xl md:text-2xl font-mono text-white mb-10 tracking-[0.3em] font-black relative inline-block cursor-default"
          >
            MUNEM HOSSAIN
          </motion.span>
          <span className="block text-3xl md:text-5xl uppercase tracking-widest">
            Bridging <span className="text-gradient">Projects</span> & <span className="italic text-crypto-blue">Communities</span>
          </span>
        </h1>
        
        <p className="text-white/40 max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-12 font-mono uppercase tracking-tight">
          Your Expert Crypto Partner • Scaling high-performance Web3 ecosystems through aggressive growth hacking and strategic community architecture.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="#broadcast"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 0, 0.3)" }}
            className="px-10 py-5 bg-crypto-blue text-black font-black text-xs uppercase tracking-[0.2em]"
          >
            Proof of Work
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
