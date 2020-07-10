import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo_grey.png";
import fb from "../../assets/icons/facebook.png";
import tw from "../../assets/icons/twitter.png";
import yt from "../../assets/icons/youtube.png";
import "./style.scss";

const sc_links = [
  {
    img: tw,
    link: "",
  },
  {
    img: fb,
    link: "",
  },
  {
    img: yt,
    link: "",
  },
];

const links = [
  { title: "About Us", link: "/about" },
  { title: "Ministries", link: "/ministries" },
  { title: "Blog", link: "#" },
  { title: "Membership Form", link: "/membership" },
];

const extras = [
  "17, Baptist Church Street, Gbagada Estate Phase 2, Lagos.",
  "+234 802 737 5656",
  "info@gebcgbagada.org",
];

const Footer = () => {
  return (
    <section className="ft_sx  flex-col">
      <div className="ft_con container flex-row">
        <div className="contents flex-row card j-space al-start">
          <div className="logo">
            <img src={logo} alt="" className="contain" />
          </div>
          <div className="na_gt flex-col al-start">
            <h3>Quick Navigation</h3>
            {links.map((link, i) => (
              <Link key={`ft_sublink_${i}`} to={link.link} className="links">
                {link.title}
              </Link>
            ))}
          </div>
          <div className="na_gt flex-col al-start">
            <h3>Locate Us</h3>
            {extras.map((extra, i) => (
              <p key={`ft_sublink_${i}`} className="links">
                {extra}
              </p>
            ))}
          </div>
          <div className="cn_us flex-row">
            {sc_links.map((link, i) => (
              <Link to={link.link} key={`social_link_${i}`}>
                <img src={link.img} alt="" className="img contain" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
