import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMode } from "../../../redux/reducer";
import { BrightnessHigh, MoonFill } from "react-bootstrap-icons"
 
const ThemeToggle = () => {
  const mode = useSelector((state) => state.auth.mode); // Access state
  const dispatch = useDispatch(); // Dispatch actions

  const toggleTheme = () => {
    dispatch(setMode()); // Dispatch the action
  };

  return (
    <button className="btn p-0 pb-1 border-0"
    onClick={toggleTheme}
  >
    {mode === "light" ? <BrightnessHigh /> : <MoonFill />}
  </button>
  );
};

export default ThemeToggle;