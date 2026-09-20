import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Layout, Server, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Skills: React.FC = () => {
  const { isDark } = useTheme();

  const skillColumns = [
    {
      category: 'BACKEND',
      icon: Terminal,
      accent: '#00f0ff',
      skills: ['Ruby', 'Ruby on Rails', 'REST APIs', 'Node.js', 'Express.js', 'JWT & Auth']
    },
    {
      category: 'DATA & STORAGE',
      icon: Database,
      accent: '#818cf8',
      skills: ['PostgreSQL', 'SQL Tuning', 'Redis', 'ActiveRecord', 'Schema Design']
    },
    {
      category: 'FRONTEND',
      icon: Layout,
      accent: '#38bdf8',
      skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3', 'Framer Motion']
    },
    {
      category: 'DEVOPS',
      icon: Server,
      accent: '#a855f7',
      skills: ['Docker Containers', 'Redis Cache', 'Sidekiq Workers', 'Git & GitHub', 'CI/CD Pipelines', 'Linux / Terminal']
    },
    {
      category: 'TESTING',
      icon: ShieldCheck,
      accent: '#10b981',
      skills: ['RSpec', 'Postman', 'Unit Testing', 'Integration Testing', 'GitHub Actions', 'API Testing Tools']
    }
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className={`flex items-center gap-2 text-xs font-mono mb-2 tracking-wider ${
            isDark ? 'text-cyan-400' : 'text-cyan-700 font-semibold'
          }`}>
            <span>// 04 //</span>
            <span className="uppercase font-bold">TECH STACK</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Skills &amp; Technology Matrix
          </h2>
          <p className={`mt-2 text-sm sm:text-base ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Structured by proficiency, domain mastery, and production familiarity.
          </p>
        </motion.div>

        {/* 5 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {skillColumns.map((col, colIdx) => {
            const Icon = col.icon;
            const categoryAccent = !isDark && col.accent === '#00f0ff' 
              ? '#0284c7' 
              : !isDark && col.accent === '#38bdf8'
              ? '#0369a1'
              : col.accent;

            return (
              <motion.div
                key={col.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: colIdx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`p-5 rounded-2xl border transition-all duration-300 group ${
                  isDark
                    ? 'bg-[#080c14]/95 border-white/[0.08] hover:border-cyan-500/40 shadow-lg hover:shadow-[0_0_25px_rgba(0,240,255,0.1)]'
                    : 'bg-white border-slate-200 shadow-sm hover:border-cyan-500 hover:shadow-md'
                }`}
              >
                {/* Column Header */}
                <div className={`flex items-center gap-2 mb-4 pb-3 border-b ${isDark ? 'border-white/[0.08]' : 'border-slate-200'}`}>
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.3)]"
                    style={{ backgroundColor: `${categoryAccent}15`, color: categoryAccent }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-mono font-bold tracking-wider uppercase" style={{ color: categoryAccent }}>
                    {col.category}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="space-y-2">
                  {col.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + colIdx * 0.08 + skillIdx * 0.04 }}
                      whileHover={{ scale: 1.03, x: 3 }}
                      className={`px-3 py-2 rounded-lg border text-xs font-mono transition-all duration-200 cursor-default ${
                        isDark
                          ? 'bg-[#0d121f] border-white/[0.04] text-slate-300 hover:text-white hover:border-cyan-500/30 hover:bg-cyan-950/20'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900 hover:border-cyan-500/40'
                      }`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
