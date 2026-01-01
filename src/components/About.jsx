import React from "react";
import { motion } from "framer-motion";
import { User, Code, Target, Zap, Terminal, CheckCircle2, Layout, Sparkles, Rocket, Bot, Cpu, Database } from "lucide-react";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 15 } 
  }
};

// --- REUSABLE COMPONENT: TECH CARD ---
// Standardized "Holographic" card used for ALL grid items now
const TechCard = ({ children, className = "", glowColor = "cyan" }) => {
    return (
        <motion.div 
            variants={cardVariants}
            className={`relative group bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-${glowColor}-500/10 transition-all duration-500 ${className}`}
        >
            {/* Hover Glow Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br from-${glowColor}-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Tech Corners (Top-Left & Bottom-Right) */}
            <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-${glowColor}-500/30 rounded-tl-lg group-hover:border-${glowColor}-400 transition-colors duration-300`} />
            <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-${glowColor}-500/30 rounded-br-lg group-hover:border-${glowColor}-400 transition-colors duration-300`} />
            
            {/* Content Layer */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </motion.div>
    );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-6 relative z-20 overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16 max-w-3xl"
        >
          <motion.div variants={cardVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-[11px] font-bold uppercase tracking-widest mb-6 shadow-[0_0_10px_rgba(34,211,238,0.2)] backdrop-blur-sm">
            <User size={12} /> System_Architecture
          </motion.div>
          
          <motion.div variants={cardVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-400/30 text-cyan-300 text-[11px] font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(34,211,238,0.1)] backdrop-blur-md">
            <User size={12} /> System_Architecture
          </motion.div>
          
          {/* Main Title */}
          <motion.h2 variants={cardVariants} className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight relative">
             {/* Shadow Scrim for readability */}
            <span className="absolute -inset-4 bg-slate-950/60 blur-2xl -z-10 rounded-full opacity-80" />
            
            More than just code. <br />
            
            {/* --- UPGRADED GRADIENT: Blue -> Green -> Silver --- */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400  to-emerald-400 filter drop-shadow-[0_2px_10px_rgba(34,211,238,0.2)]">
              I build digital engines for growth.
            </span>
          </motion.h2>
        </motion.div>

        {/* --- HOLOGRAPHIC BENTO GRID --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        >
          
          {/* 1. THE FULL STACK BUILDER (Span 2) */}
          <TechCard className="md:col-span-2 lg:col-span-2 p-6 md:p-8 flex flex-col md:flex-row items-stretch gap-8" glowColor="cyan">
             {/* Icon Column */}
             <div className="w-full md:w-24 bg-cyan-500/10 text-cyan-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 py-6 md:py-0 border border-cyan-500/20">
                <Terminal size={40} strokeWidth={1.5} />
             </div>

             {/* Content */}
             <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2">
                     The Full Stack Builder <span className="text-cyan-500/40 text-sm font-mono font-normal hidden sm:block">// v2.0</span>
                  </h3>
                  <div className="space-y-4 text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                     <p>
                       I don't just write code; I build complete ecosystems. From my background as a <b className="text-slate-200">BCA graduate</b> to production-level internships, I bridge the gap between complex databases and seamless UIs.
                     </p>
                     <p>
                       Specializing in the <b className="text-white">MERN Stack</b>, I architect scalable solutions that live on the edge of performance and usability.
                     </p>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="border-t border-white/10 pt-4">
                   <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Core Technologies</p>
                   <div className="flex flex-wrap gap-2">
                     {['React.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL'].map((tech) => (
                       <span key={tech} className="px-3 py-1.5 bg-slate-800/50 text-slate-300 text-xs font-semibold rounded-lg border border-white/10 flex items-center gap-1.5 group-hover:border-cyan-500/30 transition-colors cursor-default">
                         <Code size={12} className="text-cyan-500" />
                         {tech}
                       </span>
                     ))}
                   </div>
                </div>
             </div>
          </TechCard>

          {/* 2. PRODUCT MINDSET (Span 1) */}
          <TechCard className="p-6 md:p-8 flex flex-col justify-between" glowColor="indigo">
             <div>
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center backdrop-blur-md mb-6 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                  <Target size={24} />
                </div>

                <h4 className="text-xl font-bold text-white mb-3">Product Mindset</h4>
                <p className="text-slate-400 leading-relaxed text-sm mb-6">
                  Code without purpose is just text. Working on products like <b className="text-indigo-400">LifeOS</b> taught me to prioritize user value over complexity.
                </p>
             </div>

             <ul className="space-y-3 border-t border-white/10 pt-4">
               {[
                 { icon: Layout, text: "User Experience (UX)" },
                 { icon: CheckCircle2, text: "Problem Solving" }
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                   <item.icon size={16} className="text-indigo-500" /> {item.text}
                 </li>
               ))}
             </ul>
          </TechCard>

          {/* 3. AI-ENHANCED (Span 1) - NOW STANDARDIZED */}
          {/* Matches Product Mindset structure exactly, but with Blue/Intelligence theme */}
          <TechCard className="p-6 md:p-8 flex flex-col justify-between" glowColor="blue">
             <div>
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center backdrop-blur-md mb-6 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    <Sparkles size={24} />
                </div>

                <h4 className="text-xl font-bold text-white mb-3">AI-Enhanced</h4>
                <p className="text-slate-400 leading-relaxed text-sm mb-6">
                  I leverage <b className="text-blue-400">Gen-AI</b> & Prompt Engineering to accelerate development, debug instantly, and push creative boundaries.
                </p>
             </div>

             <div className="border-t border-white/10 pt-4">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Intelligence</p>
                <div className="flex flex-wrap gap-2">
                  {['Cursor AI', 'ChatGPT', 'v0.dev'].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-blue-500/10 text-blue-300 text-[10px] font-bold rounded-lg border border-blue-500/20 flex items-center gap-1.5 cursor-default group-hover:border-blue-400/40 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
             </div>
          </TechCard>

          {/* 4. MODERN EXECUTION (Span 2) */}
          <TechCard className="md:col-span-2 lg:col-span-2 p-6 md:p-8 flex flex-col md:flex-row items-stretch gap-8" glowColor="emerald">
            {/* Icon Column */}
            <div className="w-full md:w-24 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 py-6 md:py-0 border border-emerald-500/20">
               <Rocket size={40} strokeWidth={1.5} />
            </div>
            
            {/* Content Column */}
            <div className="flex-1 flex flex-col justify-between">
               <div>
                 <h4 className="text-xl font-bold text-white mb-3">Modern Execution</h4>
                 <p className="text-slate-400 leading-relaxed text-sm md:text-base mb-6">
                    Speed matters, but stability matters more. From converting legacy PHP to modern <b className="text-white">MERN architectures</b> to deploying auto-scaling apps, I focus on CI/CD and clean code.
                 </p>
               </div>
               
               {/* Toolkit Footer */}
               <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">DevOps & Tools</p>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                      Production Ready
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Vite', 'Git/GitHub', 'Postman', 'Vercel', 'Netlify'].map((tool) => (
                      <span key={tool} className="px-3 py-1.5 bg-slate-800/50 text-slate-300 text-xs font-semibold rounded-lg border border-white/10 flex items-center gap-1.5 group-hover:border-emerald-500/30 transition-colors cursor-default">
                        <CheckCircle2 size={12} className="text-emerald-500" />
                        {tool}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </TechCard>

        </motion.div>
      </div>
    </section>
  );
};

export default About;