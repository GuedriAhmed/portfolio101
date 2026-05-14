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

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [mainReady, setMainReady] = useState(false);

  useEffect(() => {
    if (!showWelcome) {
      const timer = setTimeout(() => setMainReady(true), 40);
      return () => clearTimeout(timer);
    }
  }, [showWelcome]);

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      ) : (
        <div
          className={`relative min-h-screen scroll-smooth bg-[#081120] text-white transition-all duration-1000 ${
            mainReady ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-[0.985]"
          }`}
        >
          <AnimatedBackground />
          <div className="relative z-10">
            <Navbar />
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
