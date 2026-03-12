import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface MenuItem {
  id: string;
  slug: string;
  name: string;
  number: string;
}

// Inline menu data — replace with your import if preferred
const MenuList: MenuItem[] = [
  { id: "home",       slug: "home",       name: "Home",       number: "00" },
  { id: "about",      slug: "about",      name: "About",      number: "01" },
  { id: "experience", slug: "experience", name: "Experience", number: "02" },
  { id: "projects",   slug: "projects",   name: "Projects",   number: "03" },
  { id: "contact",    slug: "contact",    name: "Contact",    number: "04" },
];

const socialNetworks = [
  { name: "GitHub",   url: "https://github.com/kevmongare",                        icon: <FaGithub /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/kevin-mongare-58b960200/", icon: <FaLinkedin /> },
  { name: "Twitter",  url: "https://x.com/kevin_mong86626",                        icon: <FaTwitter /> },
];

const Menu = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 300) current = s.getAttribute("id") ?? "";
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <header
        className="hidden md:flex fixed left-0 top-0 w-24 h-screen z-50 flex-col items-center justify-between py-10"
        style={{
          backgroundColor: "color-mix(in srgb, var(--bg-color) 85%, transparent)",
          backdropFilter: "blur(12px)",
          borderRight: "1px solid color-mix(in srgb, var(--accent-color) 12%, transparent)",
        }}
      >
        {/* Logo */}
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center ring-2 overflow-hidden"
          style={{ ringColor: "var(--accent-color)" }}
        >
          <img
            src="./kev.png"
            alt="Kevin"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Nav links */}
        <nav>
          <ul className="flex flex-col items-center gap-6">
            {MenuList.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.slug}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                    className="flex flex-col items-center gap-0.5 group"
                    style={{ color: isActive ? "var(--accent-color)" : "var(--text-color)" }}
                  >
                    <span className="text-[10px] font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                      {item.number}
                    </span>
                    <span
                      className="text-xs font-medium tracking-wider transition-colors duration-200 group-hover:text-[var(--accent-color)]"
                    >
                      {item.name}
                    </span>
                    <span
                      className="h-px w-0 group-hover:w-5 transition-all duration-300"
                      style={{ backgroundColor: "var(--accent-color)", width: isActive ? "20px" : undefined }}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Socials */}
        <div className="flex flex-col items-center gap-3">
          {socialNetworks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="w-9 h-9 flex items-center justify-center rounded-full border text-sm transition-all duration-300"
              style={{
                borderColor: "color-mix(in srgb, var(--accent-color) 30%, transparent)",
                color: "var(--text-color)",
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
      </header>

      {/* ── Mobile Hamburger ── */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-lg shadow-lg transition-all duration-200 active:scale-95"
        style={{ backgroundColor: "var(--bg-color)", border: "1px solid color-mix(in srgb, var(--accent-color) 25%, transparent)" }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-5 h-4 relative flex flex-col justify-between">
          <span
            className="block h-0.5 rounded transition-all duration-300 origin-center"
            style={{
              backgroundColor: "var(--accent-color)",
              transform: isMenuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block h-0.5 rounded transition-all duration-300"
            style={{
              backgroundColor: "var(--accent-color)",
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 rounded transition-all duration-300 origin-center"
            style={{
              backgroundColor: "var(--accent-color)",
              transform: isMenuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </div>
      </button>

      {/* ── Mobile Overlay ── */}
      <div
        className={`md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "color-mix(in srgb, var(--bg-color) 97%, transparent)",
          backdropFilter: "blur(16px)",
          transform: isMenuOpen ? "translateY(0)" : "translateY(-20px)",
        }}
      >
        <div className="w-20 h-20 rounded-full overflow-hidden ring-2" style={{ outline: "2px solid var(--accent-color)" }}>
          <img src="./kev.png" alt="Kevin" className="w-full h-full object-cover grayscale" />
        </div>

        <nav>
          <ul className="flex flex-col items-center gap-6 text-center">
            {MenuList.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
                  className="text-2xl font-semibold tracking-wide flex items-center gap-2 transition-colors duration-200"
                  style={{ color: activeSection === item.id ? "var(--accent-color)" : "var(--text-color-light)" }}
                >
                  <span className="text-sm font-mono" style={{ color: "var(--accent-color)" }}>
                    {item.number}
                  </span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex gap-4">
          {socialNetworks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="w-12 h-12 flex items-center justify-center rounded-full border text-lg transition-all duration-300"
              style={{
                borderColor: "color-mix(in srgb, var(--accent-color) 40%, transparent)",
                color: "var(--text-color-light)",
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
