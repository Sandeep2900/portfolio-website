import React from 'react';
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
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3 tracking-wider">
          <span>// 06 //</span>
          <span className="uppercase font-bold">GET IN TOUCH</span>
        </div>

        {/* Big Impact Title */}
        <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-5 ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Let's Build Something Great.
        </h2>

        {/* Subtitle */}
        <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}>
          Have an innovative product, high-throughput backend requirement, or challenging engineering role? Let's connect and discuss building resilient systems.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me Directly</span>
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm border transition-all ${
              isDark
                ? 'bg-[#080c14] border-white/15 text-slate-200 hover:border-cyan-400/50 hover:text-white'
                : 'bg-white border-slate-300 text-slate-700 hover:border-cyan-500 shadow-sm'
            }`}
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}?subject=Schedule%20a%20Chat`}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm border transition-all ${
              isDark
                ? 'bg-[#080c14] border-white/15 text-slate-200 hover:border-cyan-400/50 hover:text-white'
                : 'bg-white border-slate-300 text-slate-700 hover:border-cyan-500 shadow-sm'
            }`}
          >
            <Calendar className="w-4 h-4 text-cyan-400" />
            <span>Schedule a 15m Chat</span>
          </a>
        </div>

        {/* Status Line */}
        <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Based in Bhopal, India • Open to Remote Worldwide / Relocation Roles</span>
        </div>

      </div>
    </section>
  );
};
