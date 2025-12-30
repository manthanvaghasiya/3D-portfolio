import React from "react";
import { Database, Layout, Server, Settings, Terminal, Cpu } from "lucide-react";

const Skills = () => {
  const categories = [
    {
      title: "Frontend Architecture",
      icon: <Layout className="text-accent" size={28} />,
      skills: ["React.js (Hooks, Context)", "Tailwind CSS & Framer Motion", "JavaScript (ES6+)", "Responsive Design Systems"]
    },
    {
      title: "Backend Engineering",
      icon: <Server className="text-accent" size={28} />,
      skills: ["Node.js & Express runtime", "RESTful API Architecture", "JWT Auth & Security", "Middleware Optimization"]
    },
    {
      title: "Database Management",
      icon: <Database className="text-accent" size={28} />,
      skills: ["MongoDB Aggregations", "Mongoose Schemas", "PostgreSQL Basics", "Data Modeling"]
    },
    {
      title: "DevOps & Tools",
      icon: <Settings className="text-accent" size={28} />,
      skills: ["Git Version Control", "CI/CD Pipelines (Vercel)", "Postman API Testing", "VS Code Workflow"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative z-20">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6" data-aos="fade-up">
           <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-card/50 border border-text-muted/20 text-accent text-[11px] font-bold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-sm">
                 <Terminal size={12} /> System Capabilities
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-text-main">
                 Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-glow">Stack</span>
              </h2>
           </div>
           <p className="text-text-muted max-w-md text-lg leading-relaxed">
              A comprehensive toolkit for building scalable, high-performance web applications.
           </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <div 
              key={index}
              className="bg-bg-card/40 backdrop-blur-md border border-text-muted/10 p-6 rounded-3xl hover:border-accent/50 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300 group hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {cat.icon}
              </div>
              
              <h3 className="text-xl font-bold text-text-main mb-4 group-hover:text-accent transition-colors">{cat.title}</h3>
              
              <ul className="space-y-3">
                {cat.skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-muted text-sm group-hover:text-text-main transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;