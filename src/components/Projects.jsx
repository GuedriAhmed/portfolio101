import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
     useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    { title: "Portfolio Website", desc: "Personal portfolio using React.js and TailwindCSS.", link: "#" },
    { title: "E-commerce App", desc: "Full-stack MERN e-commerce application.", link: "#" },
    { title: "Chat App", desc: "Real-time chat app using Socket.IO.", link: "#" },
  ];

  return (
    <section id="projects" data-aos="fade-up" className="py-20 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-gray-400">{project.desc}</p>
              <a href={project.link} className="mt-4 inline-block text-blue-400 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
