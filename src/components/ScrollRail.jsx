import React from "react";

const items = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function ScrollRail({ activeSection = "hero", progress = 0 }) {
  return (
    <div className="pointer-events-none fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 xl:flex">
      <div className="pointer-events-auto flex items-center gap-4">
        <div className="relative h-[70vh] w-[18px] rounded-full border border-white/6 bg-[rgba(255,255,255,0.04)]">
          <div className="absolute inset-x-[7px] top-3 bottom-3 rounded-full bg-white/10" />
          <div
            className="absolute inset-x-[7px] top-3 rounded-full bg-gradient-to-b from-cyan-300 via-cyan-400 to-cyan-500 transition-all duration-300"
            style={{ height: `calc(${Math.max(progress, 6)}% - 12px)` }}
          />
          {items.map((item, index) => {
            const offset = 12 + (index / (items.length - 1)) * (70 * 16 - 24);
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group absolute left-1/2 -translate-x-1/2"
                style={{ top: `${offset}px` }}
              >
                <span
                  className={`block h-[7px] w-[7px] rounded-full border transition-all duration-300 ${
                    isActive
                      ? "border-cyan-200 bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.8)]"
                      : "border-cyan-400/30 bg-[#0b1120] group-hover:border-cyan-300/50 group-hover:bg-cyan-400/40"
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
