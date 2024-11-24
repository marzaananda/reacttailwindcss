import React, { useState, useEffect } from 'react';

type ImageSliderProps = {
  images: { src: string; caption: string }[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle auto-sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  // Function to handle manual slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative flex flex-col items-center bg-gray-200 p-4 rounded-lg">
      {/* Image Display */}
      <div className="w-full max-w-lg h-64 overflow-hidden rounded-lg">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].caption}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Caption */}
      <p className="text-center mt-4 text-lg font-medium">{images[currentIndex].caption}</p>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-lg mt-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
