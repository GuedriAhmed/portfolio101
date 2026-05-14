import React from "react";
import { ArrowUpRight } from "lucide-react";
import heroImage from "../assets/hero.png";
import { socialLinks } from "../data/portfolio";
import IntroParticles from "./IntroParticles";

const iconMap = {
  GitHub: "ri-github-fill",
  LinkedIn: "ri-linkedin-fill",
  Instagram: "ri-instagram-line",
  Facebook: "ri-facebook-circle-line",
};

export default function Hero() {
  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <IntroParticles particleCount={76} linkDistance={82} mouseRadius={150} />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(34,211,238,0.03)_0,rgba(34,211,238,0.03)_1px,transparent_1px,transparent_60px),repeating-linear-gradient(180deg,rgba(34,211,238,0.03)_0,rgba(34,211,238,0.03)_1px,transparent_1px,transparent_60px)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 lg:px-10">
        <div className="grid w-full items-center gap-14 md:grid-cols-[minmax(0,1fr)_380px]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[rgba(21,30,50,0.6)] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </div>

            <div className="mt-8 space-y-6">
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-400">Full-Stack Engineer · Digital Product Builder</p>
              <h1
                className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
                style={{ textShadow: "0 0 30px rgba(34,211,238,0.3)" }}
              >
                Ahmed Guedri
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
                Full-Stack Software Engineer building fast, scalable, and user-focused digital products.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/50 bg-transparent px-6 py-3 text-sm font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-500/10"
                style={{ boxShadow: "0 0 20px rgba(34,211,238,0.15)" }}
              >
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg border border-slate-600 bg-transparent px-6 py-3 text-sm font-medium text-slate-300 transition-colors duration-300 hover:border-slate-400"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xl">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                >
                  <i className={iconMap[link.label]} />
                </a>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="rounded-[1.5rem] border border-cyan-500/20 bg-[rgba(21,30,50,0.5)] p-6 backdrop-blur-xl">
              <div className="mb-4 rounded-xl border border-white/8 bg-[#091321] p-3 font-mono text-[11px] leading-6 text-cyan-300/70">
                <p>const engineer = &#123;</p>
                <p className="pl-4">name: &quot;Ahmed Guedri&quot;,</p>
                <p className="pl-4">stack: [&quot;React&quot;, &quot;Angular&quot;, &quot;Spring Boot&quot;],</p>
                <p className="pl-4">focus: &quot;Scalable user-first products&quot;</p>
                <p>&#125;;</p>
              </div>
              <div className="overflow-hidden rounded-xl border border-cyan-500/20 bg-[#0B1120]">
                <img src={heroImage} alt="Ahmed Guedri hero visual" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-cyan-400/50 md:block">
          <i className="ri-arrow-down-s-line animate-bounce text-3xl" />
        </a>
      </div>
    </section>
  );
}
