import React from "react";

export const Summary = () => {
  return (
    <>
      <div style={{ paddingTop: "3rem" }}>
        <div
          class="container section-title aos-init aos-animate"
          data-aos="fade-up"
          style={{ textAlign: "center" }}
        >
          <div class="rs-shop-subheader abt">Summary</div>
          <br></br>
          <br></br>
          <p>
            <b>Project Summary</b>: The Portfolio is a modern, responsive web
            application built using React and Vite, designed to showcase my
            projects, skills, and professional journey as a developer. It serves
            as a personal brand hub that effectively communicates my expertise
            in web development and design.
          </p>
          <h3>Technologies Used</h3>
          <div class="col-sm">
            Frontend: React, Vite, JSX, CSS, HTML,Bootstrap
          </div>
          <div class="col-sm">Routing: React Router</div>
          <div class="col-sm">
            State Management: React Hooks (useState, useEffect,useRef)
          </div>
          <div class="col-sm">
            Styling: Bootstrap,CSS modules and Styled Components
          </div>
          <br />
          <h3>Lessons Learned</h3>
          <div class="col-sm">
            <b>T</b>his project allowed me to refine my skills in React and
            modern web development practices, particularly in creating
            performant and user-friendly applications. I gained hands-on
            experience with Vite’s build tools and improved my understanding of
            responsive design principles.
          </div>
        </div>
      </div>
    </>
  );
};
export default Summary;
