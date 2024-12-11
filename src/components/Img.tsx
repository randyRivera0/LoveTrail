import React, { useState, useEffect } from 'react';

// Define the types for the Img props
interface ImgProps {
  src: string;
  width: number | string;
  height: number | string;
  className: string;
  usePlaceholder: boolean;
}

// Img component that shows an image with an optional placeholder
const Img: React.FC<ImgProps> = ({ src, width, height, className, usePlaceholder }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (usePlaceholder) {
      setIsLoaded(false);  // Initially set the image as not loaded
    }
  }, [src, usePlaceholder]);

  return (
    <div className={className} style={{ width, height }}>
      {!isLoaded && usePlaceholder ? (
        <img 
          src="https://via.placeholder.com/802x450" 
          alt="placeholder" 
          width={width} 
          height={height}
        />
      ) : (
        <img
          src={src}
          alt="cat"
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

export default Img;
