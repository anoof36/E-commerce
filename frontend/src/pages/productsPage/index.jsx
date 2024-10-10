import React from "react";
import styles from "./index.module.css";
import Card from "../../components/common/Card";

const ProductsPage = () => {
  const images = ["../public/asset/product_images/cloth_image1.jpg"];

  const products = Array.from({ length: 23 }, (_, index) => (
    <Card key={index} image={images[0]} />
  ));

  return (
    <>
      <div className="bg-info" style={{ width: "100vw" }}>
        <div className="w-100 bg-warning">
          <a href="#">filter</a>
        </div>
        <div className={`bg-success ${styles.container}`}>{products}</div>
      </div>
    </>
  );
};

export default ProductsPage;
