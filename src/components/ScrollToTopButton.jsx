import React, { useState, useEffect } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to show/hide the scroll-to-top button based on the scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-10 right-10  text-slate-800 text-4xl px-4 py-2 outline-none bg-white animate-bounce_slow border-none"
          onClick={scrollToTop}
        >
          <BsArrowUpCircleFill />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
