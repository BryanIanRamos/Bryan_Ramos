import React from "react";

function Skills() {
  const skills = [
    {
      id: 1,
      title: "Game Developer",
      description:
        "Enthusiastic Game Developer with one year of hands-on experience in the exciting world of game development. Proficient in designing, developing, and optimizing interactive and immersive gaming experiences. Skilled in programming, graphics, and game mechanics.",
    },
    {
      id: 2,
      title: "Web Developer",
      description:
        "Experienced Web Developer with one year of dedicated expertise in crafting web applications and sites. Proficient in frontend and backend technologies, I excel at building responsive and user-friendly web solutions. My passion for clean code and problem-solving drives me to create seamless and innovative online experiences for users.",
    },
    {
      id: 3,
      title: "Graphic Designer",
      description:
        "Graphic Designer with four years of professional experience, skilled in creating captivating visual designs. Proficient in translating concepts into visually striking graphics, I specialize in crafting compelling visuals that effectively convey messages and elevate brand identities",
    },
    {
      id: 4,
      title: "2D Animator",
      description:
        "Experienced 2D Animator skilled in bringing characters and scenes to life through captivating animations. Proficient in traditional and digital animation techniques, I specialize in creating visually engaging storytelling experiences that evoke emotions and capture audiences imaginations.",
    },
  ];
  return (
    <div
      class="container-fluid bg-light "
      id="service"
      style={{ paddingTop: "90px", paddingBottom: "90px" }}
    >
      <div class="container">
        <div class="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
          <div class="col-lg-6">
            <h1 class="display-5 mb-0 font-family-Poppins fw-bold">Skills</h1>
          </div>
          <div class="col-lg-6 text-lg-end">
            <a class="btn btn-secondary py-2 px-3 " href="#">
              Hire Me
            </a>
          </div>
        </div>
        <div class="row g-4">
          {/* cards here! */}
          {skills.map((item) => (
            <div
              class="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              key={item.id}
            >
              <div class="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                <div class="bg-icon flex-shrink-0 mb-3">
                  <i class="fa fa-crop-alt fa-2x text-dark"></i>
                </div>
                <div class="ms-sm-4">
                  {/* <img></img> */}
                  <h4 class="mb-3">{item.title}</h4>

                  <span>{item.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
