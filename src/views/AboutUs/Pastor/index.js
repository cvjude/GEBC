import React from "react";
import pastor from "../../../assets/pastor_curved.png";
import Image from "../../../components/Image";
import "./style.scss";

const index = () => {
  return (
    <section className="msg_pst">
      <h1 className="hd txt-center">Meet Our Pastor</h1>
      <div className="msg_con">
        <div className="msg-card container card flex-row j-start">
          <div className="text-sec reg_text">
            <p className="desc spaced">
              Reverend Tony Oluwaremilekun, is an avowed disciple of Jesus
              Christ, a Discipler, Counsellor, Facilitator, Preacher of the Word
              and an Encourager. He is a motivator who leads the church to
              believe that God can do the impossible. His slogan is: "We see the
              POSSIBILITIES, smell the SUCCESS and shall taste the REWARD". He
              likes to undertake God's size assignment. He is also committed to
              studying and praying.
            </p>
            <p>
              Happily married to a warm, dedicated, supportive, intelligent and
              amiable wife, Sister Olusola Dorcas (Nee Akanbi) a trained
              Administrator, Counsellor, Educator and Professional Examiner. She
              is a woman of faith and prayer. The marriage is graciously blessed
              with children – Dorathy, Daniel and Deborah who are all loving,
              charming, respectful and intelligent.
            </p>
          </div>

          <div className="img-sec">
            <Image
              image={pastor}
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
