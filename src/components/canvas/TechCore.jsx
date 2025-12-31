import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Torus, Icosahedron } from "@react-three/drei";

const TechCore = ({ theme }) => {
  const coreRef = useRef();
  const netRef = useRef();
  const ringRef = useRef();

  // 1. CYBER COLOR PALETTE (High Contrast Glow)
  const primaryColor = theme === 'dark' ? "#00f7ff" : "#0066ff"; // Electric Cyan / Deep Blue
  const secondaryColor = theme === 'dark' ? "#bd00ff" : "#6200ff"; // Neon Purple / Indigo

  useFrame((state, delta) => {
    // 1. Text floats gently
    if (coreRef.current) {
      coreRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    }
    // 2. The main network sphere rotates slowly
    if (netRef.current) {
      netRef.current.rotation.y += delta * 0.08;
      netRef.current.rotation.z += delta * 0.02;
    }
    // 3. The scanner ring rotates fast on a different axis
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.5;
      ringRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* --- A. THE CORE TEXT --- */}
      <Text
        ref={coreRef}
        fontSize={1.3}
        letterSpacing={0.05}
        // FIXED: Reverted to the only URL we know works in your environment
        font="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"
        anchorX="center"
        anchorY="middle"
      >
        WEB
        {/* Super bright glow effect */}
        <meshStandardMaterial 
          color={primaryColor}
          emissive={primaryColor}
          emissiveIntensity={4}
          toneMapped={false}
        />
      </Text>

      {/* --- B. THE INNER "DATA PLANET" SPHERE --- */}
      {/* A translucent solid sphere to give the core body */}
      <mesh>
        <sphereGeometry args={[1.6, 32, 32]} />
        <meshStandardMaterial 
          color={secondaryColor}
          emissive={secondaryColor}
          emissiveIntensity={0.5}
          transparent
          opacity={0.2}
          wireframe={false}
        />
      </mesh>

      {/* --- C. THE MAIN "WEB" NETWORK MESH --- */}
      {/* Icosahedron with Detail=3 creates a dense triangular grid representing connections */}
      <Icosahedron args={[2, 3]} ref={netRef}>
        <meshStandardMaterial 
          color={primaryColor} 
          emissive={primaryColor}
          emissiveIntensity={1.5} // Glowing lines
          wireframe={true} // Crucial: Shows the lines, not the faces
          transparent 
          opacity={0.6} 
          roughness={0}
          metalness={1}
        />
      </Icosahedron>

      {/* --- D. THE CYBERSECURITY SCANNER RINGS --- */}
      <group ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        {/* Inner thick ring */}
        <Torus args={[2.3, 0.05, 16, 100]}>
          <meshStandardMaterial color={secondaryColor} emissive={secondaryColor} emissiveIntensity={2} />
        </Torus>
        {/* Outer thin wireframe ring */}
        <Torus args={[2.5, 0.02, 16, 64]}>
           <meshStandardMaterial color={primaryColor} emissive={primaryColor} wireframe />
        </Torus>
      </group>
    </group>
  );
};

export default TechCore;