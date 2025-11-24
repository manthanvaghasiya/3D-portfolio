import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-primary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">Have an Idea? <br />Let's build it <span className="text-accent">together</span>.</h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">I am currently open for freelance work and internship opportunities.</p>
        <a href="mailto:your.email@example.com" className="inline-flex items-center gap-3 bg-accent hover:bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg transition transform hover:scale-105 shadow-lg shadow-blue-500/50">
          <Mail size={24} /> Say Hello
        </a>
        <div className="mt-20 pt-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-bold tracking-tighter">Dev<span className="text-accent">Portfolio</span>.</div>
          <div className="flex gap-8 text-gray-400">
            <a href="#" className="hover:text-white transition">GitHub</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Crafted with React & Tailwind.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;