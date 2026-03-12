import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiSend, FiMail } from "react-icons/fi";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const socials = [
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/kevin-mongare-58b960200/", label: "LinkedIn" },
  { icon: <FaGithub />,   href: "https://github.com/kevmongare",                        label: "GitHub" },
  { icon: <FaTwitter />,  href: "https://x.com/kevin_mong86626",                        label: "Twitter" },
];

const ContactSection = () => {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 bg-transparent";

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center px-5 sm:px-10 py-24 md:ml-24"
      style={{ backgroundColor: "var(--bg-color-light)" }}
    >
      {/* Section header */}
      <div className="w-full max-w-5xl mb-12">
        <p className="font-mono text-sm mb-2" style={{ color: "var(--accent-color)" }}>
          0.4
        </p>
        <h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3"
          style={{ color: "var(--text-color-light)" }}
        >
          Get In Touch
        </h2>
        <div className="w-12 h-1 rounded-full" style={{ backgroundColor: "var(--accent-color)" }} />
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-6">
        {/* Form */}
        <div
          className="flex-1 rounded-xl p-6 sm:p-8 shadow-sm"
          style={{
            backgroundColor: "color-mix(in srgb, var(--accent-color) 4%, var(--bg-color))",
            border: "1px solid color-mix(in srgb, var(--accent-color) 12%, transparent)",
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            {[
              { name: "name",    type: "text",  placeholder: "Your Name" },
              { name: "email",   type: "email", placeholder: "Your Email" },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={form[field.name as keyof FormState]}
                onChange={handleChange}
                required
                className={inputClass}
                style={{
                  color: "var(--text-color-light)",
                  border: "1px solid color-mix(in srgb, var(--accent-color) 20%, transparent)",
                  backgroundColor: "color-mix(in srgb, var(--accent-color) 3%, var(--bg-color))",
                }}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent-color)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor =
                    "color-mix(in srgb, var(--accent-color) 20%, transparent)")
                }
              />
            ))}

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className={inputClass + " resize-none"}
              style={{
                color: "var(--text-color-light)",
                border: "1px solid color-mix(in srgb, var(--accent-color) 20%, transparent)",
                backgroundColor: "color-mix(in srgb, var(--accent-color) 3%, var(--bg-color))",
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--accent-color)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor =
                  "color-mix(in srgb, var(--accent-color) 20%, transparent)")
              }
            />

            <button
              type="submit"
              disabled={loading || submitted}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 active:scale-95 disabled:opacity-70"
              style={{
                backgroundColor: submitted ? "transparent" : "var(--accent-color)",
                color: submitted ? "var(--accent-color)" : "var(--bg-color)",
                border: submitted ? "1px solid var(--accent-color)" : "none",
              }}
            >
              {submitted ? (
                "✓ Message Sent!"
              ) : loading ? (
                "Sending…"
              ) : (
                <>
                  Send Message <FiSend size={14} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Info panel */}
        <div
          className="flex-1 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-sm"
          style={{
            backgroundColor: "color-mix(in srgb, var(--accent-color) 4%, var(--bg-color))",
            border: "1px solid color-mix(in srgb, var(--accent-color) 12%, transparent)",
          }}
        >
          <div>
            <h3
              className="text-xl font-bold mb-3"
              style={{ color: "var(--text-color-light)" }}
            >
              Let's work together
            </h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-color)" }}>
              I'm currently open to freelance projects and full-time opportunities. If you have
              something in mind, don't hesitate to reach out.
            </p>

            <div
              className="flex items-center gap-3 text-sm mb-8 p-3 rounded-lg"
              style={{
                backgroundColor: "color-mix(in srgb, var(--accent-color) 8%, transparent)",
                color: "var(--accent-color)",
              }}
            >
              <FiMail size={16} />
              <span className="font-mono">kmongare4@gmail.com</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-mono mb-3 opacity-60" style={{ color: "var(--text-color)" }}>
              FIND ME ON
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-base transition-all duration-200"
                  style={{
                    color: "var(--text-color)",
                    border: "1px solid color-mix(in srgb, var(--accent-color) 20%, transparent)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--accent-color)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--bg-color)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-color)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
