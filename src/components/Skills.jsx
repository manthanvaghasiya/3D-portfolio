import React from 'react';
import { Database, Server, Layout, Terminal } from 'lucide-react';

const Skills = () => {
  const skills = [
    { 
      category: "Frontend", 
      icon: <Layout className="w-8 h-8 text-accent" />, 
      items: ["React.js", "Tailwind CSS", "HTML5 & CSS3", "JavaScript (ES6+)"] 
    },
    { 
      category: "Backend", 
      icon: <Server className="w-8 h-8 text-accent" />, 
      items: ["Node.js", "Express.js", "PHP", "REST APIs"] 
    },
    { 
      category: "Database", 
      icon: <Database className="w-8 h-8 text-accent" />, 
      items: ["MongoDB", "MySQL", "Mongoose", "SQL"] 
    },
    { 
      category: "Tools", 
      icon: <Terminal className="w-8 h-8 text-accent" />, 
      items: ["Git & GitHub", "Postman", "VS Code", "Vercel"] 
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-light">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-primary mb-4">
            Technical <span className="text-accent">Arsenal</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-lg">
            The tools and technologies I use to bring products to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{skill.category}</h3>
              <ul className="space-y-3">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;