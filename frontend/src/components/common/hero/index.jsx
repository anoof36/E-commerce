import { useState } from "react";
import styles from "./index.module.css";

const images = [
  "../../public/asset/landscap_1.jpg",
  "../../public/asset/landscap_2.jpg",
  "../../public/asset/landscap_3.jpg",
  "../../public/asset/landscap_4.jpg",
  "../../public/asset/landscap_5.jpg",
  "../../public/asset/landscap_6.jpg",
  "../../public/asset/vr_Box.jpg",
];

const HeroSession = () => {
  const [imageIndex, setImageIndex] = useState(0);
  console.log(imageIndex, " images");

  const handlePrevious = () => {
    setImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.container}>
      {/* FIRST IMAGE */}
      <div className={styles.side_image} key={imageIndex - 1}>
        <img src={images[(imageIndex - 1 + images.length) % images.length]} />
        <button onClick={handlePrevious}>previous</button>
      </div>

      {/* MAIN IMAGE */}
      <div className={styles.main_image} key={imageIndex}>
        <img src={images[imageIndex]} />
      </div>

      {/* LAST IMAGE */}
      <div className={styles.side_image} key={imageIndex + 1}>
        <img src={images[(imageIndex + 1) % images.length]} />
        <button onClick={handleNext}>next</button>
      </div>
    </div>
  );
};

export default HeroSession;
