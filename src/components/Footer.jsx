import React from "react";
import { socialLinks } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-white/6 bg-[#081120]">
      <div className="absolute inset-x-0 bottom-0 text-center text-[4rem] font-semibold tracking-[0.26em] text-white/[0.025] sm:text-[6rem]">
        GUEDRI
      </div>
      <Reveal className="relative mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1fr] lg:px-10">
        <div>
          <p className="text-lg font-semibold text-white">Ahmed Guedri</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
            Full-Stack Software Engineer focused on building practical, polished, and scalable digital experiences.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Navigate</p>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <a href="#about" className="block hover:text-white">About</a>
            <a href="#skills" className="block hover:text-white">Skills</a>
            <a href="#projects" className="block hover:text-white">Projects</a>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Sections</p>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <a href="#experience" className="block hover:text-white">Experience</a>
            <a href="#contact" className="block hover:text-white">Contact</a>
            <a href="/Ahmed_Guedri_Curriculum_vitae__Version_FR_.pdf" download="Ahmed_Guedri_Curriculum_vitae__Version_FR_.pdf" className="block hover:text-white">
              Resume
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Social Links</p>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="interactive-hover block hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="relative mx-auto max-w-7xl px-6 pb-8 text-sm text-slate-500 lg:px-10">
        © {new Date().getFullYear()} Ahmed Guedri Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
