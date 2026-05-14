import React from "react";
import { Cpu } from "lucide-react";
import { skillCategories } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="mb-12 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Core Stack</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A versatile toolkit for modern development</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-[1.8rem] border border-white/8 bg-white/[0.035] p-6 shadow-[0_18px_60px_rgba(2,8,23,0.24)] backdrop-blur-xl"
          >
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-[#0a1423] px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
