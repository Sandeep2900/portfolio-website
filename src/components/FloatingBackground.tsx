import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const FloatingBackground: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 transition-colors duration-500" aria-hidden="true">
      {isDark ? (
        <>
          {/* Deep Space Obsidian Base */}
          <div className="absolute inset-0 bg-[#06080d]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#080c16] via-[#06080d] to-[#040609]" />

          {/* Cybernetic Dot & Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15 [mask-image:radial-gradient(ellipse_90%_70%_at_50%_30%,#000_50%,transparent_100%)]" />

          {/* Ambient Glow Orbs */}
          <motion.div
            className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full bg-cyan-500/[0.07] blur-[150px]"
            animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-[35%] right-[10%] w-[550px] h-[550px] rounded-full bg-indigo-500/[0.06] blur-[150px]"
            animate={{ scale: [1.05, 0.95, 1.05], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div
            className="absolute bottom-[20%] left-[25%] w-[700px] h-[500px] rounded-full bg-sky-500/[0.05] blur-[160px]"
            animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          />
        </>
      ) : (
        <>
          {/* Light Theme Atmosphere */}
          <div className="absolute inset-0 bg-[#f8fafc]" />
          <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-slate-50 to-indigo-50/40" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10 [mask-image:radial-gradient(ellipse_90%_70%_at_50%_30%,#000_50%,transparent_100%)]" />

          <motion.div
            className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-sky-200/30 blur-[130px]"
            animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
        </>
      )}
    </div>
  );
};
