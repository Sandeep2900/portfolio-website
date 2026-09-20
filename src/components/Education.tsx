import React from 'react';
import { GraduationCap, MapPin, Layers, Code, Database, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Education: React.FC = () => {
  const { isDark } = useTheme();

  const philosophies = [
    {
      icon: Layers,
      title: 'Clean Architecture',
      desc: 'Maintainable, modular codebases with strict separation of concerns, single-responsibility services, and low technical debt.'
    },
    {
      icon: Code,
      title: 'API-First Design',
      desc: 'Predictable, contract-tested endpoints, structured JSON responses, and clean versioning to prevent breaking consumer integrations.'
    },
    {
      icon: Database,
      title: 'High-Throughput Performance',
      desc: 'ACID compliance, normalized models where needed, efficient caching layers, and background workers to keep user latencies minimal.'
    },
    {
      icon: Sparkles,
      title: 'Continuous Evolution',
      desc: 'Technology is an ongoing journey of refinement. Embracing new paradigms, deep testing, and optimizing code quality.'
    }
  ];

  return (
    <section id="education" className="py-20 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Education Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tracking-wider">
              <span>// 05 //</span>
              <span className="uppercase font-bold">FOUNDATION</span>
            </div>

            <div className={`p-6 sm:p-7 rounded-2xl border transition-all ${
              isDark
                ? 'bg-[#080c14] border-white/10 shadow-xl'
                : 'bg-white border-slate-200 shadow-md'
            }`}>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>

              <div className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wide mb-1">
                DEGREE • B.TECH CSE
              </div>

              <h3 className={`text-xl sm:text-2xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Bachelor of Technology
              </h3>
              <p className="text-sm font-semibold text-slate-400 mb-5">
                Computer Science &amp; Engineering
              </p>

              {/* Specs Table */}
              <div className="space-y-3 font-mono text-xs border-t border-white/[0.08] pt-4 mb-5">
                <div className="flex justify-between">
                  <span className="text-slate-500">Institution:</span>
                  <span className={`font-semibold text-right ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    UIT Barkatullah University, Bhopal
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Graduation Year:</span>
                  <span className={`font-semibold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    2025
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-500">Cumulative Score:</span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                    8.2 / 10.0 CGPA
                  </span>
                </div>
              </div>

              {/* Coursework note */}
              <p className="text-xs text-slate-400 leading-relaxed mb-5">
                <strong className={isDark ? 'text-slate-300' : 'text-slate-700'}>Core Coursework:</strong> Operating Systems, Database Management Systems, Data Structures &amp; Algorithms, Computer Networks, and Object Oriented Programming.
              </p>

              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 pt-3 border-t border-white/[0.08]">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Bhopal, Madhya Pradesh • Full-Time Regular</span>
              </div>
            </div>
          </div>

          {/* Right: Engineering Philosophy (7 cols) */}
          <div id="philosophy" className="lg:col-span-7 flex flex-col">
            <div className="mb-6">
              <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Engineering Philosophy
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Guiding principles for building software that survives production scale.
              </p>
            </div>

            {/* 2x2 Grid of Philosophy Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {philosophies.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`p-5 rounded-xl border transition-all ${
                      isDark
                        ? 'bg-[#080c14] border-white/10 hover:border-cyan-500/40 shadow-md'
                        : 'bg-white border-slate-200 shadow-sm hover:border-cyan-500'
                    }`}
                  >
                    <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className={`text-sm font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
