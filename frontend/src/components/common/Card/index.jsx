import React from "react";
import styles from "./index.module.css";

const Card = ({ image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`col-6 col-sm-3 col-lg-2 p-0${styles.container}`}
    >
      <div className="bg-light m-2 p-1">
        <div className={`w-100 m-0`}>
          <img className={`${styles.image}`} src={image} alt="product_image" />
        </div>
        <div className={`w-100 m-0 p-2`}>
          <h4 className={``}>product name</h4>
          <div className={``}>Offer</div>
          <div className={``}>rating</div>{" "}
          <div className={``}>delivery detail</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
