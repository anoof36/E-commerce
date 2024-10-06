import React, { useState } from "react";
const Hero = () => {
  // Array of image paths to be displayed in the carousel
  const images = [
    "../../public/asset/landscap_1.jpg",
    "../../public/asset/landscap_2.jpg",
    "../../public/asset/landscap_3.jpg",
    "../../public/asset/landscap_4.jpg",
    "../../public/asset/landscap_5.jpg",
    "../../public/asset/landscap_6.jpg",
    "../../public/asset/vr_Box.jpg",
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
                  opacity: index === currentSlide ? 1 : 0.3, //setting the opacity based on the index match
                  transition: "opacity 0.3s ease"
                }}
              ></button>
            </li>
          ))}
        </ul>

        {/* Carousel images */}
        <div className="carousel-inner bg-info">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentSlide ? "active" : ""
              }`} // Only the active slide is visible
            >
              <img src={image} className="d-block w-100" alt="Slide" />{" "}
              {/* Carousel image */}
            </div>
          ))}
        </div>

        {/* Previous button */}
        <a
          className="carousel-control-prev bg-warning"
          href="#" // Default href (can be enhanced with JS or removed depending on use case)
          role="button"
          onClick={handlePrev} // Calls handlePrev when clicked
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>{" "}
          {/* Icon for previous control */}
          <span className="sr-only">Previous</span>{" "}
          {/* Accessibility: Text for screen readers */}
        </a>

        {/* Next button */}
        <a
          className="carousel-control-next bg-warning"
          href="#" // Default href (can be enhanced with JS or removed depending on use case)
          role="button"
          onClick={handleNext} // Calls handleNext when clicked
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>{" "}
          {/* Icon for next control */}
          <span className="sr-only">Next</span>{" "}
          {/* Accessibility: Text for screen readers */}
        </a>
      </div>
    </>
  );
};

export default Hero; // Exporting the Hero component for use in other parts of the app
