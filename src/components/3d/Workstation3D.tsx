import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useScene } from '../../context/SceneContext';
import { useTheme } from '../../context/ThemeContext';

export const Workstation3D: React.FC = () => {
  const { mousePos, scrollProgress, isCinematic } = useScene();
  const { isDark } = useTheme();

  const rootRef = useRef<THREE.Group>(null);
  const laptopGroupRef = useRef<THREE.Group>(null);
  const reactAtomRef = useRef<THREE.Group>(null);
  const rubyGemRef = useRef<THREE.Mesh>(null);
  const dbCylinderRef = useRef<THREE.Group>(null);
  const orbitRing1Ref = useRef<THREE.Mesh>(null);
  const orbitRing2Ref = useRef<THREE.Mesh>(null);

  // Procedural canvas texture for screen showing animated cyber code
  const screenTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      // Dark cyber background
      ctx.fillStyle = '#050811';
      ctx.fillRect(0, 0, 512, 320);

      // Terminal header bar
      ctx.fillStyle = '#0d1527';
      ctx.fillRect(0, 0, 512, 36);

      // Terminal window dots
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(20, 18, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#eab308';
      ctx.beginPath();
      ctx.arc(36, 18, 5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#22c55e';
      ctx.beginPath();
      ctx.arc(52, 18, 5, 0, Math.PI * 2);
      ctx.fill();

      // Title text
      ctx.font = 'bold 13px monospace';
      ctx.fillStyle = '#38bdf8';
      ctx.fillText('sandeep@arch-core: ~/api-engine (ruby 3.3)', 75, 22);

      // Code lines
      const lines = [
        { color: '#818cf8', text: 'class IngressPipeline < ApplicationService' },
        { color: '#00f0ff', text: '  include DeterministicRecovery' },
        { color: '#94a3b8', text: '  def execute(request_payload:)' },
        { color: '#22c55e', text: '    session = Auth::JwtValidator.call(token)' },
        { color: '#f43f5e', text: '    record  = DB::Transaction.atomic do' },
        { color: '#38bdf8', text: '      ActiveRecord::Record.lock.persist!(payload)' },
        { color: '#f43f5e', text: '    end' },
        { color: '#a855f7', text: '    Queue::Sidekiq.dispatch_async(record.id)' },
        { color: '#00f0ff', text: '    Response.ok(status: 200, latency: "14ms")' },
        { color: '#94a3b8', text: '  end' },
        { color: '#818cf8', text: 'end' },
      ];

      lines.forEach((line, index) => {
        ctx.fillStyle = line.color;
        ctx.font = '12px "Courier New", monospace';
        ctx.fillText(line.text, 24, 66 + index * 22);
      });
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (laptopGroupRef.current) {
      // Gentle floating tilt reacting to mouse coordinates
      const targetRotY = 0.35 + mousePos.x * 0.25;
      const targetRotX = 0.20 - mousePos.y * 0.18;
      laptopGroupRef.current.rotation.y = THREE.MathUtils.lerp(laptopGroupRef.current.rotation.y, targetRotY, 0.05);
      laptopGroupRef.current.rotation.x = THREE.MathUtils.lerp(laptopGroupRef.current.rotation.x, targetRotX, 0.05);
    }

    if (rootRef.current) {
      // Gentle depth drift on scroll
      const targetY = -scrollProgress * 6;
      const targetRotZ = (scrollProgress * 0.3);
      rootRef.current.position.y = THREE.MathUtils.lerp(rootRef.current.position.y, targetY, 0.04);
      rootRef.current.rotation.z = THREE.MathUtils.lerp(rootRef.current.rotation.z, targetRotZ, 0.04);
    }

    // Orbiting Ruby Crystal
    if (rubyGemRef.current) {
      rubyGemRef.current.rotation.y = t * 0.8;
      rubyGemRef.current.rotation.x = t * 0.5;
      rubyGemRef.current.position.y = 1.1 + Math.sin(t * 1.5) * 0.12;
    }

    // Orbiting React Atom rings
    if (reactAtomRef.current) {
      reactAtomRef.current.rotation.y = t * 0.6;
      reactAtomRef.current.rotation.x = t * 0.4;
      reactAtomRef.current.position.y = -0.6 + Math.cos(t * 1.3) * 0.15;
    }

    // Database cylinders
    if (dbCylinderRef.current) {
      dbCylinderRef.current.rotation.y = -t * 0.4;
      dbCylinderRef.current.position.y = 0.8 + Math.sin(t * 1.2 + 1) * 0.1;
    }

    // Holographic Orbit Rings
    if (orbitRing1Ref.current) {
      orbitRing1Ref.current.rotation.x = Math.PI / 3 + t * 0.2;
      orbitRing1Ref.current.rotation.y = t * 0.15;
    }
    if (orbitRing2Ref.current) {
      orbitRing2Ref.current.rotation.x = -Math.PI / 4 - t * 0.18;
      orbitRing2Ref.current.rotation.z = t * 0.22;
    }
  });

  const baseMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: isDark ? '#0b1120' : '#f1f5f9',
        metalness: isDark ? 0.88 : 0.6,
        roughness: isDark ? 0.22 : 0.3,
      }),
    [isDark]
  );

  const screenBackMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: isDark ? '#070c18' : '#e2e8f0',
        metalness: isDark ? 0.92 : 0.7,
        roughness: isDark ? 0.18 : 0.25,
      }),
    [isDark]
  );

  const keyboardMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: isDark ? '#030712' : '#ffffff',
        metalness: isDark ? 0.7 : 0.2,
        roughness: isDark ? 0.4 : 0.5,
        emissive: isDark ? '#00f0ff' : '#0284c7',
        emissiveIntensity: isDark ? (isCinematic ? 0.25 : 0.08) : 0.04,
      }),
    [isDark, isCinematic]
  );

  const displayMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        map: screenTexture,
        transparent: !isDark,
        opacity: isDark ? 1.0 : 0.85,
      }),
    [screenTexture, isDark]
  );

  return (
    <group ref={rootRef} position={[2.5, 0.2, -2.8]}>
      {/* Interactive Floating Workstation Laptop */}
      <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.35}>
        <group ref={laptopGroupRef} scale={0.88}>
          
          {/* Laptop Base Body */}
          <mesh position={[0, -0.06, 0]} material={baseMaterial}>
            <boxGeometry args={[2.5, 0.09, 1.7]} />
          </mesh>

          {/* Keyboard Recessed Area */}
          <mesh position={[0, -0.01, -0.18]} material={keyboardMaterial}>
            <boxGeometry args={[2.2, 0.02, 1.0]} />
          </mesh>

          {/* Trackpad */}
          <mesh position={[0, -0.01, 0.52]}>
            <boxGeometry args={[0.8, 0.015, 0.5]} />
            <meshStandardMaterial
              color={isDark ? '#0a0f1d' : '#e2e8f0'}
              metalness={isDark ? 0.9 : 0.3}
              roughness={0.2}
            />
          </mesh>

          {/* Front Glow Edge Strip */}
          <mesh position={[0, -0.04, 0.86]}>
            <boxGeometry args={[2.3, 0.02, 0.02]} />
            <meshStandardMaterial
              color={isDark ? '#00f0ff' : '#0284c7'}
              emissive={isDark ? '#00f0ff' : '#0284c7'}
              emissiveIntensity={isDark ? (isCinematic ? 2.5 : 1.2) : 0.3}
            />
          </mesh>

          {/* Laptop Screen Pivot / Lid (angled at ~110 degrees) */}
          <group position={[0, 0, -0.84]} rotation={[-1.9, 0, 0]}>
            {/* Screen Back Chassis */}
            <mesh position={[0, 0.85, 0]} material={screenBackMaterial}>
              <boxGeometry args={[2.5, 1.7, 0.06]} />
            </mesh>

            {/* Glowing Logo on Back */}
            <mesh position={[0, 0.85, -0.035]}>
              <circleGeometry args={[0.16, 32]} />
              <meshStandardMaterial
                color={isDark ? '#00f0ff' : '#0284c7'}
                emissive={isDark ? '#00f0ff' : '#0284c7'}
                emissiveIntensity={isDark ? (isCinematic ? 3.0 : 1.5) : 0.4}
              />
            </mesh>

            {/* Display Bezel */}
            <mesh position={[0, 0.85, 0.032]}>
              <boxGeometry args={[2.42, 1.62, 0.01]} />
              <meshBasicMaterial color={isDark ? '#020408' : '#e2e8f0'} />
            </mesh>

            {/* Screen Texture Surface */}
            <mesh position={[0, 0.85, 0.04]} material={displayMaterial}>
              <planeGeometry args={[2.26, 1.46]} />
            </mesh>
          </group>

        </group>
      </Float>

      {/* Floating 3D Ruby Gem (Ruby on Rails Backend Symbol) */}
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.6} position={[-2.1, 1.1, 0.6]}>
        <group>
          <mesh ref={rubyGemRef}>
            <octahedronGeometry args={[0.38, 0]} />
            <meshStandardMaterial
              color="#e11d48"
              emissive={isDark ? '#f43f5e' : '#e11d48'}
              emissiveIntensity={isDark ? (isCinematic ? 2.2 : 1.0) : 0.15}
              metalness={isDark ? 0.85 : 0.3}
              roughness={0.15}
              transparent
              opacity={isDark ? 0.95 : 0.65}
            />
          </mesh>
          {isDark && <pointLight color="#f43f5e" intensity={isCinematic ? 2.5 : 1.2} distance={3} />}
        </group>
      </Float>

      {/* Floating 3D React Atom Orb (Frontend Architecture) */}
      <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.5} position={[2.1, -0.7, 0.8]}>
        <group ref={reactAtomRef}>
          {/* Core Nucleus */}
          <mesh>
            <sphereGeometry args={[0.15, 24, 24]} />
            <meshStandardMaterial
              color={isDark ? '#00f0ff' : '#0284c7'}
              emissive={isDark ? '#00f0ff' : '#0284c7'}
              emissiveIntensity={isDark ? (isCinematic ? 3.2 : 1.5) : 0.3}
              transparent
              opacity={isDark ? 1.0 : 0.75}
            />
          </mesh>
          {/* Orbital Ring 1 */}
          <mesh rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[0.45, 0.016, 16, 64]} />
            <meshStandardMaterial
              color={isDark ? '#38bdf8' : '#0284c7'}
              emissive={isDark ? '#00f0ff' : '#0284c7'}
              emissiveIntensity={isDark ? (isCinematic ? 2.0 : 0.9) : 0.15}
              transparent
              opacity={isDark ? 0.85 : 0.5}
            />
          </mesh>
          {/* Orbital Ring 2 */}
          <mesh rotation={[-Math.PI / 4, 0, 0]}>
            <torusGeometry args={[0.45, 0.016, 16, 64]} />
            <meshStandardMaterial
              color={isDark ? '#38bdf8' : '#0284c7'}
              emissive={isDark ? '#00f0ff' : '#0284c7'}
              emissiveIntensity={isDark ? (isCinematic ? 2.0 : 0.9) : 0.15}
              transparent
              opacity={isDark ? 0.85 : 0.5}
            />
          </mesh>
          {/* Orbital Ring 3 */}
          <mesh rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[0.45, 0.016, 16, 64]} />
            <meshStandardMaterial
              color={isDark ? '#818cf8' : '#4f46e5'}
              emissive={isDark ? '#818cf8' : '#4f46e5'}
              emissiveIntensity={isDark ? (isCinematic ? 1.8 : 0.8) : 0.15}
              transparent
              opacity={isDark ? 0.85 : 0.5}
            />
          </mesh>
        </group>
      </Float>

      {/* Floating PostgreSQL ACID Data Storage Cylinder */}
      <Float speed={1.9} rotationIntensity={0.25} floatIntensity={0.4} position={[1.8, 1.4, -0.4]}>
        <group ref={dbCylinderRef} scale={0.7}>
          {/* Disc 1 */}
          <mesh position={[0, 0.32, 0]}>
            <cylinderGeometry args={[0.34, 0.34, 0.16, 32]} />
            <meshStandardMaterial
              color={isDark ? '#0284c7' : '#38bdf8'}
              emissive={isDark ? '#38bdf8' : '#0284c7'}
              emissiveIntensity={isDark ? 0.8 : 0.1}
              metalness={isDark ? 0.9 : 0.4}
              roughness={0.2}
              transparent
              opacity={isDark ? 1.0 : 0.7}
            />
          </mesh>
          {/* Disc 2 */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.34, 0.34, 0.16, 32]} />
            <meshStandardMaterial
              color={isDark ? '#0369a1' : '#0284c7'}
              emissive={isDark ? '#0284c7' : '#0369a1'}
              emissiveIntensity={isDark ? 0.6 : 0.1}
              metalness={isDark ? 0.9 : 0.4}
              roughness={0.2}
              transparent
              opacity={isDark ? 1.0 : 0.7}
            />
          </mesh>
          {/* Disc 3 */}
          <mesh position={[0, -0.32, 0]}>
            <cylinderGeometry args={[0.34, 0.34, 0.16, 32]} />
            <meshStandardMaterial
              color={isDark ? '#075985' : '#0369a1'}
              emissive={isDark ? '#0369a1' : '#075985'}
              emissiveIntensity={isDark ? 0.5 : 0.1}
              metalness={isDark ? 0.9 : 0.4}
              roughness={0.2}
              transparent
              opacity={isDark ? 1.0 : 0.7}
            />
          </mesh>
          {isDark && <pointLight color="#38bdf8" intensity={1.8} distance={2.5} />}
        </group>
      </Float>

      {/* Outer Holographic Orbit Rings */}
      <mesh ref={orbitRing1Ref} position={[0, 0, -0.5]}>
        <torusGeometry args={[2.5, 0.012, 16, 100]} />
        <meshStandardMaterial
          color={isDark ? '#00f0ff' : '#0284c7'}
          emissive={isDark ? '#00f0ff' : '#0284c7'}
          emissiveIntensity={isDark ? (isCinematic ? 1.8 : 0.6) : 0.1}
          transparent
          opacity={isDark ? (isCinematic ? 0.5 : 0.25) : 0.15}
        />
      </mesh>

      <mesh ref={orbitRing2Ref} position={[0, 0, -0.7]}>
        <torusGeometry args={[3.0, 0.01, 16, 100]} />
        <meshStandardMaterial
          color={isDark ? '#818cf8' : '#6366f1'}
          emissive={isDark ? '#818cf8' : '#6366f1'}
          emissiveIntensity={isDark ? (isCinematic ? 1.4 : 0.4) : 0.1}
          transparent
          opacity={isDark ? (isCinematic ? 0.35 : 0.15) : 0.1}
        />
      </mesh>

      {/* Cybernetic Accent Point Light */}
      <pointLight
        position={[0, 1.5, 2]}
        color={isDark ? '#00f0ff' : '#0284c7'}
        intensity={isDark ? (isCinematic ? 2.5 : 1.2) : (isCinematic ? 0.6 : 0.2)}
        distance={6}
      />
    </group>
  );
};
