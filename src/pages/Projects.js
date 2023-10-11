import React from "react";
import Profile from "../assets/Profile.png";
import CluCare from "../assets/GlueCare.png";
import ClassMeet from "../assets/ClassMeet.png";
import Cake from "../assets/Cake.png";
import Game from "../assets/games.png";

function Projects() {
  return (
    <section class="content-section py-5 " id="portfolio">
      <div class="container px-4 px-lg-5">
        <div class="content-section-heading text-start">
          {/* <h3 class="text-secondary mb-0">Portfolio</h3> */}
          <h2 class="mb-5 font-family-Poppins fw-bold">Recent Projects</h2>
        </div>
        {/* Card Starts Here! */}
        <div class="row gx-0">
          <div class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                  <div class="h-2 fw-bold">GlueCare</div>
                  <p class="mb-0">Start-up Health Care Research Project</p>
                </div>
              </div>
              <img class="img-fluid" src={CluCare} alt="..." />
            </a>
          </div>
          <div class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                  <div class="h-2 fw-bold">Cake Area</div>
                  <p class="mb-0">
                    Application development project for log-in authentication{" "}
                  </p>
                </div>
              </div>
              <img class="img-fluid" src={Cake} alt="..." />
            </a>
          </div>
          <div class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                  <div class="h-2 fw-bold">ClassMeet</div>
                  <p class="mb-0">Online Education Technology Platform</p>
                </div>
              </div>
              <img class="img-fluid" src={ClassMeet} alt="..." />
            </a>
          </div>
          <div class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                  <div class="h-2 fw-bold">Virtual Guy</div>
                  <p class="mb-0">
                    Strawberries are such a tasty snack, especially with a
                    little sugar on top!
                  </p>
                </div>
              </div>
              <img class="img-fluid" src={Game} alt="..." />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
