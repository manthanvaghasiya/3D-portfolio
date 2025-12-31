import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Grid, Icosahedron } from "@react-three/drei";
import { useTheme } from "../context/ThemeContext";

const TechCore = ({ theme }) => {
  const meshRef = useRef();
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Icosahedron args={[1, 1]} position={[0, 0, 0]} scale={[2.5, 2.5, 2.5]} ref={meshRef}>
      <meshStandardMaterial 
        color={theme === 'dark' ? "#7c3aed" : "#06b6d4"}
        wireframe={true}
        transparent
        opacity={0.15} // Lower opacity so it doesn't distract from text
        roughness={0}
        metalness={1}
      />
    </Icosahedron>
  );
};

const HologramCanvas = () => {
  const { theme } = useTheme();

  const gridConfig = useMemo(() => ({
    cellSize: 1,
    cellThickness: 0.5,
    cellColor: theme === 'dark' ? "#06b6d4" : "#cbd5e1",
    sectionSize: 5,
    sectionThickness: 1,
    sectionColor: theme === 'dark' ? "#7c3aed" : "#94a3b8",
    fadeDistance: 35, // Increased fade distance for full-page feel
    fadeStrength: 1
  }), [theme]);

  return (
    <div 
      // CHANGED: 'fixed' ensures it stays as the background for the WHOLE site
      className="fixed inset-0 z-0 pointer-events-none transition-colors duration-700"
      style={{ backgroundColor: theme === 'dark' ? '#030014' : '#F8FAFC' }}
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }} // Centered camera
        dpr={[1, 2]}
        gl={{ antialias: true, powerPreference: "default" }}
      >
        <color attach="background" args={[theme === 'dark' ? "#030014" : "#F8FAFC"]} />
        <fog attach="fog" args={[theme === 'dark' ? "#030014" : "#F8FAFC", 10, 40]} />

        {theme === 'dark' && (
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        )}

        {/* Rotated Grid for a 'Cyberspace Tunnel' feel instead of a floor */}
        <group rotation={[Math.PI / 3, 0, 0]} position={[0, -5, -10]}>
           <Grid args={[100, 100]} {...gridConfig} />
        </group>

        <TechCore theme={theme} />

        <ambientLight intensity={theme === 'dark' ? 0.2 : 0.8} />
        {theme === 'dark' ? (
          <>
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
            <pointLight position={[-10, -10, -10]} intensity={1.5} color="#7c3aed" />
          </>
        ) : (
          <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        )}

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enableDamping={true} />
      </Canvas>
    </div>
  );
};

export default HologramCanvas;