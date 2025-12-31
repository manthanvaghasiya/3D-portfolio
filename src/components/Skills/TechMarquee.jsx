import React from "react";

const MarqueeRow = ({ items, reverse = false }) => {
  return (
    <div className="relative flex overflow-hidden py-4 group">
      {/* Gradient Masks for smooth fade in/out */}
      <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-bg-main to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-bg-main to-transparent z-10" />

      {/* The Moving Container */}
      <div 
        className={`flex gap-6 min-w-full ${reverse ? "animate-marquee-reverse" : "animate-marquee"} group-hover:[animation-play-state:paused]`}
      >
        {/* Quadruplicate the items for seamless loop */}
        {[...items, ...items, ...items, ...items].map((skill, idx) => (
          <div
            key={`${skill.name}-${idx}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-bg-card border border-text-muted/10 shadow-sm hover:border-accent/50 hover:shadow-[0_0_15px_var(--accent-glow)] transition-all cursor-default"
          >
            {/* Render the Icon Component dynamically */}
            <skill.icon size={18} style={{ color: skill.color }} />
            <span className="text-sm font-bold text-text-main whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechMarquee = ({ lanes }) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[100vw] overflow-hidden py-8">
      {lanes.map((lane, i) => (
        <MarqueeRow key={i} items={lane} reverse={i % 2 !== 0} />
      ))}
    </div>
  );
};

export default TechMarquee;