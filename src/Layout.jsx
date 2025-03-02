import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import About from "./About.jsx";
import App from "./App.jsx";

export const Layout = (props) => {
  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    alert("xdew");
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav id="nav_bar" class="navbar navbar-expand-lg navbar-light ">
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
              <a class="nav-link under-line" href="#">
                Home <span class="sr-only ">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              {/* <Link to="/About"> */}
              {/* <button onClick={handleClick}>kdsdss</button> */}
              <a class="nav-link" onClick={scrollToAbout}>
                About
              </a>
              {/* </Link> */}
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="social" href="https://github.com/ajilcg/HMS.git">
                  <i class="bi bi-github"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="social" href="">
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
                  href="https://www.linkedin.com/in/ajil-cg-b397851a4/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin"></i>{" "}
                </a>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Layout;
