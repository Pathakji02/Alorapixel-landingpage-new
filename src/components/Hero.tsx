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
      <motion.h1
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-[2] font-serif text-[clamp(2.8rem,7.5vw,7.5rem)] font-bold leading-[1.0] tracking-[-0.03em] text-cream"
      >
        Transform Ideas Into<br />
        <span className="text-gold-gradient block">Impactful Digital</span>
        Experiences
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-[2] text-[clamp(0.9rem,1.6vw,1.05rem)] font-light leading-[1.8] text-cream-muted max-w-[520px] mt-7 mx-auto"
      >
        We are a premium creative studio turning clicks into customers.
        Intentional branding, strategic marketing, and growth-focused web design.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
        className="relative z-[2] flex flex-col md:flex-row gap-4 mt-10"
      >
        <Button href="#contact" variant="primary">
          Get Started <ArrowOutward />
        </Button>
        <Button href="#services" variant="ghost">
          View Services
        </Button>
      </motion.div>
    </section>
  );
}
