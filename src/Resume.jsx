import React from "react";
import { Parallax } from "react-scroll-parallax";

export const Resume = () => {
  return (
    <>
      <section
        id="resume"
        style={{ paddingTop: "4rem" }}
        class="resume section"
      >
        <div
          class="container section-title aos-init aos-animate"
          data-aos="fade-up"
          style={{ textAlign: "center" }}
        >
          <div class="rs-shop-subheader abt">Resume</div>
          <br></br>
          <br></br>
        </div>

        <div class="container">
          <div class="row">
            <div
              class="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 class="resume-title">Sumary</h3>
              <div class="resume-item pb-0">
                <h4>AJIL C G</h4>
                <p>
                  <em>
                    I am a person with experience in Full Stack Web Application
                    Development and loves to learn new things. Always believe in
                    getting along with all kind of people and try to do work the
                    right way as per the clients requirement. My objective is to
                    contribute my part towards the success of an organization
                  </em>
                </p>
                <ul>
                  <li>CHARUVIL HOUSE P O P VEMBALLUR Thrissur PIN 680671</li>
                  <li>(+91) 9995766737</li>
                  <li>ajilc50@gmail.com</li>
                </ul>
              </div>
              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>INDIRA GANDHI NATIONAL OPEN UNIVERSITY</h4>
                {/* <h5>2015 - 2016</h5> */}
                <p>
                  <p>BCA (Pursuing)</p>
                </p>
                {/* <p>
                  Qui deserunt veniam. Et sed aliquam labore tempore sed
                  quisquam iusto autem sit. Ea vero voluptatum qui ut
                  dignissimos deleniti nerada porti sand markend
                </p> */}
              </div>
              <div class="resume-item">
                <h4>TECHNICAL UNIVERSITY</h4>
                <p>DIPLOMA IN COMPUTER ENGINEERING</p>
              </div>
              <div class="resume-item">
                <h4>TECHNICAL UNIVERSITY</h4>
                <p>ITI IN COMPUTER HARDWARE</p>
              </div>
              <h3 class="resume-title">PROJECTS</h3>
              <div class="resume-item">
                <h4>LMS (Loan Managemnt System)</h4>
                <h4>CRM (Customer Relationship Management)</h4>
                <h4>CONSOLIDATED MONITORING REPORTS OF NGL SEGMENTS</h4>
                <ul>
                  <li>
                    Develop web services to sync the data with other database
                  </li>
                  <li>
                    Write complex quires and save as store procedure to get
                    required result.
                  </li>
                  <li>Push code/content changes to production.</li>
                  <li>Designed and developed web forms using ASP.NET.</li>
                  <li>Involved in Testing and debugging.</li>
                  <li>Implemented front end validations using JavaScript.</li>
                  <li>
                    API Integration(Kotak Mahindra NACH integration,AXIS
                    BBPS(Bharat Bill Payment System) integration)
                  </li>
                  <li>
                    Developed a new project using dot net core (.net 8) and
                    angular (Angular 17).
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>Software Developer</h4>
                <h5>MAY 2021 - Present</h5>
                <p>
                  <em>MANAPPURAM FINANCE Thrissur </em>
                </p>
                <p>
                  I received in-depth knowledge of ASP.NET Web forms and .NET as
                  a whole. Fully controlled the back-end and database of
                  projects. I developed and worked with Front-end, Back-end and
                  Databases which gave me the ability to understand the entire
                  spectrum of processes in one big project from the first
                  business analysis to the release of the product. I had the
                  opportunity to work closely with developers with more than 8
                  years of experience.<br></br>
                  Software Developer Dot net developer : Worked within a team,
                  who build a Customer relationship module(CRM) to maintain
                  effective communication between organization and customers.
                  Features included to the CRM by adding new updations like loan
                  assigning module, calling module, Emi reminder module etc
                  Worked within a team, to give support to, Loan originating
                  System (LOS) which manages the loans. Added features like
                  automatic call
                </p>
              </div>

              <div class="resume-item">
                <h4>AREA OF EXPERTISE</h4>

                <ul>
                  <li>Asp.net Web Application</li>
                  <li>Asp.net Web Forms</li>
                  <li>Oracle PL/SQL</li>
                  <li>C,C#</li>
                  <li>Java Script</li>
                  <li>HTML,CSS,Ajax,Jquery and GitHub</li>
                  <li>Angular (Angular 17)</li>
                  <li>
                    ASP.Net Core, Entity Framework,API Creation ,API Integration
                    MVC and React
                  </li>
                </ul>
              </div>

              <div class="resume-item">
                <h4>ACCOMPLISHMENTS</h4>
                <ul>
                  <li>Entity Framework Core - Udemy Certificate</li>
                  <li>Dependency injection in .Net 5 - Udemy Certificate</li>
                  <li>Dotnet Full stack course - ICTAC ( 6 Months Course)</li>
                </ul>
              </div>

              <div class="resume-item">
                <h4>SAMPLE PROJECT USING REACT AND WEB API</h4>
                <ul>
                  <li>
                    Frontend -{" "}
                    <a target="_blank" href="https://github.com/ajilcg/HMS.git">
                      https://github.com/ajilcg/HMS.git
                    </a>
                  </li>
                  <li>
                    Backend -{" "}
                    <a target="_blank" href="https://github.com/ajilcg/HMS_API">
                      https://github.com/ajilcg/HMS_API
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Resume;
