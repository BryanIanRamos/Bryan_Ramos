import React from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary fixed-top">
      <div
        className="bg-secondary-emphasis "
        style={{ width: "100%", height: "50px" }}
      >
        <div className="row mx-5">
          <div className="col-7 ">
            <img src={Logo} alt="Logo" />
          </div>

          <div
            className=" col d-inline-block my-2 "
            style={{ fontSize: "20px" }}
          >
            <div className="row gap-2">
              <span className="col-2">
                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="text-black"
                >
                  About
                </a>
              </span>
              <span className="col-2">
                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="text-black"
                >
                  Skills
                </a>
              </span>
              <span className="col-4">
                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="text-black"
                >
                  Achievements
                </a>
              </span>
              <span className="col-2">
                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="text-black"
                >
                  Project
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
