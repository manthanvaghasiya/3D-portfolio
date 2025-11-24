import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
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