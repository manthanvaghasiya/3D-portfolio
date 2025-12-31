import React, { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Instagram, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import HologramCanvas from "./HologramCanvas"; // <--- Import the 3D Canvas

const Hero = () => {
  const { theme } = useTheme();
  const line1 = "I turn ideas into";
  const line2 = "Scalable digital products";

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const interval1Ref = useRef(null);
  const interval2Ref = useRef(null);
  const mountedRef = useRef(true);

  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  useEffect(() => {
    mountedRef.current = true;
    if (prefersReducedMotion) {
      setText1(line1);
      setText2(line2);
      return;
    }

    let i = 0;
    let j = 0;

    interval1Ref.current = setInterval(() => {
      i++;
      if (!mountedRef.current) return;
      setText1(line1.slice(0, i));

      if (i >= line1.length) {
        clearInterval(interval1Ref.current);
        interval1Ref.current = null;

        interval2Ref.current = setInterval(() => {
          j++;
          if (!mountedRef.current) return;
          setText2(line2.slice(0, j));
          if (j >= line2.length) {
            clearInterval(interval2Ref.current);
            interval2Ref.current = null;
          }
        }, 60);
      }
    }, 60);

    return () => {
      mountedRef.current = false;
      if (interval1Ref.current) clearInterval(interval1Ref.current);
      if (interval2Ref.current) clearInterval(interval2Ref.current);
    };
  }, [line1, line2, prefersReducedMotion]);

  // --- RENDER HELPERS ---
  const renderLine1 = () => {
    if (!text1) return null;
    const word = "ideas";
    const idx = text1.indexOf(word);
    if (idx === -1) return <>{text1}</>;

    const before = text1.slice(0, idx);
    const typedIdeas = text1.slice(idx, idx + word.length);
    const after = text1.slice(idx + word.length);

    return (
      <>
        {before}
        <span className="text-transparent animate-text-shimmer bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text bg-[length:200%_auto]">
          {typedIdeas}
        </span>
        {after}
      </>
    );
  };

  const renderLine2 = () => {
    if (!text2) return null;
    const word = "products";
    const idx = text2.indexOf(word);
    if (idx === -1) {
      return (
        <span className="text-transparent animate-text-shimmer bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text bg-[length:200%_auto]">
          {text2}
        </span>
      );
    }

    const before = text2.slice(0, idx);
    const typedProducts = text2.slice(idx);

    return (
      <>
        <span className="text-transparent animate-text-shimmer bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text bg-[length:200%_auto]">
          {before}
        </span>{" "}
        <span className="text-text-main">{typedProducts}</span>
      </>
    );
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-[100dvh] pt-20 overflow-hidden"
    >
      {/* --- THE BLUE DIMENSION BACKGROUND --- */}
      {/* This ensures the Hologram is ONLY here and sits behind the content */}
      <HologramCanvas />

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col lg:flex-row items-center gap-10 lg:gap-14 px-6">
        
        {/* IMAGE SECTION */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-start order-1" data-aos="fade-right" data-aos-duration="800">
          <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-xl lg:-mr-6 -mt-8 lg:-mt-24">
            <img
              src="/profile.jpg"
              alt="Manthan"
              className="w-full h-auto max-h-[350px] md:max-h-[500px] lg:max-h-[720px] object-contain drop-shadow-2xl transform scale-100 lg:scale-110 origin-bottom hover:scale-[1.05] lg:hover:scale-[1.2] transition-transform duration-700 ease-out animate-float"
              style={{
                maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* TEXT SECTION */}
        <div className="w-full lg:w-[55%] text-center lg:text-left space-y-5 md:space-y-7 lg:space-y-6 order-2">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 md:px-5 md:py-2.5 lg:px-4 lg:py-2 text-[10px] md:text-xs lg:text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)] backdrop-blur-md" data-aos="fade-up" data-aos-delay="0">
            <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-cyan-500" />
            </span>
            Available for Work
          </div>

          <h1 className="font-black text-text-main tracking-tight leading-[1.2]" data-aos="fade-up" data-aos-delay="160">
            <span className="block text-xl md:text-2xl font-bold text-text-muted mb-2">Hi, I&apos;m Manthan Vaghasiya</span>
            <span className="block text-[10px] md:text-sm lg:text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-3 md:mb-4 lg:mb-3">Full-Stack Developer</span>

            <span className="block text-3xl md:text-5xl lg:text-5xl mb-1 min-h-[40px] md:min-h-auto text-text-main">
              {renderLine1()}
            </span>

            <span className="block mt-1 md:mt-2 text-3xl md:text-5xl lg:text-5xl whitespace-normal lg:whitespace-nowrap text-text-main">
              {renderLine2()}
            </span>

            <span className="sr-only" aria-live="polite">{`${text1} ${text2}`}</span>
          </h1>

          <p className="mt-4 text-sm md:text-lg lg:text-lg text-text-muted leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 px-2 md:px-0" data-aos="fade-up" data-aos-delay="260">
            As a <b>Full Stack Developer</b>, I design and develop complete web products from the ground up. From building <b>robust backend architectures</b> to crafting <b>user–friendly interfaces</b>, I focus on <b>performance, maintainability, and real business impact</b>. My portfolio includes platforms like{" "}
            <a href="#projects" className="font-bold text-text-main underline underline-offset-4 hover:no-underline hover:text-accent transition">LifeOS</a> and{" "}
            <a href="#projects" className="font-bold text-text-main underline underline-offset-4 hover:no-underline hover:text-accent transition">DairyFlow</a>.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-5 lg:gap-4 pt-2" data-aos="fade-up" data-aos-delay="360">
            {/* Hire Me Button */}
            <a href="#contact" className="group relative overflow-hidden flex items-center gap-2 md:gap-3 rounded-full bg-accent px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-3.5 text-sm md:text-lg lg:text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 active:scale-95">
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
              <span className="relative z-20">Hire Me</span>
            </a>

            {/* Resume Button */}
            <a href="/resume.pdf" download="Manthan_Vaghasiya_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3 rounded-full border border-text-muted/20 bg-transparent px-6 py-3 md:px-10 md:py-4 lg:px-8 lg:py-3.5 text-sm md:text-lg lg:text-base font-semibold text-text-main shadow-sm transition hover:border-accent hover:text-accent active:scale-95 backdrop-blur-sm">
              Download CV <Download size={18} className="md:w-5 md:h-5 lg:w-[18px] lg:h-[18px]" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4" data-aos="fade-up" data-aos-delay="460">
            <div className="hidden lg:block mx-2 h-6 w-px bg-text-muted/30" />
            <div className="flex items-center gap-6 md:gap-8 lg:gap-4 text-text-muted">
              <a href="https://github.com/manthanvaghasiya" target="_blank" rel="noopener noreferrer" className="hover:text-text-main transition hover:scale-110">
                <Github size={22} className="md:w-8 md:h-8 lg:w-[22px] lg:h-[22px]" />
              </a>
              <a href="https://www.linkedin.com/in/manthan-vaghasiya-b213a8267" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition hover:scale-110">
                <Linkedin size={22} className="md:w-8 md:h-8 lg:w-[22px] lg:h-[22px]" />
              </a>
              <a href="https://www.instagram.com/manthan_vaghasiya_07" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition hover:scale-110">
                <Instagram size={22} className="md:w-8 md:h-8 lg:w-[22px] lg:h-[22px]" />
              </a>
            </div>
          </div>
        </div>
      </div>

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

        .sr-only {
          position: absolute !important;
          width: 1px; height: 1px;
          padding: 0; margin: -1px; overflow: hidden;
          clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-float, .animate-text-shimmer, .animate-ping {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;