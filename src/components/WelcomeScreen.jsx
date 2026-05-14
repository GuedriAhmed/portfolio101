import React, { useEffect, useMemo, useState } from "react";
import IntroParticles from "./IntroParticles";

const codeSnippets = [
  "const portfolio = new PremiumExperience();",
  "<Component skill='fullstack' />",
  "deploy({ stack: ['React', 'Spring Boot'] })",
  "while(building) { improve(); }",
  "animate.in('hero-content')",
  "ship({ quality: 'high' })",
];

export default function WelcomeScreen({ onLoadingComplete }) {
  const [visibleName, setVisibleName] = useState("");
  const [progress, setProgress] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const fullName = "Ahmed Guedri";

  useEffect(() => {
    document.body.classList.add("no-scroll");

    let nameIndex = 0;
    const typeInterval = setInterval(() => {
      nameIndex += 1;
      setVisibleName(fullName.slice(0, nameIndex));
      if (nameIndex >= fullName.length) {
        clearInterval(typeInterval);
        setTypingComplete(true);
      }
    }, 110);

    return () => {
      document.body.classList.remove("no-scroll");
      clearInterval(typeInterval);
    };
  }, []);

  useEffect(() => {
    if (!typingComplete) return;

    const progressInterval = setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          clearInterval(progressInterval);
          return 100;
        }

        const step = value < 45 ? 3 : value < 80 ? 2 : 1;
        return Math.min(value + step, 100);
      });
    }, 55);

    return () => clearInterval(progressInterval);
  }, [typingComplete]);

  useEffect(() => {
    if (progress !== 100 || isExiting) return;

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        document.body.classList.remove("no-scroll");
        onLoadingComplete?.();
      }, 1300);
    }, 180);

    return () => clearTimeout(exitTimer);
  }, [isExiting, onLoadingComplete, progress]);

  const snippetLayout = useMemo(
    () =>
      codeSnippets.map((snippet, index) => ({
        snippet,
        style: {
          top: `${14 + (index % 3) * 17}%`,
          left: `${5 + (index * 19) % 78}%`,
          animationDelay: `${index * 1.2}s`,
        },
      })),
    []
  );

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden bg-[#050914] transition-all duration-[1300ms] ease-out ${
        isExiting ? "scale-110 blur-[12px] opacity-0" : "scale-100 blur-0 opacity-100"
      }`}
    >
      <div className="absolute inset-0 bg-[#050914]" />
      <IntroParticles particleCount={68} linkDistance={80} mouseRadius={150} />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(34,211,238,0.03)_0,rgba(34,211,238,0.03)_1px,transparent_1px,transparent_60px),repeating-linear-gradient(180deg,rgba(34,211,238,0.03)_0,rgba(34,211,238,0.03)_1px,transparent_1px,transparent_60px)]" />

      <div className="absolute left-[5%] top-[18%] h-[220px] w-[220px] rounded-full bg-cyan-400/10 blur-[120px] animate-orb-drift" />
      <div className="absolute right-[8%] top-[12%] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[140px] animate-orb-drift-delayed" />
      <div className="absolute bottom-[10%] left-[40%] h-[260px] w-[260px] rounded-full bg-cyan-300/8 blur-[150px] animate-orb-drift-slow" />

      {snippetLayout.map((item) => (
        <span
          key={item.snippet}
          className="absolute hidden font-mono text-sm text-cyan-400/20 md:block animate-code-drift"
          style={item.style}
        >
          {item.snippet}
        </span>
      ))}

      <div className="absolute left-1/2 top-1/2 w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 px-6 text-center">
        <div className="relative mx-auto max-w-4xl">
          <span className="absolute -left-2 top-[42%] hidden text-3xl text-cyan-500/40 animate-bracket-pulse md:block">┌</span>
          <span className="absolute -right-2 top-[42%] hidden text-3xl text-cyan-500/40 animate-bracket-pulse md:block">┐</span>
          <span className="absolute -bottom-10 left-0 hidden text-3xl text-cyan-500/40 animate-bracket-pulse md:block">└</span>
          <span className="absolute -bottom-10 right-0 hidden text-3xl text-cyan-500/40 animate-bracket-pulse md:block">┘</span>

          <div className="inline-flex rounded-full border border-cyan-500/30 bg-[rgba(21,30,50,0.6)] px-4 py-1.5 text-xs tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
            SYSTEM.INIT()
          </div>

          <h1 className="font-display mt-8 text-5xl font-bold tracking-tight text-white md:text-7xl">
            {visibleName}
            <span className="ml-1 inline-block text-cyan-400 animate-cursor-blink">|</span>
          </h1>

          <p
            className={`mx-auto mt-6 max-w-2xl font-mono text-base text-slate-400 transition-all duration-500 ${
              typingComplete ? "translate-y-0 opacity-100" : "translate-y-[10px] opacity-0"
            }`}
          >
            Full-Stack Engineer · Building digital experiences
          </p>

          <div
            className={`mx-auto mt-14 max-w-[320px] transition-all duration-500 ${
              typingComplete ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="h-[2px] overflow-visible rounded-full bg-[rgba(51,65,85,0.3)]">
              <div className="relative h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-75 ease-out" style={{ width: `${progress}%` }}>
                <span className="absolute right-0 top-1/2 h-[6px] w-[6px] -translate-y-1/2 translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.85)]" />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.24em]">
              <span className="text-slate-500">{progress === 100 ? "Complete" : "Loading..."}</span>
              <span className="text-cyan-400">{progress}%</span>
            </div>
          </div>

          <div className="mx-auto mt-14 flex max-w-[200px] items-center justify-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
            <span className="h-[4px] w-[4px] rounded-full bg-cyan-400" />
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
