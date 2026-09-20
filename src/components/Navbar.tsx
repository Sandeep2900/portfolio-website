import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sun, Moon, User, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useScene, type SectionId } from '../context/SceneContext';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { isDark, toggleTheme } = useTheme();
  const { navigateToSection, isCinematic, toggle3DMode } = useScene();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.replace('#', '') as SectionId;
    navigateToSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'py-2.5 bg-[#06080d]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.7)]'
            : 'py-2.5 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-[0_4px_25px_rgba(0,0,0,0.06)]'
          : 'py-3 sm:py-3.5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo: "Sandeep." */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className={`text-2xl font-black tracking-tight focus:outline-none flex items-baseline transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          <span>Sandeep</span>
          <span className={`text-3xl font-extrabold leading-none ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>.</span>
        </a>

        {/* Desktop Navigation Links Pill Container */}
        <nav
          className={`hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full border backdrop-blur-md transition-colors ${
            isDark
              ? 'bg-[#0b0f19]/80 border-white/[0.08] shadow-[0_2px_15px_rgba(0,0,0,0.4)]'
              : 'bg-white/80 border-slate-200/90 shadow-sm'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? isDark
                      ? 'text-white font-semibold'
                      : 'text-cyan-600 font-bold bg-cyan-50/80'
                    : isDark
                    ? 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-x-2 bottom-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_#00f0ff] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: 3D Mode Toggle + Theme Switcher + CTA Button */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* 3D Immersion Mode Switcher */}
          <button
            type="button"
            onClick={toggle3DMode}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-mono font-bold transition-all cursor-pointer select-none active:scale-95 ${
              isCinematic
                ? isDark
                  ? 'bg-cyan-950/70 border-cyan-400/60 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.35)]'
                  : 'bg-cyan-100/90 border-cyan-400 text-cyan-800 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                : isDark
                ? 'bg-[#0b0f19] border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
                : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
            title={isCinematic ? 'Click to switch to 3D Lite Mode' : 'Click to enable 3D Cinematic Mode'}
            aria-label="Toggle 3D Immersion Mode"
          >
            <Sparkles className={`w-3.5 h-3.5 ${isCinematic ? 'text-cyan-400 animate-pulse' : 'text-slate-400'}`} />
            <span>3D {isCinematic ? 'CINEMATIC' : 'LITE'}</span>
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isCinematic ? 'bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-ping' : 'bg-slate-500'
              }`}
            />
          </button>

          {/* Sleek Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className={`p-2 rounded-full border transition-all cursor-pointer select-none active:scale-95 ${
              isDark
                ? 'bg-[#0b0f19] border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50'
                : 'bg-white border-slate-300 text-slate-700 hover:border-cyan-500 hover:text-cyan-600 shadow-sm'
            }`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Let's Connect CTA Button (Bright Cyan Pill) */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center justify-center gap-2 px-5 py-2 text-xs sm:text-sm font-semibold text-slate-950 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Let's Connect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Profile / Status avatar indicator */}
          <div className={`w-8 h-8 rounded-full border flex items-center justify-center ${
            isDark ? 'bg-slate-900 border-white/10 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-600 shadow-sm'
          }`}>
            <User className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`} />
          </div>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex lg:hidden items-center gap-2.5">
          {/* Mobile 3D Toggle */}
          <button
            type="button"
            onClick={toggle3DMode}
            className={`px-2.5 py-1.5 rounded-lg border text-[10px] font-mono font-bold transition-all cursor-pointer select-none active:scale-95 flex items-center gap-1.5 ${
              isCinematic
                ? 'bg-cyan-950/80 border-cyan-400/60 text-cyan-300'
                : 'bg-slate-900 border-white/15 text-slate-400'
            }`}
            aria-label="Toggle 3D Immersion Mode"
          >
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>3D {isCinematic ? 'ON' : 'LITE'}</span>
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl border transition-all cursor-pointer active:scale-95 ${
              isDark
                ? 'bg-slate-900/90 border-white/15 text-slate-300 hover:text-white'
                : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm'
            }`}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2.5 rounded-xl border transition-all focus:outline-none ${
              isDark
                ? 'bg-slate-900/90 border-white/15 text-slate-300 hover:text-white hover:border-cyan-400/40'
                : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm'
            }`}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed inset-x-4 top-20 z-50 p-5 rounded-2xl border backdrop-blur-2xl shadow-2xl lg:hidden ${
                isDark
                  ? 'bg-[#080d1a]/98 border-white/15 text-white'
                  : 'bg-white/98 border-slate-200 text-slate-900 shadow-2xl'
              }`}
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-cyan-500/15 text-cyan-400 font-semibold border border-cyan-500/30'
                          : isDark
                          ? 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}

                <div
                  className={`pt-3 mt-2 border-t flex flex-col gap-2 ${
                    isDark ? 'border-white/10' : 'border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={toggle3DMode}
                    className="flex items-center justify-between w-full px-4 py-3 text-sm font-mono font-bold rounded-xl border border-cyan-500/30 bg-cyan-950/40 text-cyan-300"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>3D Mode: {isCinematic ? 'CINEMATIC' : 'LITE'}</span>
                    </span>
                    <span className="text-xs text-cyan-400 underline">Tap to Switch</span>
                  </button>

                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-slate-950 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  >
                    <span>Let's Connect</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
