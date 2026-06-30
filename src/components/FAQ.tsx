import React from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: "Why should I hire a Digital Marketing Agency Ahmedabad?",
    a: "Hiring a specialized Digital Marketing Agency Ahmedabad like AloraPixel ensures you have local expertise combined with global standards. We understand the specific market dynamics of Ahmedabad and Gujarat, allowing us to tailor strategies that resonate with local customers while using advanced tools for SEO, Social Media, and Branding to grow your business effectively."
  },
  {
    q: "What makes your SEO Services Ahmedabad different?",
    a: "Our SEO Services Ahmedabad go beyond just keywords. We perform deep technical audits, optimize for semantic search, and build high-authority link ecosystems. We focus on 'conversion-first' SEO, meaning we don't just drive traffic; we drive the right customers who are ready to engage with your brand and make a purchase."
  },
  {
    q: "How long does Website Development Ahmedabad take?",
    a: "A typical Website Development Ahmedabad project takes anywhere from 4 to 8 weeks depending on complexity. We focus on performance-first engineering and luxury design. Every site we build is mobile-responsive, SEO-optimized, and designed to provide a seamless user experience that turns visitors into loyal customers."
  },
  {
    q: "Do you offer Google My Business Services?",
    a: "Yes, our Google My Business Services are designed to dominate local search. We optimize your profile, manage reviews, and post regular updates to ensure your business appears in the 'Local 3-Pack'. This is crucial for businesses in Ahmedabad looking to capture high-intent local traffic."
  },
  {
    q: "How can a Branding Agency Ahmedabad help my startup?",
    a: "As a premier Branding Agency Ahmedabad, we help startups build a strong identity from the ground up. This includes logo design, visual language, and brand voice. A professional brand identity builds immediate trust with your audience and differentiates you from competitors in a crowded market."
  },
  {
    q: "What results can I expect from Social Media Agency Ahmedabad services?",
    a: "Our Social Media Agency Ahmedabad services focus on meaningful engagement and brand growth. You can expect increased follower loyalty, higher engagement rates, and a consistent brand presence across platforms like Instagram and LinkedIn. We create content that tells your story and drives measurable actions."
  },
  {
    q: "Can you help with Meta Ads and Google Ads?",
    a: "Absolutely. We specialize in data-driven ad campaigns on Meta (Facebook/Instagram) and Google. We optimize your ad spend by targeting the right demographics, using compelling creative, and continuously testing to ensure the lowest cost per acquisition and highest ROI."
  },
  {
    q: "How do I get started with AloraPixel?",
    a: "The easiest way to start is by booking a 'Free Marketing Audit' through our website. We will review your current digital presence and provide a clear roadmap for growth. Whether you need SEO, Branding, or Website Development, we are ready to help you grow your brand in Ahmedabad and beyond."
  }
];

function FAQItem({ faq, index }: { faq: (typeof FAQS)[0]; index: number; key?: React.Key }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="border-b border-border-subtle overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-[1.1rem] md:text-[1.25rem] font-serif font-medium transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-cream group-hover:text-gold'}`}>
          {faq.q}
        </span>
        <div className={`shrink-0 ml-4 w-8 h-8 rounded-full border border-border-subtle flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-gold border-gold rotate-180' : ''}`}>
          {isOpen ? <Minus className="w-4 h-4 text-bg" /> : <Plus className="w-4 h-4 text-gold" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="pb-8">
              <p className="text-[0.95rem] leading-[1.8] text-cream-muted font-light max-w-[800px]">
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="faq" className="relative z-[1] bg-bg-mid py-24 md:py-32">
      <div ref={ref} className="max-w-[1000px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[0.68rem] font-medium tracking-[0.2em] uppercase text-gold mb-3.5">
            Common Questions
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-cream">
            FAQ&apos;s
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="bg-surface/30 rounded-2xl border border-border-subtle p-2 md:p-4"
        >
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
