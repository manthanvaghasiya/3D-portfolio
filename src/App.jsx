import React, { useEffect } from 'react'; // Import useEffect
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import the CSS

// Keep your component imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  // Initialize AOS here
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation lasts 1 second
      once: true,     // Animation happens only once (doesn't repeat on scroll up)
      easing: 'ease-out', // Smooth movement
    });
  }, []);

  return (
    <div className="min-h-screen bg-light text-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;