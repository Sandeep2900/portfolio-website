import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useScene } from '../../context/SceneContext';

export const CameraController: React.FC = () => {
  const { camera } = useThree();
  const { scrollProgress, mousePos, isCinematic } = useScene();

  const currentPos = useRef(new THREE.Vector3(0, 0, 8.5));
  const lookTarget = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((_, delta) => {
    // Mouse parallax — camera drifts with cursor
    const parallaxScale = isCinematic ? 0.6 : 0.3;
    const desiredX = mousePos.x * parallaxScale;
    const desiredY = mousePos.y * (parallaxScale * 0.65);
    // Scroll-based depth push: camera moves forward as user scrolls
    const desiredZ = (isCinematic ? 8.2 : 8.5) - scrollProgress * 1.8;

    const damping = Math.min(delta * 3.5, 0.15);

    currentPos.current.x = THREE.MathUtils.lerp(currentPos.current.x, desiredX, damping);
    currentPos.current.y = THREE.MathUtils.lerp(currentPos.current.y, desiredY, damping);
    currentPos.current.z = THREE.MathUtils.lerp(currentPos.current.z, desiredZ, damping);

    camera.position.copy(currentPos.current);

    // Subtle lookAt offset to give high-end cinematic feel
    const targetLookX = mousePos.x * (isCinematic ? 0.2 : 0.1);
    const targetLookY = mousePos.y * (isCinematic ? 0.15 : 0.08);
    lookTarget.current.x = THREE.MathUtils.lerp(lookTarget.current.x, targetLookX, damping);
    lookTarget.current.y = THREE.MathUtils.lerp(lookTarget.current.y, targetLookY, damping);

    camera.lookAt(lookTarget.current);
  });

  return null;
};
