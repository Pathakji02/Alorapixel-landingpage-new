import { motion } from 'motion/react';
import { ArrowOutward } from './Icons';
import Button from './Button';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 pt-36 pb-20 z-[1] overflow-hidden">
      
      {/* Note: Global background mesh and spotlights are now in GlobalEffects */}

      {/* Rotating Rings */}
      <div className="absolute w-[400px] h-[400px] md:w-[700px] md:h-[700px] border-[0.5px] border-gold/10 rounded-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] pointer-events-none z-[0] animate-[ring-rot_30s_linear_infinite]">
        <div className="absolute -top-[1px] left-[calc(50%-3px)] w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_12px_var(--color-gold),0_0_24px_rgba(200,150,60,0.4)]" />
      </div>
      <div className="absolute w-[280px] h-[280px] md:w-[500px] md:h-[500px] border-[0.5px] border-gold/5 rounded-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] pointer-events-none z-[0] animate-[ring-rot_20s_linear_infinite_reverse]" />
      <style>{`
        @keyframes ring-rot { to { transform: translate(-50%,-50%) rotate(360deg); } }
      `}</style>
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-10 inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-1.5 border-[0.5px] border-border-subtle rounded-full bg-white/5 backdrop-blur-md text-[0.68rem] font-medium tracking-[0.14em] uppercase text-cream-muted mb-8"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-gold animate-[pulse-dot_2.5s_ease-in-out_infinite]" />
        Now Accepting Projects
      </motion.div>
      <style>{`
        @keyframes pulse-dot {
          0%,100% { box-shadow:0 0 0 0 rgba(200,150,60,0.7); }
          50%     { box-shadow:0 0 0 6px rgba(200,150,60,0); }
        }
      `}</style>

      <motion.h1
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-[2] font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.1] tracking-[-0.03em] text-cream"
      >
        Digital Marketing Agency in<br />
        <span className="text-gold-gradient block">Ahmedabad That Grows</span>
        Your Brand.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-[2] text-[clamp(0.9rem,1.6vw,1.05rem)] font-light leading-[1.8] text-cream-muted max-w-[520px] mt-7 mx-auto"
      >
        We are a premium creative studio turning clicks into customers.
        Intentional <a href="#brand" className="text-gold hover:underline">branding</a>,
        strategic <a href="#seo" className="text-gold hover:underline">marketing</a>,
        and growth-focused <a href="#web-dev" className="text-gold hover:underline">web design</a>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-[2] flex flex-col md:flex-row gap-4 mt-10"
      >
        <Button href="/contact" variant="primary">
          Get Your Free Marketing Audit <ArrowOutward />
        </Button>
        <Button href="/services" variant="ghost">
          View Services
        </Button>
        <div className="md:hidden">
          <Button href="/about" variant="ghost" className="w-full">
            About Us
          </Button>
        </div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.15 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
      >
        <span className="text-[0.6rem] tracking-[0.18em] uppercase text-cream-dim">Scroll</span>
        <div className="w-[1px] h-[38px] bg-gradient-to-b from-gold to-transparent animate-[sline_2.2s_ease-in-out_infinite]" />
      </motion.div>
      <style>{`
        @keyframes sline {
          0%,100% { opacity:1; transform:scaleY(1); }
          50%     { opacity:.3; transform:scaleY(.4); }
        }
      `}</style>
    </section>
  );
}
