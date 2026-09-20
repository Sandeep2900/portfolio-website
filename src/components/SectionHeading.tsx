import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  gradientWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  gradientWord,
  subtitle,
  align = 'center',
}) => {
  const parts = gradientWord ? title.split(gradientWord) : [title];

  return (
    <div
      className={`mb-16 md:mb-20 ${
        align === 'center' ? 'text-center max-w-3xl mx-auto' : 'text-left max-w-2xl'
      }`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-sky-400 bg-sky-950/40 border border-sky-500/20 mb-4 shadow-[0_0_15px_rgba(56,189,248,0.1)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
      >
        {gradientWord ? (
          <>
            {parts[0]}
            <span className="text-gradient-cyan">{gradientWord}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
