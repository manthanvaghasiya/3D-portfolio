import React from "react";
import Navbar from "./Navbar";
import HologramCanvas from "./HologramCanvas"; 

const Layout = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
      {/* 1. GLOBAL 3D BACKGROUND (Fixed, Z-Index 0) */}
      <HologramCanvas />

      {/* 2. NAVIGATION (Fixed, Z-Index 50) */}
      <Navbar />

      {/* 3. PAGE CONTENT (Relative, Z-Index 10) */}
      {/* This ensures content scrolls OVER the background but stays UNDER the Navbar */}
      <main className="relative z-10 flex flex-col w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;