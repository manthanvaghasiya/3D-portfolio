import React from 'react';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Surat BookCycle",
      category: "Full Stack (MERN)",
      description: "A community-driven book exchange platform for Surat. Currently upgrading from PHP to the MERN stack.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "AquaMark",
      category: "Startup / Branding",
      description: "My own startup 'Where every drop builds a brand'. A B2B platform for custom water bottles.",
      tech: ["React", "Tailwind", "Node.js", "Business Logic"],
      image: "https://images.unsplash.com/photo-1602143407151-cd111ca4a302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      title: "Bluestock Fintech Internship",
      category: "Fintech Internship",
      description: "Worked on IPO analysis tools and Grey Market Premium (GMP) tracking features.",
      tech: ["HTML/CSS", "JavaScript", "API Integration"],
      image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4">Featured <span className="text-accent">Work</span></h2>
          <div className="w-20 h-1.5 bg-accent rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-xl text-lg">Real-world solutions I have engineered.</p>
        </div>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-accent rounded-xl rotate-2 group-hover:rotate-0 transition duration-500 opacity-20"></div>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100">
                  <img src={project.image} alt={project.title} className="w-full h-[350px] object-cover hover:scale-105 transition duration-700"/>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="text-accent font-bold tracking-widest uppercase text-sm">{project.category}</div>
                <h3 className="text-3xl font-bold text-primary">{project.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-4 py-1 bg-blue-50 text-accent text-sm font-semibold rounded-full border border-blue-100">{t}</span>
                  ))}
                </div>
                <div className="pt-4">
                  <a href={project.link} className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition group">
                    View Project <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;