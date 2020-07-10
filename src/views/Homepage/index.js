import React from "react";
import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Message from "../../components/Message";
import PastorMessage from "./Message";
import Possiblities from "./Possiblities";
import ServiceTimes from "./ServiceTimes";
import CoreValues from "../../components/CoreValues";
import Journey from "./Journey";
import Pictures from "./Pictures";
import Email from "../../components/Email";
import "./style.scss";

const HomePage = () => {
  return (
    <main className="home_page">
      <Helmet>
        <title>Gebc Home</title>
        <meta name="description" content="" />
      </Helmet>

      <Banner />
      <Message />
      <PastorMessage />
      <Possiblities />
      <ServiceTimes />
      <CoreValues />
      <Journey />
      <Pictures />
      <Email />
    </main>
  );
};

export default HomePage;
