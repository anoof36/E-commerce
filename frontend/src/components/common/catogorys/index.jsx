import React from "react";
import style from "./index.module.css";
import Square from "../square";
import { useNavigate } from "react-router-dom";

const Carogorys = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {

    console.log("square");
    navigate("/products");
  };

  // Generating an array of 13 <Square> components
  const cards = Array.from({ length: 13 }, (_, index) => (
    <Square key={index} onClick={handleCardClick()} />
  ));

  return <div className={style.container}>{cards}</div>;
};

export default Carogorys;
