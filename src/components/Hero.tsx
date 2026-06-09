import { motion } from 'motion/react';
import { ArrowOutward } from './Icons';
import Button from './Button';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotPosition, setSpotPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setSpotPosition({ x, y });
    };

    const target = heroRef.current;
    if (target) {
      target.addEventListener('mousemove', handleMouseMove);
      target.addEventListener('mouseenter', () => setIsHovering(true));
      target.addEventListener('mouseleave', () => setIsHovering(false));
    }

    return () => {
      if (target) {
        target.removeEventListener('mousemove', handleMouseMove);
        target.removeEventListener('mouseenter', () => setIsHovering(true));
        target.removeEventListener('mouseleave', () => setIsHovering(false));
      }
    };
  }, []);

  return (
    <section ref={heroRef} id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 pt-36 pb-20 z-[1] overflow-hidden">
      
      {/* Background Mesh (Amber Blobs) */}
      <div 
        className="absolute inset-[0] z-[0] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 18% 75%, rgba(180,100,10,0.32) 0%, transparent 60%),
            radial-gradient(ellipse 55% 45% at 82% 22%, rgba(200,140,30,0.22) 0%, transparent 55%),
            radial-gradient(ellipse 40% 35% at 60% 85%, rgba(160,80,5,0.18) 0%, transparent 50%)
          `,
          animation: 'mesh-d 14s ease-in-out infinite alternate'
        }}
      />
      <style>{`
        @keyframes mesh-d {
          0%   { transform: scale(1)    translate(0,0); opacity:.9; }
          50%  { transform: scale(1.1)  translate(2%,-3%); opacity:1; }
          100% { transform: scale(.95)  translate(-1%,2%); opacity:.85; }
        }
      `}</style>

      {/* Spotlight */}
      <div 
        className="absolute inset-[0] z-[0] pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: isHovering 
            ? `radial-gradient(650px circle at ${spotPosition.x}% ${spotPosition.y}%, rgba(200,140,30,.11) 0%, transparent 65%)`
            : `radial-gradient(600px circle at 50% 50%, rgba(200,140,30,.06) 0%, transparent 65%)`
        }}
      />

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
