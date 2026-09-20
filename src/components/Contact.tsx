import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar } from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

export const Contact: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <section id="contact" className="py-24 sm:py-32 relative z-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 text-xs font-mono mb-3 tracking-wider ${
            isDark ? 'text-cyan-400' : 'text-cyan-700 font-semibold'
          }`}
        >
          <span>// 06 //</span>
          <span className="uppercase font-bold">GET IN TOUCH</span>
        </motion.div>

        {/* Impact Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Let's Build Something Great.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          Have an innovative product, high-throughput backend requirement, or challenging engineering role? Let's connect and discuss building resilient systems.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me Directly</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm border transition-all ${
              isDark
                ? 'bg-[#080c14] border-white/15 text-slate-200 hover:border-cyan-400/50 hover:text-white hover:shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                : 'bg-white border-slate-300 text-slate-700 hover:border-cyan-500 shadow-sm'
            }`}
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn Profile</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${personalInfo.email}?subject=Schedule%20a%20Chat`}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm border transition-all ${
              isDark
                ? 'bg-[#080c14] border-white/15 text-slate-200 hover:border-cyan-400/50 hover:text-white hover:shadow-[0_0_15px_rgba(0,240,255,0.1)]'
                : 'bg-white border-slate-300 text-slate-700 hover:border-cyan-500 shadow-sm'
            }`}
          >
            <Calendar className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
            <span>Schedule a 15m Chat</span>
          </motion.a>
        </motion.div>

        {/* Status Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`inline-flex items-center gap-2 text-xs font-mono ${
            isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
          <span>Based in Bhopal, India • Open to Remote Worldwide / Relocation Roles</span>
        </motion.div>

      </div>
    </section>
  );
};
