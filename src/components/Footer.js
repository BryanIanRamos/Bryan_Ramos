import React from "react";
import Facebook from "../assets/logo_facebook.png";
import Instagram from "../assets/logo_instagram.png";
import Github from "../assets/logo_github.png";

function Footer({ about, skills, project, achieve }) {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div id="footer" className="footer border py-5">
      <div className="footer-content">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <a
                href="index.html"
                className="logo d-flex align-items-center text-decoration-none text-secondary fw-bold fs-4"
              >
                <span>Bryan Ramos</span>
              </a>
              <p>
                Ever since my high school days, I have been captivated by the
                dynamic world of technology. My fascination with the
                ever-evolving landscape of technical innovations has not only
                kept me deeply engaged but has also ignited a passionate drive
                within me to continually explore and excel in this fascinating
                field.
              </p>
            </div>
            <div className="col-1 footer-info"></div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul className="list-unstyled small fw-bolder ">
                <li className="mb-1">
                  <i className="bi bi-dash "></i>{" "}
                  <a
                    className="text-decoration-none text-secondary btn"
                    onClick={() => scrollToSection(about)}
                  >
                    About
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="text-decoration-none text-secondary btn "
                    onClick={() => scrollToSection(skills)}
                  >
                    Skills
                  </a>
                </li>
                <li className="mb-1">
                  <i className="bi bi-dash"></i>{" "}
                  <a
                    className="text-decoration-none text-secondary btn"
                    onClick={() => scrollToSection(project)}
                  >
                    Projects
                  </a>
                </li>
                <li className="mb-1">
                  <i className="bi bi-dash"></i>{" "}
                  <a
                    className="text-decoration-none text-secondary btn"
                    onClick={() => scrollToSection(achieve)}
                  >
                    Achievements
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-1 footer-info"></div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start ">
              <h4 className="col">Social</h4>
              <div className="social-links mt-3  col">
                <a
                  href="https://www.facebook.com/bryan.ramos.3367/"
                  target="_blank"
                >
                  <img
                    src={Facebook}
                    alt="facebook"
                    className=" mx-1"
                    width="28px"
                    height="28px"
                  />
                </a>
                <a href="https://www.instagram.com/bryan_iann/" target="_blank">
                  <img
                    src={Instagram}
                    alt="facebook"
                    className=" mx-1"
                    width="28px"
                    height="28px"
                  />
                </a>
                <a href="https://github.com/BryanIanRamos" target="_blank">
                  <img
                    src={Github}
                    alt="facebook"
                    className=" mx-1"
                    width="28px"
                    height="28px"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
