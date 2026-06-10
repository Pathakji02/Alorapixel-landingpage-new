import { motion } from 'motion/react';

const ITEMS = [
  "Web Development", "Brand Design", "Digital Invitations", "Content Creation",
  "Growth Hacking", "UI/UX Design", "Social Media", "SEO Strategies"
];

export default function MarqueeTicker() {
  // Duplicate for seamless loop
  const displayItems = [...ITEMS, ...ITEMS];

  return (
    <div className="relative z-[2] overflow-hidden border-y-[0.5px] border-border-gold py-[0.9rem] bg-gold/5" aria-hidden="true">
      <motion.div 
        className="flex whitespace-nowrap gap-0 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
      >
        {displayItems.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="font-serif text-base font-normal tracking-[0.12em] uppercase text-gold px-10">
              {item}
            </span>
            <span className="text-cream-dim px-2 text-xl">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
