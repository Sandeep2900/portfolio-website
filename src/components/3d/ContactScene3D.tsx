import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Float, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { Mail, Calendar } from 'lucide-react';
import { LinkedinIcon } from '../SocialIcons';
import { personalInfo } from '../../data/portfolio';

interface ContactScene3DProps {
  position?: [number, number, number];
}

export const ContactScene3D: React.FC<ContactScene3DProps> = ({ position = [0, -132, 0] }) => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 9;
  const scale = isMobile ? Math.min(viewport.width / 9.5, 0.85) : 1;

  const groupRef = useRef<THREE.Group>(null);
  const beaconRef = useRef<THREE.Group>(null);
  const { isDark } = useTheme();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (beaconRef.current) {
      beaconRef.current.rotation.y = t * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <group scale={scale}>
      {/* 3D Pulsing Communication Beacon behind the card */}
      <group ref={beaconRef} position={[0, 1.8, -1.2]}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={2.2}
          />
        </mesh>
        <mesh>
          <torusGeometry args={[1.5, 0.02, 16, 64]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={1.5}
            transparent
            opacity={0.6}
          />
        </mesh>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.2, 0.015, 16, 64]} />
          <meshStandardMaterial
            color="#818cf8"
            emissive="#818cf8"
            emissiveIntensity={1.2}
            transparent
            opacity={0.4}
          />
        </mesh>
        <pointLight color="#00f0ff" intensity={2.5} distance={6} />
      </group>

      {/* Main 3D Contact Card */}
      <Float speed={1.4} rotationIntensity={0.08} floatIntensity={0.2} position={[0, 0, 0]}>
        <RoundedBox args={[7.6, 4.4, 0.22]} radius={0.16} smoothness={4}>
          <meshStandardMaterial
            color={isDark ? '#080c14' : '#ffffff'}
            metalness={0.8}
            roughness={0.2}
            emissive="#00f0ff"
            emissiveIntensity={0.15}
          />
        </RoundedBox>

        <Html center transform distanceFactor={5.5} className="w-[720px] select-none text-center">
          <div
            className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 shadow-2xl font-sans ${
              isDark
                ? 'bg-[#080c14]/98 border-cyan-500/30 text-white shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
                : 'bg-white/98 border-slate-200 text-slate-900 shadow-2xl'
            }`}
          >
            {/* Header Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3 tracking-wider">
              <span>// 06 //</span>
              <span className="uppercase font-bold">GET IN TOUCH</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Let's Build Something Great.
            </h2>

            {/* Subtitle */}
            <p className={`text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Have an innovative product, high-throughput backend requirement, or challenging engineering role? Let's connect and discuss building resilient systems.
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-7">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4" />
                <span>Email Me Directly</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm border transition-all ${
                  isDark
                    ? 'bg-[#080c14] border-white/15 text-slate-200 hover:border-cyan-400/50 hover:text-white'
                    : 'bg-white border-slate-300 text-slate-700 hover:border-cyan-500 shadow-sm'
                }`}
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}?subject=Schedule%20a%20Chat`}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm border transition-all ${
                  isDark
                    ? 'bg-[#080c14] border-white/15 text-slate-200 hover:border-cyan-400/50 hover:text-white'
                    : 'bg-white border-slate-300 text-slate-700 hover:border-cyan-500 shadow-sm'
                }`}
              >
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Schedule a 15m Chat</span>
              </a>
            </div>

            {/* Status Line */}
            <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Based in Bhopal, India • Open to Remote Worldwide / Relocation Roles</span>
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
