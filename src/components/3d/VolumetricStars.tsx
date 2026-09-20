import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useScene } from '../../context/SceneContext';
import { useTheme } from '../../context/ThemeContext';

interface VolumetricStarsProps {
  count?: number;
}

export const VolumetricStars: React.FC<VolumetricStarsProps> = ({ count = 1600 }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const matRef = useRef<THREE.PointsMaterial>(null);
  const { mousePos, isCinematic, scrollProgress } = useScene();
  const { isDark } = useTheme();

  const actualCount = isCinematic ? count : Math.round(count * 0.35);

  // Generate random 3D positions and colors for stars
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(actualCount * 3);
    const col = new Float32Array(actualCount * 3);

    const cyan = new THREE.Color(isDark ? '#38bdf8' : '#0284c7');
    const sky = new THREE.Color(isDark ? '#00f0ff' : '#0369a1');
    const indigo = new THREE.Color(isDark ? '#a5b4fc' : '#6366f1');
    const white = new THREE.Color(isDark ? '#ffffff' : '#94a3b8');

    for (let i = 0; i < actualCount; i++) {
      // Spread across deep background Z (-10 to -70) and full vertical height
      const x = (Math.random() - 0.5) * 80;
      const y = Math.random() * -180 + 25;
      const z = (Math.random() - 0.5) * 65 - 20;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Color variation
      const r = Math.random();
      let chosenColor = white;
      if (r < 0.35) chosenColor = sky;
      else if (r < 0.65) chosenColor = cyan;
      else if (r < 0.85) chosenColor = indigo;

      col[i * 3] = chosenColor.r * (isCinematic && isDark ? 1.4 : 1.0);
      col[i * 3 + 1] = chosenColor.g * (isCinematic && isDark ? 1.4 : 1.0);
      col[i * 3 + 2] = chosenColor.b * (isCinematic && isDark ? 1.4 : 1.0);
    }

    return [pos, col];
  }, [actualCount, isCinematic, isDark]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();

    // Twinkling shining effect
    if (matRef.current) {
      const pulse = Math.sin(t * 2.5) * 0.15 + 0.85;
      matRef.current.size = (isCinematic ? 0.14 : 0.11) * pulse;
      matRef.current.opacity = (isDark ? 0.75 : 0.4) + Math.sin(t * 3.0) * 0.15;
    }

    // Dynamic rotation
    pointsRef.current.rotation.y += delta * (isCinematic ? 0.03 : 0.015);

    // Parallax: deep field drifting with scroll
    const targetParallaxY = -scrollProgress * 20;
    pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, targetParallaxY, 0.06);

    // Mouse parallax tilt
    const targetRotX = mousePos.y * 0.05;
    const targetRotZ = mousePos.x * 0.04;
    pointsRef.current.rotation.x += (targetRotX - pointsRef.current.rotation.x) * 0.05;
    pointsRef.current.rotation.z += (targetRotZ - pointsRef.current.rotation.z) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        ref={matRef}
        size={isCinematic ? 0.14 : 0.11}
        vertexColors
        transparent
        opacity={isDark ? 0.85 : 0.45}
        sizeAttenuation
        blending={isDark ? THREE.AdditiveBlending : THREE.NormalBlending}
        depthWrite={false}
      />
    </points>
  );
};
