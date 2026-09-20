import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { GraduationCap, MapPin, Layers, Code, Database, Sparkles } from 'lucide-react';

interface EducationPhilosophy3DProps {
  position?: [number, number, number];
}

export const EducationPhilosophy3D: React.FC<EducationPhilosophy3DProps> = ({ position = [0, -110, 0] }) => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 9;
  const scale = isMobile ? Math.min(viewport.width / 9.5, 0.85) : 1;

  const groupRef = useRef<THREE.Group>(null);
  const cube1Ref = useRef<THREE.Mesh>(null);
  const cube2Ref = useRef<THREE.Mesh>(null);
  const { isDark } = useTheme();

  const philosophies = [
    {
      icon: Layers,
      title: 'Clean Architecture',
      desc: 'Maintainable, modular codebases with strict separation of concerns, single-responsibility services, and low technical debt.'
    },
    {
      icon: Code,
      title: 'API-First Design',
      desc: 'Predictable, contract-tested endpoints, structured JSON responses, and clean versioning to prevent breaking consumer integrations.'
    },
    {
      icon: Database,
      title: 'High-Throughput Performance',
      desc: 'ACID compliance, normalized models where needed, efficient caching layers, and background workers to keep user latencies minimal.'
    },
    {
      icon: Sparkles,
      title: 'Continuous Evolution',
      desc: 'Technology is an ongoing journey of refinement. Embracing new paradigms, deep testing, and optimizing code quality.'
    }
  ];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (cube1Ref.current) {
      cube1Ref.current.rotation.x = t * 0.3;
      cube1Ref.current.rotation.y = t * 0.5;
    }
    if (cube2Ref.current) {
      cube2Ref.current.rotation.y = -t * 0.4;
      cube2Ref.current.rotation.z = t * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <group scale={scale}>
      {/* 3D Decorative Glass Polyhedra */}
      <mesh ref={cube1Ref} position={[-4, 2.5, -1]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#00f0ff"
          wireframe
          emissive="#00f0ff"
          emissiveIntensity={1.0}
        />
      </mesh>

      <mesh ref={cube2Ref} position={[4, -2.5, -1]}>
        <dodecahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#818cf8"
          wireframe
          emissive="#818cf8"
          emissiveIntensity={1.0}
        />
      </mesh>

      {/* Main 3D Container combining Education & Philosophy */}
      <Float speed={1.3} rotationIntensity={0.08} floatIntensity={0.2} position={[0, 0, 0]}>
        <RoundedBox args={[8.8, 5.2, 0.22]} radius={0.16} smoothness={4}>
          <meshStandardMaterial
            color={isDark ? '#080c14' : '#ffffff'}
            metalness={0.7}
            roughness={0.2}
            emissive="#00f0ff"
            emissiveIntensity={0.12}
          />
        </RoundedBox>

        <Html center transform distanceFactor={5.6} className="w-[840px] select-none">
          <div
            className={`p-7 sm:p-9 rounded-3xl border transition-all duration-300 shadow-2xl font-sans ${
              isDark
                ? 'bg-[#080c14]/98 border-cyan-500/30 text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
                : 'bg-white/98 border-slate-200 text-slate-900 shadow-2xl'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
              {/* Left: Education Card (5 cols) */}
              <div className="lg:col-span-5 flex flex-col p-5 rounded-2xl bg-[#0b101c]/70 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tracking-wider">
                  <span>// 05 //</span>
                  <span className="uppercase font-bold">FOUNDATION</span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>

                <div className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wide mb-1">
                  DEGREE • B.TECH CSE
                </div>

                <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-0.5">
                  Bachelor of Technology
                </h3>
                <p className="text-xs font-semibold text-slate-400 mb-4">
                  Computer Science &amp; Engineering
                </p>

                {/* Specs */}
                <div className="space-y-2 font-mono text-xs border-t border-white/[0.08] pt-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Institution:</span>
                    <span className="font-semibold text-right text-slate-200">
                      UIT Barkatullah University
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Graduation Year:</span>
                    <span className="font-semibold text-slate-200">2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Cumulative Score:</span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-cyan-950 border border-cyan-500/40 text-cyan-300">
                      8.2 / 10.0 CGPA
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  <strong className="text-cyan-300">Core Coursework:</strong> Operating Systems, Database Management Systems, Data Structures &amp; Algorithms, Computer Networks, and Object Oriented Programming.
                </p>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 pt-2.5 border-t border-white/[0.08]">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Bhopal, Madhya Pradesh • Regular</span>
                </div>
              </div>

              {/* Right: Engineering Philosophy (7 cols) */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                    Engineering Philosophy
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Guiding architectural principles for building software that survives production scale.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {philosophies.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className={`p-4 rounded-xl border transition-all ${
                          isDark
                            ? 'bg-[#0b0f19] border-white/10 hover:border-cyan-500/40'
                            : 'bg-slate-50 border-slate-200 hover:border-cyan-500'
                        }`}
                      >
                        <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-2">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="text-xs font-bold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Html>
      </Float>

      {/* Point Light */}
      <pointLight position={[0, 0, 2]} color="#00f0ff" intensity={1.5} distance={6} />
      </group>
    </group>
  );
};
