import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useTheme } from "../context/ThemeContext";

// Import the new modules - ENSURE THESE ARE ONLY LISTED ONCE
import TechCore from "./canvas/TechCore";
import CyberEnvironment from "./canvas/CyberEnvironment";
import FloatingSkills from "./canvas/FloatingSkills";
import HolographicProjector from "./canvas/HolographicProjector";

const HologramCanvas = () => {
  const { theme } = useTheme();

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none transition-colors duration-700"
      style={{ backgroundColor: theme === 'dark' ? '#030014' : '#F8FAFC' }}
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        dpr={[1, 2]}
        // Performance Optimization: Disable default AA when using PostProcessing
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >

        
            <CyberEnvironment theme={theme} />
            <TechCore theme={theme} />
            <FloatingSkills theme={theme} />
            <HolographicProjector />

        {/* CINEMATIC POLISH: The Bloom Effect */}
        <EffectComposer disableNormalPass>
          <Bloom 
            luminanceThreshold={0.2} // Triggers on brighter elements
            mipmapBlur 
            intensity={0.5} 
            radius={0.5}
          />
        </EffectComposer>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enableDamping={true} />
      </Canvas>
    </div>
  );
};

export default HologramCanvas;