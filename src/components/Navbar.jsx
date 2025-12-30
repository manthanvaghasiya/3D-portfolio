import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles, Hexagon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // YOUR WHATSAPP NUMBER HERE (Format: CountryCode + Number)
  // Example: 919876543210
  const whatsappNumber = "9664736245"; 
  const whatsappMessage = "Hello Manthan, I discovered your portfolio and would like to discuss a project.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'skills', 'experience', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-bg-main/80 backdrop-blur-md border-text-muted/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <a href="#home" className="group flex items-center gap-2 relative z-50">
          <div className="relative flex items-center justify-center w-10 h-10 bg-accent/10 rounded-xl border border-accent/20 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
            <Hexagon size={24} className="text-accent group-hover:text-white transition-colors rotate-90" />
            <span className="absolute text-[10px] font-bold text-accent group-hover:text-white">MV</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-text-main group-hover:text-accent transition-colors">
            Manthan<span className="text-accent">.portfolio</span>
          </span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-1 bg-bg-card/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-text-muted/10 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? "text-accent bg-accent/10 shadow-[0_0_10px_var(--accent-glow)]"
                  : "text-text-muted hover:text-text-main hover:bg-white/5"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-4">
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-bg-card/50 border border-text-muted/10 text-text-muted hover:text-accent hover:border-accent/50 hover:shadow-[0_0_15px_var(--accent-glow)] transition-all active:scale-95 backdrop-blur-sm"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* WHATSAPP CTA BUTTON */}
          <a
            href={whatsappLink}
            target="_blank" 
            rel="noreferrer"
            className="hidden md:flex px-5 py-2.5 bg-accent text-white font-bold text-sm rounded-full transition-all hover:shadow-[0_0_20px_var(--accent-glow)] hover:scale-105 active:scale-95 items-center gap-2"
          >
            <Sparkles size={16} /> Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-main z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-bg-main/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-text-main hover:text-accent tracking-tight hover:scale-110 transition-transform"
          >
            {link.name}
          </a>
        ))}
        
        {/* Mobile WhatsApp Button */}
        <a 
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-full font-bold shadow-lg"
        >
            <Sparkles size={18} /> Chat on WhatsApp
        </a>
      </div>
    </nav>
  );
};

export default Navbar;