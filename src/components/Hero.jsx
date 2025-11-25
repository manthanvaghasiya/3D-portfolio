import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
      {/* Background Blob */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content - Animates Up */}
        <div className="space-y-8" data-aos="fade-up">
          <div className="inline-block bg-blue-100 text-accent px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase">
            Full Stack Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1]">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">Products</span> That Matter.
          </h1>
          
          {/* UPDATED DESCRIPTION */}
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            I specialize in solving complex business problems through code. Currently engineering <b>DairyFlow</b> (a POS & ERP system) and re-architecting <b>Surat BookCycle</b> to a scalable MERN stack.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            {/* View Projects Button - Scrolls down */}
            <a 
              href="#projects" 
              className="flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:bg-blue-600 transition"
            >
              View Projects <ArrowRight size={20} />
            </a>

            {/* Download CV Button - Downloads file */}
            <a 
              href="/resume.pdf" 
              download="Manthan_Vaghasiya_Resume.pdf"
              className="flex items-center gap-2 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:border-primary hover:bg-primary hover:text-white transition text-gray-600"
            >
              Download CV <Download size={20} />
            </a>
          </div>

          <div className="flex gap-6 text-gray-400 pt-4">
             <a href="https://github.com/manthanvaghasiya" target="_blank" rel="noopener noreferrer">
               <Github className="hover:text-primary cursor-pointer transition" size={24} />
             </a>
             <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
               <Linkedin className="hover:text-primary cursor-pointer transition" size={24} />
             </a>
             <a href="mailto:your.email@gmail.com">
               <Mail className="hover:text-primary cursor-pointer transition" size={24} />
             </a>
          </div>
        </div>

        {/* Right Image - Animates from Left */}
        <div className="relative group" data-aos="fade-left" data-aos-delay="200">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-white border border-gray-100 p-3 rounded-2xl shadow-2xl rotate-2 group-hover:rotate-0 transition duration-500">
             {/* Make sure you have profile.jpg (or .png) in your public folder */}
             <div className="h-[450px] w-full bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center text-gray-400 relative">
               <img 
                 src="/profile.jpg" 
                 alt="Manthan Vaghasiya" 
                 className="object-cover w-full h-full opacity-100 hover:scale-105 transition duration-700"
               />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;