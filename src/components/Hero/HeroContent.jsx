import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Download } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100 } 
  },
};

const HeroContent = () => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 mx-auto flex w-full max-w-7xl flex-col lg:flex-row items-center gap-10 lg:gap-14 px-6"
    >
      {/* --- IMAGE SECTION --- */}
      <motion.div 
        variants={itemVariants}
        className="w-full lg:w-[45%] flex justify-center lg:justify-start order-1"
      >
        <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-xl lg:-mr-6 -mt-8 lg:-mt-24">
          <img
            src="/profile.jpg"
            alt="Manthan"
            className="w-full h-auto max-h-[350px] md:max-h-[500px] lg:max-h-[720px] object-contain drop-shadow-2xl transform scale-100 lg:scale-110 origin-bottom transition-transform duration-700 ease-out animate-float"
            style={{
              maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
            }}
          />
        </div>
      </motion.div>

      {/* --- TEXT SECTION --- */}
      <div className="w-full lg:w-[55%] text-center lg:text-left space-y-5 md:space-y-7 lg:space-y-6 order-2">
        
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 md:px-5 md:py-2.5 lg:px-4 lg:py-2 text-[10px] md:text-xs lg:text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)] backdrop-blur-md">
          <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-cyan-500" />
          </span>
          Available for Work
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-black text-gray-900 dark:text-white tracking-tight leading-[1.2]">
          {/* UPDATED: Adaptive colors */}
          <span className="block text-xl md:text-2xl font-bold text-gray-500 dark:text-gray-400 mb-2">
            Hi, I&apos;m Manthan Vaghasiya
          </span>
          <span className="block text-[10px] md:text-sm lg:text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-3 md:mb-4 lg:mb-3">
            Full-Stack Developer
          </span>

          {/* UPDATED: Black in Light Mode, White in Dark Mode */}
          <span className="block text-3xl md:text-5xl lg:text-5xl mb-1 text-gray-900 dark:text-white">
            I turn ideas into
          </span>
          <span className="block text-3xl md:text-5xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 animate-text-shimmer bg-[length:200%_auto]">
            Scalable Digital Products
          </span>
        </motion.h1>

        {/* UPDATED: Changed text-text-muted to text-gray-300 for better readability against dark backgrounds */}
        <motion.p variants={itemVariants} className="mt-4 text-sm md:text-lg lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 px-2 md:px-0">
          As a <b>Full Stack Developer</b>, I design and develop complete web products from the ground up. From building <b>robust backend architectures</b> to crafting <b>user–friendly interfaces</b>, I focus on <b>performance, maintainability, and real business impact</b>. My portfolio includes platforms like{" "}
            {/* Links: Dark text in light mode, White in dark mode */}
            <a href="#projects" className="font-bold text-gray-900 dark:text-white underline underline-offset-4 hover:no-underline hover:text-accent transition">LifeOS</a> and{" "}
            <a href="#projects" className="font-bold text-gray-900 dark:text-white underline underline-offset-4 hover:no-underline hover:text-accent transition">DairyFlow</a>.
        </motion.p>

       <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-5 lg:gap-4 pt-2">
           {/* Hire Me Button (Unchanged, keeps accent color) */}
           <a href="#contact" className="group relative overflow-hidden flex items-center gap-2 md:gap-3 rounded-full bg-accent px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-3.5 text-sm md:text-lg lg:text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 active:scale-95">
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
              <span className="relative z-20">Hire Me</span>
            </a>

            {/* Resume Button: Border/Text adaptive */}
            <a href="/resume.pdf" download="Manthan_Vaghasiya_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3 rounded-full border border-gray-300 dark:border-gray-500 bg-transparent px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-3.5 text-sm md:text-lg lg:text-base font-semibold text-gray-900 dark:text-white shadow-sm transition hover:border-accent hover:text-accent active:scale-95 backdrop-blur-sm">
              Download CV <Download size={18} className="md:w-5 md:h-5 lg:w-[18px] lg:h-[18px]" />
            </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
           {/* Divider Line */}
           <div className="hidden lg:block mx-2 h-6 w-px bg-gray-300 dark:bg-gray-500/50" />
           
           {/* Social Icons: Gray-600 (Light) / Gray-400 (Dark) */}
           <div className="flex items-center gap-6 md:gap-8 lg:gap-4 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/manthanvaghasiya" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition hover:scale-110"><Github size={22} className="md:w-8 md:h-8 lg:w-[22px] lg:h-[22px]" /></a>
              <a href="https://www.linkedin.com/in/manthan-vaghasiya-b213a8267" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-500 transition hover:scale-110"><Linkedin size={22} className="md:w-8 md:h-8 lg:w-[22px] lg:h-[22px]" /></a>
              <a href="https://www.instagram.com/manthan_vaghasiya_07" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 dark:hover:text-pink-500 transition hover:scale-110"><Instagram size={22} className="md:w-8 md:h-8 lg:w-[22px] lg:h-[22px]" /></a>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;