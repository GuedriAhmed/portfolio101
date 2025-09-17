import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WelcomeScreen from "./components/WelcomeScreen";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import AnimatedBackground from "./components/Background"; // <-- import here




export default function App() {
 const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
    const [showWelcome, setShowWelcome] = useState(true);


useEffect(() => {
    const sections = document.querySelectorAll("section");
  AOS.init({ duration: 800, once: true });
   const handleScroll = () => {
    const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
    sections.forEach((section)=>{
        if (
          scrollTop + windowHeight / 3 >= section.offsetTop &&
          scrollTop + windowHeight / 3 < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
            // Section scroll progress
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const scrolled = ((scrollTop - sectionTop + windowHeight / 3) / sectionHeight) * 100;
          setScrollProgress(Math.min(Math.max(scrolled, 0), 100));
        }
    })
 
  };
  window.addEventListener("scroll", handleScroll);
      handleScroll(); // initialize on load
  return () => window.removeEventListener("scroll", handleScroll);


}, []);

  return (
     <>
      {showWelcome ? (
        <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      ) :(
    
    <div className="bg-gray-900 text-white scroll-smooth relative">
      <AnimatedBackground />
      <Navbar activeSection={activeSection} scrollProgress={scrollProgress} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
      )}
    </>
  );
}
