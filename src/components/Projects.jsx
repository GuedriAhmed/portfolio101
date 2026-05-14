import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const moreProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="mb-12 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Selected Work</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Selected work that speaks for itself</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.035] shadow-[0_18px_60px_rgba(2,8,23,0.24)] backdrop-blur-xl"
          >
            <div className="relative h-72 overflow-hidden">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06101c] via-[#06101c]/10 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-[#0a1423] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors duration-300 hover:text-cyan-100"
              >
                View Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {moreProjects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-[1.8rem] border border-white/8 bg-white/[0.035] shadow-[0_18px_60px_rgba(2,8,23,0.24)] backdrop-blur-xl"
          >
            <div className="relative h-52 overflow-hidden">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-[#0a1423] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors duration-300 hover:text-cyan-100"
              >
                View Project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
