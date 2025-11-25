import React, { useState } from 'react';
import { ArrowRight, X, Github, ExternalLink, CheckCircle } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // --- PROJECT DATA ---
  const projects = [
    {
      title: "Surat BookCycle",
      category: "Full Stack (MERN)",
      shortDescription: "A community-driven book exchange platform for Surat.",
      // You confirmed this description is correct:
      fullDescription: "Surat BookCycle is a localized marketplace designed to reduce paper waste and promote reading. It allows users to list used books, find books nearby, and chat with sellers. I am currently rewriting the legacy PHP codebase into a modern MERN stack architecture to support 10,000+ users.",
      features: [
        "User Authentication (JWT)",
        "Real-time Book Search & Filtering",
        "Geolocated Book Listings",
        "Secure Chat System"
      ],
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "/bookcycle.png", 
      githubLink: "https://github.com/manthanvaghasiya/surat-bookcycle",
      liveLink: "#",
    },
    {
      title: "DairyFlow",
      category: "POS & Shop Management",
      shortDescription: "A complete business management system for dairy shops.",
      fullDescription: "DairyFlow is a specialized ERP & POS system built for Dairy Shops in Gujarat. It solves the complex problem of tracking 'Udhaar' (Customer Debt) and managing daily sales. It includes inventory tracking for perishable goods and comprehensive revenue analytics for shop owners.",
      features: [
        "Point of Sale (POS) Interface",
        "Customer Debt (Udhaar) Management",
        // Removed 'Milk Fat/SNF Calculator' as requested
        "Inventory & Stock Alerts",
        "Daily Revenue Reports"
      ],
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/dairyflow.png", 
      githubLink: "https://github.com/manthanvaghasiya/dairyflow-dairy-management-system",
      liveLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
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
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              data-aos="fade-up"
            >
              {/* Project Image (Clickable) */}
              <div 
                className="w-full md:w-1/2 relative group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute inset-0 bg-accent rounded-xl rotate-2 group-hover:rotate-0 transition duration-500 opacity-20"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[350px] object-cover hover:scale-105 transition duration-700"
                  />
                  {/* Overlay Hint */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <p className="text-white font-bold text-lg flex items-center gap-2">
                      <ExternalLink size={20} /> View Details
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Summary */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="text-accent font-bold tracking-widest uppercase text-sm">
                  {project.category}
                </div>
                <h3 className="text-3xl font-bold text-primary">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-1 bg-blue-50 text-accent text-sm font-semibold rounded-full border border-blue-100">
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
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:left-10 text-white">
                <p className="text-accent font-bold uppercase tracking-wider text-sm mb-2">{selectedProject.category}</p>
                <h2 className="text-3xl md:text-4xl font-extrabold">{selectedProject.title}</h2>
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-6 md:p-10 grid md:grid-cols-3 gap-8">
              
              {/* Left: Description & Features */}
              <div className="md:col-span-2 space-y-6">
                <h3 className="text-xl font-bold text-primary">About this project</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
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

              {/* Right: Actions & Tech */}
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