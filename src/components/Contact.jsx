import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [toast, setToast] = useState({ show: false, message: "", success: true });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b6z52c6",
        "template_c0hvgqr",
        form.current,
        "cTCl-yeYQ6TjPEkLv"
      )
      .then(
        (result) => {
          setToast({ show: true, message: "Message sent successfully!", success: true });
          form.current.reset();

          // Hide toast after 3 seconds
          setTimeout(() => setToast({ ...toast, show: false }), 3000);
        },
        (error) => {
          setToast({ show: true, message: "Failed to send message. Please try again.", success: false });
          console.error(error.text);

          setTimeout(() => setToast({ ...toast, show: false }), 3000);
        }
      );
  };

  return (
    <section id="contact" data-aos="fade-up" className="py-20 text-center relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white h-32"
          />
          <button
            type="submit"
            className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Toast notification */}
      {toast.show && (
        <div
          className={`fixed top-6 right-6 px-4 py-3 rounded-lg shadow-lg text-white font-medium transition-all ${
            toast.success ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}
    </section>
  );
}
