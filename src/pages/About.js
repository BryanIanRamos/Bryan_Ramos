import React from "react";
import "../App.css";
import AboutIMage from "../assets/AboutPic.png";

function About() {
  return (
    <div className="bg-light " style={{ paddingTop: "40px" }}>
      <div
        className="container"
        style={{ paddingTop: "40px", paddingBottom: "80px" }}
      >
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center img-custom">
            <img
              src={AboutIMage}
              alt="aboutIMg"
              data-aos="fade-up-right"
              className="m-4 img-fluid"
            />
          </div>
          <div
            className="col-md-6 d-flex flex-column text-start"
            style={{ marginTop: "10px" }}
          >
            <h1 className="text-black fs-2 fw-bold font-family-Poppins m-0 px-3 py-1">
              About Me
            </h1>
            <p className="text-dark fs-6 fw-normal font-family-Poppins m-0 px-3 py-2">
              Currently Taking Bachelor of Science and Information Technology.
              Passionate about innovation through society. Incubatee of
              NAVIGATU. Interested on game development and application
              development.
            </p>
            <div className="col gap-3 fs-5 px-3 p-3 font-family-Poppins">
              <div className="row my-2">
                <b className="col-lg-4">Name:</b>
                <span className="text-secondary fw-semibold col">
                  Bryan Ian C. Ramos
                </span>
              </div>
              <div className="row my-2">
                <b className="col-lg-4">Date of birth:</b>
                <span className="text-secondary fw-semibold col">
                  October 20, 2001
                </span>
              </div>
              <div className="row my-2">
                <b className="col-lg-4">Address:</b>
                <span className="text-secondary fw-semibold col">
                  Poblacion Bayugan City
                </span>
              </div>
              <div className="row my-2">
                <b className="col-lg-4">Email:</b>
                <span className="text-secondary fw-semibold col">
                  Bryanramos3367@gmail.com
                </span>
              </div>
              <div className="row mt-2">
                <b className="col-lg-4">Phone:</b>
                <span className="text-secondary fw-semibold col">
                  +639563821962
                </span>
              </div>
              <a
                href="https://drive.google.com/file/d/1Eo2v1e7Y7Ev3RpqQn_RSF0evLRDPGd24/view"
                target="_blank"
              >
                <button className="bg-dark rounded-3 text-white py-2 px-4 mt-5">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
