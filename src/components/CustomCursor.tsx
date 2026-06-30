import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';
import { useMousePosition } from '../hooks/useMousePosition';

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  useEffect(() => {
    cursorX.set(x);
    cursorY.set(y);
  }, [x, y, cursorX, cursorY]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.hov')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-gold rounded-full pointer-events-none z-[9999]"
        style={{
          x: x - 5,
          y: y - 5,
        }}
        animate={{
          scale: isClicking ? 0.4 : isHovering ? 0.6 : 1,
          backgroundColor: isHovering ? 'var(--color-gold-bright)' : 'var(--color-gold)',
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border-[1.5px] border-gold opacity-50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
          opacity: isHovering ? 0.9 : 0.5,
          borderColor: isHovering ? 'var(--color-gold-bright)' : 'var(--color-gold)',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
