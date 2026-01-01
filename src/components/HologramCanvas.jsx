import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useTheme } from "../context/ThemeContext";

import TechCore from "./canvas/TechCore";
import CyberEnvironment from "./canvas/CyberEnvironment";
import FloatingSkills from "./canvas/FloatingSkills";
import HolographicProjector from "./canvas/HolographicProjector";

const HologramCanvas = () => {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile screens (less than 768px)
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none transition-colors duration-700"
      style={{ backgroundColor: theme === 'dark' ? '#030014' : '#F8FAFC' }}
    >
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        // Performance: Lower pixel ratio on mobile to save battery/GPU
        dpr={isMobile ? [1, 1.5] : [1, 2]} 
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <CyberEnvironment theme={theme} />
          
          {/* Pass isMobile to TechCore to reduce polygon count if needed */}
          <TechCore theme={theme} isMobile={isMobile} />
          
          <FloatingSkills theme={theme} />
          <HolographicProjector />

          <Preload all />
        </Suspense>

        {/* CINEMATIC BLOOM: Only on Desktop */}
        {!isMobile && (
          <EffectComposer disableNormalPass>
            <Bloom 
              luminanceThreshold={0.2} 
              mipmapBlur 
              intensity={0.5} 
              radius={0.5}
            />
          </EffectComposer>
        )}

        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate 
          autoRotateSpeed={0.5} 
          enableDamping={true} 
        />
      </Canvas>
    </div>
  );
};

export default HologramCanvas;