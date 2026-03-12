const FooterPart = () => {
  return (
    <footer
      className="w-full py-8 flex flex-col items-center justify-center gap-1 md:ml-24"
      style={{
        backgroundColor: "var(--bg-color)",
        borderTop: "1px solid color-mix(in srgb, var(--accent-color) 12%, transparent)",
      }}
    >
      <p className="font-mono text-xs" style={{ color: "var(--text-color)" }}>
        &copy; {new Date().getFullYear()} Kevin Mongare. All rights reserved.
      </p>
      <p className="font-mono text-xs opacity-50" style={{ color: "var(--accent-color)" }}>
        Built with React & Tailwind CSS
      </p>
    </footer>
  );
};

export default FooterPart;
