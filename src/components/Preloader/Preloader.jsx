import React, { useEffect, useState } from 'react';
import './Preloader.scss';

const Preloader = ({ onFinished }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation from 0 to 100 over 4 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // 2% every 80ms = 4 seconds total (50 steps * 80ms = 4000ms)
      });
    }, 80);

    // Hide preloader after 4 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinished();
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinished]);

  if (!isVisible) return null;

  return (
    <div className="preloader">
      <div className="preloader__container">
        
        <div className="preloader__loader">
        </div>

        <div className="preloader__text">
          <h2>AltClick Tech Academy</h2>
        </div>

        <div className="preloader__dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;