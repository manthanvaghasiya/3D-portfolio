import React, { useState, useEffect } from "react";
import { ExternalLink, Github, X, ArrowUpRight, Layers, CheckCircle2, ArrowRight, ChevronLeft, FolderGit2 } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedProject]);

  // --- PROJECT DATA ---
  const projects = [
    {
      title: "Surat BookCycle",
      category: "E-commerce",
      shortDescription:
        "A hyper-local P2P marketplace connecting students to buy, sell, and exchange used textbooks.",
      fullDescription:
        "Surat BookCycle is a centralized book marketplace designed to reduce textbook waste and cost for students.\n\n" +
        "• Designed and implemented a RESTful API using Node.js and Express to manage book listings and user operations.\n" +
        "• Integrated secure authentication with JWT to protect user sessions and personal data.\n" +
        "• Built a React.js frontend with instant search, filters, and detail pages for a smooth browsing experience.\n" +
        "• Created a responsive user dashboard to manage listings (add, edit, delete) on both mobile and desktop.",
      features: [
        "Secure Login/Signup with JWT",
        "Search, Category & Filter Flow",
        "Book Listing Management (CRUD)",
        "Responsive UI for Students",
      ],
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "/bookcycle.png",
      modalImage: "/bookcycle-full.png",
      githubLink: "https://github.com/manthanvaghasiya/surat-bookcycle-mern.git",
      liveLink: "#",
    },
    {
      title: "DairyFlow",
      category: "SaaS ERP",
      shortDescription:
        "A modern ERP-style platform helping dairy shops manage sales, credit (udhaar), and inventory.",
      fullDescription:
        "DairyFlow is a SaaS-style system built specifically for small and mid-size dairy businesses in India.\n\n" +
        "• Developed a custom POS flow optimized for high-traffic morning/evening shifts.\n" +
        "• Implemented a robust Udhaar (credit) tracking system replacing the traditional red book.\n" +
        "• Designed real-time inventory tracking to reduce wastage on perishable items.\n" +
        "• Built dashboards for daily revenue, top products, and customer behaviour using clean UI patterns.",
      features: [
        "POS interface tailored to dairy workflows",
        "Customer Udhaar & Ledger Management",
        "Inventory Alerts for Perishables",
        "Daily Revenue & Performance Insights",
      ],
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/dairyflow.png",
      modalImage: "/dairyflow-full.png",
      githubLink:
        "https://github.com/manthanvaghasiya/dairyflow-dairy-management-system",
      liveLink: "#",
    },
    {
      title: "LifeOS",
      category: "Productivity",
      shortDescription:
        "An all-in-one personal operating system that combines financial tracking and habit consistency.",
      fullDescription:
        "LifeOS is a MERN-based productivity platform that unifies financial tracking and habit building into a single interface.\n\n" +
        "• Built a financial analytics dashboard using Recharts (area and donut charts) to visualize income vs expense.\n" +
        "• Implemented a GitHub-style habit tracker with optimistic UI updates for instant feedback.\n" +
        "• Used MongoDB aggregations to calculate consistency, streaks, and financial summaries.\n" +
        "• Secured the platform with JWT auth and role-based access for future extensibility.",
      features: [
        "Financial Analytics with Charts",
        "Habit Tracker with Consistency Logic",
        "Goal Setting & Notes",
        "MERN Stack Architecture",
      ],
      tech: ["MERN Stack", "Recharts", "Tailwind CSS", "Render"],
      image: "/lifeos.png",
      modalImage: "/lifeos-full.png",
      githubLink: "https://github.com/manthanvaghasiya/lifeos",
      liveLink: "https://lifeos-by-manthan.vercel.app/",
    },
  ];

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
          {projects.map((project, index) => (
            <div 
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group bg-bg-card/40 backdrop-blur-md border border-text-muted/10 rounded-2xl overflow-hidden hover:border-accent/50 hover:shadow-[0_0_30px_var(--accent-glow)] transition-all duration-300 cursor-pointer flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              
              {/* Image Area */}
              <div className="relative h-56 md:h-60 overflow-hidden shrink-0">
                {/* Gradient overlay adjusted for both themes (darker at bottom for text readability if needed) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 z-10 transition-opacity group-hover:opacity-40" />
                
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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
                   <h3 
                     className="text-xl font-bold text-text-main group-hover:text-accent transition-colors line-clamp-1"
                   >
                     {project.title}
                   </h3>
                </div>

                <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>

                {/* --- TECH STACK --- */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-bg-main/50 text-text-muted text-[10px] font-bold uppercase tracking-wider rounded border border-text-muted/10 group-hover:border-accent/30 transition-colors">
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
          ))}
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* ------------------- HOLOGRAPHIC MODAL -------------------------- */}
      {/* ------------------------------------------------------------------ */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex sm:items-center justify-center p-0 sm:p-4">
          
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-bg-main/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          {/* Modal Container */}
          <div className="fixed inset-0 sm:relative bg-bg-main w-full h-full sm:h-auto sm:max-h-[85vh] sm:max-w-5xl sm:rounded-2xl border border-text-muted/10 shadow-2xl shadow-accent/10 overflow-hidden flex flex-col lg:flex-row animate-fade-in-up">
            
            {/* --- MOBILE STICKY HEADER --- */}
            <div className="flex sm:hidden items-center justify-between p-4 border-b border-text-muted/10 bg-bg-main shrink-0 z-20">
               <button 
                 onClick={() => setSelectedProject(null)}
                 className="flex items-center gap-1 text-text-muted font-bold text-sm active:text-accent transition-colors"
               >
                 <ChevronLeft size={22} /> Back
               </button>
               <span className="font-bold text-text-main truncate max-w-[200px]">
                 {selectedProject.title}
               </span>
               <div className="w-6"></div> 
            </div>

            {/* 1. Modal Image (Desktop Side) */}
            <div className="hidden sm:block w-full lg:w-[45%] bg-black relative h-64 lg:h-auto shrink-0 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
              <img 
                src={selectedProject.modalImage || selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* 2. Content Side */}
            <div className="w-full lg:w-[55%] flex flex-col h-full bg-bg-main relative">
              
              {/* Desktop Header */}
              <div className="hidden sm:flex p-6 lg:p-8 border-b border-text-muted/10 shrink-0 justify-between items-start bg-bg-main/50 backdrop-blur-xl">
                 <div>
                    <span className="text-accent font-bold tracking-wider uppercase text-[10px] mb-1 block">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl font-black text-text-main leading-tight">
                      {selectedProject.title}
                    </h3>
                 </div>
                 <button 
                   onClick={() => setSelectedProject(null)}
                   className="text-text-muted hover:text-text-main bg-bg-card/50 hover:bg-bg-card p-2 rounded-full transition-colors border border-transparent hover:border-text-muted/20"
                 >
                   <X size={20} />
                 </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-5 sm:p-6 lg:p-8 overflow-y-auto flex-1 bg-bg-main overscroll-contain custom-scrollbar">
                 
                 {/* Mobile Image */}
                 <div className="sm:hidden mb-6 rounded-xl overflow-hidden border border-text-muted/10 relative shadow-lg">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-48 object-cover"
                    />
                 </div>

                 <div className="prose prose-sm prose-invert text-text-muted leading-relaxed whitespace-pre-line mb-8">
                    {/* Note: 'prose-invert' is for dark mode Tailwind, but we might need custom handling for light mode text color if using @tailwindcss/typography. 
                        Since we are using standard text classes, this should be fine. */}
                    <p className="text-text-muted">{selectedProject.fullDescription}</p>
                 </div>

                 {/* Key Features */}
                 <div className="bg-bg-card/40 p-5 rounded-xl border border-text-muted/10">
                    <h4 className="font-bold text-text-main text-xs uppercase tracking-wide flex items-center gap-2 mb-4">
                       <CheckCircle2 size={16} className="text-accent"/> Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                       {selectedProject.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-text-muted text-sm">
                             <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0 shadow-[0_0_5px_var(--accent-glow)]"></div>
                             {feature}
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>

              {/* Footer Buttons */}
              <div className="p-5 sm:p-6 lg:p-8 border-t border-text-muted/10 shrink-0 bg-bg-main z-20 pb-safe sm:pb-6 lg:pb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 py-3.5 flex items-center justify-center gap-2 bg-text-main text-bg-main rounded-xl font-bold hover:opacity-90 transition-all text-sm shadow-lg active:scale-95"
                  >
                    <Github size={18} /> View Code
                  </a>
                  {selectedProject.liveLink !== "#" && (
                    <a 
                      href={selectedProject.liveLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 py-3.5 flex items-center justify-center gap-2 bg-accent/10 text-accent rounded-xl font-bold hover:bg-accent/20 border border-accent/20 transition-all text-sm active:scale-95"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;