import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import experiences (replace with your actual logo paths)
import FreelanceLogo from "/experiences/freelance.png";
import CedimesLogo from "/experiences/cedimes.png";
import TeamTechLogo from "/experiences/teamtech.png";
import CNSSLogo from "/experiences/cnss.png";
import CaveoLogo from "/experiences/caveo.png";
import PoulinaLogo from "/experiences/poulina.png";
import CapitalLogo from "/experiences/capital.png";

export default function Experiences() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const experiences = [
    {
      company: "Freelance",
      logo: FreelanceLogo,
      title: "Full Stack Engineer",
      type: "Freelance",
      period: "Feb 2025 - Present · 1 yr 1 mo",
      location: "Remote",
      desc: "Developing full-stack applications using modern web technologies for various clients, ensuring responsive and scalable solutions.",
    },
    {
      company: "Capital Immobilier",
      logo: CapitalLogo,
      title: "Web Developer → Agent → Community Manager",
      type: "Full-time",
      period: "Various Roles",
      location: "",
      desc: "Worked in multiple roles including web development, real estate agent, and community management to support the growth of the agency.",
    },
    {
      company: "CEDIMES",
      logo: CedimesLogo,
      title: "Full Stack Engineer",
      type: "Full-time",
      period: "Jan 2025 - Mar 2025 · 3 mos",
      location: "",
      desc: "Redesigned and modernized a 10+ year-old WordPress website into a fully responsive Angular web platform, improving page load speed by 50% and user engagement.",
    },
    {
      company: "Team-tech Tunis",
      logo: TeamTechLogo,
      title: "Software Engineer Intern",
      type: "",
      period: "Mar 2024 - Aug 2024 · 6 mos",
      location: "Tunis, Tunisia",
      desc: `- Engineered a secure web application using Angular and Spring Boot microservices, enhancing user engagement.\n- Designed and implemented a DevOps pipeline, automating 100% of testing and monitoring.\n- Applied Agile/Kanban methodologies for efficient collaboration.\n- Worked on TTWave platform (Spring Boot, Angular, +24 skills).`,
    },
    {
      company: "CNSS - Caisse Nationale de Sécurité Sociale",
      logo: CNSSLogo,
      title: "Software Engineer Intern",
      type: "",
      period: "Jun 2023 - Aug 2023 · 3 mos",
      location: "",
      desc: `Developed a web app for doctors and healthcare management using Spring Boot and Angular.\nImplemented secure authentication and role-based access for data privacy.\nSkills: Eclipse, XML, +5 skills`,
    },
    {
      company: "CAVEO AUTOMOTIVE TUNISIA S.A.",
      logo: CaveoLogo,
      title: "Intern in Industrial IT Automation System",
      type: "Full-time",
      period: "Mar 2021 - Jun 2021 · 4 mos",
      location: "Tunis, Tunisia",
      desc: "Worked on industrial IT automation systems using LaTeX, PLC Programming, and +3 skills.",
    },
    {
      company: "Poulina Group Holding",
      logo: PoulinaLogo,
      title: "Intern in Industrial IT Automation System",
      type: "Full-time",
      period: "Jun 2020 - Aug 2020 · 3 mos",
      location: "Tunisia · Remote",
      desc: "Worked on industrial IT automation systems using LaTeX, PLC Programming, and +1 skill.",
    },
    
  ];

  return (
    <section id="experience" className="py-20" data-aos="fade-up">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-start gap-6 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition duration-500"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 object-contain rounded-lg"
              />
              <div className="text-left flex-1">
                <h3 className="text-xl font-semibold text-cyan-400">{exp.title}</h3>
                <p className="text-gray-300 font-medium">{exp.company} {exp.type && `· ${exp.type}`}</p>
                <p className="text-gray-400 italic text-sm mb-2">{exp.period}</p>
                {exp.location && <p className="text-gray-400 italic text-sm mb-2">{exp.location}</p>}
                <p className="text-gray-300 whitespace-pre-line">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
