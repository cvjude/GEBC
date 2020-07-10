import React from "react";
import Image from "../../../components/Image";
import "./style.scss";

const index = ({ title, desc, image, i }) => {
  return (
    <section className={`turn_crds ${i === 0 ? "shade" : "theme"}`}>
      <span className="hng">{`0${i}`}</span>
      <div className="msg_con">
        <div className="msg-card container card flex-row j-start">
          <div className="text-sec reg_text">
            <h2>{title}</h2>
            <p className="desc">{desc}</p>
          </div>

          <div className="img-sec">
            <Image
              image={image}
              imgClass="img contain"
              lazyLoad={true}
              usePlaceHolder={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
