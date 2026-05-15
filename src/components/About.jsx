import React from "react";
import { Download, ArrowUpRight, Sparkles } from "lucide-react";
import { stats } from "../data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
        <Reveal className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200">
            <Sparkles className="h-4 w-4" />
            About Me
          </div>

          <div className="space-y-4">
            <h2 className="max-w-3xl text-[2rem] font-semibold leading-tight text-white sm:text-[2.3rem] lg:text-[2.75rem]">
              Passionate about combining functionality, performance, and elegant user experience.
            </h2>
            <p className="max-w-2xl text-[0.98rem] leading-7 text-slate-300 sm:text-[1rem]">
              I studied at ISTIC Cedria and ESPRIT, where I built a strong foundation in computer science and engineering. Along the way, I discovered my passion for crafting digital solutions that balance functionality, performance, and polished user experience across Angular, Spring Boot, ReactJS, Node.js, and Express.
            </p>
            <blockquote className="interactive-hover rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-5 text-sm italic leading-7 text-slate-300">
              “Leveraging AI as a professional tool, not a replacement.”
            </blockquote>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/Ahmed_Guedri_Curriculum_vitae__Version_FR_.pdf"
              download="Ahmed_Guedri_Curriculum_vitae__Version_FR_.pdf"
              className="interactive-hover inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <a
              href="#projects"
              className="interactive-hover inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-400/10"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal className="relative mx-auto max-w-md" delay={0.1} x={26}>
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan-400/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1627]/82 p-3.5 backdrop-blur-xl">
            <img
              src="/Photo.jpg"
              alt="Ahmed Guedri portrait"
              className="h-[27rem] w-full rounded-[1.45rem] object-cover object-top"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {stats.map((item, index) => (
          <Reveal
            key={item.label}
            delay={index * 0.08}
            className="interactive-hover rounded-[1.55rem] border border-white/8 bg-white/[0.028] px-5 py-5 backdrop-blur-xl"
          >
            <p className="text-3xl font-semibold text-cyan-300">{item.value}</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.26em] text-slate-400">{item.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
