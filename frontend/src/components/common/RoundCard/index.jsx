import React from "react";
import styles from "./index.module.css";

const RoundCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle}></div>
      <div>product name</div>
    </div>
  );
};

export default RoundCard;
