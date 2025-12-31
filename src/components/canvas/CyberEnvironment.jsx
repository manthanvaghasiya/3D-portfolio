import React, { useMemo } from "react";
import { Stars, Grid } from "@react-three/drei";

const CyberEnvironment = ({ theme }) => {
  const gridConfig = useMemo(() => ({
    cellSize: 1,
    cellThickness: 0.5,
    cellColor: theme === 'dark' ? "#06b6d4" : "#cbd5e1",
    sectionSize: 5,
    sectionThickness: 1,
    sectionColor: theme === 'dark' ? "#7c3aed" : "#94a3b8",
    fadeDistance: 35,
    fadeStrength: 1
  }), [theme]);

  return (
    <>
      {/* Background & Fog */}
      <color attach="background" args={[theme === 'dark' ? "#030014" : "#F8FAFC"]} />
      <fog attach="fog" args={[theme === 'dark' ? "#030014" : "#F8FAFC", 10, 40]} />

      {/* Stars - Only in Dark Mode */}
      {theme === 'dark' && (
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      )}

      {/* Cyberspace Grid */}
      <group rotation={[Math.PI / 3, 0, 0]} position={[0, -5, -10]}>
         <Grid args={[100, 100]} {...gridConfig} />
      </group>

      {/* Lighting System */}
      <ambientLight intensity={theme === 'dark' ? 0.2 : 0.8} />
      {theme === 'dark' ? (
        <>
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
          <pointLight position={[-10, -10, -10]} intensity={1.5} color="#7c3aed" />
        </>
      ) : (
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      )}
    </>
  );
};

export default CyberEnvironment;