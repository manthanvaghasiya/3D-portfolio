import React from "react";
import HologramCanvas from "./HologramCanvas";
import HeroContent from "./Hero/HeroContent"; 

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[100dvh] pt-20 overflow-hidden"
    >
      {/* 1. THE 3D WORLD (Background) */}
      <HologramCanvas />

      {/* 2. THE CONTENT (Foreground) */}
      <HeroContent />
      
      {/* "Scroll to Explore" removed to prevent overlapping with Social Icons */}
    </section>
  );
};

export default Hero;