import { useState, useRef, FormEvent } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowOutward } from './Icons';
import { Instagram, Mail } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      
      if (data.success) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="relative z-[1] bg-bg-mid border-t-[0.5px] border-border-subtle">
      <div ref={ref} className="max-w-[1180px] mx-auto px-6 py-20 md:p-28">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 md:gap-24 items-start">
          
          {/* Left Info */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 38 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
              className="inline-block text-[0.68rem] font-medium tracking-[0.2em] uppercase text-gold mb-3.5"
            >
              Start a Project
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 38 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-cream mb-4"
            >
              Let&apos;s Build Something
              <em className="text-gold italic block">Remarkable.</em>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 38 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
              className="text-[0.95rem] leading-[1.85] text-cream-muted max-w-[500px]"
            >
              Have a brief, an idea, or just a feeling? We are ready to listen and turn your vision into results.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 38 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.34, ease: [0.23, 1, 0.32, 1] }}
              className="mt-8 flex flex-col gap-3"
            >
              <a href="mailto:alorapixel1018@gmail.com" className="flex items-center gap-2.5 text-[0.875rem] text-cream-muted tracking-[0.03em] hover:text-gold transition-colors duration-200 w-max">
                <Mail className="w-4 h-4" />
                alorapixel1018@gmail.com
              </a>
              <a href="https://www.instagram.com/alora_pixel/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[0.875rem] text-cream-muted tracking-[0.03em] hover:text-gold transition-colors duration-200 w-max">
                <Instagram className="w-4 h-4" />
                instagram.com/alora_pixel
              </a>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 38 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input type="hidden" name="access_key" value="97414741-77ac-443c-b158-b89af5740a15" />
              <input type="hidden" name="subject" value="New Inquiry — AloraPixel Website" />

              <div className="flex flex-col gap-2">
                <label htmlFor="fname" className="text-[0.66rem] font-medium tracking-[0.16em] uppercase text-cream-dim">Your Name</label>
                <input 
                  type="text" id="fname" name="name" placeholder="Alex Johnson" required autoComplete="name" 
                  className="bg-white/5 border border-border-subtle rounded-lg px-4 py-3.5 font-sans text-[0.875rem] font-light text-cream outline-none transition-all duration-200 focus:border-gold focus:bg-gold/5 focus:ring-4 focus:ring-gold/10 placeholder:text-cream-dim"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="femail" className="text-[0.66rem] font-medium tracking-[0.16em] uppercase text-cream-dim">Email Address</label>
                <input 
                  type="email" id="femail" name="email" placeholder="alex@company.com" required autoComplete="email" 
                  className="bg-white/5 border border-border-subtle rounded-lg px-4 py-3.5 font-sans text-[0.875rem] font-light text-cream outline-none transition-all duration-200 focus:border-gold focus:bg-gold/5 focus:ring-4 focus:ring-gold/10 placeholder:text-cream-dim"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="fphone" className="text-[0.66rem] font-medium tracking-[0.16em] uppercase text-cream-dim">Phone Number (Optional)</label>
                <input
                  type="tel" id="fphone" name="phone" placeholder="+1 (555) 000-0000" autoComplete="tel"
                  className="bg-white/5 border border-border-subtle rounded-lg px-4 py-3.5 font-sans text-[0.875rem] font-light text-cream outline-none transition-all duration-200 focus:border-gold focus:bg-gold/5 focus:ring-4 focus:ring-gold/10 placeholder:text-cream-dim"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="fservice" className="text-[0.66rem] font-medium tracking-[0.16em] uppercase text-cream-dim">Service Required</label>
                <select
                  id="fservice" name="service_requested" required
                  className="bg-white/5 border border-border-subtle rounded-lg px-4 py-3.5 font-sans text-[0.875rem] font-light text-cream outline-none transition-all duration-200 focus:border-gold focus:bg-gold/5 focus:ring-4 focus:ring-gold/10 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-[#1a1510]">Select a Service</option>
                  <option value="Web Development" className="bg-[#1a1510]">Web Development</option>
                  <option value="Brand Design" className="bg-[#1a1510]">Brand Design</option>
                  <option value="Digital Invitations" className="bg-[#1a1510]">Digital Invitations</option>
                  <option value="Content Creation" className="bg-[#1a1510]">Content Creation</option>
                  <option value="Growth Hacking" className="bg-[#1a1510]">Growth Hacking</option>
                  <option value="UI/UX Design" className="bg-[#1a1510]">UI/UX Design</option>
                  <option value="Social Media" className="bg-[#1a1510]">Social Media</option>
                  <option value="SEO Strategies" className="bg-[#1a1510]">SEO Strategies</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="fmsg" className="text-[0.66rem] font-medium tracking-[0.16em] uppercase text-cream-dim">Your Enquiry</label>
                <textarea 
                  id="fmsg" name="message" rows={5} placeholder="Tell us about your project..." required 
                  className="bg-white/5 border border-border-subtle rounded-lg px-4 py-3.5 font-sans text-[0.875rem] font-light text-cream outline-none resize-none transition-all duration-200 focus:border-gold focus:bg-gold/5 focus:ring-4 focus:ring-gold/10 placeholder:text-cream-dim"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="relative overflow-hidden flex items-center justify-center gap-2 px-[2.2rem] py-[0.9rem] font-sans text-[0.9rem] font-medium tracking-[0.03em] rounded-full transition-all duration-200 bg-gold text-[#140C00] hover:bg-gold-bright hover:shadow-[0_0_28px_rgba(230,184,74,0.45)] w-full disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>
                  {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent ✓' : status === 'error' ? 'Try Again' : 'Send Message'}
                </span>
                {status === 'idle' && <ArrowOutward />}
              </button>

              {status === 'success' && (
                <div className="px-4 py-3.5 bg-gold/10 border border-gold/30 rounded-lg text-[0.85rem] text-gold-bright tracking-[0.03em]" role="alert">
                  ✦ Message sent. We will be in touch soon.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
