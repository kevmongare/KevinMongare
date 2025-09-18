const FooterPart = () => {
  return (
    <footer
      className="w-full py-6 flex flex-col items-center justify-center"
      style={{
        backgroundColor: "var(--bg-color-light)",
        color: "var(--text-color-light)",
      }}
    >
      <p className="text-sm sm:text-base text-center">
        &copy; KevinMongare {new Date().getFullYear()}
      </p>
      <p
        className="text-xs sm:text-sm mt-1"
        style={{ color: "var(--accent-color)" }}
      >
        Built with React & Tailwind
      </p>
    </footer>
  );
};

export default FooterPart;
