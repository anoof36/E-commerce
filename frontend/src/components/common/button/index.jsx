import React from "react";

const Button = ({ children, style, ariaExpanded, ariaLabel, className, onClick }) => {
  return (
      <button
        className={`border-0 rounded-1 ${className}`}
        onClick={onClick}
        style={{...style, backgroundColor: "white", boxShadow: "rgba(0, 0, 0, 0.3) 0px 4px 12px"}}
        aria-expanded={ariaExpanded}
        aria-label={ariaLabel}
        type="button"
      >
        {children}
    </button>
  );
};

export default Button;
