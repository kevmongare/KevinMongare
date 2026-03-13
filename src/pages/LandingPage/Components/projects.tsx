// src/pages/sections/Projects.tsx
import Card from "../../../components/card";
import projects from "../../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center px-5 sm:px-10 py-24 md:ml-24"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      {/* Section header */}
      <div className="w-full max-w-7xl mb-12">
        <p className="font-mono text-sm mb-2" style={{ color: "var(--accent-color)" }}>
          0.3
        </p>
        <h1
          className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3"
          style={{ color: "var(--text-color-light)" }}
        >
          What I've Built
        </h1>
        <div className="w-12 h-1 rounded-full" style={{ backgroundColor: "var(--accent-color)" }} />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            buttonText={project.buttonText}
            onClick={() => {
              if (project.url) {
                window.open(project.url, "_blank", "noopener,noreferrer");
              }
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
