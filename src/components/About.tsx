import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="about" className="relative z-[1] bg-bg py-24 md:py-32">
      <div ref={ref} className="max-w-[1180px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-20 items-start">

        {/* Left Column (Header & Intro) */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-cream mb-6"
          >
            Discover Alora Pixel
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="text-[1rem] leading-[1.8] text-cream-muted font-light max-w-[600px]"
          >
            Brands that feel intentional... from identity to execution. Alora Pixel is a newly launched, premium digital marketing agency designed for startups and established businesses that want to dominate their space. We believe that true luxury in design isn't just about how it looks, but how it works. We help brands stand out in crowded markets by blending aesthetic elegance with data-driven strategy.
          </motion.p>
        </div>

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
              To be the premier creative partner for brands that refuse to settle for mediocrity, setting the standard for modern, luxury digital marketing.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
