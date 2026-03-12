import type React from "react";

type Variant = "primary" | "secondary" | "danger" | "CTA" | "other";

interface ButtonProps {
  text: string;
  variant?: Variant;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  onClick,
  disabled = false,
  className = "",
  type = "button",
}) => {
  const base =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2";

  const variants: Record<Variant, string> = {
    primary:   "bg-[var(--accent-color)] text-[var(--bg-color)] hover:opacity-85",
    secondary: "bg-orange-500 text-white hover:bg-orange-600",
    danger:    "bg-red-500 text-white hover:bg-red-600",
    CTA:       "bg-[var(--accent-color)] text-[var(--bg-color)] hover:opacity-85",
    other:
      "border border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
