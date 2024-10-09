import React from "react";
import style from "./index.module.css";
import { useNavigate } from "react-router-dom";
import Card from "../Card"

const Carogorys = () => {

  const images = [
    "../../public/asset/product_images/cloth_image1.jpg"
  ]

  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log("product button is working")
    navigate("/products");
  };

  // Generating an array of 13 <Square> components
  const cards = Array.from({ length: 23 }, (_, index) => (
    <Card key={index} image={images[0]} onClick={handleCardClick} />
  ));

  return <div className={style.container}>{cards}</div>;
};

export default Carogorys;
