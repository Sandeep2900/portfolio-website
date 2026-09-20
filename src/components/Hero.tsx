import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Mail,
  Zap,
  Package,
  RotateCw,
  BookOpen
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from './SocialIcons';
import {
  RubyIcon,
  RailsIcon,
  PostgresIcon,
  ReactIcon,
  DockerIcon,
  RedisIcon
} from './TechIcons';
import { personalInfo } from '../data/portfolio';
import { useTheme } from '../context/ThemeContext';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const { isDark } = useTheme();

  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.75 },
      colors: ['#00f0ff', '#38bdf8', '#818cf8', '#a855f7']
    });

    alert(
      "Resume download initiated! (Replace 'resumeUrl' in src/data/portfolio.ts with your hosted PDF link)."
    );
  };

  const dockTechs = [
    { name: 'Ruby', icon: RubyIcon },
    { name: 'Rails', icon: RailsIcon },
    { name: 'PostgreSQL', icon: PostgresIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'Docker', icon: DockerIcon },
    { name: 'Redis', icon: RedisIcon },
  ];

  const stats = [
    { value: '1+', label: 'Years Industry Exp' },
    { value: '10+', label: 'Core Technologies' },
    { value: '5+', label: 'Production Projects' },
    { value: '8.2', label: 'B.Tech CGPA (BU)' },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 sm:pt-32 lg:pt-36 pb-16 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Personal Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Top Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-5 transition-colors ${
                isDark
                  ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'text-cyan-700 bg-cyan-50 border border-cyan-300/80 shadow-sm'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="tracking-wide uppercase font-semibold">AVAILABLE FOR BACKEND & API ROLES</span>
            </motion.div>

            {/* Greeting Tag */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs sm:text-sm font-mono tracking-widest text-cyan-400 uppercase font-semibold mb-2"
            >
              HELLO, I'M
            </motion.p>

            {/* Dominant Name Heading with "Coming & Going" Animation Loop */}
            <div className="min-h-[95px] sm:min-h-[140px] xl:min-h-[165px] mb-4 flex flex-col justify-center">
              <h1
                className={`text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] transition-colors ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {/* Line 1: SANDEEP KUMAR */}
                <motion.span
                  className="inline-block"
                  animate={{
                    opacity: [0, 1, 1, 1, 0],
                    y: [22, 0, 0, 0, -18],
                    filter: [
                      'blur(8px)',
                      'blur(0px)',
                      'blur(0px)',
                      'blur(0px)',
                      'blur(8px)'
                    ]
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    repeatDelay: 0.6,
                    times: [0, 0.16, 0.72, 0.88, 1],
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  SANDEEP KUMAR
                </motion.span>
                <br />

                {/* Line 2: SAKET (Gradient + slight stagger) */}
                <motion.span
                  className="inline-flex items-center bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent"
                  animate={{
                    opacity: [0, 1, 1, 1, 0],
                    y: [22, 0, 0, 0, -18],
                    filter: [
                      'blur(8px)',
                      'blur(0px)',
                      'blur(0px)',
                      'blur(0px)',
                      'blur(8px)'
                    ]
                  }}
                  transition={{
                    duration: 5.5,
                    delay: 0.12,
                    repeat: Infinity,
                    repeatDelay: 0.6,
                    times: [0, 0.16, 0.72, 0.88, 1],
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <span>SAKET</span>
                  {/* Futuristic Animated Glowing Neon Cursor */}
                  <motion.span
                    className="inline-block w-2.5 sm:w-3.5 h-8 sm:h-12 ml-2.5 bg-cyan-400 rounded-sm"
                    animate={{
                      opacity: [1, 0.2, 1],
                      scaleY: [1, 0.9, 1],
                      boxShadow: [
                        '0 0 10px #00f0ff, 0 0 20px rgba(0, 240, 255, 0.5)',
                        '0 0 4px #00f0ff',
                        '0 0 16px #00f0ff, 0 0 32px rgba(0, 240, 255, 0.8)'
                      ]
                    }}
                    transition={{
                      duration: 0.85,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.span>
              </h1>
            </div>

            {/* Role & Specialization */}
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

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-7 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleDownloadResume}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-[0.98] ${
                  isDark
                    ? 'text-slate-200 bg-[#0b0f19] border border-white/10 hover:border-cyan-400/50 hover:text-white'
                    : 'text-slate-700 bg-white border border-slate-300 hover:border-cyan-500 hover:text-cyan-600 shadow-sm'
                }`}
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
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
                      ? 'bg-[#0b0f19] border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10'
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
                      ? 'bg-[#0b0f19] border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10'
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
                      ? 'bg-[#0b0f19] border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10'
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
                      ? 'bg-[#0b0f19] border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10'
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

            {/* Quote with green status dot */}
            <div className="mt-5 flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>&quot;Code is where ideas become systems.&quot;</span>
            </div>
          </motion.div>

          {/* Right Column: Terminal Console + Stats Grid Underneath */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col items-center w-full"
          >
            {/* Top Action Pills (Build, Ship, Repeat, Learn) */}
            <div className="w-full flex items-center justify-end gap-2 mb-2">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#0b0f19] border border-cyan-500/30 text-cyan-300">
                <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>BUILD</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#0b0f19] border border-indigo-500/30 text-indigo-300">
                <Package className="w-3 h-3 text-indigo-400" />
                <span>SHIP</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#0b0f19] border border-emerald-500/30 text-emerald-300">
                <RotateCw className="w-3 h-3 text-emerald-400" />
                <span>REPEAT</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-[#0b0f19] border border-sky-500/30 text-sky-300">
                <BookOpen className="w-3 h-3 text-sky-400" />
                <span>LEARN</span>
              </div>
            </div>

            {/* The Developer Terminal Card */}
            <div
              className={`w-full rounded-2xl border transition-all duration-300 overflow-hidden shadow-2xl ${
                isDark
                  ? 'bg-[#080c14] border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.7)]'
                  : 'bg-white border-slate-200 shadow-[0_15px_30px_rgba(0,0,0,0.06)]'
              }`}
            >
              {/* Window Top Bar */}
              <div
                className={`flex items-center justify-between px-4 py-3 border-b text-xs font-mono ${
                  isDark ? 'bg-[#06080d] border-white/[0.08]' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="text-slate-400 text-[11px]">
                  sandeep@developer:~ (zsh)
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-[10px] font-bold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIVE</span>
                </div>
              </div>

              {/* Terminal Code Lines */}
              <div className="p-5 font-mono text-xs space-y-4">
                <div>
                  <div className="text-slate-500 flex items-center gap-1.5">
                    <span className="text-cyan-400">&gt;</span>
                    <span>whoami</span>
                  </div>
                  <div className="pl-4 text-cyan-300 font-semibold mt-1">
                    Sandeep Kumar Saket
                  </div>
                </div>

                <div>
                  <div className="text-slate-500 flex items-center gap-1.5">
                    <span className="text-cyan-400">&gt;</span>
                    <span>current_role</span>
                  </div>
                  <div className={`pl-4 font-medium mt-1 ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    Associate Software Engineer
                  </div>
                </div>

                <div>
                  <div className="text-slate-500 flex items-center gap-1.5">
                    <span className="text-cyan-400">&gt;</span>
                    <span>core_stack</span>
                  </div>
                  <div className="pl-4 text-indigo-400 font-medium mt-1">
                    Ruby on Rails <span className="text-slate-500">|</span> PostgreSQL <span className="text-slate-500">|</span> Redis Queue & API
                  </div>
                </div>

                <div>
                  <div className="text-slate-500 flex items-center gap-1.5">
                    <span className="text-cyan-400">&gt;</span>
                    <span>status</span>
                  </div>
                  <div className="pl-4 text-emerald-400 font-medium mt-1">
                    &quot;Shipping production code at Shriffle Technologies&quot;
                  </div>
                </div>

                {/* Tech Pills Strip */}
                <div className={`pt-4 border-t flex flex-wrap items-center gap-1.5 ${isDark ? 'border-white/[0.08]' : 'border-slate-200'}`}>
                  {dockTechs.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-mono transition-colors ${
                          isDark
                            ? 'bg-[#0d121f] border-white/[0.08] text-slate-300'
                            : 'bg-slate-100 border-slate-200 text-slate-700'
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

            {/* 2x2 Stats Grid directly underneath */}
            <div className="grid grid-cols-2 gap-3 w-full mt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`p-4 rounded-xl border transition-all ${
                    isDark
                      ? 'bg-[#080c14]/90 border-white/[0.08] shadow-md'
                      : 'bg-white border-slate-200 shadow-sm'
                  }`}
                >
                  <div className="text-2xl font-black font-mono text-cyan-400 leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
