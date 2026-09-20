import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Building2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolio';

export const Experience: React.FC = () => {
  const { isDark } = useTheme();

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const }
    })
  };

  return (
    <section id="experience" className="py-20 sm:py-28 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className={`flex items-center gap-2 text-xs font-mono mb-2 tracking-wider ${
              isDark ? 'text-cyan-400' : 'text-cyan-700 font-semibold'
            }`}>
              <span>// 02 //</span>
              <span className="uppercase font-bold">CAREER TIMELINE</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Engineering Experience
            </h2>
            <p className={`mt-2 text-sm sm:text-base ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              Proven track record of engineering scalable platforms and client systems.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href={personalInfo.resumeUrl}
            download="Sandeep_Kumar_Saket_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium transition-colors ${
              isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-700 hover:text-cyan-800 font-semibold'
            }`}
          >
            <span>Download Full Resume (PDF)</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Timeline Visual */}
        <div className="relative">
          {/* Animated vertical timeline line */}
          <div className={`absolute left-4 sm:left-6 top-0 bottom-0 w-px ${isDark ? 'bg-gradient-to-b from-cyan-500/60 via-indigo-500/40 to-transparent' : 'bg-gradient-to-b from-cyan-500/50 via-slate-300 to-transparent'}`} />

          <div className="space-y-8 pl-12 sm:pl-16">
            
            {/* Shriffle Technologies */}
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ scale: 1.01 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[2.55rem] sm:-left-[2.55rem] top-6 w-4 h-4 rounded-full bg-cyan-500 border-4 shadow-[0_0_15px_rgba(0,240,255,0.5)] z-10 ${
                isDark ? 'border-[#06080d]' : 'border-white ring-1 ring-slate-200'
              }`} />

              <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                isDark
                  ? 'bg-[#080c14]/95 border-cyan-500/25 hover:border-cyan-400/50 shadow-[0_15px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(0,240,255,0.08)]'
                  : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase ${
                        isDark
                          ? 'bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.15)]'
                          : 'bg-cyan-50 border border-cyan-300 text-cyan-800 shadow-sm'
                      }`}>
                        CURRENT ROLE
                      </span>
                      <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        December 2025 – Present
                      </span>
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Associate Software Engineer
                    </h3>
                    <div className={`flex items-center gap-2 text-sm font-medium mt-0.5 ${
                      isDark ? 'text-cyan-400' : 'text-cyan-700'
                    }`}>
                      <Building2 className="w-4 h-4" />
                      <span>Shriffle Technologies Pvt. Ltd.</span>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold uppercase self-start border ${
                    isDark
                      ? 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10'
                      : 'border-cyan-300 text-cyan-800 bg-cyan-50'
                  }`}>
                    FULL-TIME
                  </span>
                </div>

                <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Production-ready backend and API development using Ruby on Rails. Architecting robust microservices, REST endpoints, external vendor integration, and continuous deployment workflows. Designing scalable relational database schemas and executing clean domain abstractions for high-volume customer production workloads.
                </p>

                <ul className="space-y-2 mb-6 font-mono text-xs">
                  <li className={`flex items-start gap-2.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                    <span>Production delivery: Service API microservice execution, scheduling workers, multi-tenant background data processing and pipeline telemetry.</span>
                  </li>
                  <li className={`flex items-start gap-2.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                    <span>Authentication design, API rate limits, database protection, indexing strategies, Sidekiq background workers, and PostgreSQL query tuning for client dashboards.</span>
                  </li>
                </ul>

                <div className={`pt-4 border-t flex flex-wrap gap-2 ${isDark ? 'border-white/[0.08]' : 'border-slate-200'}`}>
                  {['Ruby on Rails', 'PostgreSQL', 'Redis', 'Sidekiq', 'REST APIs', 'Git'].map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-lg border text-xs font-mono transition-colors ${
                        isDark
                          ? 'bg-[#0d121f] border-white/[0.08] text-slate-300 hover:border-cyan-500/40 hover:text-white'
                          : 'bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Vistron Infotech */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ scale: 1.01 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[2.55rem] sm:-left-[2.55rem] top-6 w-3.5 h-3.5 rounded-full bg-indigo-500 border-4 shadow-[0_0_12px_rgba(129,140,248,0.5)] z-10 ${
                isDark ? 'border-[#06080d]' : 'border-white ring-1 ring-slate-200'
              }`} />

              <div className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                isDark
                  ? 'bg-[#080c14]/95 border-indigo-500/20 hover:border-indigo-400/40 shadow-[0_15px_40px_rgba(0,0,0,0.5)]'
                  : 'bg-white border-slate-200 shadow-md hover:shadow-lg'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                      <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase border ${
                        isDark
                          ? 'bg-slate-800 border-slate-700 text-slate-300'
                          : 'bg-slate-100 border-slate-200 text-slate-700'
                      }`}>
                        INTERNSHIP
                      </span>
                      <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        November 2025 – December 2025
                      </span>
                    </div>
                    <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Website Developer Intern
                    </h3>
                    <div className={`flex items-center gap-2 text-sm font-medium mt-0.5 ${
                      isDark ? 'text-indigo-400' : 'text-indigo-700'
                    }`}>
                      <Building2 className="w-4 h-4" />
                      <span>Vistron Infotech</span>
                    </div>
                  </div>

                  <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold uppercase self-start border ${
                    isDark
                      ? 'border-slate-700 text-slate-400 bg-slate-800/40'
                      : 'border-slate-300 text-slate-700 bg-slate-100'
                  }`}>
                    INTERNSHIP
                  </span>
                </div>

                <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Full-stack web development with dynamic UI components, REST API client integration, client state persistence, and responsive UI implementations across diverse hardware form factors and resolutions.
                </p>

                <ul className="space-y-2 mb-6 font-mono text-xs">
                  <li className={`flex items-start gap-2.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                    <span>Engineered modern responsive user interfaces with reusable UI design primitives.</span>
                  </li>
                  <li className={`flex items-start gap-2.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                    <span>Continuous version control hygiene with Git and agile production release cycles.</span>
                  </li>
                </ul>

                <div className={`pt-4 border-t flex flex-wrap gap-2 ${isDark ? 'border-white/[0.08]' : 'border-slate-200'}`}>
                  {['React', 'JavaScript (ES6+)', 'CSS3', 'REST API Integration', 'Tailwind CSS'].map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-lg border text-xs font-mono transition-colors ${
                        isDark
                          ? 'bg-[#0d121f] border-white/[0.08] text-slate-300 hover:border-indigo-500/40 hover:text-white'
                          : 'bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
