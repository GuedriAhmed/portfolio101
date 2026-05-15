import React from "react";
import { experiences } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Experiences() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
      <Reveal className="mb-10 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Experience</p>
        <h2 className="mt-3 text-[1.9rem] font-semibold text-white sm:text-[2.2rem]">A track record of delivering impact</h2>
      </Reveal>

      <div className="relative">
        <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/60 to-cyan-300/0 md:left-1/2" />

        <div className="space-y-6">
          {experiences.slice(0, 5).map((experience, index) => (
            <Reveal
              key={`${experience.company}-${experience.period}`}
              delay={index * 0.08}
              className={`relative md:grid md:grid-cols-2 md:gap-10 ${index % 2 === 0 ? "" : ""}`}
            >
              <div className={`mb-4 md:mb-0 ${index % 2 === 0 ? "md:pr-10" : "md:col-start-2 md:pl-10"}`}>
                <div className="interactive-hover ml-10 rounded-[1.55rem] border border-white/8 bg-white/[0.028] p-5 backdrop-blur-xl md:ml-0">
                  <div className="flex items-start gap-4">
                    <img src={experience.logo} alt={experience.company} className="h-14 w-14 rounded-2xl object-contain bg-white/5 p-2" />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[0.98rem] font-semibold text-white">{experience.title}</h3>
                        <span className="rounded-full border border-cyan-300/15 bg-cyan-400/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-cyan-200">
                          {experience.type}
                        </span>
                      </div>
                      <p className="mt-1 text-[13px] font-medium text-cyan-300">{experience.company}</p>
                      <p className="mt-3 text-[13px] leading-6 text-slate-300">{experience.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {experience.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="interactive-hover rounded-full border border-white/10 bg-[#0a1423] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-300"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`ml-10 flex items-start md:ml-0 ${index % 2 === 0 ? "md:items-center" : "md:col-start-1 md:row-start-1 md:justify-end md:pr-10"}`}>
                <div className="rounded-2xl px-4 py-3 text-left md:text-right">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-300">{experience.period}</p>
                  {experience.location ? <p className="mt-2 text-[12px] text-slate-400">{experience.location}</p> : null}
                </div>
              </div>

              <span className="absolute left-3 top-8 h-3 w-3 rounded-full border-4 border-[#081120] bg-cyan-300 shadow-[0_0_20px_rgba(103,232,249,0.7)] md:left-1/2 md:-translate-x-1/2" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
