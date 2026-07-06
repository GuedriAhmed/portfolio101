import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const moreProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
      <Reveal className="mb-10 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Selected Work</p>
        <h2 className="mt-3 text-[1.9rem] font-semibold text-white sm:text-[2.2rem]">Selected work that speaks for itself</h2>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.08}
            className="interactive-hover group overflow-hidden rounded-[1.65rem] border border-white/8 bg-white/[0.028] backdrop-blur-xl"
          >
            <div className="relative h-72 overflow-hidden">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06101c] via-[#06101c]/10 to-transparent" />
            </div>
            <div className="p-5">
              <h3 className="text-[1.03rem] font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-[13px] leading-6 text-slate-300">{project.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="interactive-hover rounded-full border border-white/10 bg-[#0a1423] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-hover mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors duration-300 hover:text-cyan-100"
              >
                View Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {moreProjects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 0.06}
            className="interactive-hover group overflow-hidden rounded-[1.45rem] border border-white/8 bg-white/[0.028] backdrop-blur-xl"
          >
            <div className="relative h-52 overflow-hidden">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="p-5">
              <h3 className="text-[0.98rem] font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-[13px] leading-6 text-slate-300">{project.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="interactive-hover rounded-full border border-white/10 bg-[#0a1423] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-hover mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors duration-300 hover:text-cyan-100"
              >
                View Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
