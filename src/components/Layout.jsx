import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
      {/* 1. The Navbar (Fixed Top) */}
      <Navbar />

      {/* 2. The Page Content */}
      {/* relative z-10 ensures this sits ON TOP of the 3D canvas we will add later */}
      <main className="relative z-10 flex flex-col w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;