import React, { useState } from 'react';

// Type for the image component props
interface ImageCarouselProps {
  images: string[]; // Array of image URLs
  visibleCount: number;

}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, visibleCount }) => {
    
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to go to the next image
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const visibleImages = images.slice(currentIndex, currentIndex + visibleCount);
  if (visibleImages.length < visibleCount) {
    const remainingImages = images.slice(0, visibleCount - visibleImages.length);
    visibleImages.push(...remainingImages);
  }
  return (
    <div className="carousel-container">
      <button onClick={goPrev} className="prev-button">
        Prev
      </button>
      <div className="image-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-image-${index}`}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      <button onClick={goNext} className="next-button">
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
