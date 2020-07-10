import React from "react";
import banner from "../../assets/homepage/banner.png";
import "./style.scss";

const Banner = () => {
  return (
    <section className="cntx flex-row">
      <div className="contents container">
        <div className="text_sec flex-row al-end">
          <div className="text_con">
            <p className="top">WELCOME TO GEBC</p>
            <h1>
              Hi there this page is still under construction and will be done
              soon. Meanwhile explore all our other pages
            </h1>
          </div>
        </div>
        <div className="img_sec">
          <img src={banner} alt="" className="img contain" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
