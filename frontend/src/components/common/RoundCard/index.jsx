import React from "react";
import styles from "./index.module.css";

const RoundCard = () => {
  return (
    <div
      className={`col-6 col-md-4 col-lg-2 bg-info m-0 p-2 ${styles.container}`}
    >
      <div className={`w-100 h-100 bg-success p-2 ${styles.circle}`}>
        <div className={`w-100 h-75 bg-warning ${styles.circle}`}></div>
        <div>product name</div>
      </div>
    </div>
  );
};

export default RoundCard;
