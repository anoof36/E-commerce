import React from "react";
import styles from "./index.module.css";
import AppHeader from "../../components/common/header";
import BestSelling from "../../components/common/bestSelling";

const HomePage = () => {
  console.log("homepage is working");
  return (
    <div className={styles.container}>
      <div>
        <AppHeader />
      </div>
      <div>
        <BestSelling />
      </div>
    </div>
  );
};

export default HomePage;
