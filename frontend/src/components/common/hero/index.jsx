import React, { useState } from "react";

const Hero = () => {
  const images = [
    "../../public/asset/landscap_1.jpg",
    "../../public/asset/landscap_2.jpg",
    "../../public/asset/landscap_3.jpg",
    "../../public/asset/landscap_4.jpg",
    "../../public/asset/landscap_5.jpg",
    "../../public/asset/landscap_6.jpg",
    "../../public/asset/vr_Box.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
      >
        {/* SLIDE BAR */}
        <ol className="carousel-indicators">
          {images.map((_, index) => (
            <li
              key={index}
              className={index === currentSlide ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
              style={{ cursor: "pointer" }}
            ></li>
          ))}
        </ol>

        {/* IMAGES */}
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === currentSlide ? "active" : ""}`}
            >
              <img src={image} className="d-block w-100" alt="Slide" />
            </div>
          ))}
        </div>

        {/* PREVIOUS AND NEXT BUTTON */}
        <a
          className="carousel-control-prev"
          href="#"
          role="button"
          onClick={handlePrev}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a
          className="carousel-control-next"
          href="#"
          role="button"
          onClick={handleNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Hero;
