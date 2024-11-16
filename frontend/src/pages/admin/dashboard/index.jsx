import React, { useState } from "react";

// Main component for the Admin Home Page
const Dashborad = () => {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu open/closed state
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div className="w-100 bg-danger row m-0">
      {/* Button to toggle the menu, visible only on mobile (d-md-none) */}
      <button 
        className="btn btn-primary d-md-none" 
        onClick={toggleMenu}
      >
        Toggle Menu
      </button>

      {/* Left menu section */}
      <div
        id="left-dive"
        className={`bg-success h-100 ${
          isMenuOpen ? "w-100 position-absolute" : "w-25"
        }`}
      >
        {/* Conditionally render a close button if the menu is open */}
        {isMenuOpen && (
          <button
            className="btn btn-light position-absolute top-0 end-0 m-2"
            onClick={() => setMenuOpen(false)} // Close the menu when clicked
          >
            Close
          </button>
        )}
      </div>

      {/* Right content section */}
      <div id="right-dive" className="bg-warning w-75"></div>
    </div>
  );
};

export default Dashborad; // Export the component for use in other parts of the app
