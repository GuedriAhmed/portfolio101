import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      title: "Tunisian Trek Wave (TTWave)",
      desc: "Platform for managing and discovering outdoor activities in Tunisia with booking, real-time communication and itinerary customization.",
      image: "/projects/ttwave.png",
      technologies: ["Angular", "Microservices", "Authentication", "Payment"],
      github: "https://github.com/GuedriAhmed",
    },

   {
  title: "Chess Game",
  desc: "Online chess game built with Spring Boot and Angular, featuring real-time gameplay, multiplayer support, and intuitive UI.",
  image: "/projects/chess.png", // replace with the actual path to your chess project image
  technologies: ["Spring Boot", "Angular", "WebSocket", "Authentication"],
  github: "https://github.com/GuedriAhmed",
},

{
  title: "CEDIMES",
  desc: "Redesigned and modernized a 10+ year-old WordPress website into a fully responsive Angular web platform, improving page load speed by 50% and enhancing user engagement.",
  image: "/projects/cedimes.png", // replace with your actual CEDIMES project image
  technologies: ["Angular", "Spring Boot", "Responsive Design", "Performance Optimization"],
  github: "https://github.com/GuedriAhmed",
},

{
  title: "Portfolio 101",
  desc: "Personal portfolio website showcasing projects, skills, and experience, built with modern web technologies for responsive and interactive design.",
  image: "/projects/portfolio101.png", // replace with your actual image path
  technologies: ["React", "Tailwind CSS", "AOS", "EmailJS"],
  github: "https://github.com/GuedriAhmed",
},



    {
      title: "CulTechConnect",
      desc: "Platform connecting cultures worldwide through events, collaboration, and intercultural exchange.",
      image: "/projects/cultech.png",
      technologies: ["Spring Boot", "Angular"],
      github: "https://github.com/GuedriAhmed",
    },

    {
      title: "Ratatoskr",
      desc: "Tunisian e-commerce platform connecting buyers and suppliers with advanced marketing and content management features.",
      image: "/projects/ratatoskr.png",
      technologies: ["Spring Boot", "Angular"],
      github: "https://github.com/GuedriAhmed",
    },

    {
      title: "Employee Management System",
      desc: "Full stack application with authentication, dashboard, and role-based access using React, Node.js and MongoDB.",
      image: "/projects/ems.png",
      technologies: ["React", "Node.js", "MongoDB", "JWT"],
      github: "https://github.com/GuedriAhmed",
    },
  ];

  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="py-20"
     
    >
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-12 text-white text-center">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-300 text-sm">
                  {project.desc}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-gray-800/50 backdrop-blur-md text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
