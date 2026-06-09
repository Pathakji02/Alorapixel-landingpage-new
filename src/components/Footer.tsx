import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t-[0.5px] border-border-gold px-6 py-8 md:px-20 flex flex-col md:flex-row items-center justify-between bg-bg gap-5 md:gap-0">
      <div className="text-[0.78rem] text-cream-dim tracking-[0.03em]">
        © 2026 <span className="font-serif text-[0.95rem] text-gold italic pr-1">AloraPixel</span> — Premium Digital Studio
      </div>

      <nav className="flex items-center gap-7" aria-label="Social media links">
        <a href="https://www.instagram.com/alora_pixel/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[0.73rem] tracking-[0.12em] uppercase text-cream-dim no-underline relative transition-colors duration-200 hover:text-gold group">
          <Instagram className="w-3.5 h-3.5" />
          Instagram
          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 ease-[--ease-custom] group-hover:w-full"></span>
        </a>
        <span className="text-cream-dim text-[0.6rem] pointer-events-none" aria-hidden="true">·</span>
        <a href="#" className="text-[0.73rem] tracking-[0.12em] uppercase text-cream-dim no-underline relative transition-colors duration-200 hover:text-gold group">
          Twitter/X
          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 ease-[--ease-custom] group-hover:w-full"></span>
        </a>
        <span className="text-cream-dim text-[0.6rem] pointer-events-none" aria-hidden="true">·</span>
        <a href="#" className="text-[0.73rem] tracking-[0.12em] uppercase text-cream-dim no-underline relative transition-colors duration-200 hover:text-gold group">
          LinkedIn
          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 ease-[--ease-custom] group-hover:w-full"></span>
        </a>
      </nav>
    </footer>
  );
}
