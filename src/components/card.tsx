import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  buttonText?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  buttonText = "See Demo",
  onClick,
}) => {
  return (
    <div
      className="group relative rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        backgroundColor: "color-mix(in srgb, var(--accent-color) 4%, var(--bg-color))",
        border: "1px solid color-mix(in srgb, var(--accent-color) 12%, transparent)",
      }}
    >
      {/* Image */}
      {image && (
        <div className="overflow-hidden h-44">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h2 className="text-lg font-bold leading-snug" style={{ color: "var(--accent-color)" }}>
          {title}
        </h2>
        <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-color)" }}>
          {description}
        </p>

        <button
          onClick={onClick}
          className="mt-2 flex items-center gap-2 text-sm font-semibold self-start px-4 py-2 rounded-lg transition-all duration-200 active:scale-95"
          style={{
            backgroundColor: "var(--accent-color)",
            color: "var(--bg-color)",
          }}
        >
          {buttonText}
          <FaExternalLinkAlt size={11} />
        </button>
      </div>

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 0 1px var(--accent-color)",
        }}
      />
    </div>
  );
};

export default Card;
