import React, { useState, useEffect } from "react";
import "./ImageSlider.scss"; // Make sure to create this CSS file
// import { Latest } from "../layouts/Latest/Latest";

const images = [
  "https://images.pexels.com/photos/1591224/pexels-photo-1591224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1591224/pexels-photo-1591224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1591224/pexels-photo-1591224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1591224/pexels-photo-1591224.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  // Add more image URLs as needed
];

export const ImageSlider: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change this value to adjust the interval time

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="slider">
      <div
        className="slides"
        style={{
          transform: `translateX(${-currentImageIndex * 100}%)`,
          transition: "transform 0.5s ease"
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`slider-${index}`} />
          </div>
        ))}
      </div>
      <div className="dash-container">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dash ${index === currentImageIndex ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
    {/* <Latest/> */}
    </>
  );
};
