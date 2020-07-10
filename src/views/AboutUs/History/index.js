import React from "react";
import history from "../../../assets/about/history.png";
import Image from "../../../components/Image";
import "./style.scss";

const index = () => {
  return (
    <section className="hs_try">
      <div className="container card flex-row">
        <div className="text-sec">
          <div className="content reg_text">
            <h2>Our History</h2>
            <p className="spaced">
              GEBC Gbagada, started on the 4th October, 1959, with few families
              coming together from now Christ Victory Baptist Shomolu, and
              planted a Bible preaching church.
            </p>
            <p>
              Since that time, GEBC Gbagada has grown into a family of believers
              that reaches across the state of Lagos and the environs with the
              gospel of Jesus Christ.
            </p>
          </div>
        </div>
        <div className="img-sec">
          <div className="img-con absolute-center">
            <Image
              image={history}
              lazyLoad={true}
              usePlaceHolder={false}
              imgClass="img contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
