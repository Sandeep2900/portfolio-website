import React from 'react';
import { Terminal, Database, Cpu, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { isDark } = useTheme();

  const pillars = [
    {
      icon: Terminal,
      title: 'Rails API Design',
      desc: 'RESTful architectures with strong contract boundaries and JWT authorization.'
    },
    {
      icon: Database,
      title: 'PostgreSQL Tuning',
      desc: 'Strict data integrity, composite indices, foreign keys, and ACID transactions.'
    },
    {
      icon: Cpu,
      title: 'Sidekiq & Redis',
      desc: 'Non-blocking background jobs, scheduled queue worker concurrency.'
    }
  ];

  const pipelineSteps = [
    {
      name: 'HTTP/2 REST Request',
      detail: 'Ingress API traffic & JWT token validation'
    },
    {
      name: 'Rails Router & Controller',
      detail: 'Strong parameters sanitize, policy check via Pundit'
    },
    {
      name: 'Service Object & Active Record',
      detail: 'Business logic in isolation & PostgreSQL transaction'
    },
    {
      name: 'Sidekiq Queue via Redis',
      detail: 'Async workers for notifications & telemetry stream'
    },
    {
      name: 'PostgreSQL ACID Transaction',
      detail: 'WAL written, committed data & sub-20ms roundtrip'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Monospace Section Tag */}
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3 tracking-wider">
          <span>// 01 //</span>
          <span className="uppercase font-bold">ARCHITECTURAL PHILOSOPHY</span>
        </div>

        {/* Section Title */}
        <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-12 max-w-3xl leading-tight ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}>
          Crafting Resilient Architectures &amp; Distributed Systems
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative & 3 Pillar Cards */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              As a Software Engineer specializing in backend ecosystems, I focus on the structural integrity of web applications. My foundation is built on Ruby on Rails, architectural patterns, and performance-tuned databases that sustain mission-critical operations.
            </p>

            <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              I believe in clean domain boundaries, idempotent transactions, and deterministic error recovery. Through event-driven messaging pipelines, asynchronous worker orchestration, and normative database constraints, I construct APIs that remain resilient under high traffic surges.
            </p>

            {/* 3 Pillar Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`p-4 rounded-xl border transition-all ${
                      isDark
                        ? 'bg-[#0b0f19] border-white/[0.08] hover:border-cyan-500/40'
                        : 'bg-white border-slate-200 hover:border-cyan-500 shadow-sm'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className={`text-sm font-bold mb-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architecture Pipeline Execution Terminal */}
          <div className="lg:col-span-5">
            <div className={`w-full rounded-2xl border overflow-hidden shadow-2xl ${
              isDark
                ? 'bg-[#080c14] border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
                : 'bg-white border-slate-200 shadow-lg'
            }`}>
              {/* Header */}
              <div className={`px-5 py-4 border-b flex items-center justify-between ${
                isDark ? 'bg-[#06080d] border-white/[0.08]' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400">
                  <Terminal className="w-4 h-4" />
                  <span>Architecture Pipeline Execution</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-[10px] font-mono font-bold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>STATUS: LIVE</span>
                </div>
              </div>

              {/* Execution Steps */}
              <div className="p-5 space-y-4 font-mono text-xs">
                {pipelineSteps.map((step, idx) => (
                  <div key={step.name} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <div className={`font-bold ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                        {step.name}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {step.detail}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Footer metrics strip */}
                <div className={`pt-4 border-t flex items-center justify-between text-[11px] ${
                  isDark ? 'border-white/[0.08]' : 'border-slate-200'
                }`}>
                  <span className="text-emerald-400">Latency: 18ms | Error Rate: &lt;0.01%</span>
                  <a href="#contact" className="text-cyan-400 hover:underline flex items-center gap-1">
                    <span>Inspect Architecture</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
