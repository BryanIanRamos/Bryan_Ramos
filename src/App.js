import "./App.css";
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS
import Navbar from "./components/Navbar";
// import Navbar2 from "./components/Navbar2";
// import Dino from "./assets/Dino.png";
import Facebook from "./assets/facebook.png";
import Profile from "./assets/Profile.png";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div
        className="container verflow-hidden mt-5"
        // style={{ height: "700px" }}
      >
        {/* Image Area  */}
        <div className="relative w-auto my-5 row ">
          <br />
          <div
            className="col-md-5  element-to-hide "
            style={{
              height: "500px",
              marginTop: "30px",
            }}
          >
            <img
              src={Profile}
              alt="Profile"
              style={{
                width: "90%",
                zIndex: 1,
              }}
              data-aos="zoom-in-up"
            />
          </div>
          <div className="col-1 element-to-hide"></div>
          {/* Text Area */}
          <div
            className=" d-inline-block col "
            style={{ marginTop: "6%" }}
            data-aos="fade-left"
          >
            <p
              className="text-black fw-bold font-family-Poppins  m-0 px-3 py-2 pt-[200px] lh-1 typewriter position-relative"
              style={{ fontSize: "57.63px" }}
            >
              Hello, <br /> I’m Bryan Ramos.
            </p>
            {/* <img
              src={Dino}
              alt="DinoLogo"
              className=" position-relative border"
              style={{ left: "-320px", top: "-80px" }}
              height={100.55}
              width={100.55}
              data-aos="fade-up"
            /> */}
            <div className="justify-content-center align-items-center ">
              <p className="text-dark fw-medium font-family-Poppins col-md-12 m-0 px-3 py-2 typed-text ">
                Aspiring Full-Stack and Game Developer, <br /> serious about
                UI/UX, animations, <br />
                and Game Development{" "}
              </p>
              <p className="text-secondary fs-5 fw-normal font-family-Poppins  m-0 px-3 py-2">
                You can connect with me through{" "}
              </p>
              <div className="px-3 py-2">
                <button className=" bg-dark rounded-3 text-white py-2 px-4 ">
                  <img src={Facebook} alt="FaceBook" />
                  <span style={{ fontSize: "12.51px" }}>
                    {" "}
                    Bryan Ian C. Ramos
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* <div className=" d-inline-block col-1"></div> */}
          {/* --- */}
        </div>
      </div>
      <body>
        <About />
        <Skills />
        <Projects />
        {/* cut me */}

        {/* <p className="typewriter">Typewriter CSS.</p> */}
      </body>
    </div>
  );
}

export default App;
