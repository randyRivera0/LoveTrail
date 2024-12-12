import React, { useEffect } from "react";
import "/home/geckomercenary/Desktop/LoveTrail/src/FloatingHeart.css"; // CSS file for styling

const FloatingHearts: React.FC = () => {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 6 + "s"; // Random duration
      document.body.appendChild(heart);

      // Remove the heart after animation ends
      heart.addEventListener("animationend", () => {
        heart.remove();
      });
    };

    // Generate a new heart every 500ms
    const interval = setInterval(createHeart, 2000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return null; // This component renders floating hearts dynamically
};

export default FloatingHearts;
