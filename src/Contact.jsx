import React from "react";

export const Contact = () => {
  return (
    <div style={{ paddingTop: "4rem" }}>
      <br></br>
      <div
        class="container section-title aos-init aos-animate"
        data-aos="fade-up"
        style={{ textAlign: "center" }}
      >
        <div class="rs-shop-subheader abt">Contact</div>
        <br></br>
        <br></br>
        <div class="row">
          {" "}
          <div class="container">
            <div class="colsm">
              <div>
                <b>
                  <i class="bi bi-envelope"></i> Gmail
                </b>{" "}
                ajilc50@gmail.com
              </div>
            </div>
            <br></br>
            <div class="colsm">
              <div>
                <b>
                  <i class="bi bi-phone"></i>Phone{" "}
                </b>
                +91 9995766737
              </div>
            </div>
            <br></br>
            <div class="colsm">
              <div>
                <b>
                  <i class="bi bi-geo-alt-fill"></i>{" "}
                </b>
                Thrissur,Kerala
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
