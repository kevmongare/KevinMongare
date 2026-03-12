/**
 * The Hero component in this TypeScript React code displays information about me, including
 * his name, job titles, and a button to download his CV.
 */
import { ReactTyped } from "react-typed";
import Button from "../../../components/button";

const Hero = () => {
  const HandleClick = () => {
    const fileUrl = "/Kevin Mongare -Junior Database Engineer Intern (1).pdf"; // public folder path

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Kevin-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => alert("Thank you for Downloading My CV"), 3000);
  };

  return (
    <section
      id="home"
      className="md:ml-20 md:pt-0 h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <div className="gap-8 max-w-6xl w-full items-center justify-center text-center">
        {/* Left column */}
        <div className="max-w-2xl space-y-8 mx-auto text-center md:text-left p-10">
          <h2
            className="font-light"
            style={{ color: "var(--accent-color)" }}
          >
            Hi, my name is
          </h2>
          <h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 fade-in"
            style={{ color: "var(--text-color-light)" }}
          >
            Kevin Mongare
          </h1>

          <h2
            className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 fade-in"
            style={{ color: "var(--text-color)" }}
          >
            <ReactTyped
              strings={[
                "Full Stack Developer",
                "Database Engineer",
                "Tech Enthusiast",
                "Problem Solver",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </h2>

          <p
            className="max-w-lg text-lg mb-10 fade-in"
            style={{ color: "var(--text-color)" }}
          >
            I build scalable, exceptional and accessible digital experiences for
            the web. Focused on creating intuitive and responsive user
            interfaces.
          </p>

          <div className="space-x-4">
            <a href="#projects" title="Projects">
              <Button
                text="View My Work"
                variant="CTA"
                className="bg-[var(--accent-color)] text-[var(--bg-color)] hover:opacity-90"
              />
            </a>
            <Button
              text="Download My CV"
              variant="other"
              onClick={HandleClick}
              className="bg-transparent text-[var(--accent-color)] border border-[var(--accent-color)]"
            />
          </div>
        </div>

        {/* Right column (optional image) */}
        {/* 
        <div className="flex justify-center">
          <img
            src="./kev.png"
            alt="Kevin"
            className="grayscale rounded-full h-100 w-80 object-cover border-4 border-accent-color shadow-lg"
          />
        </div> 
        */}
      </div>
    </section>
  );
};

export default Hero;
