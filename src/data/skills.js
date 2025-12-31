import { 
  Layout, Code, Database, Server, 
  Terminal, Cpu, Globe, Layers, 
  Box, Shield, GitBranch, Zap, Settings 
} from "lucide-react";

export const SKILL_LANES = [
  // Lane 1: Frontend (React, Tailwind, Motion, Design)
  [
    { name: "React.js", icon: Code, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: Layout, color: "#38B2AC" },
    { name: "Framer Motion", icon: Zap, color: "#FF0080" },
    { name: "JavaScript (ES6+)", icon: Code, color: "#F7DF1E" },
    { name: "Responsive Design", icon: Layers, color: "#000000" }, // Adaptive Black/White
  ],
  
  // Lane 2: Backend & Database (Node, Mongo, Auth)
  [
    { name: "Node.js", icon: Server, color: "#339933" },
    { name: "MongoDB", icon: Database, color: "#47A248" },
    { name: "Express.js", icon: Terminal, color: "#000000" },
    { name: "PostgreSQL", icon: Database, color: "#4169E1" },
    { name: "JWT Auth", icon: Shield, color: "#D63AFF" },
    { name: "Mongoose", icon: Database, color: "#880000" },
  ],
  
  // Lane 3: DevOps & Tools (Git, Vercel, Postman)
  [
    { name: "Git Control", icon: GitBranch, color: "#F05032" },
    { name: "Vercel CI/CD", icon: Globe, color: "#000000" },
    { name: "Postman", icon: Terminal, color: "#FF6C37" },
    { name: "VS Code", icon: Code, color: "#007ACC" },
    { name: "Data Modeling", icon: Database, color: "#FFCA28" },
  ]
];