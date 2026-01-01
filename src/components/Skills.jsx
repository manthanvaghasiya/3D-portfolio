import React from "react";
import { Cpu } from "lucide-react";
import TechMarquee from "./Skills/TechMarquee";
import { SKILL_LANES } from "../data/skills"; // Importing the new structure

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative z-20 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-bold uppercase tracking-widest mb-6"
          data-aos="fade-down"
        >
           <Cpu size={14} /> 
           Powered By Modern Tech
        </div>
        
        <h2 
          className="text-4xl md:text-5xl font-black text-text-main tracking-tight mb-4"
          data-aos="fade-up"
        >
           My Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Arsenal</span>
        </h2>
        
        <p 
          className="text-text-muted text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
           I don't just write code; I architect scalable solutions. Here are the tools I use to bring digital products to life.
        </p>
      </div>

      {/* The Infinite Marquee */}
      <div className="lg:hidden" data-aos="fade-up" data-aos-delay="200">
        <TechMarquee lanes={SKILL_LANES} />
      </div>

    </section>
  );
};

export default Skills;