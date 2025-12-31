// ... imports
import ExperienceCard from "./Experience/ExperienceCard"; // Import the new component
import { experienceData } from "../data/experience"; // Import the data

const Experience = () => {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-6 relative z-20">
      <div className="max-w-4xl mx-auto">
        
        {/* ... Header stays the same ... */}

        {/* Timeline Container */}
        <div className="relative border-l-2 md:border-l-4 border-accent/30 ml-4 md:ml-6 space-y-12">
          
          {/* THE MAGIC: Mapping over data */}
          {experienceData.map((job) => (
            <ExperienceCard 
              key={job.id}
              {...job} // Spreading props for clean syntax
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;