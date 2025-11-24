import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block bg-blue-100 text-accent px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase">
            Full Stack Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1]">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">Products</span> That Matter.
          </h1>
          <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
            I am a developer who focuses on business logic. Currently building <b>AquaMark</b> and upgrading <b>Surat BookCycle</b> to the MERN stack.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:bg-blue-600 transition">
              View Projects <ArrowRight size={20} />
            </button>
            <button className="flex items-center gap-2 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold hover:border-primary hover:bg-primary hover:text-white transition text-gray-600">
              Download CV <Download size={20} />
            </button>
          </div>
          <div className="flex gap-6 text-gray-400 pt-4">
            <Github className="hover:text-primary cursor-pointer transition" size={24} />
            <Linkedin className="hover:text-primary cursor-pointer transition" size={24} />
            <Mail className="hover:text-primary cursor-pointer transition" size={24} />
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-white border border-gray-100 p-3 rounded-2xl shadow-2xl rotate-2 group-hover:rotate-0 transition duration-500">
            <div className="h-[450px] w-full bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center text-gray-400 relative">
              <img src="https://images.unsplash.com/photo-1507238691140-d48db90ae317?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Profile" className="object-cover w-full h-full opacity-80 hover:scale-105 transition duration-700"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;