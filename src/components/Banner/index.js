import React from "react";
import Picture from "../Picture";
import "./style.scss";

const Banner = ({ imgs, head, sub }) => {
  const { small, medium, large } = imgs;
  return (
    <section className="banner flex-col mx-auto">
      <div className="image-section">
        <Picture
          small={small}
          medium={medium || large}
          large={large}
          className=""
        />
      </div>
      <div className="inner_banner">
        <div className="contents container flex-row m-auto">
          <div className="text_sec flex-row">
            <div className="text_contents">
              <h1 className="hd">{head}</h1>
              <p className="s_hd">{sub}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
