import React, { useState } from "react";

// Main component for the Admin Home Page
const Dashborad = () => {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu open/closed state
  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <div className="w-100 bg-danger row m-0">
      
      {/*toggle menu section */}
      <div  
        id="toggle-menu"
        className={`bg-primary h-100 ${
          isMenuOpen ? "col-9 position-absolute" : "col-1"
        }`}
      >
      </div>

      {/* Right content section */}
      <div id="main-div" className="bg-warning w-75"></div>
    </div>
  );
};

export default Dashborad; // Export the component for use in other parts of the app
