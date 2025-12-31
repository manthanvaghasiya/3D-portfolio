import React from "react";
import { motion } from "framer-motion";
import HeroImage from "./HeroImage";
import HeroTypography from "./HeroTypography";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const HeroContent = () => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 mx-auto flex w-full max-w-7xl flex-col lg:flex-row items-center gap-12 lg:gap-20 px-6 mt-12"
    >
      <HeroImage />
      <HeroTypography />
    </motion.div>
  );
};

export default HeroContent;