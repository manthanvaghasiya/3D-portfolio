import React, { useEffect, useRef } from 'react';

const Background = () => {
  const containerRef = useRef(null);

  // --- MOUSE PARALLAX LOGIC ---
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      // Calculate mouse position from -1 to 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      // Update CSS variables for the parallax effect
      containerRef.current.style.setProperty('--mouse-x', x);
      containerRef.current.style.setProperty('--mouse-y', y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-50 min-h-screen w-full bg-[#030014] overflow-hidden perspective-container"
    >
      {/* --- 1. THE HOLOGRAPHIC GRID FLOOR --- */}
      {/* A 3D rotated plane that moves infinitely */}
      <div className="absolute inset-0 flex items-center justify-center perspective-grid-container">
        <div className="grid-plane"></div>
      </div>

      {/* --- 2. AMBIENT NEON GLOWS --- */}
      {/* Top Center Cyan Light */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none animate-pulse-slow"></div>
      {/* Bottom Right Magenta Light */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>

      {/* --- 3. FLOATING CYBER PARTICLES --- */}
      {/* Small squares floating upward */}
      <div className="absolute inset-0 z-10">
         {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="particle absolute bg-white/30 backdrop-blur-sm border border-white/10 rounded-sm"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
         ))}
      </div>

      {/* --- 4. DIGITAL NOISE & VIGNETTE --- */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-[#030014]/80 pointer-events-none"></div>

      {/* --- CSS STYLES & ANIMATIONS --- */}
      <style>{`
        .perspective-container {
          perspective: 1000px; /* Creates the 3D depth */
        }

        .perspective-grid-container {
          transform-style: preserve-3d;
          /* Tills the grid based on mouse position (Parallax) */
          transform: rotateX(calc(20deg + (var(--mouse-y) * 2deg))) rotateY(calc(var(--mouse-x) * 2deg));
          transition: transform 0.1s ease-out;
        }

        .grid-plane {
          width: 200vw;
          height: 200vh;
          background-image: 
            linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          transform: rotateX(60deg) translateY(-100px) translateZ(-200px);
          animation: moveGrid 15s linear infinite;
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
        }

        .particle {
          animation: floatUp linear infinite;
        }

        @keyframes moveGrid {
          0% { background-position: 0 0; }
          100% { background-position: 0 50px; }
        }

        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Background;