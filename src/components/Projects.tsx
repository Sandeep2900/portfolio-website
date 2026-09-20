import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Layers,
  Zap,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Projects: React.FC = () => {
  const { isDark } = useTheme();

  // 3D tilt for the diagnostic window
  const termRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const cfg = { damping: 25, stiffness: 180, mass: 0.5 };
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), cfg);
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), cfg);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!termRef.current) return;
    const r = termRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => { mx.set(0); my.set(0); };

  const featureCards = [
    { icon: CheckCircle2, title: 'Autonomous Booking Engine', desc: 'Multi-step booking pipeline with dynamic bay scheduling.', color: '#00f0ff' },
    { icon: Layers, title: 'Company Management Portal', desc: 'Multi-tenant portal for mechanics and operations managers.', color: '#818cf8' },
    { icon: Activity, title: 'Real-Time SSE Tracking', desc: 'Live status updates stream directly to customer devices.', color: '#10b981' },
    { icon: Zap, title: 'Sidekiq & Redis Pipelines', desc: 'Asynchronous job orchestration for invoices and alerts.', color: '#f59e0b' }
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 relative z-20">
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
              <span>// 03 //</span>
              <span className="uppercase font-bold">FLAGSHIP PROJECT</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Production Software
            </h2>
            <p className={`mt-2 text-sm sm:text-base ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              End-to-end applications delivered in production environments.
            </p>
          </motion.div>

          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium transition-colors ${
              isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-700 hover:text-cyan-800 font-semibold'
            }`}
          >
            <span>View All Projects on GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Flagship Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className={`rounded-3xl border overflow-hidden transition-all ${
            isDark
              ? 'bg-[#080c14]/95 border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(0,240,255,0.06)]'
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-start">
            
            {/* Left Info Column */}
            <div className="xl:col-span-7 flex flex-col items-start min-w-0">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                  isDark
                    ? 'bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                    : 'bg-cyan-50 border border-cyan-300 text-cyan-800 shadow-sm'
                }`}>
                  <Sparkles className="w-3.5 h-3.5" />
                  FLAGSHIP PROJECT
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-mono border ${
                  isDark
                    ? 'text-slate-400 border-white/[0.08] bg-[#0d121f]'
                    : 'text-slate-600 border-slate-200 bg-slate-100'
                }`}>
                  Auto-Tech AI Engine
                </span>
              </div>

              {/* Title */}
              <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-4 leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                FIXKAR AI — Autonomous Diagnostic &amp; Multi-Tenant Verification Ecosystem
              </h3>

              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Full-stack automotive service booking platform with AI diagnostics, multi-tenant workshop operations management, real-time job status tracking, and automated parts verification.
              </p>

              {/* Feature Mini Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-6">
                {featureCards.map((card, i) => {
                  const Icon = card.icon;
                  const cardColor = !isDark && card.color === '#00f0ff' ? '#0284c7' : card.color;
                  return (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ y: -2, scale: 1.02 }}
                      className={`p-3.5 rounded-xl border transition-all duration-300 ${
                        isDark ? 'bg-[#0b0f19] border-white/[0.08] hover:border-cyan-500/30' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="text-xs font-bold mb-1 flex items-center gap-1.5" style={{ color: cardColor }}>
                        <Icon className="w-3.5 h-3.5" />
                        <span>{card.title}</span>
                      </div>
                      <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{card.desc}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-7">
                {['Ruby on Rails', 'React.js', 'PostgreSQL', 'Redis', 'Sidekiq Workers', 'Tailwind CSS'].map((t) => (
                  <span
                    key={t}
                    className={`px-3 py-1 rounded-lg border text-xs font-mono transition-colors ${
                      isDark
                        ? 'bg-[#0d121f] border-white/[0.08] text-slate-300 hover:border-cyan-500/40 hover:text-white'
                        : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Live Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm border transition-all ${
                    isDark
                      ? 'bg-[#0b0f19] border-white/10 text-slate-300 hover:border-cyan-400/50 hover:text-white'
                      : 'bg-white border-slate-300 text-slate-700 hover:border-cyan-500'
                  }`}
                >
                  <span>Architecture Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: 3D Tilt Diagnostic Terminal */}
            <div className="xl:col-span-5 w-full flex flex-col gap-4 min-w-0" style={{ perspective: 1000 }}>
              <motion.div
                ref={termRef}
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isDark
                    ? 'bg-[#06080d] border-white/10 shadow-[0_25px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(0,240,255,0.1)]'
                    : 'bg-slate-900 border-slate-800 text-white shadow-2xl'
                }`}
              >
                {/* Window Bar */}
                <div
                  className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#04060a] text-xs font-mono"
                  style={{ transform: 'translateZ(8px)' }}
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-slate-400 text-[11px] truncate">fixkar-telemetry: run_diag_mode</span>
                  <span className="text-cyan-400 text-[10px]">99.98%</span>
                </div>

                {/* Terminal Content */}
                <div className="p-4 font-mono text-[11px] space-y-2 text-slate-300" style={{ transform: 'translateZ(12px)' }}>
                  <div className="flex justify-between text-slate-400 border-b border-white/[0.06] pb-1.5">
                    <span>Diagnostic Engine</span>
                    <span className="text-emerald-400">ONLINE [100% OK]</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Active Service Workers:</span>
                    <span className="text-cyan-300">6 (Sidekiq)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Redis Memory Cache:</span>
                    <span className="text-indigo-300">42.8 MB / 512 MB</span>
                  </div>
                  
                  <div className="p-2.5 rounded bg-[#020408] border border-white/[0.06] text-[10px] space-y-1 text-slate-400 mt-2">
                    <div className="text-emerald-400">&gt; GET /api/v1/workshops/diagnostics?bay_id=12</div>
                    <div>Status: 200 OK | Response: 14ms</div>
                    <div className="text-cyan-400">&gt; SSE Stream connected to client #9948</div>
                  </div>

                  <div className="pt-2 flex justify-between items-center text-[10px] text-slate-500">
                    <span>Sync: PostgreSQL WAL Pool</span>
                    <span className="text-cyan-400 font-bold">HEALTHY</span>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Mini Panels */}
              <div className="grid grid-cols-2 gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ y: -2 }}
                  className={`p-3 rounded-xl border transition-all duration-300 ${
                    isDark ? 'bg-[#080c14] border-white/10 hover:border-cyan-500/30' : 'bg-slate-100 border-slate-200'
                  }`}
                >
                  <div className="text-[10px] font-mono text-slate-400 mb-1">Diagnostic Bay Telemetry</div>
                  <div className="h-14 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
                    Active Bays (12/12)
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ y: -2 }}
                  className={`p-3 rounded-xl border transition-all duration-300 ${
                    isDark ? 'bg-[#080c14] border-white/10 hover:border-indigo-500/30' : 'bg-slate-100 border-slate-200'
                  }`}
                >
                  <div className="text-[10px] font-mono text-slate-400 mb-1">Live Dashboard Overview</div>
                  <div className="h-14 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono text-xs font-bold">
                    Telemetry Stream
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
