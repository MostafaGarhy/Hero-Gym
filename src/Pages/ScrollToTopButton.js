import React, { useState, useEffect } from 'react';
import './landing.css'; 

function ScrollToTopButton () {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
      <button onClick={scrollToTop} className={isVisible?'scroll-to-top':''}>
        &#8593;
      </button>
  );
};

export default ScrollToTopButton;
