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
              About
            </h2>

            <p className="text-[1.05rem] leading-[1.8] text-cream-muted font-light max-w-[600px]">
              AloraPixel is a premier Digital Marketing Agency Ahmedabad, born from the vision of transforming how brands interact with the digital world. We don't just provide services; we build legacies. Our team of experts specializes in creating intentional brand identities that resonate deeply with your target audience. As a leading Branding Agency Ahmedabad, we understand that true luxury in design isn't just about aesthetic elegance—it's about functional excellence and data-driven strategy.
            </p>
            <p className="text-[1rem] leading-[1.8] text-cream-muted font-light max-w-[600px] mt-6">
              In a crowded marketplace, standing out requires more than just being present. It requires a strategic partner who understands the nuances of SEO, Social Media, and high-converting Website Development Ahmedabad. We pride ourselves on our ability to blend creativity with technical precision, ensuring that every project we undertake not only looks stunning but also drives measurable business growth and customer engagement.
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
                To transform ambitious ideas into impactful digital experiences that command attention, foster genuine engagement, and drive measurable conversions for businesses in Ahmedabad and across the globe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.23, 1, 0.32, 1] }}
            >
              <h3 className="text-[0.75rem] font-medium tracking-[0.2em] uppercase text-gold mb-3">Our Vision</h3>
              <p className="text-[0.95rem] leading-[1.7] text-cream-muted font-light">
                To be the premier creative partner for brands that refuse to settle for mediocrity, setting the global standard for modern, luxury digital marketing and strategic brand positioning.
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
              className="p-8 bg-surface border border-border-subtle rounded-sm transition-all duration-300 ease-out hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(200,150,60,0.12)] hover:bg-white/5"
            >
              <h4 className="text-[1.3rem] font-bold text-cream mb-4">Design with Intent</h4>
              <p className="text-cream-muted text-[0.9rem] leading-relaxed mb-4">
                We believe every pixel should serve a purpose. Our design philosophy centers on creating visual languages that are not only beautiful but also strategically aligned with your business objectives as a premier Branding Agency Ahmedabad.
              </p>
              <ul className="text-cream-muted space-y-2 text-[0.85rem]">
                <li>• Strategic Brand Identity</li>
                <li>• Creative Visual Systems</li>
                <li>• Professional Presentation Layers</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 bg-surface border border-border-subtle rounded-sm transition-all duration-300 ease-out hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(200,150,60,0.12)] hover:bg-white/5"
            >
              <h4 className="text-[1.3rem] font-bold text-cream mb-4">Engage Authentically</h4>
              <p className="text-cream-muted text-[0.9rem] leading-relaxed mb-4">
                Engagement is the currency of the digital age. We help you build meaningful connections with your audience through data-driven social media strategies and compelling content that resonates with your local and global market.
              </p>
              <ul className="text-cream-muted space-y-2 text-[0.85rem]">
                <li>• Audience Connection Analysis</li>
                <li>• Social Media Strategy & Growth</li>
                <li>• Meaningful Digital Interactions</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 bg-surface border border-border-subtle rounded-sm transition-all duration-300 ease-out hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(200,150,60,0.12)] hover:bg-white/5"
            >
              <h4 className="text-[1.3rem] font-bold text-cream mb-4">Convert Effectively</h4>
              <p className="text-cream-muted text-[0.9rem] leading-relaxed mb-4">
                Our ultimate goal is your growth. We utilize advanced conversion rate optimization (CRO) and SEO Services Ahmedabad to ensure that your digital presence translates into measurable business success and sustainable lead generation.
              </p>
              <ul className="text-cream-muted space-y-2 text-[0.85rem]">
                <li>• High-Quality Lead Generation</li>
                <li>• Scalable Business Growth</li>
                <li>• Performance-Driven Marketing</li>
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
              className="p-8 bg-surface border border-border-subtle rounded-sm transition-all duration-300 ease-out hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(200,150,60,0.12)] hover:bg-white/5"
            >
              <h4 className="text-[1.2rem] font-bold text-cream mb-3">Strategic Thinking</h4>
              <p className="text-[0.95rem] leading-[1.7] text-cream-muted font-light">
                Every decision is rooted in data and tailored to your specific market position. We analyze your competitors and identify unique opportunities for growth in the Ahmedabad market and beyond.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 bg-surface border border-border-subtle rounded-sm transition-all duration-300 ease-out hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(200,150,60,0.12)] hover:bg-white/5"
            >
              <h4 className="text-[1.2rem] font-bold text-cream mb-3">Creative Execution</h4>
              <p className="text-[0.95rem] leading-[1.7] text-cream-muted font-light">
                We deliver stunning visuals and copy that command attention and elevate your brand. Our creative team works tirelessly to ensure your brand stands out with a unique and premium digital voice.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 bg-surface border border-border-subtle rounded-sm transition-all duration-300 ease-out hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(200,150,60,0.12)] hover:bg-white/5"
            >
              <h4 className="text-[1.2rem] font-bold text-cream mb-3">Modern Marketing</h4>
              <p className="text-[0.95rem] leading-[1.7] text-cream-muted font-light">
                Leveraging the latest trends, platforms, and technologies to keep you ahead. From Meta ads to advanced SEO strategies, we use the most effective tools to grow your brand's digital footprint.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-8 bg-surface border border-border-subtle rounded-sm transition-all duration-300 ease-out hover:border-gold/50 hover:shadow-[0_10px_30px_rgba(200,150,60,0.12)] hover:bg-white/5"
            >
              <h4 className="text-[1.2rem] font-bold text-cream mb-3">Growth-Focused Results</h4>
              <p className="text-[0.95rem] leading-[1.7] text-cream-muted font-light">
                Our ultimate goal is turning engagement into measurable business growth. We focus on KPIs that matter—conversions, revenue, and brand authority—ensuring your investment delivers real value.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
