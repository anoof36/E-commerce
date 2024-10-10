import React from "react";
import styles from "./index.module.css";
import Card from "../Card";


const BestSelling = () => {

  const images = [
    "../../public/asset/product_images/cloth_image1.jpg",
  ]

  
  const cards = Array.from({ length: 23 }, (_, index) => (
    <Card key={index} image={images[0]} />
  ));

  return (
    <>
      <div className={`d-flex ${styles.container}`}>{cards}</div>
    </>
  );
};

export default BestSelling;
  