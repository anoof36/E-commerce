import React from "react";

const Button = ({ children, style, ariaExpanded, ariaLabel, className, onClick }) => {
  return (
    <button
      className={`border-0 shadow rounded-1 shadow bg-light ${className}`}
      onClick={onClick}
      style={style}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
