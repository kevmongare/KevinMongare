import type React from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary" | "danger" | "CTA" | "other";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  onClick,
  disabled = false,
  className = "",
}) => {
  const baseStyle =
    "px-3 py-2 rounded-sm font-semibold cursor-pointer transition-colors duration-200";

  const variantStyle = {
    primary: "bg-green-bright text-navy hover:bg-green-bright/80",
    secondary: "bg-orange-500 text-white hover:bg-orange-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    other: "border-2 border-accent-color text-accent-color hover:bg-accent-color hover:text-bg-color",
    CTA: "border-2 border-accent-color text-accent-color hover:bg-accent-color hover:text-bg-color",
  }[variant];

  const disabledStyle =
    "bg-gray-400 text-gray-200 cursor-not-allowed hover:bg-gray-400";

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${disabled ? disabledStyle : variantStyle} ${className}`}
      style={{
        color: variant === "other" || variant === "CTA" ? "var(--accent-color)" : undefined,
        backgroundColor: variant === "primary" ? "var(--accent-color)" : undefined,
        borderColor: variant === "CTA" || variant === "other" ? "var(--accent-color)" : undefined,
      }}
    >
      {text}
    </motion.button>
  );
};

export default Button;
