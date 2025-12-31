import React from 'react';
import { Sparkles } from "lucide-react";

const MobileMenu = ({ isOpen, navLinks, onClose, whatsappLink }) => {
  return (
    <div
      className={`fixed inset-0 bg-bg-main/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onClose}
          className="text-2xl font-bold text-text-main hover:text-accent tracking-tight hover:scale-110 transition-transform"
        >
          {link.name}
        </a>
      ))}
      
      <a 
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-8 py-3 bg-accent text-white rounded-full font-bold shadow-lg"
      >
          <Sparkles size={18} /> Chat on WhatsApp
      </a>
    </div>
  );
};

export default MobileMenu;