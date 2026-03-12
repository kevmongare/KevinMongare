// Replace TechStack import with your actual path
// import TechStack from '../../../data/tech-stack'

const TechStack = {
  Frontend: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
  Backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
  DataScience: ["Python", "Pandas", "SQL", "Power BI", "Data Modelling"],
};

const AboutMe = () => {
  const categories = [
    { label: "Frontend", items: TechStack.Frontend },
    { label: "Backend",  items: TechStack.Backend },
    { label: "Data",     items: TechStack.DataScience },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 py-24 md:ml-24 overflow-hidden"
      style={{ backgroundColor: "var(--bg-color-light)" }}
    >
      {/* Decorative accent line */}
      <div
        className="absolute left-0 top-1/4 w-1 h-40 rounded-r-full hidden md:block"
        style={{ backgroundColor: "var(--accent-color)" }}
      />

      <div className="w-full max-w-5xl">
        {/* Section header */}
        <div className="mb-14">
          <p className="font-mono text-sm mb-2" style={{ color: "var(--accent-color)" }}>
            0.2
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3"
            style={{ color: "var(--text-color-light)" }}
          >
            About Me
          </h1>
          <div className="w-12 h-1 rounded-full" style={{ backgroundColor: "var(--accent-color)" }} />
        </div>

        {/* Bio */}
        <p
          className="text-base sm:text-lg leading-relaxed mb-14 max-w-3xl"
          style={{ color: "var(--text-color)" }}
        >
          I'm a{" "}
          <span style={{ color: "var(--accent-color)" }} className="font-semibold">
            React & MERN Stack Developer
          </span>{" "}
          and Data Engineer trainee passionate about building scalable web apps and data-driven
          solutions. My unique background combines frontend development, SQL databases, and analytics
          to deliver experiences that are both user-friendly and insightful.
        </p>

        {/* Tech Skills */}
        <div>
          <h2
            className="font-mono text-lg mb-8 flex items-center gap-3"
            style={{ color: "var(--accent-color)" }}
          >
            <span>Tech Skills</span>
            <span
              className="flex-1 h-px opacity-20"
              style={{ backgroundColor: "var(--accent-color)" }}
            />
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="rounded-xl p-5 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--accent-color) 5%, var(--bg-color))",
                  border: "1px solid color-mix(in srgb, var(--accent-color) 15%, transparent)",
                }}
              >
                <h3
                  className="text-xs font-mono uppercase tracking-widest mb-4"
                  style={{ color: "var(--accent-color)" }}
                >
                  {cat.label}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm"
                      style={{ color: "var(--text-color-light)" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "var(--accent-color)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
