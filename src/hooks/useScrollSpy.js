import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);

          for (const id of sectionIds) {
            const element = document.getElementById(id);
            if (element) {
              const top = element.offsetTop - offset;
              const bottom = top + element.offsetHeight;
              if (window.scrollY >= top && window.scrollY < bottom) {
                setActiveSection(id);
                break; 
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return { activeSection, scrolled };
};