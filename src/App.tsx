import React, { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import { SceneProvider, useScene } from './context/SceneContext';
import { SceneContainer } from './components/3d/SceneContainer';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { isDark } = useTheme();
  const { setScrollProgress } = useScene();

  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'experience',
      'projects',
      'skills',
      'education',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(Math.max(window.scrollY / totalScroll, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrollProgress]);

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 selection:bg-cyan-500/30 selection:text-cyan-200 ${
        isDark ? 'bg-[#06080d] text-slate-100' : 'bg-[#f8fafc] text-slate-900'
      }`}
    >
      {/* Interactive Cybernetic Custom Cursor */}
      <CustomCursor />

      {/* Persistent 3D WebGL Atmospheric Background Layer */}
      <SceneContainer />

      {/* Fixed Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Scrollable HTML Content — proper responsive sections */}
      <main className="relative z-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <SceneProvider>
      <AppContent />
    </SceneProvider>
  );
};

export default App;
