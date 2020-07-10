import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../components/Image";
import believe from "../../../assets/about/believe.png";
import "./style.scss";

const index = () => {
  return (
    <section className="believe">
      <h1 className="hd txt-center">What we Believe</h1>
      <div className="bl-card container card flex-row">
        <div className="img-sec">
          <Image
            image={believe}
            imgClass="img contain"
            lazyLoad={true}
            usePlaceHolder={true}
          />
        </div>
        <div className="text-sec reg_text">
          <p className="desc spaced">
            What have certain beliefs as a church which guide everything we do.
            We believe in God, The Bible, Jesus Christ, Holy Spirit etc...
          </p>
          <p>
            Click{" "}
            <Link to="/" className="theme-color">
              <strong>here</strong>
            </Link>{" "}
            to downlaod full copy
          </p>
        </div>
      </div>
    </section>
  );
};

export default index;
