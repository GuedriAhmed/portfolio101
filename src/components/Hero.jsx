import React, { useEffect, useState } from "react";
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles, UserCheck } from "lucide-react"
import AOS from "aos";
import "aos/dist/aos.css";
import heroImage from "../assets/hero.png"; // use your own image or the uploaded one

// Typewriter component with proper looping between multiple texts
function TypewriterLoop({ texts, speed = 150, pause = 1500 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!deleting && charIndex < currentText.length) {
      // typing
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (!deleting && charIndex === currentText.length) {
      // pause before deleting
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      // deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, speed / 2);
    } else if (deleting && charIndex === 0) {
      // switch to next text
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, speed, pause]);

  return (
    <span>
      {displayedText}
      <span className="border-r-2 border-gray-300 animate-blink ml-1"></span>
    </span>
  );
}

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="home"
      data-aos="fade-up"
         className="pt-24 md:pt-0 min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 text-white"


    >
      {/* Left content */}
      <div className="flex-1 flex flex-col space-y-6">
        
<span className="inline-flex items-center px-3 py-1 rounded-lg border border-blue-400/30 w-auto max-w-max bg-black/20 animate-glow-box">
  <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400 animate-glow-text" />
  <span className="bg-gradient-to-r from-blue-800 to-cyan-400 bg-clip-text text-transparent sm:text-sm text-[0.7rem] font-medium animate-glow-text">
    Ready to Innovate
  </span>
</span>




        {/* Main title */}
        <h1 className="text-5xl md:text-6xl font-extrabold">
          <span className=" text-white">Web</span>{" "} <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-800 bg-clip-text text-transparent ">
            Developer
          </span>
        </h1>

        {/* Typewriter subtitle */}
        <h2 className="text-2xl md:text-3xl mt-2 text-white-400 font-light">
          <TypewriterLoop texts={["Software Engineer", "Software Enthusiast"]} />
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300">
         Creating Innovative, Functional, and User-Friendly Websites for Digital Solutions.
        </p>

        {/* Skills tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {["React", "Javascript", "Node.js", "Tailwind"].map((skill) => (
            <span
              key={skill}
              className="bg-gray-800 px-3 py-1 rounded-full text-sm text-gray-200 border border-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>

       <div className="flex space-x-4 mt-6">
  {/* Projects Button */}
  <a
    href="#projects"
    className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md shadow-blue-500/50 hover:bg-blue-600 transition-all duration-300 flex items-center gap-3" 
  >
   
    Projects 
    <i class="fa-solid fa-arrow-up-right-from-square"></i>
  </a>

  {/* Contact Button */}
  <a
    href="#contact"
    className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-md shadow-blue-500/50 hover:bg-blue-600 transition-all duration-300 flex items-center gap-3"
  >
   
    Contact 
    <i class="fa-regular fa-address-book"></i>
  </a>
</div>

        {/* Social icons */}
       <div className="flex space-x-4 mt-6">
  {/* GitHub */}
  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg shadow-md hover:bg-gray-500 transition-colors duration-300"
  >
    <i className="fab fa-github text-white text-lg"></i>
  </a>

  {/* LinkedIn */}
  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
  >
    <i className="fab fa-linkedin-in text-white text-lg"></i>
  </a>

  {/* Instagram */}
  <a
    href="#"
    className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-lg shadow-md hover:bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 transition-colors duration-300"
  >
    <i className="fab fa-instagram text-white text-lg"></i>
  </a>
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 shadow-md hover:shadow-blue-600/50 transition-all duration-300"
  >
    <i className="fab fa-facebook-f text-xl text-white hover:text-blue-600"></i>
  </a>
</div>
      </div>

      {/* Right image */}
      <div className=" flex-1 mt-10 md:mt-0 md:w-1/2  " >
        <img src={heroImage}  data-aos="fade-left" alt="Frontend Illustration" className="animate-image-glow h12 w-116 transition-transform duration-500 ease-in-out transform hover:scale-105 " />
      </div>
    </section>
  );
}
