import React, { useState, useEffect } from "react";
import Arrow from "../assets/Arrow.png";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScrollTopButton && (
        <img
          src={Arrow}
          className="top-btn-position top-btn-style"
          onClick={scrollTop}
          alt="Scroll to Top"
        />
      )}
    </div>
  );
};

export default ScrollToTop;
