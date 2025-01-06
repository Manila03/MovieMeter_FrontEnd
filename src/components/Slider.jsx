import React, { useState, useEffect } from "react";
import "./Slider.css";

const images = [
  "https://via.placeholder.com/300x200?text=1",
  "https://via.placeholder.com/300x200?text=2",
  "https://via.placeholder.com/300x200?text=3",
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length ? 1 : prevIndex + 1
      );
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex === images.length) {
      setIsTransitioning(false); // Desactiva la transición
      setCurrentIndex(0); // Reinicia al primer índice
    }
  };

  return (
    <div className="slider-container">
      <div
        className={`slider ${isTransitioning ? "transitioning" : ""}`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {[
          ...images,
          images[0], // Repetimos la primera imagen para efecto continuo
        ].map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
