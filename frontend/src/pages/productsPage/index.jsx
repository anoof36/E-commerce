import {React, useState} from "react";
import styles from "./index.module.css";
import Card from "../../components/common/Card";

const ProductsPage = () => {
  const [showFilter, setShowFilter] =useState(false)
  const images = ["../public/asset/product_images/cloth_image1.jpg"];

  const products = Array.from({ length: 23 }, (_, index) => (
    <Card key={index} image={images[0]} />
  ));

  const toggleFilter = () => {
    setShowFilter(!showFilter) //togge filter visibility
  }

  return (
    <>
      <div className="position-relative bg-info" style={{ width: "100vw" }}>

         <button onClick={toggleFilter}>Filter</button>

        {/* Filter popup, shown based on state */}
        {showFilter && (
          <div className={`${styles.filterPopup} bg-danger p-2`} style={{ position: "absolute", top: "30px", left: "0", width: "100vw", zIndex: 10 }}>
            <h4>Filter Options</h4>
            <h4>Filter Options</h4>
            <h4>Filter Options</h4>
            <h4>Filter Options</h4>
            <h4>Filter Options</h4>
            <h4>Filter Options</h4>
            <h4>Filter Options</h4>
            <h4>Filter Options</h4>
            <h4>Filter Options</h4>
            <h4>Filter Options</h4>
            <h4>Filter Options</h4>
            <h4>Filter Options</h4>
            <h4>Filter Options</h4>
            <h4>Filter Options</h4>
            <h4>Filter Options</h4>
            {/* Add filter options here */}
          </div>
        )}

        <div className={`${styles.container}`}>{products}</div>
      </div>
    </>
  );
};

export default ProductsPage;
