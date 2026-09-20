import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { Building2, CheckCircle2 } from 'lucide-react';

interface ExperienceScene3DProps {
  position?: [number, number, number];
}

export const ExperienceScene3D: React.FC<ExperienceScene3DProps> = ({ position = [0, -44, 0] }) => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 9;
  const scale = isMobile ? Math.min(viewport.width / 9.5, 0.85) : 1;

  const groupRef = useRef<THREE.Group>(null);
  const splineRef = useRef<THREE.Mesh>(null);
  const { isDark } = useTheme();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (splineRef.current) {
      splineRef.current.rotation.y = t * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <group scale={scale}>
      {/* 3D Timeline Rail with pulsing glowing marker */}
      <mesh ref={splineRef} position={[0, 0, -1]}>
        <cylinderGeometry args={[0.04, 0.04, 8, 16]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={1.0}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Role 1: Shriffle Technologies (Current) - Floating 3D Holographic Slab */}
      <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3} position={[-0.4, 1.8, 0.2]}>
        <RoundedBox args={[7.2, 3.8, 0.2]} radius={0.14} smoothness={4}>
          <meshStandardMaterial
            color={isDark ? '#080c14' : '#ffffff'}
            metalness={0.7}
            roughness={0.2}
            emissive="#00f0ff"
            emissiveIntensity={0.15}
          />
        </RoundedBox>

        <Html center transform distanceFactor={5.5} className="w-[680px] select-none">
          <div
            className={`p-6 rounded-2xl border transition-all duration-300 shadow-2xl font-sans ${
              isDark
                ? 'bg-[#080c14]/95 border-cyan-500/30 text-white shadow-[0_15px_40px_rgba(0,0,0,0.7)]'
                : 'bg-white/95 border-slate-200 text-slate-900 shadow-xl'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 uppercase shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                    CURRENT ROLE
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    December 2025 – Present
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                  Associate Software Engineer
                </h3>
                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 mt-0.5">
                  <Building2 className="w-4 h-4" />
                  <span>Shriffle Technologies Pvt. Ltd.</span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold border border-cyan-500/40 text-cyan-400 bg-cyan-500/10 uppercase self-start">
                FULL-TIME
              </span>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Production-ready backend and API development using Ruby on Rails. Architecting robust microservices, REST endpoints, external vendor integration, and continuous deployment workflows. Designing scalable relational database schemas and executing clean domain abstractions for high-volume customer production workloads.
            </p>

            <ul className="space-y-1.5 mb-4 font-mono text-xs">
              <li className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Production delivery: Service API microservice execution, scheduling workers, multi-tenant background data processing and pipeline telemetry.</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>Authentication design, API rate limits, database protection, indexing strategies, Sidekiq background workers, and PostgreSQL query tuning for client dashboards.</span>
              </li>
            </ul>

            <div className={`pt-3 border-t flex flex-wrap gap-1.5 ${isDark ? 'border-white/[0.08]' : 'border-slate-200'}`}>
              {['Ruby on Rails', 'PostgreSQL', 'Redis', 'Sidekiq', 'REST APIs', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-0.5 rounded-lg border text-[11px] font-mono ${
                    isDark
                      ? 'bg-[#0d121f] border-white/[0.08] text-slate-300'
                      : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Html>
      </Float>

      {/* Role 2: Vistron Infotech (Internship) - Floating 3D Holographic Slab */}
      <Float speed={1.3} rotationIntensity={0.12} floatIntensity={0.25} position={[0.4, -2.4, -0.2]}>
        <RoundedBox args={[7.2, 3.2, 0.2]} radius={0.14} smoothness={4}>
          <meshStandardMaterial
            color={isDark ? '#080c14' : '#ffffff'}
            metalness={0.7}
            roughness={0.2}
            emissive="#818cf8"
            emissiveIntensity={0.12}
          />
        </RoundedBox>

        <Html center transform distanceFactor={5.5} className="w-[680px] select-none">
          <div
            className={`p-6 rounded-2xl border transition-all duration-300 shadow-2xl font-sans ${
              isDark
                ? 'bg-[#080c14]/95 border-indigo-500/30 text-white shadow-[0_15px_40px_rgba(0,0,0,0.7)]'
                : 'bg-white/95 border-slate-200 text-slate-900 shadow-xl'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-2">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-800 border border-slate-700 text-slate-300 uppercase">
                    INTERNSHIP
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    November 2025 – December 2025
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                  Website Developer Intern
                </h3>
                <div className="flex items-center gap-2 text-sm font-semibold text-indigo-400 mt-0.5">
                  <Building2 className="w-4 h-4" />
                  <span>Vistron Infotech</span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold border border-slate-700 text-slate-400 bg-slate-800/40 uppercase self-start">
                INTERNSHIP
              </span>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed mb-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Full-stack web development with dynamic UI components, REST API client integration, client state persistence, and responsive UI implementations across diverse hardware form factors and resolutions.
            </p>

            <ul className="space-y-1 mb-3 font-mono text-xs">
              <li className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Engineered modern responsive user interfaces with reusable UI design primitives.</span>
              </li>
              <li className="flex items-start gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Continuous version control hygiene with Git and agile production release cycles.</span>
              </li>
            </ul>

            <div className={`pt-3 border-t flex flex-wrap gap-1.5 ${isDark ? 'border-white/[0.08]' : 'border-slate-200'}`}>
              {['React', 'JavaScript (ES6+)', 'CSS3', 'REST API Integration', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className={`px-2.5 py-0.5 rounded-lg border text-[11px] font-mono ${
                    isDark
                      ? 'bg-[#0d121f] border-white/[0.08] text-slate-300'
                      : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Html>
      </Float>

      {/* Point Lights */}
      <pointLight position={[-1, 1.8, 2]} color="#00f0ff" intensity={1.5} distance={6} />
      <pointLight position={[1, -2.4, 2]} color="#818cf8" intensity={1.5} distance={6} />
      </group>
    </group>
  );
};
