import React, { useState, useEffect } from 'react';
import './ScrollProgress.scss';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPosition = window.pageYOffset;
    const progress = (scrollPosition / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-progress">
      <div 
        className="scroll-progress__bar" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgress;