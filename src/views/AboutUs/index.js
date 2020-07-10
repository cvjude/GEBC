import React from "react";
import Helmet from "react-helmet";
import Banner from "../../components/Banner";
import Message from "../../components/Message";
import CoreValues from "../../components/CoreValues";
import SmallMessage from "../../components/SmallMessage";
import Believe from "./Believe";
import History from "./History";
import Vision from "./Vision";
import Pastor from "./Pastor";
import ServiceTime from "./ServiceTimes";
import large from "../../assets/about/bannerimg.png";
import medium from "../../assets/about/bannerimg-800.png";
import small from "../../assets/about/bannerimg-600.png";

const imgs = {
  large,
  medium,
  small,
};

const About = () => {
  return (
    <main className="bt_us">
      <Helmet>
        <title>About us</title>
        <meta name="description" content="" />
      </Helmet>

      <Banner imgs={imgs} head="About Us" sub="Know more about our Church" />
      <Message />
      <SmallMessage />
      <History />
      <Vision />
      <CoreValues />
      <Believe />
      <Pastor />
      <ServiceTime />
    </main>
  );
};

export default About;
