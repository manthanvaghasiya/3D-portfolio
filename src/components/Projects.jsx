import React, { useState, useEffect } from "react";
import { Github, ArrowUpRight, FolderGit2 } from "lucide-react";
import { PROJECTS_DATA } from "../data";
import ProjectCard from "./Projects/ProjectCard";
import ProjectModal from "./Projects/ProjectModal"; // <--- IMPORT THIS
import { useHoloStore } from "../hooks/useHoloStore";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { setHoveredProject } = useHoloStore();
  // Lock body scroll logic
  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedProject]);

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6" data-aos="fade-up">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-card/50 border border-text-muted/20 text-accent text-[11px] font-bold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-sm">
                <FolderGit2 size={12} /> Selected Work
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-text-main mt-4 mb-2 leading-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-glow">Projects</span>
            </h2>
            <p className="text-text-muted text-base md:text-lg mt-3">
              High-performance web applications built for scale and user experience.
            </p>
          </div>
          
           <a 
            href="https://github.com/manthanvaghasiya" 
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-6 py-3 bg-bg-card/50 border border-text-muted/20 rounded-full font-bold text-text-muted hover:border-accent hover:text-accent transition-all shadow-lg hover:shadow-[0_0_20px_var(--accent-glow)] active:scale-95 backdrop-blur-sm"
          >
            <Github size={20} />
            <span>View Github</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* --- PROJECT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <div 
              key={index}
              // 3. WRAP CARD IN DIV TO CAPTURE HOVER
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <ProjectCard 
                project={project} 
                index={index} 
                onClick={() => setSelectedProject(project)} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- HOLOGRAPHIC MODAL --- */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

    </section>
  );
};

export default Projects;  