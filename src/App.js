import "./App.css";
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS
// import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Footer from "./components/Footer.js";
import { useRef } from "react";
import Main from "./pages/Main";
import ScrollToTop from "./components/ScrollToTop";
import Form from "./pages/Form";

function App() {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const AchieveRef = useRef(null);

  return (
    <div className="App">
      <Navbar2
        about={aboutRef}
        skills={skillsRef}
        project={projectRef}
        achieve={AchieveRef}
      />
      {/* <section id="hero">
        <div class="hero-container" data-aos="fade-up">
          <h1>Welcome to Squad</h1>
          <h2>
            We are team of talented designers making websites with Bootstrap
          </h2>
          <a href="#about" class="btn-get-started scrollto">
            <DownArrowIcon />
          </a>
        </div>
      </section> */}
      <ScrollToTop />
      <div>
        <div ref={mainRef} className="Main">
          <Main />
        </div>
        <div ref={aboutRef} className="About">
          <About />
        </div>
        <div ref={skillsRef} className="Skills">
          <Skills />
        </div>
        <div ref={projectRef} className="Projects">
          <Projects />
        </div>
        <div ref={AchieveRef} className="Achievements">
          <Achievements />
        </div>
        <Form />

        <Footer
          about={aboutRef}
          skills={skillsRef}
          project={projectRef}
          achieve={AchieveRef}
        />

        {/* cut me */}
      </div>
    </div>
  );
}

export default App;
