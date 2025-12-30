import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Grid } from "@react-three/drei";
import { useTheme } from "../context/ThemeContext";

const HologramCanvas = () => {
  const { theme } = useTheme();

  return (
    <div 
      className="fixed inset-0 z-[-1] transition-colors duration-700"
      style={{ backgroundColor: theme === 'dark' ? '#030014' : '#F8FAFC' }}
    >
      <Canvas
        camera={{ position: [0, 5, 10], fov: 75 }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
      >
        {/* 1. ATMOSPHERE (Dynamic) */}
        <color attach="background" args={[theme === 'dark' ? "#030014" : "#F8FAFC"]} />
        <fog attach="fog" args={[theme === 'dark' ? "#030014" : "#F8FAFC", 5, 30]} />

        {/* 2. THE UNIVERSE (Stars - Dark Mode Only) */}
        {theme === 'dark' && (
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
        )}

        {/* 3. THE HOLOGRAPHIC FLOOR (Dynamic Grid) */}
        <Grid 
          position={[0, -2, 0]} 
          args={[100, 100]} 
          cellSize={1} 
          cellThickness={0.5} 
          // Cyan in Dark Mode / Soft Slate in Light Mode
          cellColor={theme === 'dark' ? "#06b6d4" : "#cbd5e1"} 
          sectionSize={5} 
          sectionThickness={1}
          // Violet in Dark Mode / Darker Slate in Light Mode
          sectionColor={theme === 'dark' ? "#7c3aed" : "#94a3b8"} 
          fadeDistance={25} 
          fadeStrength={1}
        />

        {/* 4. LIGHTING (Dynamic) */}
        {theme === 'dark' ? (
          <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
            <pointLight position={[-10, -10, -10]} intensity={1.5} color="#7c3aed" />
          </>
        ) : (
          <>
            <ambientLight intensity={0.8} color="#ffffff" />
            <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
          </>
        )}

        {/* 5. CONTROLS */}
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          maxPolarAngle={Math.PI / 2} 
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default HologramCanvas;