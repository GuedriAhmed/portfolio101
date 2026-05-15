import React from "react";
import { Cpu } from "lucide-react";
import { skillCategories } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
      <Reveal className="mb-10 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Core Stack</p>
        <h2 className="mt-3 text-[1.9rem] font-semibold text-white sm:text-[2.2rem]">A versatile toolkit for modern development</h2>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Reveal
            key={category.title}
            delay={index * 0.07}
            className="interactive-hover group rounded-[1.55rem] border border-white/8 bg-white/[0.028] p-5 backdrop-blur-xl hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]"
          >
            <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-300/35 group-hover:bg-cyan-400/14">
              <Cpu className="h-4.5 w-4.5" />
            </div>
            <h3 className="text-[0.98rem] font-semibold text-white transition-colors duration-300 group-hover:text-cyan-100">{category.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="interactive-hover rounded-full border border-white/10 bg-[#0a1423] px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
