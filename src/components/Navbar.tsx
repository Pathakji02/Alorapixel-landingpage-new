import { useEffect, useState } from 'react';
import Button from './Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-20 py-5 transition-all duration-400 ease-[--ease-custom] ${
        scrolled ? 'bg-bg/85 backdrop-blur-xl border-b-[0.5px] border-border-subtle' : ''
      }`}
    >
      <a href="#hero" className="font-serif text-2xl font-bold text-gold no-underline tracking-tighter shrink-0 hov">
        AloraPixel
      </a>
      
      <ul className="hidden md:flex gap-10 list-none">
        {[
          { label: 'Home', href: '#hero' },
          { label: 'Services', href: '#services' },
          { label: 'Contact', href: '#contact' }
        ].map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-cream-muted text-sm tracking-wide relative hover:text-cream transition-colors duration-200 hov group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 ease-[--ease-custom] group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      <Button href="#contact" variant="clear">
        Get Started
      </Button>
    </nav>
  );
}
