import { useState } from "react";

interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    company: "VibePrint",
    role: "Associate Software Engineer",
    duration: "Sep 2025 – Present · 1 mo",
    location: "Nairobi, Kenya · Hybrid",
    details: [
      "Building responsive and reusable UI components in React.",
      "Integrating with RESTful APIs for real-time product, order, and user data.",
      "Enhancing site performance, accessibility, and SEO for B2B and B2C users.",
      "Collaborating with designers and engineers to deliver a modern shopping experience.",
    ],
  },
  {
    company: "Learnsoft Beliotech",
    role: "Full-Stack Intern",
    duration: "Jul – Sep 2025 · 3 mos",
    location: "Nairobi, Kenya · Remote",
    details: [
      "Built a PostgreSQL-powered backend for a scalable company website.",
      "Designed and optimised relational database schemas for content, jobs, and media.",
      "Integrated third-party APIs (Mailchimp, Google Analytics) with structured data models.",
    ],
  },
  {
    company: "Comet Digital Hub",
    role: "Junior Software Engineer",
    duration: "Jan – Jul 2025 · 7 mos",
    location: "Nairobi, Kenya · Remote",
    details: [
      "Worked with REST APIs connected to SQL databases, ensuring smooth data exchange.",
      "Collaborated with backend teams on data architecture and validation workflows.",
      "Contributed to debugging performance issues related to API–database communication.",
    ],
  },
  {
    company: "Jumia Kenya",
    role: "Customer Service Supervisor",
    duration: "Oct 2021 – Jul 2025 · 3 yrs 10 mos",
    location: "Nairobi, Kenya",
    details: [
      "Resolved customer complaints, increasing client retention by 50%.",
      'Earned "Best Customer Service Agent" award 6 times in a single year.',
      "Handled 40+ daily calls with 100% success rate across all service categories.",
    ],
  },
  {
    company: "KMTC",
    role: "IT Support Intern",
    duration: "Jan – Oct 2021 · 10 mos",
    location: "Nairobi, Kenya",
    details: [
      "Maintained and monitored all user IT equipment and accounts.",
      "Provided hardware and software support for the eLearning platform.",
      "Set up new user equipment and coordinated hardware swaps.",
    ],
  },
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col items-center px-5 sm:px-10 py-24 md:ml-24"
      style={{ backgroundColor: "var(--bg-color-light)" }}
    >
      {/* Section header */}
      <div className="w-full max-w-5xl mb-12">
        <p className="font-mono text-sm mb-2" style={{ color: "var(--accent-color)" }}>
          0.2 ·5
        </p>
        <h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3"
          style={{ color: "var(--text-color-light)" }}
        >
          Work Experience
        </h2>
        <div className="w-12 h-1 rounded-full" style={{ backgroundColor: "var(--accent-color)" }} />
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-6">
        {/* Sidebar tabs */}
        <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible md:w-52 flex-shrink-0 pb-1 md:pb-0">
          {experiences.map((exp, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className="flex-shrink-0 text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap md:whitespace-normal"
                style={{
                  backgroundColor: isActive
                    ? "color-mix(in srgb, var(--accent-color) 12%, transparent)"
                    : "transparent",
                  color: isActive ? "var(--accent-color)" : "var(--text-color)",
                  borderLeft: isActive ? "2px solid var(--accent-color)" : "2px solid transparent",
                }}
              >
                {exp.company}
              </button>
            );
          })}
        </div>

        {/* Detail panel */}
        <div
          key={activeIndex}
          className="flex-1 rounded-xl p-6 sm:p-8 shadow-sm"
          style={{
            backgroundColor: "color-mix(in srgb, var(--accent-color) 4%, var(--bg-color))",
            border: "1px solid color-mix(in srgb, var(--accent-color) 12%, transparent)",
          }}
        >
          <h3
            className="text-xl sm:text-2xl font-bold mb-1 leading-tight"
            style={{ color: "var(--accent-color)" }}
          >
            {active.role}
          </h3>
          <p className="text-sm font-semibold mb-1" style={{ color: "var(--text-color-light)" }}>
            {active.company}
          </p>
          <p className="text-xs font-mono mb-6 opacity-60" style={{ color: "var(--text-color-light)" }}>
            {active.duration} · {active.location}
          </p>

          <ul className="space-y-3">
            {active.details.map((d, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--text-color)" }}>
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "var(--accent-color)" }}
                />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
