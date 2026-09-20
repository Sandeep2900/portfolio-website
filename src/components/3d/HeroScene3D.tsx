import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { useScene } from '../../context/SceneContext';

interface HeroScene3DProps {
  position?: [number, number, number];
}

export const HeroScene3D: React.FC<HeroScene3DProps> = ({ position = [0, 0, 0] }) => {
  const { mousePos, scrollProgress } = useScene();
  const { isDark } = useTheme();

  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.25;
      ringRef.current.rotation.y = t * 0.35;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = -t * 0.2;
      coreRef.current.rotation.z = t * 0.15;
    }

    if (groupRef.current) {
      // 0.2x subtle parallax drift in deep background
      const targetY = position[1] - (scrollProgress * 8);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mousePos.x * 0.08, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Constrained Deep Background Orbit Ring - seated deep at z: -4.5, radius: 1.4, strictly below y: 1.2 */}
      {/* Never extends into terminal title bar or navbar badge */}
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.2} position={[2.8, -0.5, -4.5]}>
        <mesh ref={ringRef}>
          <torusGeometry args={[1.4, 0.015, 16, 64]} />
          <meshStandardMaterial
            color={isDark ? '#00f0ff' : '#0284c7'}
            emissive={isDark ? '#00f0ff' : '#0284c7'}
            emissiveIntensity={isDark ? 0.7 : 0.15}
            transparent
            opacity={isDark ? 0.35 : 0.15}
          />
        </mesh>
      </Float>

      <Float speed={1.0} rotationIntensity={0.15} floatIntensity={0.2} position={[2.8, -0.5, -5.0]}>
        <mesh ref={coreRef}>
          <torusGeometry args={[1.8, 0.012, 16, 64]} />
          <meshStandardMaterial
            color={isDark ? '#818cf8' : '#6366f1'}
            emissive={isDark ? '#818cf8' : '#6366f1'}
            emissiveIntensity={isDark ? 0.5 : 0.12}
            transparent
            opacity={isDark ? 0.25 : 0.1}
          />
        </mesh>
      </Float>

      {/* Deep Space Glowing Accent Point Lights */}
      <pointLight position={[2.8, -0.2, -2]} color={isDark ? '#00f0ff' : '#bae6fd'} intensity={isDark ? 1.4 : 0.3} distance={7} />
      <pointLight position={[-2.8, 0.2, -2]} color={isDark ? '#818cf8' : '#e0e7ff'} intensity={isDark ? 1.2 : 0.3} distance={7} />
    </group>
  );
};
