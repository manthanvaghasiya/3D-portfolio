import React, { useState } from 'react';
import { ArrowRight, X, Github, ExternalLink, CheckCircle } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // --- PROJECT DATA ---
  const projects = [
    {
      title: "Surat BookCycle",
      category: "Old Book Exchange - E-commerce Platform",
      shortDescription: "A hyper-local P2P marketplace engineered to connect students for buying, selling, and exchanging used textbooks, promoting a zero-waste circular economy.",
      
      fullDescription: "Surat BookCycle is a centralized marketplace engineered to solve the problem of textbook waste. The platform allows students to easily list their used books and find buyers. \n\n• Designed a robust REST API using Node.js and Express to handle book data.\n• Implemented Secure User Authentication using JWT (JSON Web Tokens) to protect user accounts.\n• Built a dynamic frontend with React.js that allows users to search, filter, and view book details instantly.\n• Created a responsive dashboard for users to manage their listings (Add, Edit, Delete books).",
      features: [
        "Secure Login/Signup (JWT)",
        "Search & Category Filtering",
        "Book Listing Management (CRUD)",
        "Responsive Mobile/Desktop UI"
      ],
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "/bookcycle.png", 
      modalImage: "/bookcycle-full.png",
      githubLink: "https://github.com/manthanvaghasiya/surat-bookcycle",
      liveLink: "#",
    },
    {
      title: "DairyFlow",
      category: "Dairy Management System",
      shortDescription: "A comprehensive SaaS ERP solution for dairy businesses featuring a specialized POS, automated debt (Udhaar) tracking, and real-time inventory analytics.",
      
      fullDescription: "DairyFlow is a specialized SaaS solution tailored for the Indian dairy industry. It digitizes the traditional 'red book' record-keeping system. \n\n• Developed a custom Point of Sale (POS) interface optimized for rapid morning/evening transaction shifts.\n• Solved the complex 'Customer Debt' (Udhaar) tracking problem with automated ledger updates.\n• Implemented real-time inventory tracking for perishable goods to reduce wastage.\n• Designed interactive dashboards for daily revenue and sales analytics.",
      features: [
        "Point of Sale (POS) Interface",
        "Customer Debt (Udhaar) Management",
        "Inventory & Stock Alerts",
        "Daily Revenue Reports"
      ],
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/dairyflow.png", 
      modalImage: "/dairyflow-full.png",
      githubLink: "https://github.com/manthanvaghasiya/dairyflow-dairy-management-system",
      liveLink: "#",
    },
    {
      title: "LifeOS",
      category: "Personal Operating System (Finance & Habits)",
      shortDescription: "An all-in-one productivity ecosystem combining financial health tracking, habit formation logic, and goal setting into a single, data-driven dashboard.",
      
      fullDescription: "LifeOS unifies Financial Health and Daily Discipline into one MERN-stack application, solving the problem of context-switching between productivity apps. \n\n• Engineered a Financial Dashboard using Recharts to visualize income vs. expense trends (Spline Area Charts).\n• Built a GitHub-style Habit Tracker with 'Optimistic UI' updates, making the interface feel instant.\n• Implemented complex aggregation logic in MongoDB to calculate 'Avg. Daily Consistency' and financial audits.\n• Secured user data with JWT Authentication, ensuring complete privacy between users.",
      features: [
        "Financial Analytics (Area & Donut Charts)",
        "Habit Tracker with Consistency Logic",
        "Goal Setting (Long/Short Term)",
        "Personal Notes (Masonry Grid)"
      ],
      tech: ["MERN Stack", "Recharts", "Tailwind CSS", "Render"],
      image: "/lifeos.png", 
      modalImage: "/lifeos-full.png",
      githubLink: "https://github.com/manthanvaghasiya/lifeos",
      liveLink: "https://lifeos-demo.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-primary mb-4">
            Featured <span className="text-accent">Work</span>
          </h2>
          <div className="w-20 h-1.5 bg-accent rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-xl text-lg">
            Real-world solutions I have engineered, focused on solving local business problems.
          </p>
        </div>

        {/* --- PROJECTS LIST --- */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center bg-white p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition duration-500`}
              data-aos="fade-up"
            >
              {/* Project Image (Clickable & Tilted) */}
              <div 
                className="w-full md:w-1/2 group cursor-pointer perspective-1000"
                onClick={() => setSelectedProject(project)}
              >
                {/* 1. ROTATION LOGIC:
                       - Default: rotate-2 (Tilted)
                       - Hover: rotate-0 (Straight)
                       - index % 2 logic alternates the tilt direction for a natural look
                */}
                {/* Removed gradient background and browser header divs */}
                <div className={`relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 transform transition-transform duration-500 ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'} group-hover:rotate-0 group-hover:scale-[1.02]`}>
                    
                    {/* 4. Image */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-[350px] object-cover hover:scale-105 transition duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <p className="text-white font-bold text-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                        <ExternalLink size={20} /> View Details
                      </p>
                    </div>
                </div>
              </div>

              {/* Project Summary */}
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-primary">
                  {project.title}
                </h3>

                <div className="text-accent font-bold tracking-widest uppercase text-sm">
                  {project.category}
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-1 bg-slate-100 text-primary text-sm font-semibold rounded-lg border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition group"
                  >
                    View Project <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- PROJECT DETAIL MODAL (POPUP) --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Dark Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          ></div>

          {/* Modal Content */}
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 animate-fade-in-up shadow-2xl">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition z-20"
            >
              <X size={24} className="text-gray-600" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 md:h-80 w-full">
              <img 
                src={selectedProject.modalImage || selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 md:left-10 text-white">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3 shadow-sm">{selectedProject.title}</h2>
                <span className="inline-block bg-white text-accent px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm shadow-lg">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-6 md:p-10 grid md:grid-cols-3 gap-8">
              
              <div className="md:col-span-2 space-y-6">
                <h3 className="text-xl font-bold text-primary">About this project</h3>
                <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                  {selectedProject.fullDescription}
                </p>

                <h3 className="text-xl font-bold text-primary pt-4">Key Features</h3>
                <ul className="space-y-3">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-600">
                      <CheckCircle size={18} className="text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition"
                  >
                    <Github size={20} /> GitHub Repo
                  </a>
                  {selectedProject.liveLink !== "#" && (
                    <a 
                      href={selectedProject.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-accent text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition"
                    >
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-accent text-sm font-medium rounded-lg">
                        {t}
                      </span>
                    ))}
                  </div>
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