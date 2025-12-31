import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';

import Hero from './components/Hero';
import Experience from './components/Experience';
import Stats from './components/Stats'; 
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from "./components/About";
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';

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
          <Navbar />
          
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