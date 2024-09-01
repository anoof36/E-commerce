import React from "react";
import styles from "./index.module.css";
import HeroSession from "../../components/common/hero";
import BestSelling from "../../components/common/bestSelling";
import Carogorys from "../../components/common/catogorys";

const HomePage = () => {
  console.log("homepage is working");
  return (
    <div className={styles.container}>
     
      <div>
        <HeroSession />
      </div>
      <div>
        <h2>best selling</h2>
        <BestSelling />
      </div>
      <div>
        <h2>catogorys</h2>
        <Carogorys />
      </div>
     
    </div>
  );
};

export default HomePage;
