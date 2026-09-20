import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { VolumetricStars } from './VolumetricStars';
import { CameraController } from './CameraController';
import { HeroScene3D } from './HeroScene3D';
import { Workstation3D } from './Workstation3D';
import { useScene } from '../../context/SceneContext';
import { useTheme } from '../../context/ThemeContext';

export const SceneContainer: React.FC = () => {
  const { isCinematic, mousePos } = useScene();
  const { isDark } = useTheme();

  return (
    <div className="fixed inset-0 z-10 w-full h-full pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={isCinematic ? [1, 2] : [1, 1.2]}
        className="pointer-events-none"
      >
        {/* Ambient & Directional Real 3D Lights */}
        <ambientLight intensity={isDark ? (isCinematic ? 0.7 : 0.5) : 1.0} color={isDark ? '#0f172a' : '#ffffff'} />
        <directionalLight position={[10, 15, 10]} intensity={isDark ? (isCinematic ? 1.6 : 1.0) : 1.2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={isDark ? 0.4 : 0.2} color={isDark ? '#818cf8' : '#e2e8f0'} />
        
        {/* Dynamic Point Light tracking user cursor in 3D */}
        <pointLight
          position={[mousePos.x * 7, mousePos.y * 5, 4.5]}
          intensity={isDark ? (isCinematic ? 2.5 : 1.2) : 0.6}
          color={isDark ? '#00f0ff' : '#bae6fd'}
          distance={12}
        />

        {/* Secondary Warm Cyber Rim Light */}
        <pointLight
          position={[-mousePos.x * 6, -mousePos.y * 4, 3]}
          intensity={isDark ? (isCinematic ? 1.8 : 0.8) : 0.4}
          color={isDark ? '#f43f5e' : '#e0e7ff'}
          distance={10}
        />

        {/* Gentle Camera Parallax Controller */}
        <CameraController />

        {/* 3D Volumetric Starfield across entire depth */}
        <VolumetricStars count={isDark ? 1600 : 700} />

        {/* 3D Interactive Cyber Workstation */}
        <Suspense fallback={null}>
          <Workstation3D />
        </Suspense>

        {/* Decorative Hero Atmospheric Rings & Lights */}
        <Suspense fallback={null}>
          <HeroScene3D position={[0, 0, 0]} />
        </Suspense>

        {/* Postprocessing Bloom & Vignette strictly for Dark Mode (prevents washed-out haze in light mode) */}
        {isCinematic && isDark && (
          <EffectComposer>
            <Bloom
              luminanceThreshold={0.18}
              luminanceSmoothing={0.9}
              intensity={1.25}
              mipmapBlur
            />
            <Vignette eskil={false} offset={0.12} darkness={0.65} />
          </EffectComposer>
        )}
      </Canvas>
    </div>
  );
};
