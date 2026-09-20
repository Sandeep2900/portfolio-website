import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Terminal, Database, Cpu, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { isDark } = useTheme();

  // 3D tilt for the terminal panel
  const termRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const cfg = { damping: 25, stiffness: 180, mass: 0.5 };
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), cfg);
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), cfg);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!termRef.current) return;
    const r = termRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => { mx.set(0); my.set(0); };

  const pillars = [
    {
      icon: Terminal,
      title: 'Rails API Design',
      desc: 'RESTful architectures with strong contract boundaries and JWT authorization.',
      accent: '#00f0ff'
    },
    {
      icon: Database,
      title: 'PostgreSQL Tuning',
      desc: 'Strict data integrity, composite indices, foreign keys, and ACID transactions.',
      accent: '#818cf8'
    },
    {
      icon: Cpu,
      title: 'Sidekiq & Redis',
      desc: 'Non-blocking background jobs, scheduled queue worker concurrency.',
      accent: '#38bdf8'
    }
  ];

  const pipelineSteps = [
    { name: 'HTTP/2 REST Request', detail: 'Ingress API traffic & JWT token validation', tag: 'INGRESS', color: '#00f0ff' },
    { name: 'Rails Router & Controller', detail: 'Strong parameters sanitize, policy check via Pundit', tag: 'ROUTING', color: '#38bdf8' },
    { name: 'Service Object & Active Record', detail: 'Business logic in isolation & PostgreSQL transaction', tag: 'DOMAIN', color: '#818cf8' },
    { name: 'Sidekiq Queue via Redis', detail: 'Async workers for notifications & telemetry stream', tag: 'ASYNC QUEUE', color: '#a855f7' },
    { name: 'PostgreSQL ACID Transaction', detail: 'WAL written, committed data & sub-20ms roundtrip', tag: 'PERSISTENCE', color: '#10b981' }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className={`flex items-center gap-2 text-xs font-mono mb-3 tracking-wider ${
            isDark ? 'text-cyan-400' : 'text-cyan-700 font-semibold'
          }`}
        >
          <span>// 01 //</span>
          <span className="uppercase font-bold">ARCHITECTURAL PHILOSOPHY</span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-12 max-w-3xl leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Crafting Resilient Architectures &amp; Distributed Systems
        </motion.h2>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Narrative & 3 Pillar Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="xl:col-span-7 flex flex-col space-y-6 min-w-0"
          >
            <motion.p variants={itemVariants} className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              As a Software Engineer specializing in backend ecosystems, I focus on the structural integrity of web applications. My foundation is built on Ruby on Rails, architectural patterns, and performance-tuned databases that sustain mission-critical operations.
            </motion.p>

            <motion.p variants={itemVariants} className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              I believe in clean domain boundaries, idempotent transactions, and deterministic error recovery. Through event-driven messaging pipelines, asynchronous worker orchestration, and normative database constraints, I construct APIs that remain resilient under high traffic surges.
            </motion.p>

            {/* 3 Pillar Cards with 3D Hover */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 group cursor-default flex flex-col justify-between ${
                      isDark
                        ? 'bg-[#0b0f19]/90 border-white/[0.08] hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]'
                        : 'bg-white border-slate-200 hover:border-cyan-500 shadow-sm hover:shadow-md'
                    }`}
                  >
                    <div>
                      <div
                        className="w-10 h-10 rounded-xl border flex items-center justify-center mb-3.5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                        style={{ backgroundColor: `${pillar.accent}15`, borderColor: `${pillar.accent}35`, color: pillar.accent }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className={`text-sm sm:text-base font-bold mb-2 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {pillar.title}
                      </h3>
                      <p className={`text-xs sm:text-[13px] leading-relaxed font-normal ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {pillar.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Architecture Pipeline Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="xl:col-span-5 w-full min-w-0"
            style={{ perspective: 1000 }}
          >
            <motion.div
              ref={termRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
              className={`w-full rounded-2xl border overflow-hidden transition-all duration-300 ${
                isDark
                  ? 'bg-[#080c14]/98 border-cyan-500/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(0,240,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.08)] text-slate-100'
                  : 'bg-white/98 border-slate-200 shadow-2xl text-slate-800'
              }`}
            >
              {/* Header */}
              <div
                className={`px-4 sm:px-5 py-3.5 border-b flex items-center justify-between text-xs font-mono ${
                  isDark ? 'bg-[#06080d] border-white/[0.08]' : 'bg-slate-50 border-slate-200'
                }`}
                style={{ transform: 'translateZ(10px)' }}
              >
                <div className={`flex items-center gap-2 font-bold truncate ${
                  isDark ? 'text-cyan-400' : 'text-cyan-800'
                }`}>
                  <Terminal className="w-4 h-4 shrink-0" />
                  <span className="truncate">&gt;_ Architecture Pipeline Execution</span>
                </div>
                <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                  isDark
                    ? 'bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)]'
                    : 'bg-emerald-50 border border-emerald-300 text-emerald-700'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#10b981]" />
                  <span>3D LIVE</span>
                </div>
              </div>

              {/* Pipeline Steps */}
              <div className="p-3.5 sm:p-5 space-y-2.5 font-mono text-xs" style={{ transform: 'translateZ(14px)' }}>
                {pipelineSteps.map((step, idx) => (
                  <motion.div
                    key={step.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.06 }}
                    className={`p-2.5 sm:p-3 rounded-xl border transition-all duration-200 flex items-center gap-3 ${
                      isDark
                        ? 'bg-[#0c1220]/70 border-white/[0.06] hover:border-cyan-500/40 hover:bg-cyan-950/25'
                        : 'bg-slate-50 border-slate-200 hover:border-cyan-500/40'
                    }`}
                  >
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 shadow-sm"
                      style={{ backgroundColor: `${step.color}20`, color: step.color }}
                    >
                      {idx + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-bold text-xs sm:text-[13px] flex items-center gap-2 flex-wrap justify-between">
                        <span className={isDark ? 'text-slate-200' : 'text-slate-800'}>{step.name}</span>
                        <span
                          className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold tracking-wider"
                          style={{ backgroundColor: `${step.color}18`, color: step.color }}
                        >
                          {step.tag}
                        </span>
                      </div>
                      <div className={`text-[11px] sm:text-xs mt-0.5 leading-snug ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        {step.detail}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Bottom metrics */}
                <div className={`pt-3 border-t flex items-center justify-between text-[11px] ${
                  isDark ? 'border-white/[0.08]' : 'border-slate-200'
                }`}>
                  <span className={`font-bold ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                    Latency: 18ms | Error: &lt;0.01%
                  </span>
                  <a
                    href="#contact"
                    className={`flex items-center gap-1 ${
                      isDark ? 'text-cyan-400 hover:underline' : 'text-cyan-700 hover:text-cyan-800 font-medium'
                    }`}
                  >
                    <span>Inspect Pipeline</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
