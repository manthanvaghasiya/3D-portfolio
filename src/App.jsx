import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 1. The Brain (State Management)
import { ThemeProvider } from './context/ThemeContext';

// 2. The Skeleton (UI Structure)
import Layout from './components/Layout';

// 3. The Magic (3D Background)
import HologramCanvas from './components/HologramCanvas';

// 4. The Content (Your Sections)
import Hero from './components/Hero';
import Experience from './components/Experience';
import Stats from './components/Stats'; 
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from "./components/About";
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      AOS.init({
        duration: 800,
        once: false,
        mirror: false,
        offset: 50,
      });
    }
  }, [isLoading]);

  return (
    // WRAPPER: Provides "Dark/Light" state to the whole app
    <ThemeProvider>
      
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          {/* LAYER 0: The 3D World (Fixed Background) */}
          {/* It listens to the ThemeProvider internally to change lighting */}
          <HologramCanvas />

          {/* LAYER 1: The UI Interface (Scrollable) */}
          <Layout>
            <Hero />
            <Skills />
            <Experience />
            <Stats />
            <Projects />
            <About />
            <Contact />
          </Layout>
          
          <ScrollToTop />
        </>
      )}
      
    </ThemeProvider>
  );
}

export default App;