/* This code snippet is defining a React functional component called `Card` that represents a card
component with customizable properties. */

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
    <div className="relative bg-navy-light hover:shadow-2xl rounded-sm overflow-hidden group transition-all duration-500 hover:scale-[1.02]">
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-45 object-cover"
        />
      )}

      {/* Card Content */}
      <div className="p-3 bg-navy flex flex-col justify-between h-54">
        <h2 className="text-2xl font-heading mb-3" style={{ color: "var(--accent-color)" }}>
          {title}
        </h2>
        <p className="text-slate text-sm md:text-base leading-relaxed flex-grow" style={{ color: "var(--text-color)" }}>
          {description}
        </p>
      </div>

      {/* Slide-up button */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <div className="bg-green-bright flex justify-center py-3">
          <button
            onClick={onClick}
            className="flex items-center gap-2 font-semibold hover:scale-105 transition-transform"
            style={{ color: "var(--bg-color)" }}
          >
            {buttonText} <FaExternalLinkAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
