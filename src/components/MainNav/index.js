import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import Hambuger from "../../assets/icons/Hambuger";
import { useLocation } from "react-router-dom";
import "./style.scss";

const links = [
  { title: "About", link: "/about" },
  { title: "Ministries", link: "/ministries" },
  { title: "Membership", link: "/membership" },
  {
    title: "Resources",
    link: "/resources",
    menus: [
      {
        title: "Blog",
        link: "/blog",
      },
    ],
  },
  { title: "Contact us", link: "/contact" },
];

const NavBar = ({ slide }) => {
  const [checked, setChecked] = useState(false);
  const { pathname } = useLocation();

  const onClick = (e, prevent) => {
    if (prevent) {
      e.preventDefault();
      e.target.nextElementSibling.classList.toggle("op-dp_223");
    }
  };

  // console.log(checked);

  // useEffect(() => {
  //   let val = checked;
  //   const close = (val) => {
  //     const input = document.querySelector("#input-nav");
  //     // console.log(input.value);
  //     if (input.value) {
  //       setChecked(false);
  //       input.value = false;
  //     }
  //   };
  //   window.addEventListener("scroll", () => close(val));
  //   return () => {};
  // }, []);

  console.log("t re");

  return (
    <>
      <nav className="main-nav container flex-row">
        <Link to="/" className="logo">
          <img src={logo} alt="" className="img contain" />
        </Link>
        <div className="nav-collapse flex-row j-end">
          <label className="burger" htmlFor="input-nav">
            <Hambuger width="20px" height="20px" open={checked} />
          </label>

          <input
            type="checkbox"
            id="input-nav"
            value={checked}
            onChange={() => setChecked(!checked)}
          />

          <div className="contents flex-row j-end">
            <div
              className={`l_s${
                pathname === "/" ||
                pathname === "/contact" ||
                pathname === "/blog" ||
                slide
                  ? ""
                  : " white"
              }`}
            >
              {links.map((link, i) => (
                <div className="lin_con" key={`sublink_${i}`}>
                  <NavLink
                    to={link.link}
                    className={`links${link.className || ""}`}
                    activeClassName="link_active"
                    onClick={(e) => onClick(e, !!link.menus)}
                    onBlur={(e) => onClick(e, true)}
                    as="div"
                  >
                    {link.title}
                  </NavLink>
                  {link.menus
                    ? link.menus.map((menu, i) => (
                        <div
                          className="dropDown"
                          key={`drop-down_${link.title}`}
                        >
                          <NavLink to={menu.link}>{menu.title}</NavLink>
                        </div>
                      ))
                    : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
