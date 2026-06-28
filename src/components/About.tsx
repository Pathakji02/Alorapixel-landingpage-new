import React, { useRef, useMemo } from 'react';
import { motion, useInView } from 'motion/react';

const Constellation = React.memo(function Constellation() {
  const stars = useMemo(() => {
    return Array.from({ length: 70 }).map(() => ({
      initialTop: Math.random() * 100 + '%',
      initialLeft: Math.random() * 100 + '%',
      initialScale: Math.random() * 0.8 + 0.8,
      animateTop: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
      animateLeft: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
      opacityValues: [0, Math.random() * 0.7 + 0.5, 0],
      scaleValues: [Math.random() * 0.8 + 0.8, Math.random() * 1.5 + 1.2, Math.random() * 0.8 + 0.8],
      duration: Math.random() * 15 + 15,
      opacityDuration: Math.random() * 3 + 3,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_8px_rgba(200,150,60,0.8)] blur-[0.5px]"
          initial={{
            top: star.initialTop,
            left: star.initialLeft,
            opacity: 0,
            scale: star.initialScale
          }}
          animate={{
            top: star.animateTop,
            left: star.animateLeft,
            opacity: star.opacityValues,
            scale: star.scaleValues
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: 'linear',
            opacity: {
              duration: star.opacityDuration,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
        />
      ))}
    </div>
  );
});

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="about" className="relative w-full z-0 py-24 md:py-32 overflow-hidden bg-bg-mid min-h-[100dvh] pt-28">
      <Constellation />

      <div ref={ref} className="relative z-10 max-w-[1180px] mx-auto px-6 md:px-12 flex flex-col gap-24">

        {/* Block 1: Introduction vs Mission/Vision */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          {/* Left Column (Header & Intro) */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-gold mb-6">
              Discover Alora Pixel
            </h2>

            <p className="text-[1rem] leading-[1.8] text-cream-muted font-light max-w-[600px]">
              Brands that feel intentional... from identity to execution. Alora Pixel is a newly launched, premium digital invitations agency designed for startups and established businesses that want to dominate their space. We believe that true luxury in design isn't just about how it looks, but how it works. We help brands stand out in crowded markets by blending aesthetic elegance with data-driven strategy.
            </p>
          </motion.div>

          {/* Right Column (Mission & Vision) */}
          <div className="flex-1 flex flex-col gap-10 mt-4 md:mt-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <h3 className="text-[0.75rem] font-medium tracking-[0.2em] uppercase text-gold mb-3">Our Mission</h3>
              <p className="text-[0.95rem] leading-[1.7] text-cream-muted font-light">
                To transform ambitious ideas into impactful digital experiences that command attention, foster genuine engagement, and drive measurable conversions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
            >
              <h3 className="text-[0.75rem] font-medium tracking-[0.2em] uppercase text-gold mb-3">Our Vision</h3>
              <p className="text-[0.95rem] leading-[1.7] text-cream-muted font-light">
                To be the premier creative partner for brands that refuse to settle for mediocrity, setting the standard for modern, luxury digital invitations.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Block 2: The Alora Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          <h3 className="text-[2rem] font-serif font-bold text-gold mb-10 text-center">The Alora Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 bg-surface border border-border-subtle rounded-sm transition-all duration-300 ease-out hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(200,150,60,0.12)] hover:bg-white/5"
            >
              <h4 className="text-[1.2rem] font-bold text-cream mb-4">Design</h4>
              <ul className="text-cream-muted space-y-2">
                <li>Brand Identity</li>
                <li>Creative visuals</li>
                <li>Professional presentation</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 bg-surface border border-border-subtle rounded-sm transition-all duration-300 ease-out hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(200,150,60,0.12)] hover:bg-white/5"
            >
              <h4 className="text-[1.2rem] font-bold text-cream mb-4">Engage</h4>
              <ul className="text-cream-muted space-y-2">
                <li>Audience connection</li>
                <li>Social media strategy</li>
                <li>Meaningful interactions</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 bg-surface border border-border-subtle rounded-sm transition-all duration-300 ease-out hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(200,150,60,0.12)] hover:bg-white/5"
            >
              <h4 className="text-[1.2rem] font-bold text-cream mb-4">Convert</h4>
              <ul className="text-cream-muted space-y-2">
                <li>Lead generation</li>
                <li>Business growth</li>
                <li>Marketing performance</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Block 3: The Alora Advantage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.23, 1, 0.32, 1] }}
        >
          <h3 className="text-[2rem] font-serif font-bold text-gold mb-10 text-center">The Alora Advantage</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 bg-surface border border-border-subtle rounded-sm transition-all duration-300 ease-out hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(200,150,60,0.12)] hover:bg-white/5"
            >
              <h4 className="text-[1.2rem] font-bold text-cream mb-3">Strategic Thinking</h4>
              <p className="text-[0.95rem] leading-[1.7] text-cream-muted font-light">
                Every decision is rooted in data and tailored to your specific market position.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 bg-surface border border-border-subtle rounded-sm transition-all duration-300 ease-out hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(200,150,60,0.12)] hover:bg-white/5"
            >
              <h4 className="text-[1.2rem] font-bold text-cream mb-3">Creative Execution</h4>
              <p className="text-[0.95rem] leading-[1.7] text-cream-muted font-light">
                We deliver stunning visuals and copy that command attention and elevate your brand.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 bg-surface border border-border-subtle rounded-sm transition-all duration-300 ease-out hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(200,150,60,0.12)] hover:bg-white/5"
            >
              <h4 className="text-[1.2rem] font-bold text-cream mb-3">Modern Marketing</h4>
              <p className="text-[0.95rem] leading-[1.7] text-cream-muted font-light">
                Leveraging the latest trends, platforms, and technologies to keep you ahead.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 bg-surface border border-border-subtle rounded-sm transition-all duration-300 ease-out hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(200,150,60,0.12)] hover:bg-white/5"
            >
              <h4 className="text-[1.2rem] font-bold text-cream mb-3">Growth-Focused Results</h4>
              <p className="text-[0.95rem] leading-[1.7] text-cream-muted font-light">
                Our ultimate goal is turning engagement into measurable business growth.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
