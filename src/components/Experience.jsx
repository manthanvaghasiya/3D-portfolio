import React from "react";
import { Briefcase, Calendar, CheckCircle, Terminal } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-4 md:px-6 relative z-20"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center" data-aos="fade-up">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-card/50 border border-text-muted/20 text-accent text-[11px] font-bold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-sm">
             <Briefcase size={12} /> Career History
           </div>
          <h2 className="text-3xl md:text-5xl font-black text-text-main mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-glow">Experience</span>
          </h2>
          <p className="mt-4 text-text-muted text-base md:text-lg max-w-2xl mx-auto">
            Hands-on experience building and shipping real-world production features in a professional work environment.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 md:border-l-4 border-accent/30 ml-4 md:ml-6 space-y-12">
          
          {/* EXPERIENCE CARD 1 */}
          <div
            className="relative group pl-6 md:pl-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Timeline Dot (Glowing Node) */}
            <div className="absolute -left-[9px] md:-left-[18px] top-6 md:top-8 h-4 w-4 md:h-5 md:w-5 rounded-full border-[3px] md:border-4 border-bg-main bg-accent shadow-[0_0_15px_var(--accent-glow)] transition-transform duration-300 group-hover:scale-125 z-10"></div>

            {/* Glass Card */}
            <div className="bg-bg-card/40 backdrop-blur-md p-5 md:p-8 rounded-3xl border border-text-muted/10 hover:border-accent/50 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300 group-hover:-translate-y-1">
              
              {/* Top Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-main">
                    Full-Stack Developer Intern
                  </h3>
                  <div className="text-accent font-semibold text-sm md:text-lg flex items-center gap-2 mt-1">
                    <Terminal size={16} className="md:w-[18px]" /> Bluestock Fintech, Pune
                  </div>
                </div>

                <div className="self-start md:self-auto flex items-center gap-2 text-text-muted font-medium bg-bg-main/50 border border-text-muted/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm">
                  <Calendar size={14} className="md:w-[16px]" /> Sep 2025 – Nov 2025
                </div>
              </div>

              {/* Description */}
              <p className="text-text-muted text-sm md:text-lg leading-relaxed mb-6">
                Worked as a full-stack intern contributing to production-level fintech modules. Actively collaborated with UI/UX designers and backend engineers to deliver secure, scalable features for live users.
              </p>

              {/* Key Contributions */}
              <ul className="space-y-4 text-text-muted text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-3 group/item">
                  <CheckCircle
                    className="text-accent mt-1 flex-shrink-0 group-hover/item:text-accent-glow transition-colors"
                    size={18}
                  />
                  <span>
                    Built a complete <b className="text-text-main">Company Registration & Verification module</b> using React.js and PostgreSQL, handling secure onboarding and validation.
                  </span>
                </li>

                <li className="flex items-start gap-3 group/item">
                  <CheckCircle
                    className="text-accent mt-1 flex-shrink-0 group-hover/item:text-accent-glow transition-colors"
                    size={18}
                  />
                  <span>
                    Implemented <b className="text-text-main">responsive UI architecture</b> across the HiringInsight application using modern CSS and media queries.
                  </span>
                </li>

                <li className="flex items-start gap-3 group/item">
                  <CheckCircle
                    className="text-accent mt-1 flex-shrink-0 group-hover/item:text-accent-glow transition-colors"
                    size={18}
                  />
                  <span>
                    Collaborated with backend developers to integrate REST APIs, improved error handling, and optimized form flows.
                  </span>
                </li>
              </ul>

              {/* Tech Stack Used */}
              <div className="mt-8 pt-6 border-t border-text-muted/10">
                <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-text-muted mb-3">
                  Tech Stack Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Node.js",
                    "REST APIs",
                    "PostgreSQL",
                    "Responsive CSS",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 md:px-4 bg-bg-main/50 text-text-muted text-[11px] md:text-sm font-semibold rounded-lg border border-text-muted/20 hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;