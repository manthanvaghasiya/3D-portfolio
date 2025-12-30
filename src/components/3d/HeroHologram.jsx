import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, MeshDistortMaterial } from "@react-three/drei";

const HeroHologram = () => {
  const outerRingRef = useRef(null);
  const innerRingRef = useRef(null);

  // Animation Loop: Rotates rings every frame
  useFrame((state, delta) => {
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x += delta * 0.2;
      outerRingRef.current.rotation.y += delta * 0.2;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x -= delta * 0.5;
      innerRingRef.current.rotation.z -= delta * 0.5;
    }
  });

  return (
    <group scale={2.5}> {/* Scale up the whole group */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        
        {/* 1. THE NUCLEUS (Distorting Energy Ball) */}
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#06b6d4" // Cyan
            attach="material"
            distort={0.4} // Strength of the wobbly effect
            speed={2}     // Speed of the wobble
            roughness={0}
            metalness={1} // Looks like liquid metal
            emissive="#06b6d4"
            emissiveIntensity={0.5}
            transparent
            opacity={0.8}
          />
        </Sphere>

        {/* 2. THE SHELL (Wireframe Cage) */}
        <Sphere args={[1.5, 16, 16]}>
          <meshBasicMaterial 
            color="#7c3aed" // Violet
            wireframe 
            transparent 
            opacity={0.3} 
          />
        </Sphere>

        {/* 3. OUTER RING (Rotating Torus) */}
        <mesh ref={outerRingRef}>
          <torusGeometry args={[2.2, 0.05, 16, 100]} />
          <meshStandardMaterial 
            color="#06b6d4" 
            emissive="#06b6d4" 
            emissiveIntensity={2} 
            toneMapped={false} 
          />
        </mesh>

        {/* 4. INNER RING (Faster Rotation) */}
        <mesh ref={innerRingRef} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.8, 0.02, 16, 100]} />
          <meshStandardMaterial 
            color="#ffffff" 
            emissive="#ffffff" 
            emissiveIntensity={2} 
            toneMapped={false} 
          />
        </mesh>

      </Float>
    </group>
  );
};

export default HeroHologram;