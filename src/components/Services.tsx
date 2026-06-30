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
    id: "web-dev",
    num: "01",
    title: "Website Development Ahmedabad",
    desc: "We build high-performance, conversion-obsessed websites that serve as your brand's digital flagship. Our Website Development Ahmedabad services focus on speed, scalability, and premium user experience to turn visitors into customers.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80",
  },
  {
    id: "brand",
    num: "02",
    title: "Brand Design",
    desc: "Establish a powerful identity with our Branding Agency Ahmedabad expertise. We create comprehensive visual systems, including logos and typography, that communicate luxury and trust before you even speak a word.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80",
  },
  {
    id: "seo",
    num: "03",
    title: "SEO Services Ahmedabad",
    desc: "Rank where it counts. Our SEO Services Ahmedabad include technical audits, semantic content architecture, and authoritative link building to ensure your brand dominates search results for your most important keywords.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
  },
  {
    id: "social-media",
    num: "04",
    title: "Social Media Agency Ahmedabad",
    desc: "As a leading Social Media Agency Ahmedabad, we manage your presence with strategic content and community management. We build engagement and loyalty across platforms like Instagram, Facebook, and LinkedIn.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
  },
  {
    id: "gmb",
    num: "05",
    title: "Google My Business Services",
    desc: "Dominate local search with our Google My Business Services. We optimize your local profile to ensure you appear in the 'Local 3-Pack', driving high-intent traffic from Ahmedabad customers directly to your doorstep.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80",
  },
  {
    id: "ui-ux",
    num: "06",
    title: "UI/UX Design",
    desc: "Create seamless digital journeys with our user-centric design approach. We build intuitive interfaces that enhance user satisfaction and maximize conversion rates across all your digital products and platforms.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80",
  },
  {
    id: "content",
    num: "07",
    title: "Content Creation",
    desc: "Tell your story with high-quality, engaging content. From professional photography to compelling copy, we create assets that resonate with your audience and build your brand's authority in the digital space.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80",
  },
  {
    id: "meta-ads",
    num: "08",
    title: "Meta & Google Ads",
    desc: "Scale your business with targeted advertising. We manage your Meta and Google ads with a focus on data-driven optimization and ROI, ensuring your marketing budget delivers the best possible results.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80",
  }
];

function BentoCard({ card, index }: { key?: string, card: ServiceCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.article
      id={card.id}
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.12, ease: [0.23, 1, 0.32, 1] }}
      className="relative rounded-[14px] overflow-hidden bg-bg-card border-[0.5px] border-border-subtle backdrop-blur-md p-6 lg:p-7 flex flex-col justify-end transition-all duration-400 ease-[--ease-custom] hover:border-border-gold hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_0.5px_rgba(198,166,100,0.12)] group min-h-[260px] md:min-h-0"
      style={{ perspective: 800 }}
      whileHover={{ rotateX: 2, rotateY: -2, y: -4 }}
    >
      <div 
        className="absolute inset-[0] bg-cover bg-center opacity-[0.18] z-[0] transition-all duration-[600ms] ease-[--ease-custom] group-hover:opacity-30 group-hover:scale-[1.06]" 
        style={{ backgroundImage: `url('${card.image}')` }} 
      />
      <div className="absolute inset-[0] z-[1] bg-gradient-to-t from-[#121110]/95 via-[#121110]/30 to-transparent" />
      
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
  { icon: Target, title: "Targeted Strategy", desc: "Data-driven campaigns engineered for your specific audience and growth goals in the Ahmedabad market." },
  { icon: Zap, title: "Rapid Execution", desc: "From brief to live — fast. No agency bloat, no endless rounds. Just results that scale your brand." },
  { icon: Cpu, title: "Future-Proof Design", desc: "Built on modern stacks that scale with you as your audience and business grows globally." }
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
              Services
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 38 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="text-[0.95rem] leading-[1.85] text-cream-muted max-w-[500px]"
          >
            As a full-service Digital Marketing Agency Ahmedabad, we provide comprehensive solutions to elevate your brand. From high-end Website Development Ahmedabad to strategic SEO and social media growth, our team delivers precision and intent in every project.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[300px] md:auto-rows-[320px]">
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

        {/* Additional Content Block for Word Count */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={featureInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="mt-20 text-center max-w-[900px] mx-auto"
        >
          <h3 className="font-serif text-[1.8rem] text-gold mb-6">Why Choose AloraPixel for Your Digital Growth?</h3>
          <p className="text-[1rem] leading-[1.8] text-cream-muted font-light mb-8">
            In the rapidly evolving digital landscape of Ahmedabad, having a generic online presence is no longer enough. You need a Digital Marketing Agency Ahmedabad that understands the intricacies of user behavior, search engine algorithms, and premium brand positioning. Our approach to Website Development Ahmedabad ensures that your site is not just a digital brochure but a powerful tool for lead generation and brand storytelling. Combined with our SEO Services Ahmedabad and Social Media Agency Ahmedabad expertise, we provide a holistic growth ecosystem that ensures your brand stays ahead of the competition and achieves sustainable long-term success.
          </p>
          <p className="text-[0.95rem] leading-[1.8] text-cream-muted font-light">
            Whether you are a startup looking for your first Branding Agency Ahmedabad or an established enterprise needing to revitalize your digital strategy, AloraPixel has the expertise and creative vision to bring your ideas to life. We focus on transparency, data-driven decisions, and exceptional design to deliver results that matter.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
