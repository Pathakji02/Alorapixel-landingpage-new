import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Zap, Cpu } from 'lucide-react';

interface ServiceCard {
  id: string;
  num: string;
  title: string;
  desc: string;
  image: string;
}

const CARDS: ServiceCard[] = [
  {
    id: "web",
    num: "01",
    title: "Web Development",
    desc: "Performance-first, conversion-obsessed. Fast, scalable, and beautifully engineered digital products.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80",
  },
  {
    id: "brand",
    num: "02",
    title: "Brand Design",
    desc: "Identity systems that make an impression before you say a word. Logo, type, visual language.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80",
  },
  {
    id: "digital-marketing",
    num: "03",
    title: "Digital Invitations",
    desc: "Elegant digital invitations with seamless sharing and interactive RSVPs for unforgettable celebrations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
  },
  {
    id: "content-creation",
    num: "04",
    title: "Content Creation",
    desc: "Engaging, high-quality content that tells your brand narrative and resonates deeply with your audience.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
  },
  {
    id: "growth-hacking",
    num: "05",
    title: "Growth Hacking",
    desc: "Rapid, data-backed experimentation across marketing channels to identify the most efficient ways to scale.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
  },
  {
    id: "ui-ux",
    num: "06",
    title: "UI/UX Design",
    desc: "Intuitive, user-centric interfaces that deliver seamless, high-converting digital experiences.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80",
  },
  {
    id: "social-media",
    num: "07",
    title: "Social Media",
    desc: "Strategic content and community management to grow your presence and engage meaningfully with followers.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
  },
  {
    id: "seo",
    num: "08",
    title: "SEO Strategies",
    desc: "Rank where it counts. Technical audits, semantic content architecture, and authoritative link ecosystems.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80",
  }
];

function BentoCard({ card, index }: { key?: string, card: ServiceCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.12, ease: [0.23, 1, 0.32, 1] }}
      className="relative rounded-[14px] overflow-hidden bg-bg-card border-[0.5px] border-border-subtle backdrop-blur-md p-6 lg:p-7 flex flex-col justify-end transition-all duration-400 ease-[--ease-custom] hover:border-border-gold hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_0.5px_rgba(200,150,60,0.12)] group min-h-[260px] md:min-h-0"
      style={{ perspective: 800 }}
      whileHover={{ rotateX: 2, rotateY: -2, y: -4 }}
    >
      <div 
        className="absolute inset-[0] bg-cover bg-center opacity-[0.18] z-[0] transition-all duration-[600ms] ease-[--ease-custom] group-hover:opacity-30 group-hover:scale-[1.06]" 
        style={{ backgroundImage: `url('${card.image}')` }} 
      />
      <div className="absolute inset-[0] z-[1] bg-gradient-to-t from-[#160E00]/95 via-[#160E00]/30 to-transparent" />
      
      <div className="relative z-[2]">
        <div className="font-serif text-xs font-semibold tracking-[0.2em] text-gold flex items-center gap-2 mb-3.5">
          {card.num}
          <span className="block w-[22px] h-px bg-gold/50" />
        </div>
        <h3 className="font-serif text-[1.4rem] tracking-tight font-semibold text-cream leading-[1.2] mb-2.5 break-words">
          {card.title}
        </h3>
        <p className="text-[0.85rem] leading-[1.72] text-cream-muted">
          {card.desc}
        </p>
      </div>
    </motion.article>
  );
}

const FEATURES = [
  { icon: Target, title: "Targeted Strategy", desc: "Data-driven campaigns engineered for your specific audience and growth goals." },
  { icon: Zap, title: "Rapid Execution", desc: "From brief to live — fast. No agency bloat, no endless rounds. Just results." },
  { icon: Cpu, title: "Future-Proof Design", desc: "Built on modern stacks that scale with you as your audience grows." }
];

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });
  const featureRef = useRef(null);
  const featureInView = useInView(featureRef, { once: true, margin: "-10%" });

  return (
    <section id="services" className="relative z-[1] bg-bg min-h-[100dvh] pt-24">
      <div className="max-w-[1180px] mx-auto px-6 py-20 md:p-28">
        
        {/* Header */}
        <div ref={headerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 38 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="inline-block text-[0.68rem] font-medium tracking-[0.2em] uppercase text-gold mb-3.5">
              Our Expertise
            </span>
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-cream">
              Craft. Strategy.<br />Results.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 38 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="text-[0.95rem] leading-[1.85] text-cream-muted max-w-[500px]"
          >
            Three disciplines, one focused team. We do what matters for your growth — with precision and intent.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[280px]">
          {CARDS.map((card, i) => (
            <BentoCard key={card.id} card={card} index={i} />
          ))}
        </div>

        {/* Feature Strip */}
        <div ref={featureRef} className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-5 border-[0.5px] border-border-subtle rounded-xl overflow-hidden">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={featureInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className={`p-8 transition-colors duration-300 hover:bg-gold/5 group ${i !== FEATURES.length - 1 ? 'border-b md:border-b-0 md:border-r border-border-subtle' : ''}`}
            >
              <feat.icon className="w-5 h-5 text-gold mb-3 transition-transform duration-300 ease-[--ease-custom] group-hover:scale-[1.2] group-hover:-rotate-6" />
              <h4 className="font-serif text-[1.1rem] font-semibold text-cream mb-1.5 transition-colors duration-250 group-hover:text-gold">
                {feat.title}
              </h4>
              <p className="text-[0.8rem] leading-[1.65] text-cream-muted">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
