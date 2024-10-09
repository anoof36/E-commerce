import React, { useState, useEffect } from "react";
import styles from "./index.module.css"


const Hero = () => {
  // Array of image paths to be displayed in the carousel
  const images = [
    "../../public/asset/hero_images/landscap_1.jpg",
    "../../public/asset/hero_images/landscap_2.jpg",
    "../../public/asset/hero_images/landscap_3.jpg",
    "../../public/asset/hero_images/landscap_4.jpg",
    "../../public/asset/hero_images/landscap_5.jpg",
    "../../public/asset/hero_images/landscap_6.jpg",
    "../../public/asset/hero_images/vr_Box.jpg",
  ];

  // State to track the currently active slide (image index)
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle the "previous" button click
  // Moves to the previous slide or wraps around to the last slide if on the first one
  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  // Function to handle the "next" button click
  // Moves to the next slide or wraps around to the first slide if on the last one
  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };


   // Automatically advance the slide every 3 seconds
   useEffect(() => {
    const interValid = setInterval(() => {
      handleNext(); //move to next slide
    }, 3000);// change slide evey 3 second

    return () => clearInterval(interValid)
   }, )

  return (
    <>
      {/* Carousel container */}
      <div id="carouselExampleIndicators" className="carousel slide">
        {/* Slide indicators (dots) */}
        <ul className="carousel-indicators list-unstyled">
          {images.map((_, index) => (
            <li
              key={index}
              onClick={() => setCurrentSlide(index)} // Sets current slide when an indicator is clicked
              style={{ cursor: "pointer" }} // Adds pointer cursor to make it clear the indicators are clickable
            >
              <button
                className="mx-1 mx-md-3 border-0 rounded-1"
                style={{
                  width: index === currentSlide ? "3vw" : "1vw",
                  height: "4px",
                  backgroundColor: "white",
                  opacity: index === currentSlide ? 1 : 0.6, //setting the opacity based on the index match
                  transition: "width 0.3s ease"
                }}
              ></button>
            </li>
          ))}
        </ul>

          {/* Carousel images */}
          <div className={"carousel-inner w-100"}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-item w-100 ${
                  index === currentSlide ? "active" : ""
                }`} // Only the active slide is visible
              >
                <img src={image} className={`d-block mx-auto ${styles.hero_image}`} alt="Slide" />
                {/* Carousel image */}
              </div>
            ))}
          </div>
       
        {/* Previous button */}
        <a
          className="carousel-control-prev w-50"
          href="#" // Default href (can be enhanced with JS or removed depending on use case)
          role="button"
          onClick={handlePrev} // Calls handlePrev when clicked
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            ></span>
            {/* Icon for previous control */}
          </a>

        {/* Next button */}
        <a
          className="carousel-control-next w-50"
          href="#" // Default href (can be enhanced with JS or removed depending on use case)
          role="button"
          onClick={handleNext} // Calls handleNext when clicked
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          {/* Icon for next control */}
          
        </a>
      </div>
    </>
  );
};

export default Hero; // Exporting the Hero component for use in other parts of the app
