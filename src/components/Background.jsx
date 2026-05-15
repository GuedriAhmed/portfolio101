import React from "react";

const stars = Array.from({ length: 36 }, (_, index) => ({
  id: index,
  left: `${(index * 13) % 100}%`,
  top: `${(index * 17) % 100}%`,
  delay: `${(index % 7) * 0.7}s`,
}));

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.14),_transparent_32%),linear-gradient(180deg,#07111d_0%,#091525_52%,#081120_100%)]" />
      <div className="absolute left-[-12%] top-[8%] h-[24rem] w-[24rem] rounded-full bg-cyan-400/12 blur-[130px]" />
      <div className="absolute right-[-8%] top-[18%] h-[28rem] w-[28rem] rounded-full bg-blue-500/14 blur-[140px]" />
      <div className="absolute bottom-[-10%] left-[28%] h-[24rem] w-[24rem] rounded-full bg-sky-300/10 blur-[150px]" />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:78px_78px] opacity-35" />
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute h-[2px] w-[2px] animate-pulse rounded-full bg-cyan-200/70 shadow-[0_0_8px_rgba(103,232,249,0.55)]"
          style={{ left: star.left, top: star.top, animationDelay: star.delay }}
        />
      ))}
    </div>
  );
}
