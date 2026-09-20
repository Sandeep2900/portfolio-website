import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Layers,
  Zap,
  Activity,
  CheckCircle2
} from 'lucide-react';

interface ProjectScene3DProps {
  position?: [number, number, number];
}

export const ProjectScene3D: React.FC<ProjectScene3DProps> = ({ position = [0, -66, 0] }) => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 9;
  const scale = isMobile ? Math.min(viewport.width / 9.5, 0.85) : 1;

  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const { isDark } = useTheme();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.4;
      coreRef.current.rotation.y = t * 0.6;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <group scale={scale}>
      {/* 3D Rotating AI Diagnostic Core (Polyhedral Wireframe + Core) */}
      <group ref={coreRef} position={[3.6, 1.8, -0.6]}>
        <mesh>
          <octahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial
            color="#00f0ff"
            wireframe
            emissive="#00f0ff"
            emissiveIntensity={1.2}
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={2.0}
          />
        </mesh>
        <pointLight color="#00f0ff" intensity={2.0} distance={4} />
      </group>

      {/* Main 3D Project Holographic Card */}
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2} position={[0, 0, 0]}>
        <RoundedBox args={[8.8, 5.2, 0.25]} radius={0.18} smoothness={4}>
          <meshStandardMaterial
            color={isDark ? '#080c14' : '#ffffff'}
            metalness={0.8}
            roughness={0.2}
            emissive="#00f0ff"
            emissiveIntensity={hovered ? 0.25 : 0.12}
          />
        </RoundedBox>

        <Html
          center
          transform
          distanceFactor={5.6}
          className="w-[840px] select-none"
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <div
            className={`p-7 sm:p-9 rounded-3xl border transition-all duration-300 shadow-2xl font-sans ${
              isDark
                ? 'bg-[#080c14]/98 border-cyan-500/30 text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
                : 'bg-white/98 border-slate-200 text-slate-900 shadow-2xl'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-center">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.25)]">
                    <Sparkles className="w-3.5 h-3.5" />
                    FLAGSHIP PROJECT
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-slate-400 border border-white/[0.08] bg-[#0d121f]">
                    Auto-Tech AI Engine
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-2 leading-tight">
                  FIXKAR AI — Autonomous Diagnostic &amp; Multi-Tenant Verification Ecosystem
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Full-stack automotive service booking platform with AI diagnostics, multi-tenant workshop operations management, real-time job status tracking, and automated parts verification.
                </p>

                {/* 4 Feature Mini-Cards */}
                <div className="grid grid-cols-2 gap-2.5 w-full mb-4">
                  <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-[#0b0f19] border-white/[0.08]' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="text-xs font-bold text-cyan-400 mb-0.5 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Autonomous Booking Engine</span>
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Multi-step booking pipeline with dynamic bay scheduling.
                    </div>
                  </div>

                  <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-[#0b0f19] border-white/[0.08]' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="text-xs font-bold text-indigo-400 mb-0.5 flex items-center gap-1">
                      <Layers className="w-3 h-3" />
                      <span>Company Management Portal</span>
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Multi-tenant portal for mechanics and operations managers.
                    </div>
                  </div>

                  <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-[#0b0f19] border-white/[0.08]' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="text-xs font-bold text-emerald-400 mb-0.5 flex items-center gap-1">
                      <Activity className="w-3 h-3" />
                      <span>Real-Time SSE Tracking</span>
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Live status updates stream directly to customer devices.
                    </div>
                  </div>

                  <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-[#0b0f19] border-white/[0.08]' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="text-xs font-bold text-amber-400 mb-0.5 flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      <span>Sidekiq &amp; Redis Pipelines</span>
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Asynchronous job orchestration for invoices and alerts.
                    </div>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {['Ruby on Rails', 'React.js', 'PostgreSQL', 'Redis', 'Sidekiq Workers', 'Tailwind CSS'].map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-0.5 rounded-lg border text-[11px] font-mono ${
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
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all"
                  >
                    <span>Live Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-xs border transition-all ${
                      isDark
                        ? 'bg-[#0b0f19] border-white/10 text-slate-300 hover:border-cyan-400/50 hover:text-white'
                        : 'bg-white border-slate-300 text-slate-700 hover:border-cyan-500'
                    }`}
                  >
                    <span>Architecture Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-xs border transition-all ${
                      isDark
                        ? 'bg-[#0b0f19] border-white/10 text-slate-300 hover:border-cyan-400/50 hover:text-white'
                        : 'bg-white border-slate-300 text-slate-700 hover:border-cyan-500'
                    }`}
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column (5 cols): Diagnostic Console Window */}
              <div className="lg:col-span-5 flex flex-col gap-3 font-mono">
                <div className={`rounded-2xl border overflow-hidden shadow-xl ${
                  isDark ? 'bg-[#06080d] border-cyan-500/25' : 'bg-slate-900 border-slate-800 text-white'
                }`}>
                  <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/10 bg-[#04060a] text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-slate-400 text-[10px]">fixkar-telemetry: run_diag</span>
                    <span className="text-cyan-400 text-[10px]">99.98%</span>
                  </div>

                  <div className="p-3.5 space-y-2 text-[11px] text-slate-300">
                    <div className="flex justify-between border-b border-white/[0.06] pb-1">
                      <span>Diagnostic Engine</span>
                      <span className="text-emerald-400 font-bold">ONLINE [100% OK]</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Sidekiq Workers:</span>
                      <span className="text-cyan-300 font-bold">6 Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Redis Cache:</span>
                      <span className="text-indigo-300 font-bold">42.8 MB / 512 MB</span>
                    </div>

                    <div className="p-2 rounded bg-[#020408] border border-white/[0.06] text-[10px] space-y-0.5 text-slate-400 mt-1">
                      <div className="text-emerald-400">&gt; GET /api/v1/workshops/diagnostics</div>
                      <div>Status: 200 OK | Response: 14ms</div>
                      <div className="text-cyan-400">&gt; SSE Stream connected to #9948</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-[#080c14] border-cyan-500/20' : 'bg-slate-100 border-slate-200'}`}>
                    <div className="text-[10px] text-slate-400 mb-1">Diagnostic Bay Telemetry</div>
                    <div className="h-10 rounded bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-bold">
                      Active Bays (12/12)
                    </div>
                  </div>

                  <div className={`p-2.5 rounded-xl border ${isDark ? 'bg-[#080c14] border-indigo-500/20' : 'bg-slate-100 border-slate-200'}`}>
                    <div className="text-[10px] text-slate-400 mb-1">Live Dashboard Overview</div>
                    <div className="h-10 rounded bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs font-bold">
                      Telemetry Stream
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Html>
      </Float>

      {/* Point Light */}
      <pointLight position={[0, 0, 2.5]} color="#00f0ff" intensity={1.8} distance={7} />
      </group>
    </group>
  );
};
