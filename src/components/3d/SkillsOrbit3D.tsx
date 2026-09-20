import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { Terminal, Database, Layout, Server, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface SkillsOrbit3DProps {
  position?: [number, number, number];
}

interface SkillCategoryData {
  id: string;
  category: string;
  icon: any;
  color: string;
  radius: number;
  speed: number;
  skills: string[];
}

export const SkillsOrbit3D: React.FC<SkillsOrbit3DProps> = ({ position = [0, -88, 0] }) => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 9;
  const scale = isMobile ? Math.min(viewport.width / 9.5, 0.85) : 1;

  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const [activeCategory, setActiveCategory] = useState<string>('backend');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const { isDark } = useTheme();

  const skillCategories: SkillCategoryData[] = [
    {
      id: 'backend',
      category: 'BACKEND',
      icon: Terminal,
      color: '#00f0ff',
      radius: 2.4,
      speed: 0.35,
      skills: ['Ruby', 'Ruby on Rails', 'REST APIs', 'Node.js', 'Express.js', 'JWT & Auth']
    },
    {
      id: 'data',
      category: 'DATA & STORAGE',
      icon: Database,
      color: '#38bdf8',
      radius: 3.5,
      speed: 0.28,
      skills: ['PostgreSQL', 'SQL Tuning', 'Redis', 'ActiveRecord', 'Schema Design']
    },
    {
      id: 'frontend',
      category: 'FRONTEND',
      icon: Layout,
      color: '#818cf8',
      radius: 4.6,
      speed: 0.22,
      skills: ['React.js', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3', 'Framer Motion']
    },
    {
      id: 'devops',
      category: 'DEVOPS',
      icon: Server,
      color: '#a855f7',
      radius: 5.7,
      speed: 0.18,
      skills: ['Docker Containers', 'Redis Cache', 'Sidekiq Workers', 'Git & GitHub', 'CI/CD Pipelines', 'Linux / Terminal']
    },
    {
      id: 'testing',
      category: 'TESTING',
      icon: ShieldCheck,
      color: '#10b981',
      radius: 6.8,
      speed: 0.15,
      skills: ['RSpec', 'Postman', 'Unit Testing', 'Integration Testing', 'GitHub Actions', 'API Testing Tools']
    }
  ];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.5;
      coreRef.current.rotation.x = t * 0.3;
    }
  });

  const selectedData = skillCategories.find((c) => c.id === activeCategory) || skillCategories[0];
  const ActiveIcon = selectedData.icon;

  return (
    <group ref={groupRef} position={position}>
      <group scale={scale}>
      {/* Central 3D Glowing Core Nucleus */}
      <mesh ref={coreRef} position={[0, 0, -0.8]}>
        <icosahedronGeometry args={[0.9, 1]} />
        <meshStandardMaterial
          color="#00f0ff"
          wireframe
          emissive="#00f0ff"
          emissiveIntensity={1.4}
        />
      </mesh>

      {/* Planetary 3D Orbit Rings */}
      {skillCategories.map((cat, idx) => {
        const isSelected = activeCategory === cat.id;
        return (
          <group key={cat.id} rotation={[0.4 + idx * 0.08, 0.2, 0]} position={[0, 0, -0.8]}>
            {/* Torus Ring Wire */}
            <mesh>
              <torusGeometry args={[cat.radius, 0.015, 16, 80]} />
              <meshStandardMaterial
                color={cat.color}
                emissive={cat.color}
                emissiveIntensity={isSelected ? 1.6 : 0.4}
                transparent
                opacity={isSelected ? 0.9 : 0.4}
              />
            </mesh>
          </group>
        );
      })}

      {/* 3D Interactive HUD / Matrix Interface */}
      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.15} position={[0, 0.3, 0.2]}>
        <Html center transform distanceFactor={5.6} className="w-[840px] select-none">
          <div
            className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 shadow-2xl font-sans ${
              isDark
                ? 'bg-[#080c14]/96 border-cyan-500/30 text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
                : 'bg-white/96 border-slate-200 text-slate-900 shadow-2xl'
            }`}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1 tracking-wider">
                  <span>// 04 //</span>
                  <span className="uppercase font-bold">3D ORBITAL MATRIX</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                  Skills &amp; Technology Matrix
                </h3>
              </div>

              {/* Orbit Category Selector Pills */}
              <div className="flex flex-wrap gap-1.5">
                {skillCategories.map((cat) => {
                  const isSelected = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'shadow-[0_0_15px_rgba(0,240,255,0.3)] border'
                          : isDark
                          ? 'bg-[#0d121f] border-white/10 text-slate-400 hover:text-white'
                          : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-900'
                      }`}
                      style={
                        isSelected
                          ? {
                              backgroundColor: `${cat.color}25`,
                              borderColor: cat.color,
                              color: cat.color
                            }
                          : {}
                      }
                    >
                      {cat.category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Main Active Orbit Detail Pane */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Orbit Overview (5 cols) */}
              <div className="lg:col-span-5 flex flex-col p-4 rounded-2xl bg-[#0c1220]/60 border border-white/[0.08]">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                    style={{ backgroundColor: `${selectedData.color}20`, color: selectedData.color }}
                  >
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-black tracking-tight">{selectedData.category}</h4>
                    <span className="text-[11px] font-mono text-slate-400">
                      Orbital Level {skillCategories.indexOf(selectedData) + 1} • High Velocity
                    </span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-3">
                  Production-grade mastery and deployment expertise across enterprise backend architectures, transactional isolation, and automated pipelines.
                </p>
                <div className="flex items-center gap-2 text-[11px] font-mono" style={{ color: selectedData.color }}>
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: selectedData.color }} />
                  <span>Interactive 3D Orbit Synced</span>
                </div>
              </div>

              {/* Right Skills Grid (7 cols) */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {selectedData.skills.map((skill) => {
                  const isHov = hoveredSkill === skill;
                  return (
                    <div
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`p-3 rounded-xl border text-xs font-mono font-medium transition-all duration-200 cursor-default flex items-center gap-2 ${
                        isHov
                          ? 'shadow-[0_0_12px_rgba(0,240,255,0.25)]'
                          : isDark
                          ? 'bg-[#0d121f]/90 border-white/[0.08] text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-800'
                      }`}
                      style={
                        isHov
                          ? {
                              borderColor: selectedData.color,
                              color: selectedData.color,
                              backgroundColor: `${selectedData.color}15`
                            }
                          : {}
                      }
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: selectedData.color }} />
                      <span className="truncate">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick 5-Column Preview Strip at bottom */}
            <div className="grid grid-cols-5 gap-2 mt-5 pt-4 border-t border-white/10">
              {skillCategories.map((col) => (
                <div
                  key={col.id}
                  onClick={() => setActiveCategory(col.id)}
                  className={`p-2 rounded-lg text-center cursor-pointer transition-all ${
                    activeCategory === col.id
                      ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-300'
                      : isDark
                      ? 'bg-[#0b0f19] border border-white/[0.04] text-slate-400 hover:text-white'
                      : 'bg-slate-100 border border-slate-200 text-slate-600'
                  }`}
                >
                  <div className="text-[10px] font-mono font-bold uppercase truncate">{col.category}</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">{col.skills.length} Techs</div>
                </div>
              ))}
            </div>
          </div>
        </Html>
      </Float>

      {/* Point Light Accent */}
      <pointLight position={[0, 0, 2.5]} color="#00f0ff" intensity={1.8} distance={7} />
      </group>
    </group>
  );
};
