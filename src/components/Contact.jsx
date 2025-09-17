import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
     useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <section id="contact" data-aos="fade-up" className="py-20 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white" />
          <textarea placeholder="Your Message" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white h-32"></textarea>
          <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600">Send Message</button>
        </form>
      </div>
    </section>
  );
}
