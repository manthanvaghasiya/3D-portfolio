import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const HeroImage = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Tilt logic: Transforms mouse position into rotation degrees
  // Increased range slightly for more "3D pop"
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div 
      style={{ perspective: 2000 }} 
      className="w-full lg:w-[45%] flex justify-center lg:justify-start order-1 mb-10 lg:mb-0 relative z-20"
    >
      <motion.div
        style={{ rotateX, rotateY, x, y, cursor: "grab" }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-xl lg:-mr-6"
      >
        <div className="relative group rounded-3xl">
            
            {/* 1. THE GLOW (Backlight) */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-60 transition duration-500" />
            
            {/* 2. THE IMAGE CONTAINER */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 backdrop-blur-sm">
                
                {/* The Image itself */}
                <img
                    src="/profile.jpg"
                    alt="Manthan"
                    className="relative w-full h-auto max-h-[350px] md:max-h-[500px] lg:max-h-[720px] object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />

                

                {/* 4. CREATIVITY: Tech Grid Overlay (Subtle) */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,6px_100%] pointer-events-none opacity-20 mix-blend-overlay" />
            </div>

            {/* 5. CREATIVITY: Corner Brackets (The "HUD" Frame) */}
            {/* Top Left */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-lg group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300" />
            {/* Bottom Right */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 rounded-br-lg group-hover:border-cyan-400 group-hover:scale-110 transition-all duration-300" />
            
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;