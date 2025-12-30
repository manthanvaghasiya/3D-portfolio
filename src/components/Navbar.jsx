import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Scroll detection for glass effect intensity
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-bg-card/80 backdrop-blur-md border-white/10 shadow-lg py-3"
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 group-hover:scale-105">
              <img 
                src="/iconblack.jpg" 
                alt="Logo" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-text-main transition-colors">
              Manthan<span className="text-accent">.dev</span>
            </span>
          </a>

          {/* Right Side: Nav + Toggle + CTA */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* Nav Links */}
            <div className="flex items-center gap-6 px-6 py-2 rounded-full border border-text-muted/10 bg-bg-card/30 backdrop-blur-sm transition-all hover:border-accent/30">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-text-muted hover:text-accent transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* DIMENSION TOGGLE BUTTON */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-bg-card/50 border border-text-muted/20 text-text-main hover:text-accent hover:border-accent/50 transition-all duration-300 active:scale-95 hover:rotate-12"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* CTA Button */}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-accent text-white font-bold text-sm rounded-xl transition-all hover:shadow-[0_0_20px_var(--accent-glow)] hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <Sparkles size={16} /> Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-bg-card/50 border border-text-muted/20 text-text-main transition-all active:scale-95"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className="p-2 text-text-main hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <div
        className={`fixed inset-0 z-[60] bg-bg-main/95 backdrop-blur-xl transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative z-10 p-6 flex justify-between items-center border-b border-text-muted/10">
          <span className="font-bold text-xl text-text-main">Menu</span>
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="p-2 bg-text-muted/10 rounded-full text-text-main hover:text-accent transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col gap-6 p-8 mt-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-text-main to-text-muted hover:to-accent transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;