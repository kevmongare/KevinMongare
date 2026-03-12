import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-5 right-5 z-50 w-11 h-11 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2"
      style={{
        backgroundColor: "var(--accent-color)",
        color: "var(--bg-color)",
        boxShadow: "0 0 20px color-mix(in srgb, var(--accent-color) 40%, transparent)",
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
    </button>
  );
};

export default ThemeToggle;
