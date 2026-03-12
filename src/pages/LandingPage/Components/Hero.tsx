import { useEffect, useState } from "react";
import Button from "../components/button";

const TITLES = ["Full Stack Developer", "Database Engineer", "Tech Enthusiast", "Problem Solver"];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setTitleIndex((i) => (i + 1) % TITLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, titleIndex]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Kevin Mongare -Junior Database Engineer Intern (1).pdf";
    link.download = "Kevin-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => alert("Thank you for downloading my CV!"), 3000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden md:ml-24"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--accent-color) 1px, transparent 1px), linear-gradient(90deg, var(--accent-color) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[130px] opacity-10 pointer-events-none"
        style={{ backgroundColor: "var(--accent-color)" }}
      />

      <div className="relative z-10 max-w-3xl w-full px-6 sm:px-10 py-24">
        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6 border"
          style={{
            borderColor: "var(--accent-color)",
            color: "var(--accent-color)",
            backgroundColor: "color-mix(in srgb, var(--accent-color) 8%, transparent)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "var(--accent-color)" }}
          />
          Available for work
        </div>

        <p className="font-mono text-sm mb-3" style={{ color: "var(--accent-color)" }}>
          Hi, my name is
        </p>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-none"
          style={{ color: "var(--text-color-light)" }}
        >
          Kevin
          <br />
          <span style={{ color: "var(--accent-color)" }}>Mongare.</span>
        </h1>

        <div
          className="text-xl sm:text-2xl font-bold mb-6 h-9 font-mono flex items-center"
          style={{ color: "var(--text-color)" }}
        >
          <span>{displayed}</span>
          <span
            className="inline-block w-0.5 h-6 ml-1 animate-pulse"
            style={{ backgroundColor: "var(--accent-color)" }}
          />
        </div>

        <p
          className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl"
          style={{ color: "var(--text-color)" }}
        >
          I build scalable, accessible, and intuitive digital experiences — from polished frontends
          to robust data pipelines.
        </p>

        <div className="flex flex-wrap gap-3">
          <a href="#projects">
            <Button text="View My Work" variant="CTA" />
          </a>
          <Button text="Download CV" variant="other" onClick={handleDownload} />
        </div>

        <div className="mt-16 flex items-center gap-3 opacity-40">
          <div className="w-px h-10" style={{ backgroundColor: "var(--accent-color)" }} />
          <span className="text-xs font-mono" style={{ color: "var(--accent-color)" }}>
            scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
