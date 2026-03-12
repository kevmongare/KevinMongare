// src/pages/sections/Projects.tsx
import Card from "../../../components/card";

import projects from "../../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="md:ml-24 flex flex-col items-center justify-start min-h-screen py-16 bg-cover bg-center"
      style={{ backgroundColor: "var(--bg-color-light)" }}
    >
      {/* Section Header */}
      <h1
        className="font-heading text-4xl mb-4 text-center px-5"
        style={{ color: "var(--text-color-light)" }}
      >
        <span className="text-green-bright text-xl sm:text-2xl" style={{ color: "var(--accent-color)" }}>
          0.3{" "}
        </span>
        What I’ve Done:
      </h1>

      <hr
        className="mx-auto w-20 mb-10"
        style={{ borderColor: "var(--accent-color)" }}
      />

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-5">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            buttonText={project.buttonText}
            onClick={() => alert(`Clicked on ${project.title}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
