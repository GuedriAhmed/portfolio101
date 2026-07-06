import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  
];

export default function Navbar({ activeSection: activeSectionProp = "hero" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(activeSectionProp);
  const [navOffset, setNavOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 100);
      setNavOffset(Math.min(20, Math.max(0, y * 0.08)));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveSection(activeSectionProp);
  }, [activeSectionProp]);

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
        scrolled ? "translate-y-0" : "translate-y-0"
      }`}
      style={{ top: `${navOffset}px` }}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 py-4 transition-all duration-500 lg:px-10 ${
          scrolled
            ? "rounded-2xl border border-white/8 bg-[rgba(5,9,20,0.82)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <a href="#hero" onClick={(event) => handleAnchorClick(event, "#hero")} className="font-display text-lg font-semibold text-white transition-colors duration-300 hover:text-cyan-400">
          Ahmed Guedri
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.filter((item) => item.href !== "#hero").map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleAnchorClick(event, item.href)}
                className={`group relative pb-1 text-sm transition-colors duration-300 ${
                  isActive ? "text-cyan-300" : "text-slate-400 hover:text-cyan-400"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 bg-cyan-300 transition-all duration-500 ease-out ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-70"
                  }`}
                />
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(21,30,50,0.6)] text-slate-200 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/25 hover:text-cyan-200 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="mx-auto mt-3 max-w-7xl px-3 lg:hidden"
          >
            <div className="overflow-hidden rounded-[1.6rem] border border-white/8 bg-[rgba(11,17,32,0.9)] backdrop-blur-xl">
              <div className="space-y-2 p-4">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(event) => handleAnchorClick(event, item.href)}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 18 }}
                      transition={{ delay: index * 0.04, duration: 0.22 }}
                      className={`block rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 ${
                        isActive
                          ? "border-cyan-400/25 bg-cyan-400/10 text-cyan-200"
                          : "border-white/8 bg-[rgba(21,30,50,0.6)] text-slate-200 hover:border-cyan-400/20 hover:text-cyan-200"
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
