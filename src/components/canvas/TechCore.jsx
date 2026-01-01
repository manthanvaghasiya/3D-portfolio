import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Icosahedron, Torus, MeshDistortMaterial, Float } from "@react-three/drei";
import { easing } from "maath";

const TechCore = ({ theme, isMobile }) => {
  const groupRef = useRef();
  const outerRingRef = useRef();
  const midRingRef = useRef();
  const innerRingRef = useRef();
  
  // CYBER COLOR PALETTE
  const primaryColor = theme === 'dark' ? "#00f7ff" : "#2563eb"; 
  const secondaryColor = theme === 'dark' ? "#bd00ff" : "#7c3aed";
  const glowIntensity = theme === 'dark' ? 2 : 1.5;

  useFrame((state, delta) => {
    // 1. MOUSE PARALLAX (The "Watcher" Effect)
    if (groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        [state.pointer.y * 0.2, state.pointer.x * 0.2, 0],
        0.25,
        delta
      );
    }

    // 2. GYROSCOPIC ANIMATIONS
    if (outerRingRef.current) {
      outerRingRef.current.rotation.x += delta * 0.2;
      outerRingRef.current.rotation.y += delta * 0.05;
    }
    if (midRingRef.current) {
      midRingRef.current.rotation.x -= delta * 0.1;
      midRingRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* FLOAT: Idle bobbing animation */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={groupRef}>
          
          {/* --- A. THE TEXT --- */}
          <Text
            position={[0, 0, 0]} // Centered in the core
            fontSize={isMobile ? 0.8 : 1.2} // Smaller on mobile
            font="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.1}
          >
            WEB
            <meshStandardMaterial
              color={primaryColor}
              emissive={primaryColor}
              emissiveIntensity={glowIntensity * 1.5}
              toneMapped={false}
            />
          </Text>

          {/* --- B. THE ENERGY NUCLEUS (Inner Sphere) --- */}
          <mesh scale={isMobile ? 1.4 : 1.8}>
            <sphereGeometry args={[1, 32, 32]} />
            <MeshDistortMaterial
              color={secondaryColor}
              speed={2} 
              distort={0.4} 
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
              opacity={0.2}
            />
          </mesh>

          {/* --- D. THE SCANNER RINGS (Gyroscopes) --- */}
          <group scale={0.8}>
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
            
            {/* Outer Ring */}
            <group ref={outerRingRef}>
               <Torus args={[3.8, 0.03, 16, 100]}>
                <meshStandardMaterial 
                  color={primaryColor} 
                  emissive={primaryColor} 
                  emissiveIntensity={glowIntensity} 
                />
              </Torus>
            </group>
          </group>
        
        </group>
      </Float>
    </group>
  );
};

export default TechCore;