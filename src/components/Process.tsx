import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Search, Lightbulb, PenTool, BarChart, TrendingUp } from 'lucide-react';

const STEPS = [
  {
    icon: Search,
    title: "Discovery & Audit",
    desc: "We begin every partnership with a deep dive into your business. As a leading Digital Marketing Agency Ahmedabad, we perform a comprehensive marketing audit, analyzing your current presence, competitors, and growth opportunities. We identify gaps in your Website Development Ahmedabad strategy and SEO performance to build a solid foundation."
  },
  {
    icon: Lightbulb,
    title: "Strategic Planning",
    desc: "Strategy is where luxury meets data. We craft a bespoke roadmap tailored to your brand's unique goals. Whether it's SEO Services Ahmedabad or a complete branding overhaul, our plans are designed for impact. We define KPIs, target audiences, and the precise channels needed to dominate your market space."
  },
  {
    icon: PenTool,
    title: "Creative Execution",
    desc: "Our creative team brings the strategy to life. From high-converting Website Development Ahmedabad to premium content creation, we ensure every touchpoint reflects your brand's excellence. We focus on intentional design and compelling storytelling that resonates with your audience and builds lasting authority."
  },
  {
    icon: BarChart,
    title: "Optimization & SEO",
    desc: "Launch is just the beginning. We continuously monitor performance, refining our SEO Services Ahmedabad to ensure you stay at the top of search results. Our data-driven approach allows us to optimize Meta ads, Google Business profiles, and website performance in real-time for maximum ROI."
  },
  {
    icon: TrendingUp,
    title: "Scale & Growth",
    desc: "We focus on sustainable growth. By analyzing conversion data and user behavior, we identify the most efficient ways to scale your business. As your partner Digital Marketing Agency Ahmedabad, we help you expand your reach, increase customer loyalty, and achieve measurable business success."
  }
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="process" className="relative z-[1] bg-bg py-24 md:py-32">
      <div ref={ref} className="max-w-[1180px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block text-[0.68rem] font-medium tracking-[0.2em] uppercase text-gold mb-3.5">
            How We Work
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-cream">
            Our Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="relative group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-surface border border-border-subtle flex items-center justify-center mb-6 group-hover:border-gold transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-[1.2rem] font-bold text-cream mb-4">{step.title}</h3>
                <p className="text-[0.9rem] leading-[1.7] text-cream-muted font-light">
                  {step.desc}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-border-subtle" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
