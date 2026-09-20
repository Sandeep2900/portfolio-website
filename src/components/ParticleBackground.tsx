import React, { useEffect, useRef } from 'react';

interface MicroBubble {
  x: number;
  y: number;
  radius: number;
  speed: number;
  wobbleSpeed: number;
  wobbleVal: number;
  wobbleAmp: number;
  baseAlpha: number;
  color: string;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const bubbleCount = width < 768 ? 22 : 48;
    const bubbles: MicroBubble[] = [];

    const colors = [
      'rgba(56, 189, 248, ', // electric blue
      'rgba(6, 182, 212, ', // neon cyan
      'rgba(168, 85, 247, ', // purple
      'rgba(129, 140, 248, ', // indigo
      'rgba(16, 185, 129, ' // emerald
    ];

    for (let i = 0; i < bubbleCount; i++) {
      const baseAlpha = Math.random() * 0.35 + 0.15;
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 4 + 2, // 2px to 6px micro bubbles
        speed: Math.random() * 0.4 + 0.2, // slow upward buoyant rise
        wobbleSpeed: Math.random() * 0.02 + 0.01,
        wobbleVal: Math.random() * Math.PI * 2,
        wobbleAmp: Math.random() * 0.5 + 0.25,
        baseAlpha,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];
        b.y -= b.speed;
        b.wobbleVal += b.wobbleSpeed;
        b.x += Math.sin(b.wobbleVal) * b.wobbleAmp;

        // Wrap around top to bottom
        if (b.y < -20) {
          b.y = height + 20;
          b.x = Math.random() * width;
        }
        if (b.x < -20) b.x = width + 20;
        if (b.x > width + 20) b.x = -20;

        const currentAlpha = b.baseAlpha + Math.sin(b.wobbleVal * 1.5) * 0.1;
        const safeAlpha = Math.max(0.1, Math.min(0.65, currentAlpha));

        // Draw bubble body (translucent sphere)
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${b.color}${safeAlpha * 0.25})`;
        ctx.fill();

        // Draw glowing outer rim
        ctx.lineWidth = 1;
        ctx.strokeStyle = `${b.color}${safeAlpha * 0.8})`;
        ctx.stroke();

        // Draw tiny specular highlight reflection (3D glass bubble look)
        if (b.radius > 2.5) {
          ctx.beginPath();
          ctx.arc(
            b.x - b.radius * 0.3,
            b.y - b.radius * 0.3,
            b.radius * 0.25,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = `rgba(255, 255, 255, ${safeAlpha * 0.85})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      aria-hidden="true"
    />
  );
};
