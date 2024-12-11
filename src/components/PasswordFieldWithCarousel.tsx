import React, { useState, useEffect, useRef } from 'react';

const PasswordFieldWithCarousel = () => {
  const [password, setPassword] = useState('');
  const [currentImage, setCurrentImage] = useState(0);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  // Predefined correct password (you can change this or make it dynamic)
  const correctPassword = 'password';

  const images = [
    'https://via.placeholder.com/150?text=Image+1',
    'https://via.placeholder.com/150?text=Image+2',
    'https://via.placeholder.com/150?text=Image+3',
  ];

  // Change image every 2 seconds (only if password is correct)
  useEffect(() => {
    if (isPasswordCorrect) {
      const intervalId = setInterval(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000); // Change image every 2 seconds

      // Cleanup interval on unmount
      return () => clearInterval(intervalId);
    }
  }, [isPasswordCorrect]);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = () => {
    if (password === correctPassword) {
      setIsPasswordCorrect(true);
    } else {
      alert('Incorrect password!');
      setIsPasswordCorrect(false);
      setPassword(''); // Clear password input on incorrect password
      passwordInputRef.current?.focus(); // Refocus the input field
    }
  };

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          ref={passwordInputRef}
          className="form-control"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
        />
      </div>

      <button onClick={handlePasswordSubmit} className="btn btn-custom mb-3">
        Submit
      </button>

      {isPasswordCorrect && (
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          {/* Carousel */}
          <img src={images[currentImage]} alt={`carousel-${currentImage}`} className="img-fluid" />
        </div>
      )}
    </div>
  );
};

export default PasswordFieldWithCarousel;
