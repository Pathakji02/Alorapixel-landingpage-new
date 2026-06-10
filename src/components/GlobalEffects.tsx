import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';

export default function GlobalEffects() {
  const [spotPosition, setSpotPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setSpotPosition({ x, y });
      if (!isHovering) setIsHovering(true);
    };

    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave); // when cursor leaves window

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
    };
  }, [isHovering]);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {/* Background Mesh (Amber Blobs) - unified styling */}
      <div
        className="absolute inset-[0] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 18% 75%, rgba(180,100,10,0.32) 0%, transparent 60%),
            radial-gradient(ellipse 55% 45% at 82% 22%, rgba(200,140,30,0.22) 0%, transparent 55%),
            radial-gradient(ellipse 40% 35% at 60% 85%, rgba(160,80,5,0.18) 0%, transparent 50%)
          `,
          animation: 'mesh-d 14s ease-in-out infinite alternate'
        }}
      />
      <style>{`
        @keyframes mesh-d {
          0%   { transform: scale(1)    translate(0,0); opacity:.9; }
          50%  { transform: scale(1.1)  translate(2%,-3%); opacity:1; }
          100% { transform: scale(.95)  translate(-1%,2%); opacity:.85; }
        }
      `}</style>

      {/* Global Depth Spotlight (Breathing) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-gold/3 to-transparent blur-[120px] rounded-full w-[800px] h-[800px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Cursor Spotlight Glow */}
      <div
        className="absolute inset-[0] pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: isHovering
            ? `radial-gradient(650px circle at ${spotPosition.x}% ${spotPosition.y}%, rgba(200,140,30,.11) 0%, transparent 65%)`
            : `radial-gradient(600px circle at 50% 50%, rgba(200,140,30,.06) 0%, transparent 65%)`
        }}
      />

    </div>
  );
}
