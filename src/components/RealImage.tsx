import React, { useState, useEffect } from 'react';

// Define types for the Img component props
interface ImgProps {
  src: string;
  width: number | string;
  height: number | string;
  className: string;
  usePlaceholder: boolean;
}

// Placeholder Img component
const Img: React.FC<ImgProps> = ({ src, width, height, className, usePlaceholder }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (usePlaceholder) {
      setIsLoaded(false);  // Initially set image as not loaded
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

// Component usage
const realImage = (
  <Img 
    src="http://animalia-life.com/data_images/cat/cat5.jpg" 
    width={802}
    height={450}
    className="cat-photo" 
    usePlaceholder={true}
  />
);

export default realImage;
