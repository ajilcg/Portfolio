import React from "react";

export const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        style={{ backgroundColor: "#928e8e33" }}
        class="footer light-background"
      >
        <div class="container">
          <div class="copyright text-center ">
            <p>
              © <span>Copyright</span>{" "}
              <strong class="px-1 sitename">Ajil C G</strong>{" "}
              <span>
                All Rights Reserved<br></br>
              </span>
            </p>
          </div>
          <div class="social-links d-flex justify-content-center">
            <a href="">
              <i class="bi bi-twitter-x"></i>
            </a>
            <a href="">
              <i class="bi bi-facebook"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/ajil_cg?igsh=MTQ1cXNwaTg0cHJxcQ=="
            >
              <i class="bi bi-instagram"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ajil-cg-b397851a4/"
            >
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
          {/* <div class="credits">
            <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed
            by <a href="https://themewagon.com">ThemeWagon</a>
          </div> */}
          {/* <a href="https://themewagon.com"></a> */}
        </div>
        {/* <a href="https://themewagon.com"></a> */}
      </footer>
    </>
  );
};
export default Footer;
