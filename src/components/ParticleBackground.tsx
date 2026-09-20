import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface ShiningStar {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinklePhase: number;
  twinkleSpeed: number;
  twinkleAmp: number;
  vx: number;
  vy: number;
  hasFlare: boolean;
  flareSize: number;
  colorType: 'white' | 'cyan' | 'blue';
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { isDark } = useTheme();

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

    // Number of small shining stars
    const starCount = width < 768 ? 55 : 120;
    const stars: ShiningStar[] = [];

    const colorTypes: ('white' | 'cyan' | 'blue')[] = [
      'white',
      'white',
      'cyan',
      'cyan',
      'blue',
    ];

    for (let i = 0; i < starCount; i++) {
      const hasFlare = Math.random() > 0.72; // ~28% of stars have cross-diffraction flare
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Small and delicate: 0.8px to 1.8px
        radius: Math.random() * 1.0 + 0.75,
        baseAlpha: Math.random() * 0.35 + 0.35,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.055 + 0.025,
        twinkleAmp: Math.random() * 0.35 + 0.25,
        // Noticeably faster, smooth celestial drifting
        vx: (Math.random() - 0.5) * 0.35,
        vy: -Math.random() * 0.55 - 0.25,
        hasFlare,
        flareSize: Math.random() * 3.5 + 2.5,
        colorType: colorTypes[Math.floor(Math.random() * colorTypes.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Subtle position drift
        star.x += star.vx;
        star.y += star.vy;
        star.twinklePhase += star.twinkleSpeed;

        // Wrap around viewport edges
        if (star.y < -10) {
          star.y = height + 10;
          star.x = Math.random() * width;
        }
        if (star.x < -10) star.x = width + 10;
        if (star.x > width + 10) star.x = -10;

        // Compute twinkling alpha
        const rawAlpha = star.baseAlpha + Math.sin(star.twinklePhase) * star.twinkleAmp;
        const currentAlpha = Math.max(0.08, Math.min(0.98, rawAlpha));

        let colorRgb = '255, 255, 255';
        if (star.colorType === 'cyan') {
          colorRgb = '56, 189, 248';
        } else if (star.colorType === 'blue') {
          colorRgb = '129, 140, 248';
        }

        if (!isDark) {
          // In light mode, stars appear as sparkling soft cyan/slate crystals
          colorRgb = star.colorType === 'white' ? '71, 85, 105' : '14, 165, 233';
        }

        // 1. Soft glowing outer halo for shining stars
        if (currentAlpha > 0.45) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${colorRgb}, ${currentAlpha * (isDark ? 0.22 : 0.14)})`;
          ctx.fill();
        }

        // 2. Star Core
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${colorRgb}, ${currentAlpha})`;
        ctx.fill();

        // 3. Delicate 4-point shining sparkle flare
        if (star.hasFlare && currentAlpha > 0.58) {
          const flareProgress = (currentAlpha - 0.58) / 0.4;
          const flareLen = star.flareSize * flareProgress;
          const flareAlpha = currentAlpha * 0.7;

          ctx.strokeStyle = `rgba(${isDark ? '255, 255, 255' : colorRgb}, ${flareAlpha})`;
          ctx.lineWidth = 0.65;

          ctx.beginPath();
          // Horizontal spike
          ctx.moveTo(star.x - flareLen, star.y);
          ctx.lineTo(star.x + flareLen, star.y);
          // Vertical spike
          ctx.moveTo(star.x, star.y - flareLen);
          ctx.lineTo(star.x, star.y + flareLen);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
      aria-hidden="true"
    />
  );
};
