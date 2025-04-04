import About from "./About.jsx";
import "./App.css";
import Layout from "./Layout";
import "./Page.js";
import Resume from "./Resume.jsx";
import Footer from "./Footer.jsx";
import { useRef } from "react";
import { Contact } from "./Contact.jsx";
import Summary from "./Summary.jsx";
import { jsPDF } from "jspdf";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);
  const sumaryRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // For smooth scrolling
    });
  };

  return (
    <>
      {/* layout */}

      <nav
        id="nav_bar"
        class="form-inline my-2 my-lg-0 navbar navbar-expand-lg navbar-light "
      >
        <a class="navbar-brand" href="#">
          <div class="keyboard">
            <span class="key">A</span>
            <span class="key">J</span>
            <span class="key">I</span>
            <span class="key">L</span>
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a
                class="nav-link under-line"
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(homeRef);
                }}
              >
                Home <span class="sr-only ">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(aboutRef);
                }}
              >
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#Contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(contactRef);
                }}
              >
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#Resume"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(resumeRef);
                }}
              >
                Resume
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#Summary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(sumaryRef);
                }}
              >
                Summary
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="AJIL_CG_RESUME.pdf" target="_blank">
                Download Resume
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a
                  class="social"
                  target="_blank"
                  href="https://github.com/ajilcg/HMS.git"
                >
                  <i class="bi bi-github"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="social"
                  target="_blank"
                  href="https://www.instagram.com/ajil_cg?igsh=MTQ1cXNwaTg0cHJxcQ=="
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>

              <li class="nav-item">
                <a class="social" href="">
                  <i class="bi bi-twitter-x"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="social"
                  target="_blank"
                  href="https://www.linkedin.com/in/ajil-cg-b397851a4/"
                >
                  <i class="fab fa-linkedin"></i>{" "}
                </a>
              </li>
            </ul>
          </form>
        </div>
      </nav>

      {/* layout end */}
      <div class="container setPad">
        <div class="row">
          <div class="col-sm-6">
            <div
              class="column large-8 small-12 rs-shop-header-section"
              data-autom="shop-header"
            >
              <div class="rs-shop-header Web">Web Developer</div>
              <br></br>
              <div class="rs-shop-subheader">Hi i'm</div>&nbsp;
              <h1 class="rs-shop-header">AJIL</h1>
              <br></br>
              <div class="rs-shop-subheader">From Kerala</div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="flex gap-4">
              <img
                class="avatar"
                src="IMG_20240114_185432_131.jpg"
                alt="avatar"
                style={{
                  borderRadius: "10px",
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div ref={aboutRef}>
        <About></About>
      </div>
      <div ref={resumeRef}>
        <Resume></Resume>
      </div>
      <div ref={contactRef}>
        <Contact></Contact>
      </div>
      <div ref={sumaryRef}>
        <Summary></Summary>
      </div>
      <div style={{ paddingTop: "5rem" }}>
        <Footer></Footer>
      </div>
      <div>
        <a
          onClick={scrollToTop}
          class="scroll-top d-flex align-items-center justify-content-center active"
        >
          <i class="bi bi-arrow-up-short"></i>
        </a>
      </div>
    </>
  );
}

export default App;
