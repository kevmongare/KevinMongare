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
    duration: "Sep 2025 - Present · 1 mo",
    location: "Nairobi County, Kenya · Hybrid",
    details: [
      "Building responsive and reusable UI components in React.",
      "Integrating with RESTful APIs for real-time product, order, and user data.",
      "Enhancing site performance, accessibility, and SEO for both B2B and B2C users.",
      "Collaborating with designers and engineers to deliver a modern, user-friendly shopping experience.",
    ],
  },
  {
    company: "Learnsoft Beliotech Solutions",
    role: "Software Development Intern – Full-Stack Web Development",
    duration: "Jul 2025 - Sep 2025 · 3 mos",
    location: "Nairobi County, Kenya · Remote",
    details: [
      "Built a PostgreSQL-powered backend for a scalable company website.",
      "Designed and optimized relational database schemas for content, jobs, and media.",
      "Integrated third-party APIs (Mailchimp, Google Analytics) with structured data models.",
    ],
  },
  {
    company: "Comet Digital Hub",
    role: "Junior Software Engineer",
    duration: "Jan 2025 - Jul 2025 · 7 mos",
    location: "Nairobi County, Kenya · Remote",
    details: [
      "Worked with REST APIs connected to SQL databases, ensuring smooth data exchange.",
      "Collaborated with backend teams on data architecture and validation workflows.",
      "Contributed to debugging performance issues related to API → database communication.",
    ],
  },
  {
    company: "Jumia Kenya",
    role: "Customer Service Supervisor",
    duration: "Oct 2021 - Jul 2025 · 3 yrs 10 mos",
    location: "Nairobi County, Kenya",
    details: [
      "Resolved customers’ complaints, increasing client retention ratio by 50%.",
      'Attained “Best Customer Service Agent of the Month” Award 6 times in one year.',
      "Handled 40+ customer calls daily with 100% success rate in all service categories.",
    ],
  },
  {
    company: "Kenya Medical Training College",
    role: "IT Support Specialist (Intern)",
    duration: "Jan 2021 - Oct 2021 · 10 mos",
    location: "Nairobi County, Kenya",
    details: [
      "Maintained and monitored all user IT equipment and accounts.",
      "Provided hardware and software support for eLearning platform.",
      "Set up new user equipment and coordinated hardware swaps.",
    ],
  },
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center p-4 sm:p-6 md:p-8"
      style={{ backgroundColor: "var(--bg-color-light)" }}
    >
      {/* Header */}
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 underline decoration-accent-color underline-offset-4 text-center"
        style={{ color: "var(--text-color-light)" }}
      >
        Work Experience
      </h2>

      {/* Content container */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-6">
        {/* Sidebar */}
        <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible md:w-1/4 space-x-2 md:space-x-0 md:space-y-4 mb-4 md:mb-0">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="flex-shrink-0 md:flex-shrink md:text-left p-3 rounded-lg transition-all duration-300"
              style={{
                backgroundColor:
                  index === activeIndex ? "var(--accent-color)" : "transparent",
                color:
                  index === activeIndex
                    ? "var(--bg-color)"
                    : "var(--text-color-light)",
              }}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Experience details */}
        <div
          className="w-full md:w-3/4 p-4 sm:p-6 md:p-6 rounded-xl shadow-lg"
          style={{ backgroundColor: "var(--bg-color)" }}
        >
          <div className="flex flex-col space-y-2 mb-4">
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-heading"
              style={{ color: "var(--accent-color)" }}
            >
              {experiences[activeIndex].role}
            </h3>
            <p style={{ color: "var(--text-color-light)" }}>
              {experiences[activeIndex].company}
            </p>
            <p style={{ color: "var(--text-color-light)" }}>
              {experiences[activeIndex].duration} · {experiences[activeIndex].location}
            </p>
          </div>
          <ul
            className="list-disc list-inside space-y-2"
            style={{ color: "var(--text-color-light)" }}
          >
            {experiences[activeIndex].details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
