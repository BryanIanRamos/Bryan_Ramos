import React from "react";
import Profile from "../assets/Profile.png";
import CluCare from "../assets/GlueCare.png";
import ClassMeet from "../assets/ClassMeet.png";
import Cake from "../assets/Cake.png";
import Game from "../assets/games.png";

function Projects() {
  return (
    <section class="content-section  " id="portfolio">
      <div class="container px-4 px-lg-5">
        <div class="content-section-heading text-center">
          <h3 class="text-secondary mb-0">Portfolio</h3>
          <h2 class="mb-5">Recent Projects</h2>
        </div>
        {/* Card Starts Here! */}
        <div class="row gx-0">
          <div class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">Stationary</div>
                  <p class="mb-0">
                    A yellow pencil with envelopes on a clean, blue backdrop!
                  </p>
                </div>
              </div>
              <img class="img-fluid" src={CluCare} alt="..." />
            </a>
          </div>
          <div class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">Ice Cream</div>
                  <p class="mb-0">
                    A dark blue background with a colored pencil, a clip, and a
                    tiny ice cream cone!
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
                  <div class="h2">Strawberries</div>
                  <p class="mb-0">
                    Strawberries are such a tasty snack, especially with a
                    little sugar on top!
                  </p>
                </div>
              </div>
              <img class="img-fluid" src={ClassMeet} alt="..." />
            </a>
          </div>
          <div class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">Workspace</div>
                  <p class="mb-0">
                    A yellow workspace with some scissors, pencils, and other
                    objects.
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