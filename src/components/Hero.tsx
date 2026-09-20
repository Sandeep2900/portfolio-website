import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Download, Mail, Zap, Package, RotateCw, BookOpen } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from './SocialIcons';
import {
  RubyIcon,
  RailsIcon,
  PostgresIcon,
  ReactIcon,
  DockerIcon,
  RedisIcon
} from './TechIcons';
import { Headline3D } from './3d/Headline3D';
import { personalInfo } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const { isDark } = useTheme();

  // 3D Interactive Parallax Physics for the Terminal Column
  const terminalRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6.5, -6.5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!terminalRef.current) return;
    const rect = terminalRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const dockTechs = [
    { name: 'Ruby', icon: RubyIcon, color: '#e11d48' },
    { name: 'Rails', icon: RailsIcon, color: '#dc2626' },
    { name: 'PostgreSQL', icon: PostgresIcon, color: '#38bdf8' },
    { name: 'React', icon: ReactIcon, color: '#00f0ff' },
    { name: 'Docker', icon: DockerIcon, color: '#0ea5e9' },
    { name: 'Redis', icon: RedisIcon, color: '#f43f5e' },
  ];

  const stats = [
    { value: '1+', label: 'Years Industry Exp', highlight: 'from-cyan-400 to-sky-300' },
    { value: '10+', label: 'Core Technologies', highlight: 'from-sky-400 to-indigo-300' },
    { value: '5+', label: 'Production Projects', highlight: 'from-indigo-400 to-cyan-300' },
    { value: '8.2', label: 'B.Tech CGPA (BU)', highlight: 'from-cyan-300 to-emerald-300' },
  ];

  const handleDownloadResume = () => {
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#00f0ff', '#38bdf8', '#818cf8', '#a855f7']
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-16 sm:pt-20 lg:pt-20 pb-8 sm:pb-12 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Personal Introduction & 3D Extruded Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left lg:pr-6"
          >
            {/* Top Availability Badge with Neon Depth */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-4 transition-all duration-300 ${
                isDark
                  ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/40 shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)]'
                  : 'text-cyan-700 bg-cyan-50/90 border border-cyan-300 shadow-sm'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#10b981]" />
              <span className="tracking-wide uppercase font-semibold">AVAILABLE FOR BACKEND & API ROLES</span>
            </motion.div>

            {/* Greeting Tag */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold mb-2 ${
                isDark ? 'text-cyan-400' : 'text-cyan-700 font-bold'
              }`}
            >
              HELLO, I'M
            </motion.p>

            {/* Screen Reader Accessible Title */}
            <h1 className="sr-only">
              SANDEEP KUMAR SAKET — Associate Software Engineer
            </h1>

            {/* Real 3D Extruded & Beveled Headline Canvas */}
            <Headline3D />

            {/* Role & Specialization Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-5 space-y-1.5"
            >
              <h2
                className={`text-xl sm:text-2xl font-bold transition-colors ${
                  isDark ? 'text-slate-100' : 'text-slate-800'
                }`}
              >
                {personalInfo.role}
              </h2>
              <div
                className={`text-xs sm:text-sm font-mono font-semibold tracking-wider uppercase flex items-center gap-2 transition-colors ${
                  isDark ? 'text-cyan-400' : 'text-cyan-600'
                }`}
              >
                <span>RUBY ON RAILS</span>
                <span className="text-slate-500">•</span>
                <span>BACKEND APIS</span>
                <span className="text-slate-500">•</span>
                <span>POSTGRESQL</span>
              </div>
            </motion.div>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={`text-sm sm:text-base max-w-xl mb-7 leading-relaxed font-normal transition-colors ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Scalable systems backend engineer specializing in Ruby on Rails, RESTful APIs, high-performance PostgreSQL architectures, and production-ready microservices. Focused on clean abstractions and maintainable code.
            </motion.p>

            {/* 3D Dimensional CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-7 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 shadow-[0_0_30px_rgba(0,240,255,0.45),0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border border-cyan-200/50"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="Sandeep_Kumar_Saket_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleDownloadResume}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-[0.98] cursor-pointer ${
                  isDark
                    ? 'text-slate-200 bg-[#0b0f19]/90 border border-cyan-500/30 hover:border-cyan-400 hover:text-white hover:bg-cyan-950/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                    : 'text-slate-700 bg-white border border-slate-300 hover:border-cyan-500 hover:text-cyan-600 shadow-sm'
                }`}
              >
                <Download className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Icons & Location Metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                    isDark
                      ? 'bg-[#0b0f19] border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-950 hover:border-cyan-500 shadow-sm'
                  }`}
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                    isDark
                      ? 'bg-[#0b0f19] border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-950 hover:border-cyan-500 shadow-sm'
                  }`}
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                    isDark
                      ? 'bg-[#0b0f19] border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-950 hover:border-cyan-500 shadow-sm'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X Profile"
                  className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                    isDark
                      ? 'bg-[#0b0f19] border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-slate-950 hover:border-cyan-500 shadow-sm'
                  }`}
                >
                  <XIcon className="w-3.5 h-3.5" />
                </a>
              </div>

              <div
                className={`h-4 w-px mx-1 hidden sm:block ${
                  isDark ? 'bg-white/15' : 'bg-slate-300'
                }`}
              />
              <span
                className={`text-xs font-mono tracking-tight uppercase ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                LOC: BHOPAL, MP / OPEN TO RELOCATE / HYBRID
              </span>
            </motion.div>

            {/* Status Quote */}
            <div className={`mt-5 flex items-center gap-2 text-xs font-mono ${
              isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_#00f0ff]" />
              <span>&quot;Code is where ideas become systems.&quot;</span>
            </div>
          </motion.div>

          {/* Right Column: 3D Layered Terminal Console & Interactive Stat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col items-center w-full min-w-0 max-w-full"
            style={{ perspective: 1200 }}
          >
            {/* Interactive 3D Perspective Card Wrapper */}
            <motion.div
              ref={terminalRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
              }}
              className="w-full flex flex-col items-center"
            >
              {/* Top Floating Action Badges with physical translateZ depth */}
              <div
                className="w-full flex items-center justify-end gap-2 mb-3 flex-wrap"
                style={{ transform: 'translateZ(18px)', transformStyle: 'preserve-3d' }}
              >
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold border transition-all hover:scale-105 ${
                    isDark
                      ? 'bg-[#0b0f19]/95 border-cyan-500/50 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:border-cyan-400'
                      : 'bg-white border-slate-200 text-slate-800 shadow-sm hover:border-cyan-500 hover:text-cyan-700'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>BUILD</span>
                </div>
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold border transition-all hover:scale-105 ${
                    isDark
                      ? 'bg-[#0b0f19]/95 border-indigo-500/50 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.25)] hover:border-indigo-400'
                      : 'bg-white border-slate-200 text-slate-800 shadow-sm hover:border-indigo-500 hover:text-indigo-700'
                  }`}
                >
                  <Package className="w-3.5 h-3.5 text-indigo-500" />
                  <span>SHIP</span>
                </div>
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold border transition-all hover:scale-105 ${
                    isDark
                      ? 'bg-[#0b0f19]/95 border-emerald-500/50 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.25)] hover:border-emerald-400'
                      : 'bg-white border-slate-200 text-slate-800 shadow-sm hover:border-emerald-500 hover:text-emerald-700'
                  }`}
                >
                  <RotateCw className="w-3.5 h-3.5 text-emerald-500" />
                  <span>REPEAT</span>
                </div>
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold border transition-all hover:scale-105 ${
                    isDark
                      ? 'bg-[#0b0f19]/95 border-sky-500/50 text-sky-300 shadow-[0_0_15px_rgba(56,189,248,0.25)] hover:border-sky-400'
                      : 'bg-white border-slate-200 text-slate-800 shadow-sm hover:border-sky-500 hover:text-sky-700'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5 text-sky-500" />
                  <span>LEARN</span>
                </div>
              </div>

              {/* Developer Terminal Console Panel (3D Layered Glassmorphism) */}
              <div
                className={`w-full rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isDark
                    ? 'bg-[#070b14]/98 border-cyan-500/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(0,240,255,0.2),inset_0_1px_1px_rgba(255,255,255,0.15)] text-slate-100'
                    : 'bg-white border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)] text-slate-800'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Window Top Bar elevated in 3D */}
                <div
                  className={`flex items-center justify-between px-4 py-3 border-b text-xs font-mono ${
                    isDark ? 'bg-[#06080d] border-white/[0.08]' : 'bg-slate-50 border-slate-200'
                  }`}
                  style={{ transform: 'translateZ(10px)' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className={`text-[11px] font-semibold tracking-wide ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    sandeep@developer:~ (zsh)
                  </div>
                  <div
                    className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isDark
                        ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.4)]'
                        : 'bg-emerald-50 border border-emerald-300 text-emerald-700'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_#10b981]" />
                    <span>LIVE</span>
                  </div>
                </div>

                {/* Terminal Code Content elevated in 3D */}
                <div
                  className="p-4 sm:p-5 font-mono text-xs space-y-3.5"
                  style={{ transform: 'translateZ(14px)' }}
                >
                  <div>
                    <div className={`${isDark ? 'text-slate-500' : 'text-slate-500'} flex items-center gap-1.5`}>
                      <span className={isDark ? 'text-cyan-400 font-bold' : 'text-cyan-600 font-bold'}>&gt;</span>
                      <span>whoami</span>
                    </div>
                    <div className={`pl-4 font-bold mt-0.5 text-sm tracking-wide ${
                      isDark
                        ? 'text-cyan-300 drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]'
                        : 'text-cyan-800'
                    }`}>
                      Sandeep Kumar Saket
                    </div>
                  </div>

                  <div>
                    <div className={`${isDark ? 'text-slate-500' : 'text-slate-500'} flex items-center gap-1.5`}>
                      <span className={isDark ? 'text-cyan-400 font-bold' : 'text-cyan-600 font-bold'}>&gt;</span>
                      <span>current_role</span>
                    </div>
                    <div className={`pl-4 font-semibold mt-0.5 ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                      Associate Software Engineer
                    </div>
                  </div>

                  <div>
                    <div className={`${isDark ? 'text-slate-500' : 'text-slate-500'} flex items-center gap-1.5`}>
                      <span className={isDark ? 'text-cyan-400 font-bold' : 'text-cyan-600 font-bold'}>&gt;</span>
                      <span>core_stack</span>
                    </div>
                    <div className={`pl-4 font-medium mt-0.5 ${isDark ? 'text-indigo-400' : 'text-indigo-700'}`}>
                      Ruby on Rails <span className="text-slate-400">|</span> PostgreSQL <span className="text-slate-400">|</span> Redis Queue &amp; API
                    </div>
                  </div>

                  <div>
                    <div className={`${isDark ? 'text-slate-500' : 'text-slate-500'} flex items-center gap-1.5`}>
                      <span className={isDark ? 'text-cyan-400 font-bold' : 'text-cyan-600 font-bold'}>&gt;</span>
                      <span>status</span>
                    </div>
                    <div className={`pl-4 font-semibold mt-0.5 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}>
                      &quot;Shipping production code at Shriffle Technologies&quot;
                    </div>
                  </div>

                  {/* Terminal Dock Tech Pills */}
                  <div
                    className={`pt-3.5 border-t flex flex-wrap items-center gap-1.5 ${
                      isDark ? 'border-white/[0.08]' : 'border-slate-200'
                    }`}
                  >
                    {dockTechs.map((tech) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={tech.name}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-mono transition-all duration-200 hover:scale-105 ${
                            isDark
                              ? 'bg-[#0d1322] border-white/10 text-slate-300 hover:border-cyan-400/60 hover:text-white hover:shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-cyan-500 hover:text-cyan-700 shadow-xs'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{tech.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Dimensional Stat Cards - Elevated & Constrained inside Right Column */}
              <div
                className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full mt-3.5"
                style={{ transform: 'translateZ(14px)', transformStyle: 'preserve-3d' }}
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`p-3 rounded-xl border transition-all duration-300 hover:scale-105 cursor-default flex flex-col justify-between ${
                      isDark
                        ? 'bg-[#080c14]/95 border-cyan-500/30 shadow-[0_8px_20px_rgba(0,0,0,0.5),0_0_15px_rgba(0,240,255,0.12)] hover:border-cyan-400'
                        : 'bg-white border-slate-200 shadow-sm hover:border-cyan-500 hover:shadow-md'
                    }`}
                  >
                    <div
                      className={`text-xl sm:text-2xl font-black font-mono leading-none mb-1.5 ${
                        isDark
                          ? `bg-gradient-to-r ${stat.highlight} bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]`
                          : 'text-slate-900 font-extrabold'
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div className={`text-[10px] sm:text-[11px] font-mono leading-snug ${
                      isDark ? 'text-slate-400' : 'text-slate-600 font-medium'
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
