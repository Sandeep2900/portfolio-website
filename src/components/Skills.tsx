import React from 'react';
import { Terminal, Database, Layout, Server, ShieldCheck } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Skills: React.FC = () => {
  const { isDark } = useTheme();

  const skillColumns = [
    {
      category: 'BACKEND',
      icon: Terminal,
      skills: ['Ruby', 'Ruby on Rails', 'REST APIs', 'Node.js', 'Express.js', 'JWT & Auth']
    },
    {
      category: 'DATA & STORAGE',
      icon: Database,
      skills: ['PostgreSQL', 'SQL Tuning', 'Redis', 'ActiveRecord', 'Schema Design']
    },
    {
      category: 'FRONTEND',
      icon: Layout,
      skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3', 'Framer Motion']
    },
    {
      category: 'DEVOPS',
      icon: Server,
      skills: ['Docker Containers', 'Redis Cache', 'Sidekiq Workers', 'Git & GitHub', 'CI/CD Pipelines', 'Linux / Terminal']
    },
    {
      category: 'TESTING',
      icon: ShieldCheck,
      skills: ['RSpec', 'Postman', 'Unit Testing', 'Integration Testing', 'GitHub Actions', 'API Testing Tools']
    }
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tracking-wider">
            <span>// 04 //</span>
            <span className="uppercase font-bold">TECH STACK</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Skills &amp; Technology Matrix
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Structured by proficiency, domain mastery, and production familiarity.
          </p>
        </div>

        {/* 5 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {skillColumns.map((col) => {
            const Icon = col.icon;
            return (
              <div
                key={col.category}
                className={`p-5 rounded-2xl border transition-all ${
                  isDark
                    ? 'bg-[#080c14] border-white/10 hover:border-cyan-500/40 shadow-lg'
                    : 'bg-white border-slate-200 shadow-sm hover:border-cyan-500'
                }`}
              >
                {/* Column Category Title */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.08]">
                  <div className="w-6 h-6 rounded bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-cyan-400">
                    {col.category}
                  </h3>
                </div>

                {/* Skill Items List */}
                <div className="space-y-2">
                  {col.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`px-3 py-2 rounded-lg border text-xs font-mono transition-colors ${
                        isDark
                          ? 'bg-[#0d121f] border-white/[0.04] text-slate-300 hover:text-white hover:border-cyan-500/30'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
