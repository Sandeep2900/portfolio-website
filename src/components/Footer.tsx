import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-12 border-t relative z-20 backdrop-blur-md transition-colors ${
        isDark
          ? 'bg-[#04060a] border-white/[0.08] text-slate-400'
          : 'bg-white border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Left: Name and Title */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className={`text-base font-extrabold tracking-tight mb-1 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {personalInfo.name}
            </div>
            <div className="text-xs font-mono text-slate-400">
              Associate Software Engineer • Backend &amp; API Developer
            </div>
          </div>

          {/* Right: Back to top & Copyright */}
          <div className="flex flex-col items-center sm:items-end text-center sm:text-right gap-1.5">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
            <div className="text-[11px] font-mono text-slate-500">
              © {new Date().getFullYear()} {personalInfo.name}. Crafted for high-impact software engineering.
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
