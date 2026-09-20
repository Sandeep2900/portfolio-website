import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { Terminal, Database, Cpu, ArrowRight } from 'lucide-react';

interface ArchitectureScene3DProps {
  position?: [number, number, number];
}

export const ArchitectureScene3D: React.FC<ArchitectureScene3DProps> = ({ position = [0, -22, 0] }) => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 9;
  const scale = isMobile ? Math.min(viewport.width / 9.5, 0.88) : 1;

  const groupRef = useRef<THREE.Group>(null);
  const dataFlowRef = useRef<THREE.Group>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const { isDark } = useTheme();

  const pipelineSteps = [
    {
      step: 1,
      name: 'HTTP/2 REST Request',
      detail: 'Ingress API traffic & JWT token validation',
      tag: 'INGRESS',
      color: '#00f0ff'
    },
    {
      step: 2,
      name: 'Rails Router & Controller',
      detail: 'Strong parameters sanitize, policy check via Pundit',
      tag: 'ROUTING',
      color: '#38bdf8'
    },
    {
      step: 3,
      name: 'Service Object & Active Record',
      detail: 'Business logic in isolation & PostgreSQL transaction',
      tag: 'DOMAIN',
      color: '#818cf8'
    },
    {
      step: 4,
      name: 'Sidekiq Queue via Redis',
      detail: 'Async workers for notifications & telemetry stream',
      tag: 'ASYNC QUEUE',
      color: '#a855f7'
    },
    {
      step: 5,
      name: 'PostgreSQL ACID Transaction',
      detail: 'WAL written, committed data & sub-20ms roundtrip',
      tag: 'PERSISTENCE',
      color: '#10b981'
    }
  ];

  const pillars = [
    {
      icon: Terminal,
      title: 'Rails API Design',
      desc: 'RESTful architectures with strong contract boundaries and JWT authorization.'
    },
    {
      icon: Database,
      title: 'PostgreSQL Tuning',
      desc: 'Strict data integrity, composite indices, foreign keys, and ACID transactions.'
    },
    {
      icon: Cpu,
      title: 'Sidekiq & Redis',
      desc: 'Non-blocking background jobs, scheduled queue worker concurrency.'
    }
  ];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (dataFlowRef.current) {
      dataFlowRef.current.position.x = ((t * 2) % 6) - 3;
    }
  });

  const terminalX = isMobile ? 0 : 2.5;
  const terminalY = isMobile ? -1.8 : 0.2;
  const pillarsX = isMobile ? 0 : -2.8;
  const pillarsY = isMobile ? 2.0 : 0.2;

  return (
    <group ref={groupRef} position={position}>
      <group scale={scale}>
        {/* 3D Connecting Spine Beam */}
        <mesh position={[terminalX, terminalY + 0.2, -0.3]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 6.2, 16]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={0.8}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Floating Animated Data Pulse Packet */}
        <group ref={dataFlowRef} position={[terminalX, terminalY + 0.2, -0.3]}>
          <mesh>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#38bdf8"
              emissiveIntensity={2.5}
            />
          </mesh>
          <pointLight color="#38bdf8" intensity={1.5} distance={2.5} />
        </group>

        {/* Right Column: 3D High-Tech Architecture Pipeline Execution Terminal */}
        <group position={[terminalX, terminalY, 0]}>
          <RoundedBox args={[5.4, 4.4, 0.25]} radius={0.15} smoothness={4}>
            <meshStandardMaterial
              color={isDark ? '#080c14' : '#ffffff'}
              metalness={0.7}
              roughness={0.2}
              emissive="#00f0ff"
              emissiveIntensity={0.15}
            />
          </RoundedBox>

          <Html
            position={[0, 0, 0.15]}
            center
            transform
            distanceFactor={5.4}
            className="w-[510px] select-none"
          >
            <div
              className={`w-full rounded-2xl overflow-hidden border font-mono shadow-2xl transition-all ${
                isDark
                  ? 'bg-[#080c14]/98 border-cyan-500/30 text-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.7)]'
                  : 'bg-white/98 border-slate-200 text-slate-900 shadow-xl'
              }`}
            >
              {/* Header */}
              <div
                className={`px-5 py-3.5 border-b flex items-center justify-between text-xs ${
                  isDark ? 'bg-[#06080d] border-white/[0.08]' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-cyan-400">
                  <Terminal className="w-4 h-4" />
                  <span>Architecture Pipeline Execution (3D Live)</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-[10px] font-bold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>STATUS: 200 OK</span>
                </div>
              </div>

              {/* Steps interactive list */}
              <div className="p-4 space-y-2.5 text-xs">
                {pipelineSteps.map((step, idx) => {
                  const isSelected = activeStep === idx;
                  return (
                    <div
                      key={step.name}
                      onClick={() => setActiveStep(idx)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-cyan-950/40 border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                          : isDark
                          ? 'bg-[#0c1220]/60 border-white/[0.05] hover:border-cyan-500/30'
                          : 'bg-slate-50 border-slate-200 hover:border-cyan-500/40'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                          style={{ backgroundColor: `${step.color}22`, color: step.color }}
                        >
                          {step.step}
                        </div>
                        <div>
                          <div className="font-bold text-xs flex items-center gap-2">
                            <span className={isSelected ? 'text-cyan-300 font-semibold' : ''}>{step.name}</span>
                            <span
                              className="text-[9px] px-1.5 py-0.2 rounded font-mono font-bold"
                              style={{ backgroundColor: `${step.color}20`, color: step.color }}
                            >
                              {step.tag}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{step.detail}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Bottom live stats */}
                <div
                  className={`pt-3 border-t flex items-center justify-between text-[11px] ${
                    isDark ? 'border-white/[0.08]' : 'border-slate-200'
                  }`}
                >
                  <span className="text-emerald-400 font-bold">Latency: 18ms | Error Rate: &lt;0.01%</span>
                  <a href="#contact" className="text-cyan-400 hover:underline flex items-center gap-1">
                    <span>Inspect System Architecture</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </Html>
        </group>

        {/* Left Pillars Floating 3D Cards */}
        <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4} position={[pillarsX, pillarsY, 0.2]}>
          <Html center transform distanceFactor={5.5} className="w-[440px] select-none">
            <div className="space-y-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`p-3.5 rounded-xl border transition-all duration-300 ${
                      isDark
                        ? 'bg-[#080c14]/90 border-cyan-500/25 shadow-lg hover:border-cyan-400'
                        : 'bg-white/95 border-slate-200 shadow-md hover:border-cyan-500'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans pl-10">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </Html>
        </Float>

        {/* Point Light Accent */}
        <pointLight position={[terminalX, terminalY, 2]} color="#00f0ff" intensity={1.5} distance={6} />
      </group>
    </group>
  );
};
