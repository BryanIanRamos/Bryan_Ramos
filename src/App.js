import "./App.css";
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS
// import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Footer from "./components/Footer.js";
import { useEffect, useRef, useState } from "react";
import Logo from "./assets/Logo.png"; //nav extension
import Main from "./pages/Main";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const AchieveRef = useRef(null);

  return (
    <div className="App">
      <Navbar2
        about={aboutRef}
        skills={skillsRef}
        project={projectRef}
        achieve={AchieveRef}
      />
      <ScrollToTop />
      {/* navbar start  */}
      {/* <div>
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
            <a className="navbar-brand" href="index.html">
              <img src={Logo} alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
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
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                <li
                  className=" nav-link link"
                  onClick={() => scrollToSection(aboutRef)}
                >
                  About
                </li>
                <li
                  className=" nav-link link"
                  onClick={() => scrollToSection(skillsRef)}
                >
                  Skills
                </li>
                <li
                  className=" nav-link link"
                  onClick={() => scrollToSection(projectRef)}
                >
                  Projects
                </li>
                <li
                  className=" nav-link link"
                  onClick={() => scrollToSection(AchieveRef)}
                >
                  Achievements
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div> */}
      {/* nav bar end  */}

      <body>
        <div ref={mainRef} className="Main">
          <Main />
        </div>
        <div ref={aboutRef} className="About">
          <About />
        </div>
        <div ref={skillsRef} className="Skills">
          <Skills />
        </div>
        <div ref={projectRef} className="Projects">
          <Projects />
        </div>
        <div ref={AchieveRef} className="Achievements">
          <Achievements />
        </div>

        <Footer
          about={aboutRef}
          skills={skillsRef}
          project={projectRef}
          achieve={AchieveRef}
        />

        {/* cut me */}
      </body>
    </div>
  );
}

export default App;
