import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, Float } from "@react-three/drei";
import * as THREE from "three";
import { SKILL_LANES } from "../../data/skills";

const FloatingSkills = ({ theme }) => {
  const groupRef = useRef();
  
  // 1. FLATTEN DATA & CALCULATE POSITIONS
  // We spread the skills onto a sphere of radius 10 (surrounding the core)
  const skills = useMemo(() => {
    const allSkills = SKILL_LANES.flat();
    const count = allSkills.length;
    
    return allSkills.map((skill, i) => {
      // Fibonacci Sphere Algorithm for even distribution
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      const radius = 10; // Distance from center
      
      return {
        ...skill,
        position: [
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi)
        ]
      };
    });
  }, []);

  useFrame((state, delta) => {
    // 2. ORBITAL ROTATION
    // The entire skill cloud rotates slowly
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      groupRef.current.rotation.z += delta * 0.02; // Slight tilt rotation
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <group position={skill.position}>
            {/* <Html> allows us to render standard React components (like Lucide Icons) 
              inside the 3D world. "transform" makes them scale with distance.
            */}
            <Html transform distanceFactor={12}>
              <div 
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-full border backdrop-blur-md select-none
                  transition-all duration-300 hover:scale-110
                  ${theme === 'dark' 
                    ? 'bg-black/40 border-cyan-500/30 text-cyan-400' 
                    : 'bg-white/40 border-blue-500/30 text-blue-600'
                  }
                `}
              >
                <skill.icon size={20} color={skill.color} />
                <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            </Html>
          </group>
        </Float>
      ))}
    </group>
  );
};

export default FloatingSkills;