import React from "react";
import styles from "./index.module.css";
import RoundCard from "../RoundCard";
  
const BestSelling = () => {
  const cards = Array.from({ length: 13 }, (_, index) => (
    <RoundCard key={index} />
  ));
  return (
    <>
      <div className={`d-flex ${styles.container}`}>
        {cards}
      </div>




      {/* <div className={styles.container}>
        <div className={styles.extentButton}>extent button</div>
        {cards}
      </div> */}
    </>
  );
};

export default BestSelling;
