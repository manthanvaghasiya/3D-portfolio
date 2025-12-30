import React from "react";
import { Code2, Coffee, FolderGit2, Users } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      id: 1,
      label: "Years Experience",
      value: "1+",
      icon: <Code2 size={24} />,
      desc: "Full Stack Dev"
    },
    {
      id: 2,
      label: "Projects Completed",
      value: "12+",
      icon: <FolderGit2 size={24} />,
      desc: "Production Ready"
    },
    {
      id: 3,
      label: "Cups of Coffee",
      value: "500+",
      icon: <Coffee size={24} />,
      desc: "Fuel Consumed"
    },
    {
      id: 4,
      label: "Happy Clients",
      value: "5+",
      icon: <Users size={24} />,
      desc: "Global Connections"
    }
  ];

  return (
    <section className="py-12 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Holographic HUD Container */}
        <div 
          className="bg-bg-card/40 backdrop-blur-md border border-text-muted/10 rounded-3xl p-8 md:p-12 shadow-2xl hover:border-accent/30 transition-all duration-500 group"
          data-aos="fade-up"
        >
          {/* Ambient Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {stats.map((stat, index) => (
              <div 
                key={stat.id} 
                className={`flex flex-col items-center justify-center text-center space-y-3 ${
                  index !== stats.length - 1 ? "md:border-r border-text-muted/10" : ""
                }`}
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-1 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0)] group-hover:shadow-[0_0_20px_var(--accent-glow)]">
                  {stat.icon}
                </div>

                {/* Digital Counter */}
                <h3 className="text-4xl md:text-5xl font-black text-text-main tracking-tight">
                  {stat.value}
                </h3>

                {/* Label */}
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-text-main uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <span className="text-xs text-text-muted font-medium">
                    {stat.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;