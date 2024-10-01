import React from "react";
import style from "./index.module.css";

const AppHeader = () => {
  return (
    <>
      <header>
        <div className={`d-flex bg-success vw-100  ${style.container}`}>
          <div className={`bg-primary w-50 pl-3 ${style.left}`}>VIBE</div> {/* Use backticks for template literal */}
          <div className="bg-warning w-50">home</div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
