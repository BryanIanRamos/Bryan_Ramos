import React, { useState } from "react";
import Cake from "../assets/Cake.png";
import StartUp from "../assets/StartUp.png";
import Programming from "../assets/Programming.png";
import Navi from "../assets/NAVI.png";
import CHRDC from "../assets/CHRDC.png";
import ProgCon from "../assets/ProgCont.png";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import GlueCare from "../assets/CluCareCert.png";

function Achievements() {
  const [change, changeSet] = useState(false);
  const achievements = [
    {
      id: 1,
      img: StartUp,
      name: "Health Technology Pitching Competition",
      label: "One of the 5 finalists",
      description: "Startup Competition in Caraga Health Research Forum",
    },
    {
      id: 2,
      img: Programming,
      name: "Programming Contest",
      label: "2nd Placer",
      description: "DAUG 2022 competition \n in Caraga State University",
    },
    {
      id: 3,
      img: Navi,
      name: "StartUp",
      label: "One of the Qualified Incubatees",
      description: "Navigatu Start-Up Incubatee at Caraga State University",
    },
  ];

  const certificate = [
    {
      id: 1,
      img: CHRDC,
      name: "Caraga Health Research Forum (CHRF)",
      label: "Certificate of Participation",
      description: "November 8, 2022 at the Pavilion at Watergate, Butuan City",
    },
    {
      id: 2,
      img: ProgCon,
      name: "Programming Contest",
      label: "Certificate of Achievement",
      description:
        "DAUG 2022: December 5-6, 2022 at Caraga State of University",
    },
    {
      id: 3,
      img: HTML,
      name: "Introduction to HTML",
      label: "Course Certificate",
      description: "Solo learn course",
    },
    {
      id: 4,
      img: CSS,
      name: "Introduction to CSS",
      label: "Course Certificate",
      description: "Solo learn course",
    },
    {
      id: 4,
      img: GlueCare,
      name: "Health Technology Pitchimg Competition",
      label: "Certificate of Recognition",
      description: "Caraga Health Research And Develpment Consortium",
    },
  ];

  function handleButtonClick() {
    changeSet(!change);
  }
  let object = achievements;
  let Name = "View Certificates";

  if (change) {
    object = certificate;
    Name = "View Achievements";
  }

  return (
    <div id="team" class="team px-lg-4">
      <div class="container " style={{ paddingTop: "20px" }}>
        <div className="row ">
          <div
            class="section-title col"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            <h1 className="font-family-Poppins fw-bold mb-5 col-lg-6 ">
              Achievements
            </h1>
          </div>
          <div class="col-lg-3 text-lg-end ">
            <button
              onClick={handleButtonClick}
              class="btn btn-secondary py-2 px-3  "
            >
              {Name}
            </button>
          </div>
        </div>

        <div class="row mt-4">
          {" "}
          {object.map((item) => (
            <div class="col-lg-4 col-md-6 mb-5" id={item.id}>
              <div class="member" data-aos="fade-up">
                <div class="pic">
                  <img src={item.img} class="img-fluid" alt="" height={"10"} />
                </div>
                <div class="member-info">
                  <h4>{item.name}</h4>
                  <span>{item.label}</span>
                  <div class="social">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
