import { useEffect, useState } from 'react';
import Button from './Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 45);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px', // triggers when the section is in the middle of the viewport
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
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
          { label: 'Home', href: 'hero' },
          { label: 'About', href: 'about' },
          { label: 'Services', href: 'services' },
          { label: 'Contact', href: 'contact' }
        ].map((item) => {
          const isActive = activeSection === item.href;
          return (
            <li key={item.label}>
              <a
                href={`#${item.href}`}
                className={`text-sm tracking-wide relative transition-all duration-300 hov group ${
                  isActive
                    ? 'text-gold font-medium [text-shadow:0_0_12px_rgba(200,150,60,0.6)]'
                    : 'text-cream-muted hover:text-cream'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ease-[--ease-custom] ${
                    isActive ? 'w-full shadow-[0_0_8px_rgba(200,150,60,0.8)]' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            </li>
          );
        })}
      </ul>

      <Button href="#contact" variant="clear">
        Get Started
      </Button>
    </nav>
  );
}
