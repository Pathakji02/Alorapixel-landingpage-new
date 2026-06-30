import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
      <Link to="/" className="font-serif text-2xl font-bold text-gold no-underline tracking-tighter shrink-0 hov">
        AloraPixel
      </Link>
      
      <ul className="hidden md:flex gap-10 list-none">
        {[
          { label: 'Services', href: '/services' },
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' }
        ].map((item) => {
          return (
            <li key={item.label}>
              <NavLink
                to={item.href}
                className={({ isActive }) => `text-sm tracking-wide relative transition-all duration-300 hov group ${
                  isActive
                    ? 'text-gold font-bold [text-shadow:0_0_15px_rgba(255,215,0,0.9),0_0_30px_rgba(255,215,0,0.6)] drop-shadow-[0_0_10px_rgba(255,215,0,0.8)] scale-110 inline-block'
                    : 'text-cream-muted hover:text-cream hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                }`}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[2px] bg-gold transition-all duration-300 ease-[--ease-custom] ${
                        isActive ? 'w-full shadow-[0_0_12px_rgba(255,215,0,1)]' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <Button href="/contact" variant="clear">
        Get Your Free Marketing Audit
      </Button>
    </nav>
  );
}
