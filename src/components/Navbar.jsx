import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter cursor-pointer">
          Dev<span className="text-accent">Portfolio</span>.
        </div>
        <div className="hidden md:flex space-x-8 font-medium text-sm uppercase tracking-wide text-gray-600">
          <a href="#home" className="hover:text-accent transition">Home</a>
          <a href="#skills" className="hover:text-accent transition">Skills</a>
          <a href="#projects" className="hover:text-accent transition">Projects</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </div>
        <button className="hidden md:block bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-accent transition transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/20">
          Let's Talk
        </button>
        <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 shadow-lg">
          <a href="#home" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#projects" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Projects</a>
          <a href="#contact" className="text-lg font-medium text-accent" onClick={() => setIsMenuOpen(false)}>Let's Talk</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;