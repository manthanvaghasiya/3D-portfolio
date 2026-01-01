import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Image, Text } from "@react-three/drei";
import { easing } from "maath";
import { useHoloStore } from "../../hooks/useHoloStore";

const HolographicProjector = () => {
  const { hoveredProject } = useHoloStore();
  const group = useRef();
  
  useFrame((state, delta) => {
    // 1. ANIMATION LOGIC
    // If a project is hovered, scale up to 1. If not, scale down to 0.
    const targetScale = hoveredProject ? 1 : 0;
    
    if (group.current) {
      // Smooth expansion/contraction
      easing.damp3(group.current.scale, [targetScale, targetScale, targetScale], 0.3, delta);
      
      // Slight parallax follow (looks at mouse)
      easing.dampE(
        group.current.rotation, 
        [state.pointer.y * 0.1, state.pointer.x * 0.1, 0], 
        0.25, 
        delta
      );
    }
  });

  return (
    // Positioned slightly in front of the Core (z=3)
    <group ref={group} position={[0, 0.5, 3.5]}> 
      
      {/* === A. THE BLACK GLASS BACKGROUND === */}
      <mesh position={[0, 0, -0.05]}>
        <planeGeometry args={[6.2, 3.6]} /> {/* 16:9 Aspect Ratio */}
        <meshBasicMaterial color="black" transparent opacity={0.9} />
      </mesh>

      {/* === B. THE PROJECT IMAGE === */}
      {/* We use Drei's <Image> which is optimized for WebGL */}
      {hoveredProject && (
        <Image 
          url={hoveredProject.image} 
          scale={[6, 3.375]} // 16:9
          transparent
          opacity={1}
          toneMapped={false}
        />
      )}

      {/* === C. CYBER BORDER GLOW === */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[6.1, 3.5]} />
        <meshBasicMaterial 
          color="#00f7ff" 
          wireframe 
          transparent 
          opacity={0.3} 
        />
      </mesh>

      {/* === D. PROJECT TITLE LABEL === */}
      <Text
        position={[0, -2, 0.1]}
        fontSize={0.3}
        font="https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff"
        anchorX="center"
        anchorY="top"
        letterSpacing={0.1}
      >
        {hoveredProject ? hoveredProject.title.toUpperCase() : ""}
        <meshStandardMaterial color="#00f7ff" emissive="#00f7ff" emissiveIntensity={2} />
      </Text>

    </group>
  );
};

export default HolographicProjector;