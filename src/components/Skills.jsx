import {
  FaJava,
  FaReact,
  FaAngular,
  FaPhp,
  FaPython,
  FaDocker,
  FaJenkins,
  FaGitAlt,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt
} from "react-icons/fa";

import {
  SiDotnet,
  SiSpringboot,
  SiSymfony,
  SiNextdotjs,
  SiTailwindcss,
  SiJquery,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiSonarqube,
  SiGrafana,
  SiPrometheus
} from "react-icons/si";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava /> },
      { name: "C#", icon: <SiDotnet /> },
      { name: "PHP", icon: <FaPhp /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> }
    ]
  },

  {
    title: "Frameworks & Libraries",
    skills: [
      { name: ".NET", icon: <SiDotnet /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "Symfony", icon: <SiSymfony /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "jQuery", icon: <SiJquery /> }
    ]
  },

  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ]
  },

  {
    title: "DevOps & Security",
    skills: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Jenkins", icon: <FaJenkins /> },
      { name: "SonarQube", icon: <SiSonarqube /> },
      { name: "Git", icon: <FaGitAlt /> }
    ]
  },

  {
    title: "Monitoring & Tools",
    skills: [
      { name: "Grafana", icon: <SiGrafana /> },
      { name: "Prometheus", icon: <SiPrometheus /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-16">Skills & Technologies</h2>

      <div className="space-y-14 px-6">

        {skillCategories.map((category, catIndex) => (
          <div key={catIndex}>
            
            {/* Category Title */}
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 80}
                  className="group bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-xl p-5 flex flex-col items-center justify-center transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
                >
                  <div className="text-4xl mb-3 text-cyan-400 group-hover:rotate-12 transition-transform duration-300">
                    {skill.icon}
                  </div>

                  <p className="text-gray-200 text-sm font-medium group-hover:text-white">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}