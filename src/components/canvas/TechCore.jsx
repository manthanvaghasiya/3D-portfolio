import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Icosahedron, Torus, Sparkles, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import { easing } from "maath";

const TechCore = ({ theme }) => {
  const groupRef = useRef();
  const outerRingRef = useRef();
  const midRingRef = useRef();
  const innerRingRef = useRef();
  
  // CYBER COLOR PALETTE
  // Using more neon/emissive values for the "Hologram" feel
  const primaryColor = theme === 'dark' ? "#00f7ff" : "#2563eb"; 
  const secondaryColor = theme === 'dark' ? "#bd00ff" : "#7c3aed";
  const glowIntensity = theme === 'dark' ? 2 : 1.5;

  useFrame((state, delta) => {
    // 1. MOUSE PARALLAX (The "Watcher" Effect)
    // We gently lerp the entire group's rotation to face the mouse pointer
    if (groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        [state.pointer.y * 0.2, state.pointer.x * 0.2, 0],
        0.25,
        delta
      );
    }

    // 2. PROCEDURAL ANIMATIONS (Constant motion)
    // Rotate rings at different speeds and axes to create mechanical complexity
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x += delta * 0.2;
      outerRingRef.current.rotation.y += delta * 0.05;
    }
    if (midRingRef.current) {
      midRingRef.current.rotation.x -= delta * 0.1;
      midRingRef.current.rotation.z += delta * 0.2;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.x += delta * 0.4;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* FLOAT: Adds a gentle bobbing motion to everything (Idle animation) */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        
        {/* === THE CONTAINER FOR MOUSE INTERACTION === */}
        <group ref={groupRef}>
          
          {/* --- A. THE TEXT --- */}
          {/* Placed slightly forward to float "above" the hologram */}
          <Text
            position={[0, 0, 2.8]}
            fontSize={1.2}
            font="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.1}
          >
            Web
            <meshStandardMaterial
              color={primaryColor}
              emissive={primaryColor}
              emissiveIntensity={glowIntensity * 1.5}
              toneMapped={false}
            />
          </Text>

          {/* --- B. THE ENERGY NUCLEUS (Inner Sphere) --- */}
          {/* MeshDistortMaterial makes it look like unstable liquid energy */}
          <mesh scale={1.8}>
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial
              color={secondaryColor}
              speed={2} // Fast distortion
              distort={0.4} // High distortion amount
              radius={1}
              transparent
              opacity={0.3}
            />
          </mesh>

          {/* --- C. THE DATA SHIELD (Wireframe Cage) --- */}
          <mesh scale={2.2}>
            <icosahedronGeometry args={[1, 2]} />
            <meshStandardMaterial
              color={primaryColor}
              emissive={primaryColor}
              emissiveIntensity={0.5}
              wireframe
              transparent
              opacity={0.3}
            />
          </mesh>

          {/* --- D. THE SCANNER RINGS --- */}
          <group scale={0.8}>
            {/* Outer Heavy Ring */}
            

            {/* Mid Angled Ring */}
            <group ref={midRingRef} rotation={[Math.PI / 4, 0, 0]}>
              <Torus args={[3.2, 0.02, 16, 100]}>
                <meshStandardMaterial 
                  color={secondaryColor} 
                  emissive={secondaryColor} 
                  emissiveIntensity={glowIntensity} 
                />
              </Torus>
            </group>

             
          </group>

          {/* --- E. PARTICLES --- */}
          {/* Floating bits of code/data around the core */}
          
        
        </group>
      </Float>
    </group>
  );
};

export default TechCore;