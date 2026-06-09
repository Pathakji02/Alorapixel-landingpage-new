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
    this.vx = (Math.random() - 0.5) * 0.25;
    this.vy = -(Math.random() * 0.45 + 0.15);
    this.r = Math.random() * 1.3 + 0.3;
    this.a = Math.random() * 0.4 + 0.08;
    this.life = 0;
    this.max = Math.random() * 280 + 160;
  }

  tick(pmx: number, pmy: number) {
    const dx = pmx - this.x;
    const dy = pmy - this.y;
    const d = Math.sqrt(dx * dx + dy * dy);
    if (d < 200) {
      this.vx += (dx / d) * 0.01;
      this.vy += (dy / d) * 0.01;
    }
    this.vx *= 0.98;
    this.vy *= 0.98;
    this.x += this.vx;
    this.y += this.vy;
    this.life++;
    if (this.y < -10 || this.life > this.max) this.init(false);
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

    const N = 90;
    const pts: Particle[] = Array.from({ length: N }, () => new Particle(W, H, true));

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
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
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
