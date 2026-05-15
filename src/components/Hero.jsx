import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import heroImage from "../assets/hero.png";
import { socialLinks } from "../data/portfolio";
import IntroParticles from "./IntroParticles";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const iconMap = {
  GitHub: "ri-github-fill",
  LinkedIn: "ri-linkedin-fill",
  Instagram: "ri-instagram-line",
  Facebook: "ri-facebook-circle-line",
};

export default function Hero() {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden" onMouseMove={handlePointerMove}>
      <div className="absolute inset-0">
        <IntroParticles particleCount={84} linkDistance={88} mouseRadius={200} />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(34,211,238,0.03)_0,rgba(34,211,238,0.03)_1px,transparent_1px,transparent_60px),repeating-linear-gradient(180deg,rgba(34,211,238,0.03)_0,rgba(34,211,238,0.03)_1px,transparent_1px,transparent_60px)]" />
        <div
          className="absolute inset-0 opacity-70 transition-all duration-200"
          style={{
            background: `radial-gradient(circle at ${pointer.x}% ${pointer.y}%, rgba(34,211,238,0.12), transparent 16%), radial-gradient(circle at ${pointer.x + 8}% ${pointer.y - 4}%, rgba(59,130,246,0.08), transparent 24%)`,
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 lg:px-10">
        <div className="grid w-full items-center gap-10 md:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
          <Reveal className="max-w-3xl" amount={0.15}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[rgba(21,30,50,0.6)] px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-300 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </div>

            <div className="mt-7 space-y-5">
              <p className="animate-hero-float text-[11px] uppercase tracking-[0.32em] text-cyan-400">Full-Stack Engineer · Digital Product Builder</p>
              <h1
                className="font-display animate-hero-float text-[3.3rem] font-bold tracking-tight text-white sm:text-[4.5rem] lg:text-[5.2rem]"
                style={{ textShadow: "0 0 30px rgba(34,211,238,0.3)" }}
              >
                Ahmed Guedri
              </h1>
              <p className="max-w-2xl text-[1.08rem] leading-7 text-slate-300 md:text-[1.28rem] md:leading-8">
                Full-Stack Software Engineer building fast, scalable, and user-focused digital products.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href="#projects"
                className="interactive-hover inline-flex items-center gap-2 rounded-lg border border-cyan-500/50 bg-transparent px-5 py-2.5 text-sm font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-500/10"
                style={{ boxShadow: "0 0 20px rgba(34,211,238,0.15)" }}
              >
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="interactive-hover inline-flex items-center rounded-lg border border-slate-600 bg-transparent px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors duration-300 hover:border-slate-400"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-6 flex items-center gap-5 text-[1.45rem]">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="interactive-hover rounded-full border border-transparent bg-transparent p-1.5 text-slate-400 transition-all duration-300 hover:border-cyan-400/15 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  <i className={iconMap[link.label]} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative mx-auto w-full max-w-[22rem] md:mx-0 md:max-w-none" delay={0.1} x={28} amount={0.15}>
            <TiltCard className="interactive-hover transition-transform duration-200 will-change-transform">
            <div className="rounded-[1.45rem] border border-cyan-500/18 bg-[rgba(21,30,50,0.52)] p-4 backdrop-blur-xl">
              <div className="rounded-[1.15rem] border border-white/8 bg-[#091321]/95 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-500/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-500/50" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-cyan-300/80">Engineer.Profile</span>
                </div>
                <div className="overflow-hidden rounded-[1rem] border border-white/8 bg-[#050914]">
                  <img src={heroImage} alt="Ahmed hero visual" className="h-[18rem] w-full object-cover sm:h-[20rem] md:h-[22rem]" />
                </div>
                <div className="mt-4 rounded-[0.9rem] border border-white/7 bg-white/[0.02] p-3 font-mono text-[10px] leading-5 text-cyan-300/70">
                  <p>const engineer = &#123;</p>
                  <p className="pl-3">stack: [&quot;React&quot;, &quot;Angular&quot;, &quot;Spring Boot&quot;],</p>
                  <p className="pl-3">focus: &quot;User-first products&quot;</p>
                  <p>&#125;;</p>
                </div>
              </div>
            </div>
            </TiltCard>
          </Reveal>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-cyan-400/50 md:block">
          <i className="ri-arrow-down-s-line animate-bounce text-3xl" />
        </a>
      </div>
    </section>
  );
}
