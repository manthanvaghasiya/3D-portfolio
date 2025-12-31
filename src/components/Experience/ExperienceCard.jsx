import React from "react";
import { Calendar, CheckCircle, Terminal } from "lucide-react";

const ExperienceCard = ({ role, company, date, description, keyContributions, techStack }) => {
  return (
    <div className="relative group pl-6 md:pl-10" data-aos="fade-up" data-aos-delay="100">
      {/* Timeline Dot with Glow Effect */}
      <div className="absolute -left-[9px] md:-left-[18px] top-6 md:top-8 h-4 w-4 md:h-5 md:w-5 rounded-full border-[3px] md:border-4 border-bg-main bg-accent shadow-[0_0_15px_var(--accent-glow)] transition-transform duration-300 group-hover:scale-125 z-10"></div>

      {/* Glass Card Container */}
      <div className="bg-bg-card/40 backdrop-blur-md p-5 md:p-8 rounded-3xl border border-text-muted/10 hover:border-accent/50 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300 group-hover:-translate-y-1">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-text-main">{role}</h3>
            <div className="text-accent font-semibold text-sm md:text-lg flex items-center gap-2 mt-1">
              <Terminal size={16} className="md:w-[18px]" /> {company}
            </div>
          </div>

          <div className="self-start md:self-auto flex items-center gap-2 text-text-muted font-medium bg-bg-main/50 border border-text-muted/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
            <Calendar size={14} className="md:w-[16px]" /> {date}
          </div>
        </div>

        <p className="text-text-muted text-sm md:text-lg leading-relaxed mb-6">{description}</p>

        {/* Dynamic Contributions List */}
        <ul className="space-y-4 text-text-muted text-sm md:text-base leading-relaxed">
          {keyContributions.map((item, index) => (
            <li key={index} className="flex items-start gap-3 group/item">
              <CheckCircle className="text-accent mt-1 flex-shrink-0 group-hover/item:text-accent-glow transition-colors" size={18} />
              <span dangerouslySetInnerHTML={{ __html: item }} /> 
            </li>
          ))}
        </ul>

        {/* Tech Stack Pills */}
        <div className="mt-8 pt-6 border-t border-text-muted/10">
          <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-text-muted mb-3">Tech Stack Used</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <span key={i} className="px-3 py-1.5 md:px-4 bg-bg-main/50 text-text-muted text-[11px] md:text-sm font-semibold rounded-lg border border-text-muted/20 hover:border-accent/50 hover:text-accent transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;