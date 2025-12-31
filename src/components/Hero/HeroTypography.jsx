import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Download } from "lucide-react";

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100 } 
  },
};

const HeroTypography = () => {
  return (
    <div className="w-full lg:w-[55%] text-center lg:text-left space-y-6 order-2 relative z-10">
      
      {/* Badge */}
      <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)] backdrop-blur-md">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
        </span>
        Available for Work
      </motion.div>

      {/* Main Heading */}
      <motion.h1 variants={itemVariants} className="font-black text-gray-900 dark:text-white tracking-tight leading-[1.1]">
        <span className="block text-xl md:text-2xl font-bold text-gray-500 dark:text-gray-400 mb-2">
          Hi, I&apos;m Manthan Vaghasiya
        </span>
        <span className="block text-4xl md:text-6xl lg:text-7xl mb-2 text-gray-900 dark:text-white">
          I turn ideas into
        </span>
        <span className="block text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 animate-text-shimmer bg-[length:200%_auto]">
          sclable Digital product
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p variants={itemVariants} className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
        As a <b>Full Stack Developer</b>, I engineer high-performance digital products. From <b>pixel-perfect frontends</b> to <b>scalable backend systems</b>, I focus on delivering real business value. Creator of{" "}
          <a href="#projects" className="font-bold text-gray-900 dark:text-white underline decoration-accent/50 hover:decoration-accent transition-all">LifeOS</a> and{" "}
          <a href="#projects" className="font-bold text-gray-900 dark:text-white underline decoration-accent/50 hover:decoration-accent transition-all">DairyFlow</a>.
      </motion.p>

      {/* Action Buttons */}
      <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
         <a href="#contact" className="group relative overflow-hidden flex items-center gap-3 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:shadow-[0_0_20px_var(--accent-glow)] hover:-translate-y-1">
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
            <span className="relative z-20">Hire Me</span>
          </a>

          <a href="/resume.pdf" download="Manthan_Vaghasiya_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-full border border-gray-300 dark:border-gray-600 bg-transparent px-8 py-3.5 text-base font-semibold text-gray-900 dark:text-white transition-all hover:border-accent hover:text-accent backdrop-blur-sm">
            Download CV <Download size={18} />
          </a>
      </motion.div>

      {/* Social Links */}
      <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-6 pt-6 text-gray-500 dark:text-gray-400">
          <div className="hidden lg:block w-12 h-px bg-gray-300 dark:bg-gray-700" />
          <a href="https://github.com/manthanvaghasiya" target="_blank" rel="noreferrer" className="hover:text-black dark:hover:text-white transition-all hover:scale-110"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/manthan-vaghasiya-b213a8267" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-500 transition-all hover:scale-110"><Linkedin size={24} /></a>
          <a href="https://www.instagram.com/manthan_vaghasiya_07" target="_blank" rel="noreferrer" className="hover:text-pink-600 dark:hover:text-pink-500 transition-all hover:scale-110"><Instagram size={24} /></a>
      </motion.div>
    </div>
  );
};

export default HeroTypography;