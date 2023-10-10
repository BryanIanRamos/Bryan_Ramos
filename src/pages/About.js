import React from "react";
import AboutIMage from "../assets/AboutPic.png";

function About() {
  return (
    <>
      <div className="bg-light">
        <div
          className="container "
          style={{ paddingTop: "90px", paddingBottom: "80px" }}
        >
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center ">
              <img src={AboutIMage} alt="aboutIMg" data-aos="fade-up-right" />
            </div>
            <div
              className="col d-flex flex-column text-start"
              style={{ marginTop: "40px" }}
              data-aos="fade-up"
            >
              <h1 className="text-black fs-2 fw-bold font-family-Poppins m-0 px-3 py-1">
                About Me
              </h1>
              <p className="text-dark fs-4 fw-medium font-family-Poppins m-0 px-3 py-2">
                Currently Taking Bachelor of Science and Information Technology.
                Passionate about innovation through society. Incubatee of
                NAVIGATU. Interested on game development and application
                development.
              </p>
              <button
                className=" bg-dark rounded-3 text-white py-2 px-4 my-2 mx-3"
                style={{ width: "170px" }}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
