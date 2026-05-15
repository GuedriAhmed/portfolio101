import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { socialLinks } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
  const form = useRef();
  const [toast, setToast] = useState({ show: false, message: "", success: true });

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
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Contact</p>
        <h2 className="mt-3 text-[2rem] font-semibold text-white sm:text-[2.5rem]">Let&apos;s build something impactful</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-300">
          Whether you have a project in mind, a freelance opportunity, or a full-time role, I&apos;d love to hear about it.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="interactive-hover rounded-[1.55rem] border border-white/8 bg-white/[0.028] p-7 text-left backdrop-blur-xl" x={-20}>
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Reach Out</p>
          <p className="mt-4 text-[1rem] leading-7 text-white">Open to collaboration, freelance work, and meaningful engineering challenges.</p>
          <div className="mt-8 space-y-3 text-sm text-slate-300">
            <p>Tunisia</p>
            <p>Use the form to send your message directly.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-hover rounded-full border border-white/10 bg-[#0a1423] px-4 py-2 text-xs uppercase tracking-[0.18em] text-slate-300 transition-colors duration-300 hover:text-cyan-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal x={20}>
        <form ref={form} onSubmit={sendEmail} className="interactive-hover space-y-4 rounded-[1.55rem] border border-white/8 bg-white/[0.028] p-7 backdrop-blur-xl">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full rounded-2xl border border-white/10 bg-[#0a1423] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/45 focus:shadow-[0_0_0_1px_rgba(34,211,238,0.18)]"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full rounded-2xl border border-white/10 bg-[#0a1423] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/45 focus:shadow-[0_0_0_1px_rgba(34,211,238,0.18)]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="h-40 w-full rounded-2xl border border-white/10 bg-[#0a1423] px-4 py-3 text-white outline-none transition-all duration-300 placeholder:text-slate-500 focus:border-cyan-300/45 focus:shadow-[0_0_0_1px_rgba(34,211,238,0.18)]"
          />
          <button
            type="submit"
            className="interactive-hover inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>
        </Reveal>
      </div>

      {toast.show && (
        <div
          className={`fixed right-6 top-6 rounded-2xl px-4 py-3 text-sm font-medium text-white shadow-lg transition-all ${
            toast.success ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}
    </section>
  );
}
