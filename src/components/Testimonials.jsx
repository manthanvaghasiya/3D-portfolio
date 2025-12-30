import React from "react";
import { MessageSquare, Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Kuberjee Tech Lead",
      role: "Senior Developer",
      content: "Manthan showed incredible dedication during his internship. His ability to grasp the MERN stack and implement complex API logic for the BookCycle project was impressive for a fresher.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=K+T&background=06b6d4&color=fff"
    },
    {
      id: 2,
      name: "College Professor",
      role: "SDJ International",
      content: "One of the most consistent students. His 'LifeOS' project demonstrated a level of system design thinking that goes beyond typical college submissions.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=S+D&background=7c3aed&color=fff"
    },
    {
      id: 3,
      name: "Freelance Client",
      role: "Dairy Business Owner",
      content: "The DairyFlow software he built simplified our daily accounts significantly. He understood our local business needs and translated them into a clean, easy-to-use tool.",
      rating: 5,
      image: "https://ui-avatars.com/api/?name=F+C&background=2563eb&color=fff"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 relative z-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16" data-aos="fade-up">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-card/50 border border-text-muted/20 text-accent text-[11px] font-bold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-sm">
              <MessageSquare size={12} /> Transmission Log
           </div>
           <h2 className="text-3xl md:text-5xl font-black text-text-main">
              Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-glow">Feedback</span>
           </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div 
              key={item.id}
              className="bg-bg-card/40 backdrop-blur-md border border-text-muted/10 p-8 rounded-3xl relative hover:border-accent/50 hover:-translate-y-2 transition-all duration-300 group shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Floating Quote Icon */}
              <div className="absolute top-6 right-8 text-text-muted/10 group-hover:text-accent/20 transition-colors">
                <Quote size={60} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-text-muted text-sm leading-relaxed mb-8 relative z-10">
                "{item.content}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 border-t border-text-muted/10 pt-6">
                 <img 
                   src={item.image} 
                   alt={item.name} 
                   className="w-10 h-10 rounded-full border border-text-muted/20"
                 />
                 <div>
                    <h4 className="font-bold text-text-main text-sm">{item.name}</h4>
                    <p className="text-xs text-accent font-medium">{item.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;