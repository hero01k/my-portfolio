import { motion } from "motion/react";

const logos = [
  { name: "Warden Protocol", path: "/warden.jpg", initial: "WP", twitter: "https://x.com/wardenprotocol" },
  { name: "HyperCroc", path: "/hypercroc.jpg", initial: "HC", twitter: "https://x.com/Hypercroc_xyz" },
  { name: "Perle Labs", path: "/perle.jpg", initial: "PL", twitter: "https://x.com/PerleLabs" },
  { name: "Antix", path: "/antix.jpg", initial: "AX", twitter: "https://x.com/antix_ws" },
  { name: "CaseFun", path: "/casefun.jpg", initial: "CF", twitter: "https://x.com/casefunnet" },
  { name: "OpenLedger", path: "/openledger.jpg", initial: "OL", twitter: "https://x.com/OpenledgerHQ" },
  { name: "Newton", path: "/newton.jpg", initial: "NT", twitter: "https://x.com/newton_xyz" },
];

export function LogoMarquee() {
  return (
    <div className="py-12 bg-crypto-black/50 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] text-center">
          CONTRIBUTION
        </p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: [0, -1800],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-20 items-center"
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <a
              key={index}
              href={logo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group cursor-pointer transition-transform hover:scale-105"
            >
              <div className="w-12 h-12 flex items-center justify-center glass border-crypto-blue/10 group-hover:border-crypto-blue/40 transition-all duration-500 overflow-hidden p-2">
                <img 
                  src={logo.path} 
                  alt={logo.name} 
                  className="w-full h-full object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const initialNode = document.createElement('span');
                      initialNode.className = 'text-crypto-blue font-bold text-xs font-mono';
                      initialNode.innerText = logo.initial;
                      if (!parent.querySelector('span')) {
                        parent.appendChild(initialNode);
                      }
                    }
                  }}
                />
              </div>
              <span className="text-[10px] font-mono font-bold text-white/20 group-hover:text-crypto-blue transition-colors uppercase tracking-widest">
                {logo.name}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
