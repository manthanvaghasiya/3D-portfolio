import React, { memo } from "react";
import { ArrowUpRight, Layers, ArrowRight } from "lucide-react";

const ProjectCard = ({ project, onClick, index }) => {
  return (
    <div
      onClick={onClick}
      className="group bg-bg-card/40 backdrop-blur-md border border-text-muted/10 rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300 cursor-pointer flex flex-col h-full"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Image Area */}
      <div className="relative h-56 md:h-60 overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-40" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute top-3 right-3 z-20 bg-bg-main/80 backdrop-blur-md px-2 py-1 rounded-md border border-text-muted/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={16} className="text-accent" />
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow relative z-20">
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-2">
            <Layers size={14} className="text-accent" />
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
              {project.category.split("·")[0].trim()}
            </span>
          </div>
          <h3 className="text-xl font-bold text-text-main group-hover:text-accent transition-colors line-clamp-1">
            {project.title}
          </h3>
        </div>

        <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-bg-main/50 text-text-muted text-[10px] font-bold uppercase tracking-wider rounded border border-text-muted/10 group-hover:border-accent/30 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-text-muted/10">
            <span className="text-sm font-bold text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
              Read Case Study <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectCard);