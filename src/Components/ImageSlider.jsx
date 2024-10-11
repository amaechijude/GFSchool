import { useState } from "react";

const images = [
  "https://via.placeholder.com/400x300?text=Image+1",
  "https://via.placeholder.com/400x300?text=Image+2",
  "https://via.placeholder.com/400x300?text=Image+3",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-auto"
            />
          ))}
        </div>
      </div>
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
      >
        &#10094;
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
