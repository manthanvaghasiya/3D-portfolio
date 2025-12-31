import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Calendar, Code2, Layers } from "lucide-react";

// --- ANIMATION VARIANTS ---
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2, delay: 0.1 }
  }
};

const modalVariants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      damping: 25, 
      stiffness: 300 
    }
  },
  exit: { 
    opacity: 0, 
    y: 50,
    scale: 0.95,
    transition: { duration: 0.2 }
  }
};

const ProjectModal = ({ project, onClose }) => {
  // Lock Scroll & Handle Escape
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
        
        {/* --- BACKDROP --- */}
        <motion.div 
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md" // Darker for focus
        />

        {/* --- MODAL CONTENT --- */}
        <motion.div 
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative w-full max-w-4xl max-h-[85vh] flex flex-col bg-bg-card border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >

          {/* CLOSE BUTTON (Sticky Top Right) */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 text-white/80 hover:bg-accent hover:text-white transition-all backdrop-blur-md border border-white/10"
          >
            <X size={20} />
          </button>

          {/* --- SCROLLABLE AREA --- */}
          <div className="overflow-y-auto custom-scrollbar flex-1">
            
            {/* 1. HERO IMAGE (Wide Rectangle Preserved) */}
            <div className="relative w-full h-auto aspect-video">
               <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent z-10 opacity-80" />
               <img 
                 src={project.modalImage || project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover object-top"
               />
               
               {/* Floating Title on Image (Optional Visual Flair) */}
               <div className="absolute bottom-6 left-6 z-20 md:bottom-8 md:left-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent bg-black/50 backdrop-blur-md rounded-full border border-accent/20">
                        {project.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg">
                    {project.title}
                  </h2>
               </div>
            </div>

            {/* 2. CONTENT CONTAINER */}
            <div className="p-6 md:p-10 space-y-8 bg-bg-card">
              
              {/* Description & Date */}
              <div className="flex flex-col md:flex-row gap-8">
                 <div className="flex-1">
                    <p className="text-lg md:text-xl font-medium text-text-main leading-relaxed mb-6">
                      {project.shortDescription}
                    </p>
                    <div className="h-px w-full bg-white/10 mb-6" />
                    <div className="text-text-muted text-sm md:text-base leading-loose whitespace-pre-line">
                      {project.fullDescription}
                    </div>
                 </div>

                 {/* Sidebar / Metadata (Right side on Desktop) */}
                 <div className="w-full md:w-64 space-y-6 flex-shrink-0">
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold text-text-muted uppercase tracking-widest mb-3">
                        <Code2 size={14} className="text-accent" /> Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs font-semibold text-text-main bg-white/5 border border-white/10 rounded-md">
                              {tech}
                            </span>
                          ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="space-y-3 pt-2">
                        {project.liveLink && (
                          <a 
                            href={project.liveLink} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 bg-accent hover:bg-accent-glow text-white text-sm font-bold rounded-xl shadow-lg shadow-accent/20 transition-all active:scale-95"
                          >
                            <ExternalLink size={16} /> Live Demo
                          </a>
                        )}
                        {project.githubLink && (
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 bg-transparent border border-white/10 hover:border-white/30 text-text-muted hover:text-white text-sm font-bold rounded-xl transition-all active:scale-95"
                          >
                            <Github size={16} /> Source Code
                          </a>
                        )}
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;