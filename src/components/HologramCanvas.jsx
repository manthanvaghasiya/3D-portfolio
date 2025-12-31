import React, { useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Grid } from "@react-three/drei";
import { useTheme } from "../context/ThemeContext";

const HologramCanvas = () => {
  const { theme } = useTheme();

  // PERFORMANCE: Memoize grid config to prevent unnecessary re-calculations on re-renders
  const gridConfig = useMemo(() => ({
    cellSize: 1,
    cellThickness: 0.5,
    cellColor: theme === 'dark' ? "#06b6d4" : "#cbd5e1",
    sectionSize: 5,
    sectionThickness: 1,
    sectionColor: theme === 'dark' ? "#7c3aed" : "#94a3b8",
    fadeDistance: 25,
    fadeStrength: 1
  }), [theme]);

  return (
    <div 
      // PERFORMANCE: Changed 'fixed' to 'absolute'. 
      // This ensures the 3D canvas scrolls away and is culled by the browser when not in view, saving battery.
      className="absolute inset-0 z-[-1] transition-colors duration-700 pointer-events-none"
      style={{ backgroundColor: theme === 'dark' ? '#030014' : '#F8FAFC' }}
    >
      <Canvas
        camera={{ position: [0, 5, 10], fov: 75 }}
        // PERFORMANCE: High-DPI screens (Retina) kill performance. Cap DPR at 2.
        dpr={[1, 2]}
        // PERFORMANCE: 'powerPreference' default balances performance and battery.
        gl={{ antialias: true, powerPreference: "default" }}
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
        {/* Passed memoized props */}
        <Grid position={[0, -2, 0]} args={[100, 100]} {...gridConfig} />

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
          enableDamping={true} // Smoother interaction
        />
      </Canvas>
    </div>
  );
};

export default HologramCanvas;