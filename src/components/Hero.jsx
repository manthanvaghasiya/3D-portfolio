import React from "react";
import HologramCanvas from "./HologramCanvas";
import HeroContent from "./Hero/HeroContent"; 

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[100dvh] pt-20 overflow-hidden"
    >
      {/* 1. THE 3D LAYER (Background) */}
      <HologramCanvas />

      {/* 2. THE UI LAYER (Foreground) */}
      <HeroContent />
      
      {/* <style> TAG REMOVED - Logic moved to Tailwind Config */ }
    </section>
  );
};

export default Hero;