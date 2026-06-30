import { ReactNode, useRef, useState, MouseEvent } from 'react';
import { motion } from 'motion/react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'ghost' | 'clear';
}

export default function Button({ children, className = '', onClick, href, variant = 'primary' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement | HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.32, y: middleY * 0.32 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClass = "relative overflow-hidden inline-flex items-center gap-2 font-sans text-sm font-medium tracking-[0.03em] rounded-full transition-all duration-200 hov items-center justify-center";
  let variantClass = "";
  
  if (variant === 'primary') {
    variantClass = "bg-gold text-[#140C00] hover:bg-gold-bright hover:shadow-[0_0_28px_rgba(230,184,74,0.45)] px-[2.2rem] py-[0.9rem]";
  } else if (variant === 'ghost') {
    variantClass = "bg-transparent text-cream border border-cream-dim hover:border-gold hover:text-gold hover:bg-gold/5 px-[2.2rem] py-[0.9rem]";
  } else if (variant === 'clear') {
    variantClass = "bg-gold text-[#140C00] hover:bg-gold-bright hover:shadow-[0_0_22px_rgba(230,184,74,0.4)] px-6 py-2 text-xs font-semibold";
  }

  const combinedClasses = `${baseClass} ${variantClass} ${className}`;

  if (href) {
    return (
      <motion.a
        ref={ref as any}
        href={href}
        className={combinedClasses}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as any}
      onClick={onClick}
      className={combinedClasses}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.button>
  );
}
