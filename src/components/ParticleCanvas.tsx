import { useEffect, useRef } from 'react';

class Particle {
  x: number = 0;
  y: number = 0;
  vx: number = 0;
  vy: number = 0;
  r: number = 0;
  a: number = 0;
  life: number = 0;
  max: number = 0;
  width: number = 0;
  height: number = 0;

  constructor(width: number, height: number, rand: boolean) {
    this.width = width;
    this.height = height;
    this.init(rand);
  }

  init(rand: boolean) {
    this.x = Math.random() * this.width;
    this.y = rand ? Math.random() * this.height : this.height + 6;
    // Slower, lazier movement for stardust feel
    this.vx = (Math.random() - 0.5) * 0.1;
    this.vy = -(Math.random() * 0.1 + 0.05);
    this.r = Math.random() * 1.5 + 0.5;
    this.a = Math.random() * 0.5 + 0.1;
    this.life = 0;
    this.max = Math.random() * 400 + 200;
  }

  tick(pmx: number, pmy: number) {
    const dx = pmx - this.x;
    const dy = pmy - this.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    // Subtle reaction to mouse
    if (d < 200) {
      this.vx += (dx / d) * 0.005;
      this.vy += (dy / d) * 0.005;
    }
    this.vx *= 0.99;
    this.vy *= 0.99;
    this.x += this.vx;
    this.y += this.vy;
    this.life++;

    // Add slow breathing effect to radius
    this.r = this.r + Math.sin(this.life * 0.05) * 0.02;

    if (this.y < -10 || this.life > this.max || this.x < -10 || this.x > this.width + 10) {
      this.init(false);
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const lr = this.life / this.max;
    const fade = lr < 0.1 ? lr / 0.1 : lr > 0.8 ? (1 - lr) / 0.2 : 1;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(200,150,60,${this.a * fade})`;
    ctx.fill();
  }
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      pointerRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener('resize', handleResize);

    const N = 150; // Increased to approx 150
    const pts: Particle[] = Array.from({ length: N }, () => new Particle(W, H, true));

    const loop = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw faint lines between nearby particles
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245, 240, 232, ${0.1 * (1 - dist / 100)})`; // Faint cream lines
            ctx.lineWidth = 0.5;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      pts.forEach((p) => {
        p.tick(pointerRef.current.x, pointerRef.current.y);
        p.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
