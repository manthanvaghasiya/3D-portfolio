import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';

// Sections
import Hero from './components/Hero';
import Experience from './components/Experience';
import Stats from './components/Stats'; 
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from "./components/About";
import Contact from './components/Contact';
import HologramCanvas from './components/HologramCanvas';

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
    <ThemeProvider>
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
        <HologramCanvas />

          <Layout>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Stats />
            <Projects />
            <Contact />
          </Layout>
          
          <ScrollToTop />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;