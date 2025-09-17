import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React.js", "TailwindCSS", "Node.js", "MongoDB"];
   useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="skills" data-aos="fade-up" className="py-20  text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="p-4 bg-gray-700 rounded-lg shadow-md hover:shadow-xl">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
