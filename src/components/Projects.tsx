import React from 'react';
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

  return (
    <section id="projects" className="py-20 sm:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tracking-wider">
              <span>// 03 //</span>
              <span className="uppercase font-bold">FLAGSHIP PROJECT</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Production Software
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              End-to-end applications delivered in production environments.
            </p>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>View All Projects on GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Flagship Project Large Card */}
        <div className={`rounded-3xl border overflow-hidden transition-all ${
          isDark
            ? 'bg-[#080c14] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
            : 'bg-white border-slate-200 shadow-xl'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
            
            {/* Left Info Column (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              {/* Category Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/60 border border-cyan-500/40 text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  FLAGSHIP PROJECT
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-400 border border-white/[0.08] bg-[#0d121f]">
                  Auto-Tech AI Engine
                </span>
              </div>

              {/* Title */}
              <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-4 leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                FIXKAR AI — Autonomous Diagnostic &amp; Multi-Tenant Verification Ecosystem
              </h3>

              {/* Description */}
              <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                Full-stack automotive service booking platform with AI diagnostics, multi-tenant workshop operations management, real-time job status tracking, and automated parts verification.
              </p>

              {/* 4 Feature Mini-Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-6">
                <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-[#0b0f19] border-white/[0.08]' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-xs font-bold text-cyan-400 mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Autonomous Booking Engine</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Multi-step booking pipeline with dynamic bay scheduling.
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-[#0b0f19] border-white/[0.08]' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-xs font-bold text-indigo-400 mb-1 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Company Management Portal</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Multi-tenant portal for mechanics and operations managers.
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-[#0b0f19] border-white/[0.08]' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-xs font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>Real-Time SSE Tracking</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Live status updates stream directly to customer devices.
                  </div>
                </div>

                <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-[#0b0f19] border-white/[0.08]' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="text-xs font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Sidekiq &amp; Redis Pipelines</span>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Asynchronous job orchestration for invoices and alerts.
                  </div>
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-7">
                {['Ruby on Rails', 'React.js', 'PostgreSQL', 'Redis', 'Sidekiq Workers', 'Tailwind CSS'].map((t) => (
                  <span
                    key={t}
                    className={`px-3 py-1 rounded-lg border text-xs font-mono ${
                      isDark
                        ? 'bg-[#0d121f] border-white/[0.08] text-slate-300'
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all"
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

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm border transition-all ${
                    isDark
                      ? 'bg-[#0b0f19] border-white/10 text-slate-300 hover:border-cyan-400/50 hover:text-white'
                      : 'bg-white border-slate-300 text-slate-700 hover:border-cyan-500'
                  }`}
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Visual Column (5 Cols) - System Diagnostic Window Mock */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className={`rounded-2xl border overflow-hidden shadow-2xl ${
                isDark ? 'bg-[#06080d] border-white/10' : 'bg-slate-900 border-slate-800 text-white'
              }`}>
                {/* Window Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#04060a] text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-slate-400 text-[11px]">fixkar-telemetry: run_diag_mode</span>
                  <span className="text-cyan-400 text-[10px]">99.98%</span>
                </div>

                {/* Simulated Diagnostic Stream */}
                <div className="p-4 font-mono text-[11px] space-y-2 text-slate-300">
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
                  
                  {/* Mock code response */}
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
              </div>

              {/* Bottom Mini Mockup Graphic */}
              <div className="grid grid-cols-2 gap-3">
                <div className={`p-3 rounded-xl border ${isDark ? 'bg-[#080c14] border-white/10' : 'bg-slate-100 border-slate-200'}`}>
                  <div className="text-[10px] font-mono text-slate-400 mb-1">Diagnostic Bay Telemetry</div>
                  <div className="h-14 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
                    Active Bays (12/12)
                  </div>
                </div>

                <div className={`p-3 rounded-xl border ${isDark ? 'bg-[#080c14] border-white/10' : 'bg-slate-100 border-slate-200'}`}>
                  <div className="text-[10px] font-mono text-slate-400 mb-1">Live Dashboard Overview</div>
                  <div className="h-14 rounded bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono text-xs font-bold">
                    Telemetry Stream
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
