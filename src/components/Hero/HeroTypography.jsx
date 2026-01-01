import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Download, Sparkles, Terminal } from "lucide-react";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100, damping: 10 } 
  },
};

const HeroTypography = () => {
  // --- 1. TYPEWRITER ENGINE (Exact Logic from Reference) ---
  const line1 = "I turn ideas into";
  const line2 = "Scalable digital products";

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  const interval1Ref = useRef(null);
  const interval2Ref = useRef(null);
  const mountedRef = useRef(true);

  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  useEffect(() => {
    mountedRef.current = true;
    
    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    if (prefersReducedMotion) {
      setText1(line1);
      setText2(line2);
      return () => clearInterval(cursorInterval);
    }

    let i = 0;
    let j = 0;

    interval1Ref.current = setInterval(() => {
      i++;
      if (!mountedRef.current) return;
      setText1(line1.slice(0, i));

      if (i >= line1.length) {
        clearInterval(interval1Ref.current);
        // Start second interval
        interval2Ref.current = setInterval(() => {
          j++;
          if (!mountedRef.current) return;
          setText2(line2.slice(0, j));
          if (j >= line2.length) {
            clearInterval(interval2Ref.current);
          }
        }, 60); // Match reference speed (60ms)
      }
    }, 60);

    return () => {
      mountedRef.current = false;
      if (interval1Ref.current) clearInterval(interval1Ref.current);
      if (interval2Ref.current) clearInterval(interval2Ref.current);
      clearInterval(cursorInterval);
    };
  }, [line1, line2, prefersReducedMotion]);

  // --- 2. RENDERERS ---

  const renderLine1 = () => {
    if (!text1) return <span className="min-h-[1.2em] block">&nbsp;</span>;
    
    const word = "ideas";
    const idx = text1.indexOf(word);
    
    if (idx === -1) return <span className="text-slate-800 dark:text-slate-100">{text1}</span>;
    
    const before = text1.slice(0, idx);
    const typedIdeas = text1.slice(idx, idx + word.length);
    const after = text1.slice(idx + word.length);

    return (
      <span className="text-slate-800 dark:text-slate-100">
        {before}
        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-300 dark:to-blue-400 font-extrabold px-1">
          {typedIdeas}
        </span>
        {after}
      </span>
    );
  };

  const renderLine2 = () => {
    if (!text2) return <span className="min-h-[1.2em] block">&nbsp;</span>;
    
    const splitWord = "products";
    const idx = text2.indexOf(splitWord);

    // If "products" hasn't started typing yet
    if (idx === -1) {
       return (
         <span className="relative text-transparent animate-text-shimmer bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-300 dark:via-blue-300 dark:to-indigo-300 bg-[length:200%_auto] font-extrabold filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
           {text2}
         </span>
       );
    }

    const highlightPart = text2.slice(0, idx); 
    const normalPart = text2.slice(idx);       

    return (
      <>
        <span className="relative text-transparent animate-text-shimmer bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 dark:from-cyan-300 dark:via-blue-300 dark:to-indigo-300 bg-[length:200%_auto] font-extrabold filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
          {highlightPart}
        </span>
        <span className="text-slate-800 dark:text-slate-100">
          {normalPart}
        </span>
      </>
    );
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // Added `lg:pr-10` to prevent overlap with 3D model on large screens
      className="w-full lg:w-[55%] lg:pr-10 text-center lg:text-left space-y-6 order-2 relative z-10 pointer-events-auto"
    >
      
      {/* HUD GLASS PANEL */}
      <div className="relative p-6 md:p-8 rounded-3xl bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-2xl shadow-cyan-500/10 transition-colors duration-500">
        
        {/* BADGE: Exact sizing from reference */}
        <motion.div variants={itemVariants} className="flex justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-600/30 bg-cyan-100/50 dark:bg-cyan-900/30 shadow-sm backdrop-blur-md px-3 py-1.5 md:px-5 md:py-2.5 lg:px-4 lg:py-2 text-[10px] md:text-xs lg:text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
              <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-cyan-500" />
              </span>
              Available for Work
          </div>
        </motion.div>

        {/* HEADINGS */}
        <motion.h1 variants={itemVariants} className="font-black tracking-tight leading-[1.2]">
          
          <span className="block text-xl md:text-2xl font-bold text-slate-600 dark:text-slate-300 mb-2">
            Hi, I&apos;m Manthan Vaghasiya
          </span>
          
          {/* Exact sizing: text-[10px] md:text-sm lg:text-xs */}
          <span className="block text-[10px] md:text-sm lg:text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-cyan-400 mb-3 md:mb-4 lg:mb-3 flex items-center justify-center lg:justify-start gap-2">
            <Terminal size={14} className="inline-block mb-0.5" /> Full-Stack Developer
          </span>
          
          {/* MAIN TYPEWRITER LINES: Exact sizing: text-3xl md:text-5xl lg:text-5xl */}
          <span className="block text-3xl md:text-5xl lg:text-5xl mb-1 min-h-[1.2em]">
            {renderLine1()}
          </span>

          <span className="block text-3xl md:text-5xl lg:text-5xl min-h-[1.2em] relative whitespace-nowrap">
            {renderLine2()}
            {text2.length > 0 && text2.length < line2.length && (
              <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-cyan-500 ml-1`}>|</span>
            )}
          </span>
        </motion.h1>

        {/* DESCRIPTION: Exact sizing: text-sm md:text-lg lg:text-lg */}
        <motion.p variants={itemVariants} className="mt-4 text-sm md:text-lg lg:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 drop-shadow-sm px-2 md:px-0">
          As a <b>Full Stack Developer</b>, I engineer high-performance digital products. From <b>pixel-perfect frontends</b> to <b>scalable backend systems</b>, I focus on delivering real business value. Creator of{" "}
            <a href="#projects" className="group relative font-bold text-indigo-600 dark:text-cyan-300 transition-colors hover:text-cyan-500">
              LifeOS
              <span className="absolute -bottom-0.5 left-0 w-full h-px bg-cyan-500/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a> and{" "}
            <a href="#projects" className="group relative font-bold text-indigo-600 dark:text-cyan-300 transition-colors hover:text-cyan-500">
              DairyFlow
              <span className="absolute -bottom-0.5 left-0 w-full h-px bg-cyan-500/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>.
        </motion.p>

        {/* ACTION BUTTONS */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-5 lg:gap-4 pt-4">
          
          {/* HIRE ME: Exact sizing: px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-3.5 */}
          <a href="#contact" className="group relative overflow-hidden flex items-center gap-2 md:gap-3 rounded-full bg-slate-900 dark:bg-cyan-600 px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-3.5 text-sm md:text-lg lg:text-base font-semibold text-white shadow-lg shadow-slate-900/20 dark:shadow-cyan-500/20 transition-all hover:-translate-y-0.5 active:scale-95">
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
              <Sparkles size={18} className="text-yellow-300 group-hover:rotate-12 transition-transform" />
              <span className="relative z-20">Hire Me</span>
            </a>

            {/* DOWNLOAD CV: Exact sizing */}
            <a href="/resume.pdf" download="Manthan_Vaghasiya_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3 rounded-full border-2 border-slate-200 dark:border-slate-600 bg-white/80 dark:bg-slate-900/60 px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-3.5 text-sm md:text-lg lg:text-base font-semibold text-slate-800 dark:text-white transition-all hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 active:scale-95">
              Download CV <Download size={18} className="md:w-5 md:h-5 lg:w-[18px] lg:h-[18px]" />
            </a>
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <div className="hidden lg:block mx-2 h-6 w-px bg-slate-400 dark:bg-slate-600" />
            <div className="flex items-center gap-6 md:gap-8 lg:gap-4 text-slate-500 dark:text-slate-400">
              <a href="https://github.com/manthanvaghasiya" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-all hover:scale-110">
                <Github size={22} className="md:w-8 md:h-8 lg:w-[22px] lg:h-[22px]" />
              </a>
              <a href="https://www.linkedin.com/in/manthan-vaghasiya-b213a8267" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-110">
                <Linkedin size={22} className="md:w-8 md:h-8 lg:w-[22px] lg:h-[22px]" />
              </a>
              <a href="https://www.instagram.com/manthan_vaghasiya_07" target="_blank" rel="noreferrer" className="hover:text-pink-600 dark:hover:text-pink-400 transition-all hover:scale-110">
                <Instagram size={22} className="md:w-8 md:h-8 lg:w-[22px] lg:h-[22px]" />
              </a>
            </div>
        </motion.div>
      </div>

      {/* Styles for Shimmer Animation (From Reference) */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: shimmer 2.5s linear infinite;
        }
      `}</style>

    </motion.div>
  );
};

export default HeroTypography;