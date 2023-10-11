import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";

function Navbar2({ about, skills, project, achieve }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down enough to trigger the border
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Add event listener to the window for scrolling
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white py-3 ${
          isNavOpen ? "navbar-open" : ""
        } ${hasScrolled ? "navbar-scrolled" : ""}`}
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          zIndex: "100",
          border: "1px solid transparent", // Initial border
          transition: "border 0.3s ease-in-out", // Smooth transition for border change
        }}
      >
        <div className="container px-5">
          <a className="navbar-brand col-1 " href="index.html">
            <img src={Logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler col-md-1 "
            type="button"
            onClick={toggleNav} // Toggle the navigation menu
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder fs-5">
              <li
                className=" nav-link link btn mx-2"
                onClick={() => scrollToSection(about)}
              >
                About
              </li>
              <li
                className=" nav-link link btn mx-2"
                onClick={() => scrollToSection(skills)}
              >
                Skills
              </li>
              <li
                className=" nav-link link btn mx-2"
                onClick={() => scrollToSection(project)}
              >
                Projects
              </li>
              <li
                className=" nav-link link btn mx-2"
                onClick={() => scrollToSection(achieve)}
              >
                Achievements
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar2;
