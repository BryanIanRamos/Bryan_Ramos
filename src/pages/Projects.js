import React from "react";
import CluCare from "../assets/GlueCare.png";
import ClassMeet from "../assets/ClassMeet.png";
import Cake from "../assets/Cake.png";
import Game from "../assets/games.png";

function Projects() {
  return (
    <div style={{ paddingTop: "40px", paddingBottom: "90px" }}>
      <div className="content-section py-5 " id="portfolio">
        <div className="container px-4 px-lg-5">
          <div className="content-section-heading text-start">
            {/* <h3 className="text-secondary mb-0">Portfolio</h3> */}
            <h2 className="display-6 mb-0 font-family-Poppins fw-bold mb-3">
              Recent Projects
            </h2>
          </div>
          {/* Card Starts Here! */}
          <div className="row gx-0">
            <div className="col-lg-6">
              <a className="portfolio-item" data-aos="zoom-in-up" href="#!">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h-2 fw-bold">GlueCare</div>
                    <p className="mb-0">
                      Start-up Health Care Research Project
                    </p>
                  </div>
                </div>
                <img className="img-fluid" src={CluCare} alt="..." />
              </a>
            </div>
            <div className="col-lg-6">
              <a className="portfolio-item" data-aos="zoom-in-up" href="#!">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h-2 fw-bold">Cake Area</div>
                    <p className="mb-0">
                      Application development project for log-in authentication{" "}
                    </p>
                  </div>
                </div>
                <img className="img-fluid" src={Cake} alt="..." />
              </a>
            </div>
            <div className="col-lg-6">
              <a className="portfolio-item" data-aos="zoom-in-up" href="#!">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h-2 fw-bold">ClassMeet</div>
                    <p className="mb-0">Online Education Technology Platform</p>
                  </div>
                </div>
                <img className="img-fluid" src={ClassMeet} alt="..." />
              </a>
            </div>
            <div className="col-lg-6">
              <a className="portfolio-item" data-aos="zoom-in-up" href="#!">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h-2 fw-bold">Virtual Guy</div>
                    <p className="mb-0">
                      Strawberries are such a tasty snack, especially with a
                      little sugar on top!
                    </p>
                  </div>
                </div>
                <img className="img-fluid" src={Game} alt="..." />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
