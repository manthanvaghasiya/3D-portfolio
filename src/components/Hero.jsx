import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Instagram, Download, ArrowRight, Sparkles, Terminal } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { theme } = useTheme();
  const line1 = "Designing";
  const line2 = "Digital Realities";

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const mountedRef = useRef(true);

  // --- TYPING EFFECT LOGIC ---
  useEffect(() => {
    mountedRef.current = true;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setText1(line1);
      setText2(line2);
      return;
    }

    let i = 0;
    let j = 0;
    const interval1 = setInterval(() => {
      if (!mountedRef.current) return;
      i++;
      setText1(line1.slice(0, i));
      if (i >= line1.length) {
        clearInterval(interval1);
        const interval2 = setInterval(() => {
          if (!mountedRef.current) return;
          j++;
          setText2(line2.slice(0, j));
          if (j >= line2.length) clearInterval(interval2);
        }, 50);
      }
    }, 50);

    return () => {
      mountedRef.current = false;
      clearInterval(interval1);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[100dvh] pt-20 overflow-hidden"
    >
      {/* Container: Flex Row, Justify END (Pushes content to Right for HUD feel) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:justify-end">
        
        {/* Empty Spacer for Hologram (Left Side) */}
        <div className="hidden lg:block lg:w-1/2 h-full pointer-events-none"></div>

        {/* TEXT SECTION (Right Side) */}
        <div 
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right" 
            data-aos="fade-left" 
            data-aos-duration="1000"
        >
          
          {/* Status Badge - Dynamic Glass */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card/50 border border-text-muted/20 backdrop-blur-md shadow-lg mb-8 hover:border-accent/50 transition-all cursor-default group">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted group-hover:text-accent transition-colors">
              System Online
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-black text-text-main leading-[1.1] mb-6 tracking-tight">
             <span className="flex items-center justify-center lg:justify-end gap-2 text-xl md:text-2xl text-accent font-mono mb-2">
               <Terminal size={20} /> INITIALIZING_DEV_PROFILE
             </span>
             
             {/* Fluid Typography with Dynamic Colors */}
             <div className="min-h-[120px] lg:min-h-[160px] flex flex-col justify-center lg:items-end">
               <span style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }} className="block text-text-main/80">
                 {text1}
               </span>
               <span 
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }} 
                className="block mt-1 lg:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-glow animate-pulse-slow"
               >
                 {text2}
               </span>
             </div>
          </h1>

          <p className="text-lg md:text-xl text-text-muted max-w-lg leading-relaxed mb-10 font-light">
            I architect <b className="text-text-main">Immersive Web Experiences</b>. 
            Fusing React performance with WebGL visuals to build the next generation of the internet.
          </p>

          {/* CTAs - Aligned Right */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto justify-center lg:justify-end">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-accent text-white rounded-xl font-bold text-lg hover:bg-accent-glow transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_var(--accent-glow)] active:scale-95 flex items-center justify-center gap-2"
            >
              <Sparkles size={20} /> Explore Work
            </a>
            
            <a 
              href="/resume.pdf" 
              download="Manthan_Vaghasiya_Resume.pdf"
              className="w-full sm:w-auto px-8 py-4 bg-bg-card/50 text-text-main border border-text-muted/20 rounded-xl font-bold text-lg hover:border-accent hover:text-accent transition-all duration-300 active:scale-95 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              Download Data <Download size={20} />
            </a>
          </div>

          {/* Social Links - Aligned Right */}
          <div className="flex items-center gap-6 pt-6 border-t border-text-muted/10 w-full lg:w-auto justify-center lg:justify-end">
             <span className="text-sm font-mono text-text-muted uppercase tracking-wider">
               [ CONNECT_NODES ]
             </span>
             <div className="flex gap-5">
               {[
                 { Icon: Github, href: "https://github.com/manthanvaghasiya" },
                 { Icon: Linkedin, href: "https://www.linkedin.com/in/manthan-vaghasiya-b213a8267" },
                 { Icon: Instagram, href: "https://www.instagram.com/manthan_vaghasiya_07" }
               ].map(({ Icon, href }, idx) => (
                 <a 
                   key={idx} 
                   href={href} 
                   target="_blank" 
                   rel="noreferrer"
                   className="text-text-muted hover:text-accent transition-colors transform hover:scale-110 hover:drop-shadow-[0_0_8px_var(--accent-glow)]"
                 >
                   <Icon size={24} />
                 </a>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;