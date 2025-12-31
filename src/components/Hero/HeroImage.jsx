import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const HeroImage = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Tilt logic: Transforms mouse position into rotation degrees
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div 
      style={{ perspective: 2000 }} 
      className="w-full lg:w-[45%] flex justify-center lg:justify-start order-1 mb-10 lg:mb-0"
    >
      <motion.div
        style={{ rotateX, rotateY, x, y, cursor: "grab" }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-xl lg:-mr-6 z-20"
      >
        <div className="relative group">
            {/* Glow Effect behind the image */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            
            <img
            src="/profile.jpg"
            alt="Manthan"
            className="relative w-full h-auto max-h-[350px] md:max-h-[500px] lg:max-h-[720px] object-contain drop-shadow-2xl rounded-3xl"
            style={{
                maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
            }}
            />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;