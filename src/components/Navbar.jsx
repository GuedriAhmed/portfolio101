import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter(Boolean);

      const current = sections.find((section) => {
        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;
        return window.scrollY >= top && window.scrollY < bottom;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleAnchorClick = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 88,
      behavior: "smooth",
    });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/5 bg-[rgba(5,9,20,0.8)] backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#hero" onClick={(event) => handleAnchorClick(event, "#hero")} className="font-display text-lg font-semibold text-white transition-colors duration-300 hover:text-cyan-400">
          Ahmed Guedri
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.filter((item) => item.href !== "#hero").map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleAnchorClick(event, item.href)}
                className={`text-sm transition-colors duration-300 ${
                  isActive ? "text-cyan-400" : "text-slate-400 hover:text-cyan-400"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(event) => handleAnchorClick(event, "#contact")}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-[rgba(21,30,50,0.6)] px-4 py-2 text-sm font-medium text-cyan-400 backdrop-blur-xl transition-colors duration-300 hover:bg-cyan-500/10"
          >
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(21,30,50,0.6)] text-slate-200 backdrop-blur-xl lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/6 bg-[rgba(11,17,32,0.88)] backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-2 px-6 py-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(event) => handleAnchorClick(event, item.href)}
              className="block rounded-2xl border border-white/8 bg-[rgba(21,30,50,0.6)] px-4 py-3 text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20 hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
