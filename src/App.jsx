import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences"; 
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";
import { useState, useEffect } from "react";
import AnimatedBackground from "./components/Background";
import ScrollRail from "./components/ScrollRail";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [mainReady, setMainReady] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!showWelcome) {
      const timer = setTimeout(() => setMainReady(true), 40);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  useEffect(() => {
    if (showWelcome) return;

    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "contact"]
        .map((id) => document.getElementById(id))
        .filter(Boolean);

      const current = sections.find((section) => {
        const top = section.offsetTop - window.innerHeight * 0.3;
        const bottom = top + section.offsetHeight;
        return window.scrollY >= top && window.scrollY < bottom;
      });

      if (current) {
        setActiveSection(current.id);
      }

      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0;
      setScrollProgress(Math.min(Math.max(ratio, 0), 100));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showWelcome]);

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      ) : (
        <div
          className={`relative min-h-screen scroll-smooth bg-[#081120] text-white transition-all duration-1000 ${
            mainReady ? "opacity-100 blur-0" : "opacity-0 blur-md"
          }`}
        >
          <AnimatedBackground />
          <div className="relative z-10">
            <ScrollRail activeSection={activeSection} progress={scrollProgress} />
            <Navbar activeSection={activeSection} />
            <Hero />
            <About />
            <Skills />
            <Experiences />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
