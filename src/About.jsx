import React from "react";
import "./About.css";
export const About = () => {
  return (
    <div style={{ paddingTop: "4rem", padding: "2rem" }} class="container">
      <div class="row">
        <div class="card-wrapper">
          <div class="card">
            <div class="card-image">
              <img
                src="src/assets/images/Ajil.jpg"
                style={{
                  width: "120%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                alt="profile one"
              ></img>
            </div>

            <ul class="social-icons">
              <li>
                <a target="_blank" href="https://github.com/ajilcg/HMS.git">
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/ajil_cg?igsh=MTQ1cXNwaTg0cHJxcQ=="
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/ajil-cg-b397851a4/"
                >
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>

            <div class="details">
              <h2>
                A J I L <br></br>
                <span class="job-title">Dotnet Developer</span>
              </h2>
            </div>
          </div>
        </div>
        <div class="card-wrapper-About">
          <br></br>
          <div class="rs-shop-subheader abt">About Me</div>
          <br></br>I am a highly skilled and motivated .NET Developer with a
          strong background in building modern web applications and delivering
          effective solutions. With hands-on experience in a diverse set of
          front-end and back-end technologies, I specialize in .NET Core, React,
          and JavaScript frameworks. My expertise includes HTML, CSS, jQuery,
          and JavaScript, alongside deep knowledge of .NET Core for backend
          development, enabling me to build full-stack applications with a
          smooth, seamless user experience. I am passionate about clean,
          maintainable code and continuously strive to improve development
          processes and the user experience. With a strong problem-solving
          mindset and a commitment to producing high-quality software, I am
          always keen on learning new technologies and methodologies to stay
          current in the ever-evolving software development landscape.
        </div>
      </div>
    </div>
  );
};
export default About;
