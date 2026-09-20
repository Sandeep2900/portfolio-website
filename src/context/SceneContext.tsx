import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

export type SectionId =
  | 'hero'
  | 'about'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'education'
  | 'contact';

export interface CameraWaypoint {
  position: [number, number, number];
  target: [number, number, number];
  fov: number;
}

export const SECTION_ORDER: SectionId[] = [
  'hero',
  'about',
  'experience',
  'projects',
  'skills',
  'education',
  'contact'
];

export const SECTION_WAYPOINTS: Record<SectionId, CameraWaypoint> = {
  hero: {
    position: [0, 0, 7.5],
    target: [0, 0, 0],
    fov: 45
  },
  about: {
    position: [0, -22, 8.5],
    target: [0, -22, 0],
    fov: 45
  },
  experience: {
    position: [0, -44, 9.0],
    target: [0, -44, 0],
    fov: 45
  },
  projects: {
    position: [0, -66, 8.5],
    target: [0, -66, 0],
    fov: 45
  },
  skills: {
    position: [0, -88, 10.0],
    target: [0, -88, 0],
    fov: 48
  },
  education: {
    position: [0, -110, 9.0],
    target: [0, -110, 0],
    fov: 45
  },
  contact: {
    position: [0, -132, 8.0],
    target: [0, -132, 0],
    fov: 45
  }
};

interface SceneContextType {
  activeSection: SectionId;
  targetSection: SectionId;
  scrollProgress: number; // 0.0 to 1.0 overall page scroll
  mousePos: { x: number; y: number }; // normalized -1 to 1
  isLowPerformance: boolean;
  isCinematic: boolean;
  toggleLowPerformance: () => void;
  toggle3DMode: () => void;
  navigateToSection: (section: SectionId) => void;
  setScrollProgress: (progress: number) => void;
}

const SceneContext = createContext<SceneContextType | undefined>(undefined);

export const SceneProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const [targetSection, setTargetSection] = useState<SectionId>('hero');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Default to cinematic 3D mode unless user explicitly selected 'lite' in localStorage
  const [isCinematic, setIsCinematic] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sandeep_3d_mode');
      if (saved) return saved === 'cinematic';
      // Default to true (Cinematic 3D enabled) on desktop
      return window.innerWidth >= 768;
    }
    return true;
  });

  const isLowPerformance = !isCinematic;

  const toggle3DMode = useCallback(() => {
    setIsCinematic((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('sandeep_3d_mode', next ? 'cinematic' : 'lite');
      }
      return next;
    });
  }, []);

  const toggleLowPerformance = toggle3DMode;

  // Mouse Parallax listener
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Window scroll listener to sync scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const currentProgress = Math.min(Math.max(window.scrollY / totalScroll, 0), 1);
      setScrollProgress(currentProgress);

      // Determine active section based on scroll progress
      const sectionCount = SECTION_ORDER.length;
      const index = Math.min(
        Math.floor(currentProgress * sectionCount + 0.3),
        sectionCount - 1
      );
      const matched = SECTION_ORDER[index];
      setActiveSection(matched);
      setTargetSection(matched);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = useCallback((section: SectionId) => {
    setTargetSection(section);
    setActiveSection(section);

    // Smoothly scroll the page to the corresponding section element
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const value = useMemo(
    () => ({
      activeSection,
      targetSection,
      scrollProgress,
      mousePos,
      isLowPerformance,
      isCinematic,
      toggleLowPerformance,
      toggle3DMode,
      navigateToSection,
      setScrollProgress
    }),
    [
      activeSection,
      targetSection,
      scrollProgress,
      mousePos,
      isLowPerformance,
      isCinematic,
      toggleLowPerformance,
      toggle3DMode,
      navigateToSection
    ]
  );

  return <SceneContext.Provider value={value}>{children}</SceneContext.Provider>;
};

export const useScene = (): SceneContextType => {
  const context = useContext(SceneContext);
  if (!context) {
    throw new Error('useScene must be used within a SceneProvider');
  }
  return context;
};
