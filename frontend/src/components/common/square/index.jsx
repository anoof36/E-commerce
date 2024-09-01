import React from "react";
import styles from "./index.module.css";

const Square = ({onClick}) => {
  return (
    <div className={styles.container} onClick={onclick}>
      <div className={styles.image}></div>
      <div className={styles.tittle}></div>
    </div>
  );
};

export default Square;
