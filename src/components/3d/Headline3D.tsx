import React, { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

interface HeadlineSceneProps {
  mousePos: { x: number; y: number };
}

const HeadlineMesh: React.FC<HeadlineSceneProps> = ({ mousePos }) => {
  const { viewport } = useThree();
  const { isDark } = useTheme();

  const groupRef = useRef<THREE.Group>(null);
  const cursorRef = useRef<THREE.Mesh>(null);

  // In orthographic projection, viewport.width and viewport.height map 1:1 to container pixels
  const width = viewport.width;
  const isNarrow = width < 520;

  // Glyph length factor: 'SANDEEP KUMAR' is ~11.724 units at size 1; 'SANDEEP' is ~6.32 units at size 1
  const fontSize = isNarrow
    ? Math.min(Math.max((width * 0.90) / 6.32, 28), 44)
    : Math.min(Math.max((width * 0.94) / 11.724, 36), 62);

  const lineHeight = fontSize * 1.34;
  const extrusionDepth = Math.max(fontSize * 0.16, 6);
  const bevelThick = Math.max(fontSize * 0.04, 1.8);
  const bevelSz = Math.max(fontSize * 0.02, 1.0);

  const fontUrl = '/fonts/helvetiker_bold.typeface.json';

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Fluid interactive 3D perspective tilt reacting to cursor coordinates
      const targetRotY = mousePos.x * 0.14;
      const targetRotX = -mousePos.y * 0.10;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.08);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.08);
    }

    if (cursorRef.current) {
      const pulse = (Math.sin(t * 4.5) + 1) * 0.5;
      const mat = cursorRef.current.material as THREE.MeshStandardMaterial;
      if (mat) {
        mat.emissiveIntensity = 1.0 + pulse * 2.2;
      }
    }
  });

  // Left boundary anchor: exactly aligns with left margin of the container
  const leftX = -width / 2 + 2;

  // Exact cursor offset based on font metrics: SAKET width at size 1 is ~4.613 units
  const saketSize = fontSize * 1.05;
  const saketWidth = 4.613 * saketSize;
  const cursorWidth = Math.max(fontSize * 0.22, 7);
  const cursorHeight = fontSize * 0.95;

  return (
    <group ref={groupRef}>
      {/* Dynamic 3D lighting system for specular bevel highlights & neon glow */}
      <ambientLight intensity={isDark ? 0.9 : 1.4} />
      <directionalLight position={[120, 180, 200]} intensity={isDark ? 2.0 : 1.6} color="#ffffff" />
      <pointLight position={[-80, 40, 140]} color={isDark ? '#00f0ff' : '#0284c7'} intensity={isDark ? 2.2 : 0.5} distance={500} />
      <pointLight position={[width * 0.3, -30, 120]} color={isDark ? '#38bdf8' : '#0369a1'} intensity={isDark ? 1.8 : 0.4} distance={400} />

      {isNarrow ? (
        /* 3-Line Extruded 3D Text for narrow screens (< 520px) */
        <group position={[leftX, 0, 0]}>
          {/* Line 1: SANDEEP */}
          <mesh position={[0, lineHeight - fontSize * 0.15, 0]}>
            <Text3D
              font={fontUrl}
              size={fontSize}
              height={extrusionDepth}
              curveSegments={10}
              bevelEnabled
              bevelThickness={bevelThick}
              bevelSize={bevelSz}
              bevelSegments={4}
            >
              SANDEEP
              <meshStandardMaterial
                color={isDark ? '#f8fafc' : '#090d16'}
                emissive={isDark ? '#00f0ff' : '#000000'}
                emissiveIntensity={isDark ? 0.35 : 0}
                metalness={isDark ? 0.88 : 0.15}
                roughness={isDark ? 0.16 : 0.45}
              />
            </Text3D>
          </mesh>

          {/* Line 2: KUMAR */}
          <mesh position={[0, -fontSize * 0.15, 0]}>
            <Text3D
              font={fontUrl}
              size={fontSize}
              height={extrusionDepth}
              curveSegments={10}
              bevelEnabled
              bevelThickness={bevelThick}
              bevelSize={bevelSz}
              bevelSegments={4}
            >
              KUMAR
              <meshStandardMaterial
                color={isDark ? '#f8fafc' : '#090d16'}
                emissive={isDark ? '#00f0ff' : '#000000'}
                emissiveIntensity={isDark ? 0.35 : 0}
                metalness={isDark ? 0.88 : 0.15}
                roughness={isDark ? 0.16 : 0.45}
              />
            </Text3D>
          </mesh>

          {/* Line 3: SAKET */}
          <mesh position={[0, -lineHeight - fontSize * 0.15, 0]}>
            <Text3D
              font={fontUrl}
              size={saketSize}
              height={extrusionDepth * 1.1}
              curveSegments={10}
              bevelEnabled
              bevelThickness={bevelThick * 1.1}
              bevelSize={bevelSz * 1.1}
              bevelSegments={4}
            >
              SAKET
              <meshStandardMaterial
                color={isDark ? '#00f0ff' : '#0284c7'}
                emissive={isDark ? '#38bdf8' : '#0369a1'}
                emissiveIntensity={isDark ? 0.85 : 0.15}
                metalness={isDark ? 0.92 : 0.35}
                roughness={isDark ? 0.12 : 0.25}
              />
            </Text3D>
          </mesh>

          {/* 3D Pulsing Neon Terminal Cursor Block */}
          <mesh
            ref={cursorRef}
            position={[saketWidth + 14, -lineHeight + cursorHeight * 0.45 - fontSize * 0.15, extrusionDepth / 2]}
          >
            <boxGeometry args={[cursorWidth, cursorHeight, extrusionDepth]} />
            <meshStandardMaterial
              color={isDark ? '#00f0ff' : '#0284c7'}
              emissive={isDark ? '#00f0ff' : '#0284c7'}
              emissiveIntensity={isDark ? 2.5 : 0.8}
              metalness={0.5}
              roughness={0.1}
            />
          </mesh>
        </group>
      ) : (
        /* 2-Line Extruded 3D Text for desktop & tablet screens (>= 520px) */
        <group position={[leftX, 0, 0]}>
          {/* Line 1: SANDEEP KUMAR */}
          <mesh position={[0, lineHeight * 0.45 - fontSize * 0.2, 0]}>
            <Text3D
              font={fontUrl}
              size={fontSize}
              height={extrusionDepth}
              curveSegments={12}
              bevelEnabled
              bevelThickness={bevelThick}
              bevelSize={bevelSz}
              bevelSegments={5}
            >
              SANDEEP KUMAR
              <meshStandardMaterial
                color={isDark ? '#f8fafc' : '#090d16'}
                emissive={isDark ? '#00f0ff' : '#000000'}
                emissiveIntensity={isDark ? 0.35 : 0}
                metalness={isDark ? 0.88 : 0.15}
                roughness={isDark ? 0.16 : 0.45}
              />
            </Text3D>
          </mesh>

          {/* Line 2: SAKET */}
          <mesh position={[0, -lineHeight * 0.65 - fontSize * 0.2, 0]}>
            <Text3D
              font={fontUrl}
              size={saketSize}
              height={extrusionDepth * 1.1}
              curveSegments={12}
              bevelEnabled
              bevelThickness={bevelThick * 1.1}
              bevelSize={bevelSz * 1.1}
              bevelSegments={5}
            >
              SAKET
              <meshStandardMaterial
                color={isDark ? '#00f0ff' : '#0284c7'}
                emissive={isDark ? '#38bdf8' : '#0369a1'}
                emissiveIntensity={isDark ? 0.85 : 0.15}
                metalness={isDark ? 0.92 : 0.35}
                roughness={isDark ? 0.12 : 0.25}
              />
            </Text3D>
          </mesh>

          {/* 3D Pulsing Neon Terminal Cursor Block */}
          <mesh
            ref={cursorRef}
            position={[saketWidth + 16, -lineHeight * 0.65 + cursorHeight * 0.45 - fontSize * 0.2, extrusionDepth / 2]}
          >
            <boxGeometry args={[cursorWidth, cursorHeight, extrusionDepth]} />
            <meshStandardMaterial
              color={isDark ? '#00f0ff' : '#0284c7'}
              emissive={isDark ? '#00f0ff' : '#0284c7'}
              emissiveIntensity={isDark ? 2.5 : 0.8}
              metalness={0.5}
              roughness={0.1}
            />
          </mesh>
        </group>
      )}
    </group>
  );
};

export const Headline3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(600);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        if (w > 0) setContainerWidth(w);
      }
    };

    updateWidth();

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });

    ro.observe(containerRef.current);

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMousePos({
        x: Math.min(Math.max(x, -1.2), 1.2),
        y: Math.min(Math.max(y, -1.2), 1.2)
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const isNarrow = containerWidth < 520;
  const containerHeight = isNarrow
    ? 'h-[150px] sm:h-[175px]'
    : 'h-[130px] sm:h-[160px] xl:h-[180px]';

  return (
    <div
      ref={containerRef}
      className={`w-full max-w-full ${containerHeight} relative select-none pointer-events-none mb-3 overflow-visible`}
      aria-hidden="true"
    >
      <Canvas
        orthographic
        camera={{ position: [0, 0, 300], near: 0.1, far: 1000 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 2]}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <HeadlineMesh mousePos={mousePos} />
        </Suspense>
      </Canvas>
    </div>
  );
};
