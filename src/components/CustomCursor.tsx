import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const CustomCursor: React.FC = () => {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);

  // Mouse position motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring physics for outer ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable custom cursor for precise pointer devices (mouse/trackpad, not touchscreens)
    const pointerQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(pointerQuery.matches);

    const handlePointerChange = (e: MediaQueryListEvent) => {
      setIsFinePointer(e.matches);
    };

    pointerQuery.addEventListener('change', handlePointerChange);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Detect hoverable / clickable interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('input') !== null ||
        target.closest('textarea') !== null ||
        target.closest('select') !== null ||
        target.closest('[role="button"]') !== null ||
        target.classList.contains('cursor-pointer');

      setIsHovered(isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      pointerQuery.removeEventListener('change', handlePointerChange);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isFinePointer) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden" aria-hidden="true">
      {/* Outer Glowing Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 48 : isClicking ? 26 : 34,
          height: isHovered ? 48 : isClicking ? 26 : 34,
          opacity: isVisible ? (isHovered ? 0.9 : 0.65) : 0,
          borderColor: isHovered
            ? isDark ? '#00f0ff' : '#0284c7'
            : isDark ? 'rgba(56, 189, 248, 0.45)' : 'rgba(2, 132, 199, 0.45)',
          backgroundColor: isHovered
            ? isDark ? 'rgba(0, 240, 255, 0.12)' : 'rgba(2, 132, 199, 0.12)'
            : 'rgba(0, 0, 0, 0)',
          boxShadow: isHovered
            ? isDark
              ? '0 0 20px rgba(0, 240, 255, 0.35)'
              : '0 0 15px rgba(2, 132, 199, 0.25)'
            : 'none',
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
      >
        <div className="w-full h-full rounded-full border border-inherit" />
      </motion.div>

      {/* Inner Fast Snappy Neon Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isClicking ? 3 : isHovered ? 6 : 4,
          height: isClicking ? 3 : isHovered ? 6 : 4,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isDark ? '#00f0ff' : '#0284c7',
          boxShadow: isDark
            ? '0 0 10px #00f0ff, 0 0 20px rgba(0, 240, 255, 0.6)'
            : '0 0 8px #0284c7',
        }}
        transition={{
          duration: 0.1,
          ease: 'easeOut',
        }}
      />
    </div>
  );
};
