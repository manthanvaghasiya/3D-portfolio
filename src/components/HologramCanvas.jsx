import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Grid, Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { useTheme } from "../context/ThemeContext";
import * as THREE from "three";

// --- SUB-COMPONENT: The Shape-Shifting Hero Object ---
const HeroObject = ({ theme }) => {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Rotate the object continuously
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.25;
    }
  });

  // LIGHT MODE: Ethereal Glass Crystal
  if (theme === 'light') {
    return (
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={meshRef} scale={2.5}>
          {/* Icosahedron = Gem/Crystal shape */}
          <icosahedronGeometry args={[1, 0]} /> 
          <meshPhysicalMaterial 
            color="#FFFFFF" 
            roughness={0} 
            metalness={0.1} 
            transmission={0.95} // High transparency (Glass)
            thickness={2}       // Refraction depth
            clearcoat={1} 
            ior={1.5}           // Index of Refraction
          />
        </mesh>
      </Float>
    );
  }

  // DARK MODE: Cyber Distortion Sphere
  return (
    <Float speed={4} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef} scale={2.5}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#06b6d4" // Cyan
          emissive="#06b6d4"
          emissiveIntensity={1} // Glowing
          distort={0.4} // Wobbly liquid effect
          speed={3}
          transparent
          opacity={0.9}
        />
        {/* Wireframe Cage Overlay */}
        <mesh scale={1.2}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#7c3aed" wireframe transparent opacity={0.3} />
        </mesh>
      </mesh>
    </Float>
  );
};

// --- SUB-COMPONENT: The Scene Manager ---
// This handles the background color and lighting switches
const SceneContent = () => {
  const { theme } = useTheme();
  
  return (
    <>
      {/* 1. DYNAMIC BACKGROUND & FOG */}
      {/* We change the background color based on the theme state */}
      <color attach="background" args={[theme === 'dark' ? "#030014" : "#F8FAFC"]} />
      <fog attach="fog" args={[theme === 'dark' ? "#030014" : "#F8FAFC", 5, 30]} />

      {/* 2. DUAL-REALITY LIGHTING */}
      {theme === 'dark' ? (
        // --- MIDNIGHT VOID (Dark Mode) ---
        <>
          <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#06b6d4" />
          <pointLight position={[-10, -10, -10]} intensity={2} color="#7c3aed" />
          
          <Grid 
            position={[0, -4, 0]} 
            args={[100, 100]} 
            cellSize={1} 
            cellThickness={0.5} 
            cellColor="#06b6d4" 
            sectionSize={5} 
            sectionThickness={1} 
            sectionColor="#7c3aed" 
            fadeDistance={30} 
          />
        </>
      ) : (
        // --- ETHEREAL PLANE (Light Mode) ---
        <>
          <ambientLight intensity={0.8} color="#ffffff" />
          <directionalLight position={[5, 10, 5]} intensity={1} color="#ffffff" />
          {/* "City" preset gives nice reflections on the glass crystal */}
          <Environment preset="city" /> 
          
          <Grid 
            position={[0, -4, 0]} 
            args={[100, 100]} 
            cellSize={1} 
            cellThickness={0.5} 
            cellColor="#cbd5e1" 
            sectionSize={5} 
            sectionThickness={1} 
            sectionColor="#94a3b8" 
            fadeDistance={40} 
          />
        </>
      )}

      {/* 3. THE HERO OBJECT (Positioned Left) */}
      <group position={[-3, 0, 0]}>
        <HeroObject theme={theme} />
      </group>

      <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.8} />
    </>
  );
};

// --- MAIN COMPONENT ---
const HologramCanvas = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Pointer events none ensures we can click text OVER the canvas, 
          but OrbitControls usually captures events on the canvas itself. 
          If you want to spin the model, remove 'pointer-events-none' from the div above,
          but be careful it doesn't block your buttons. */}
      <Canvas
        camera={{ position: [0, 2, 10], fov: 60 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        dpr={[1, 2]} // Optimizes for retina screens
        className="pointer-events-auto" // Re-enable pointer events for the canvas interaction
      >
        <SceneContent />
      </Canvas>
    </div>
  );
};

export default HologramCanvas;