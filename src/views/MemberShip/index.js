import React from "react";
import Helmet from "react-helmet";
import Banner from "../../components/Banner";
import { Link } from "react-router-dom";
import Image from "../../components/Image";
import Turn from "./Turn";
import Join from "./Join";
import large from "../../assets/membership/bannerimg.png";
import medium from "../../assets/membership/bannerimg-800.png";
import small from "../../assets/membership/bannerimg-600.png";
import "./style.scss";

import img1 from "../../assets/membership/img1.png";
import img2 from "../../assets/membership/img2.png";
import img3 from "../../assets/membership/img3.png";

const imgs = {
  large,
  medium,
  small,
};

const turn = [
  {
    title: "Have a Relationship With God",
    image: img1,
    desc:
      "Gbagada Estate Baptist Church is a family of individuals who have put their faith in Jesus Christ alone for eternal salvation. If you have never made the decision to accept Jesus Christ as your personal saviour, it is the most important decision you can ever make, and we would be thrilled to talk to you about it and personally explain what the Bible says about how you can know for sure you are on your way to Heaven when this life is over. If we can talk to you about this, please contact us today.",
  },
  {
    title: "Understanding Our Purpose and Beliefs",
    image: img2,
    desc:
      "Gbagada Estate Baptist Church is a biblical church united in our purpose to love God, grow together in Christ, and reach others. You can find out more about our purpose here. We are also united in our belief about basic truths from the Bible. You can read about the Bible truths we teach and believe here.",
  },
];

const About = () => {
  return (
    <main className="min_st">
      <Helmet>
        <title>Ministries</title>
        <meta name="description" content="" />
      </Helmet>

      <Banner
        imgs={imgs}
        head="Membership"
        sub="Know more about how to become one of us"
      />

      <section className="mn_sec">
        {turn.map((pturn, i) => (
          <Turn i={i} {...pturn} key={`pturn_${i}`} />
        ))}
      </section>

      <Join />

      <section className="learn-us flex-row card">
        <div className="flex-row text-sec">
          <div className="text-sec">
            <h2 className="hd">Welcome to be body of Christ</h2>

            <p className="s_hd">
              <Link className="links learn" to="/">
                <strong className="theme-color">Click here</strong>
              </Link>{" "}
              to fill the membership form online
            </p>
          </div>
        </div>
        <div className="image-sec">
          <Image
            image={img3}
            imgClass="img cover"
            alt="img"
            lazyLoad={true}
            usePlaceHolder={true}
          />
        </div>
      </section>
    </main>
  );
};

export default About;
