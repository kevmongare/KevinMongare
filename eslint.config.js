// src/pages/sections/Contact.tsx
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Placeholder: You can integrate email API (EmailJS, Formspree, Supabase) here
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center p-5 md:ml-24 bg-cover bg-center"
      style={{ backgroundColor: "var(--bg-color-light)" }}
    >
      {/* Header */}
      <h2
        className="text-3xl font-bold mb-10 underline decoration-[#64ffda] underline-offset-4 text-center"
        style={{ color: "var(--text-color-light)" }}
      >
        Get In Touch
      </h2>

      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-10">
        {/* Contact Form */}
        <form
          className="flex-1 flex flex-col space-y-4 p-6 rounded-xl shadow-lg bg-navy-light dark:bg-white transition-colors duration-500"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-600 dark:border-gray-300 bg-transparent dark:bg-gray-100 text-white dark:text-navy placeholder:text-slate dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-bright transition-colors duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="p-3 rounded border border-gray-600 dark:border-gray-300 bg-transparent dark:bg-gray-100 text-white dark:text-navy placeholder:text-slate dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-bright transition-colors duration-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="p-3 rounded border border-gray-600 dark:border-gray-300 bg-transparent dark:bg-gray-100 text-white dark:text-navy placeholder:text-slate dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-bright transition-colors duration-300"
          />
          <button
            type="submit"
            className="bg-green-bright text-navy font-semibold py-3 rounded hover:scale-105 transition-transform"
          >
            {submitted ? "Message Sent!" : "Send Message"}
          </button>
        </form>

        {/* Social Links */}
        <div className="flex-1 flex flex-col justify-center items-center space-y-6 p-6 rounded-xl shadow-lg"
          style={{ backgroundColor: "var(--navy-light)" }}
        >
            
          <h3 className="text-xl font-semibold text-green-bright mb-4">Connect With Me</h3>
          <p>I'm currently available for freelance work and open to full-time opportunities. If you have a project that you want to get started or think you need my help with something, then get in touch.</p>
          <div className="flex gap-6 text-2xl text-slate">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="hover:text-green-bright transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"  className="hover:text-green-bright transition-colors">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"  className="hover:text-green-bright transition-colors">
              <FaTwitter />
            </a>
          </div>
          <p className="text-slate text-center mt-6">Or email me directly at <span className="text-green-bright">kmongare4@gmail.com</span></p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
