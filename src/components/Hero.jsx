import React from "react";
import HologramCanvas from "./HologramCanvas";
import HeroContent from "./Hero/HeroContent"; // Ensure you create the folder 'Hero' or adjust path

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

      {/* Global Styles for this section */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }

        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;