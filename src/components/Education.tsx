import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Layers, Code, Database, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Education: React.FC = () => {
  const { isDark } = useTheme();

  const philosophies = [
    {
      icon: Layers,
      title: 'Clean Architecture',
      desc: 'Maintainable, modular codebases with strict separation of concerns, single-responsibility services, and low technical debt.',
      accent: '#00f0ff'
    },
    {
      icon: Code,
      title: 'API-First Design',
      desc: 'Predictable, contract-tested endpoints, structured JSON responses, and clean versioning to prevent breaking consumer integrations.',
      accent: '#38bdf8'
    },
    {
      icon: Database,
      title: 'High-Throughput Performance',
      desc: 'ACID compliance, normalized models where needed, efficient caching layers, and background workers to keep user latencies minimal.',
      accent: '#818cf8'
    },
    {
      icon: Sparkles,
      title: 'Continuous Evolution',
      desc: 'Technology is an ongoing journey of refinement. Embracing new paradigms, deep testing, and optimizing code quality.',
      accent: '#a855f7'
    }
  ];

  return (
    <section id="education" className="py-20 sm:py-28 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className={`flex items-center gap-2 text-xs font-mono mb-2 tracking-wider ${
              isDark ? 'text-cyan-400' : 'text-cyan-700 font-semibold'
            }`}>
              <span>// 05 //</span>
              <span className="uppercase font-bold">FOUNDATION</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 ${
                isDark
                  ? 'bg-[#080c14]/95 border-cyan-500/20 hover:border-cyan-400/40 shadow-[0_15px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(0,240,255,0.06)]'
                  : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 shadow-sm ${
                isDark
                  ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                  : 'bg-cyan-50 border-cyan-200 text-cyan-700'
              }`}>
                <GraduationCap className="w-5 h-5" />
              </div>

              <div className={`text-[11px] font-mono font-bold uppercase tracking-wide mb-1 ${
                isDark ? 'text-cyan-400' : 'text-cyan-700'
              }`}>
                DEGREE • B.TECH CSE
              </div>

              <h3 className={`text-xl sm:text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Bachelor of Technology
              </h3>
              <p className={`text-sm font-semibold mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Computer Science &amp; Engineering
              </p>

              {/* Specs */}
              <div className={`space-y-3 font-mono text-xs border-t pt-4 mb-5 ${isDark ? 'border-white/[0.08]' : 'border-slate-200'}`}>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>Institution:</span>
                  <span className={`font-semibold text-right ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    UIT Barkatullah University, Bhopal
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>Graduation Year:</span>
                  <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    2025
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>Cumulative Score:</span>
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                    isDark
                      ? 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 shadow-[0_0_8px_rgba(0,240,255,0.15)]'
                      : 'bg-cyan-50 border border-cyan-300 text-cyan-800 shadow-sm'
                  }`}>
                    8.2 / 10.0 CGPA
                  </span>
                </div>
              </div>

              <p className={`text-xs leading-relaxed mb-5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                <strong className={isDark ? 'text-slate-300' : 'text-slate-800'}>Core Coursework:</strong> Operating Systems, Database Management Systems, Data Structures &amp; Algorithms, Computer Networks, and Object Oriented Programming.
              </p>

              <div className={`flex items-center gap-1.5 text-xs font-mono pt-3 border-t ${
                isDark ? 'text-slate-400 border-white/[0.08]' : 'text-slate-600 border-slate-200'
              }`}>
                <MapPin className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                <span>Bhopal, Madhya Pradesh • Full-Time Regular</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Engineering Philosophy */}
          <div id="philosophy" className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Engineering Philosophy
              </h2>
              <p className={`mt-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Guiding principles for building software that survives production scale.
              </p>
            </motion.div>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {philosophies.map((item, i) => {
                const Icon = item.icon;
                const philAccent = !isDark && item.accent === '#00f0ff' 
                  ? '#0284c7' 
                  : !isDark && item.accent === '#38bdf8'
                  ? '#0369a1'
                  : item.accent;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className={`p-5 rounded-xl border transition-all duration-300 group cursor-default ${
                      isDark
                        ? 'bg-[#080c14]/95 border-white/[0.08] hover:border-cyan-500/40 shadow-md hover:shadow-[0_0_20px_rgba(0,240,255,0.08)]'
                        : 'bg-white border-slate-200 shadow-sm hover:border-cyan-500 hover:shadow-md'
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-lg border flex items-center justify-center mb-3 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.25)]"
                      style={{ backgroundColor: `${philAccent}12`, borderColor: `${philAccent}25`, color: philAccent }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className={`text-sm font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
