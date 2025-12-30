import React from "react";
import { User, Code, Target, Zap, Terminal, CheckCircle2, Layout, Sparkles, Rocket, Bot } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden z-20">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-12 max-w-2xl" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-card/50 border border-text-muted/20 text-accent text-[11px] font-bold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-sm">
            <User size={12} /> About Me
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-text-main leading-tight tracking-tight">
            More than just code. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-glow">
              I build digital engines for growth.
            </span>
          </h2>
        </div>

        {/* --- HOLOGRAPHIC BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
          
          {/* 1. THE FULL STACK BUILDER (Span 2) */}
          <div 
            className="md:col-span-2 lg:col-span-2 bg-bg-card/40 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:border-accent/50 transition-all duration-300 flex flex-col md:flex-row items-stretch gap-8 group shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Icon Column */}
            <div className="w-full md:w-20 bg-accent/10 text-accent rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300 py-6 md:py-0">
               <Terminal size={32} />
            </div>

            {/* Content Column */}
            <div className="flex-1 w-full flex flex-col justify-between">
               <div>
                 <h3 className="text-xl font-bold text-text-main tracking-tight mb-3">The Full Stack Builder</h3>
                 <div className="space-y-3 text-text-muted text-sm leading-relaxed mb-6">
                    <p>
                      I don't just write code; I build complete solutions. From my background as a <b className="text-text-main">BCA graduate</b> to completing my internship, I’ve focused on bridging the gap between a database and a responsive UI.
                    </p>
                    <p>
                      I specialize in turning complex logic into clean, user-friendly <b className="text-text-main">MERN applications</b>.
                    </p>
                 </div>
               </div>

               {/* Primary Stack Footer */}
               <div className="border-t border-text-muted/10 pt-4">
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-3">Primary Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Node.js & Express',  'MongoDB', 'PostgreSQL'].map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-bg-main/50 text-text-muted text-xs font-semibold rounded-md border border-text-muted/20 flex items-center gap-1.5 hover:border-accent/50 transition-colors">
                        <Code size={10} className="text-accent" />
                        {tech}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          {/* 2. PRODUCT MINDSET (Span 1) */}
          <div 
            className="bg-bg-main/80 md:bg-bg-card/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl relative overflow-hidden group flex flex-col justify-between shadow-lg hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-all"></div>
            
            <div className="relative z-10">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md mb-5 text-accent border border-white/10">
                <Target size={20} />
              </div>

              <h4 className="text-lg font-bold text-text-main mb-3">Product Mindset</h4>
              <p className="text-text-muted leading-relaxed text-sm mb-6">
                Having worked on tools like <b className="text-text-main">LifeOS</b>, I understand that code needs to solve a problem. I build with the end-user in mind to drive actual value.
              </p>

              <ul className="space-y-2.5 border-t border-text-muted/10 pt-4">
                <li className="flex items-center gap-2 text-sm font-medium text-text-muted">
                  <Layout size={14} className="text-accent" /> User Experience (UX)
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-text-muted">
                  <CheckCircle2 size={14} className="text-accent" /> Problem Solving
                </li>
              </ul>
            </div>
          </div>

          {/* 3. AI-POWERED EFFICIENCY (Span 1) */}
          <div 
            className="bg-accent text-white p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-lg shadow-accent/20 ring-1 ring-white/20"
            data-aos="fade-up"
            data-aos-delay="300"
          >
             <div className="absolute -bottom-4 -right-4 text-white/10 rotate-[-15deg]">
                <Bot size={100} />
             </div>

             <div className="relative z-10">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md mb-5 text-white">
                    <Sparkles size={20} />
                </div>

                <h4 className="text-lg font-bold mb-3">AI-Powered</h4>
                <p className="text-white/80 leading-relaxed text-sm mb-6">
                  I am not just a coder; I am an <b className="text-white">AI-enhanced developer</b>. I leverage Prompt Engineering to write cleaner code faster and debug smarter.
                </p>
             </div>

             <div className="relative z-10 border-t border-white/20 pt-4">
                <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-2">AI Tools</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Prompt Eng.', 'AI Integration', 'Smart Debugging'].map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-black/20 rounded text-[10px] font-semibold backdrop-blur-md border border-white/10 hover:bg-white/20 transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
             </div>
          </div>

          {/* 4. MODERN EXECUTION (Span 2) */}
          <div 
            className="md:col-span-2 lg:col-span-2 bg-bg-card/40 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:border-accent/50 transition-all duration-300 flex flex-col md:flex-row items-stretch gap-8 group shadow-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Icon Column */}
            <div className="w-full md:w-20 bg-accent/10 text-accent rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300 py-6 md:py-0">
               <Rocket size={32} />
            </div>
            
            {/* Content Column */}
            <div className="flex-1 w-full flex flex-col justify-between">
               <div>
                 <h4 className="text-lg font-bold text-text-main mb-2">Modern Execution</h4>
                 <p className="text-text-muted leading-relaxed text-sm mb-6">
                    Speed matters, but stability matters more. Whether it's converting legacy PHP projects to modern MERN stacks or deploying fresh apps, I focus on <b className="text-text-main">clean architecture</b> and smooth deployment.
                 </p>
               </div>
               
               {/* Toolkit Footer */}
               <div className="border-t border-text-muted/10 pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Toolkit</p>
                    <span className="text-[10px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                      Bug-Free Shipping
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Vite', 'Git & GitHub', 'Postman', 'Vercel/Netlify'].map((tool) => (
                      <span key={tool} className="px-2.5 py-1 bg-bg-main/50 text-text-muted text-xs font-semibold rounded-md border border-text-muted/20 flex items-center gap-1.5 hover:border-accent/50 transition-colors">
                        <CheckCircle2 size={10} className="text-accent" />
                        {tool}
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

export default About;