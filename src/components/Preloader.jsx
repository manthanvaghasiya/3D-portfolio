import React, { useEffect, useState } from "react";

const Preloader = ({ onFinish }) => {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
      setTimeout(onFinish, 500); // Wait for fade out animation
    }, 2000); // 2 seconds loader

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-main transition-opacity duration-500 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Pulse Orb */}
      <div className="relative flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border-4 border-t-accent border-r-transparent border-b-text-muted/20 border-l-transparent animate-spin"></div>
        <div className="absolute w-16 h-16 rounded-full bg-accent/20 animate-pulse"></div>
        <div className="absolute w-8 h-8 rounded-full bg-accent shadow-[0_0_20px_var(--accent-glow)]"></div>
      </div>

      <h2 className="mt-8 text-xl font-mono font-bold text-text-main animate-pulse">
        INITIALIZING SYSTEM...
      </h2>
    </div>
  );
};

export default Preloader;