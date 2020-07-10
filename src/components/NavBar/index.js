import React, { useRef, useEffect, useState } from "react";
import MainNav from "../MainNav";
import "./style.scss";

const NavBar = () => {
  const navRef = useRef();
  const currentScroll = useRef();
  const [slide, setSlide] = useState(false);

  useEffect(() => {
    let reqId;

    const scroll =
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };

    const loop = () => {
      if (currentScroll.current !== window.scrollY) {
        currentScroll.current = window.scrollY;

        if (currentScroll.current > 50) {
          navRef.current.classList.add("slide-down");
          setSlide(true);
        } else {
          navRef.current.classList.remove("slide-down");
          setSlide(false);
        }
      }

      reqId = scroll(loop);
    };
    loop();
    return () => {
      window.cancelAnimationFrame(reqId);
    };
  }, [currentScroll, navRef]);

  return (
    <header className="nav-1" ref={navRef}>
      <MainNav slide={slide} />
    </header>
  );
};

export default NavBar;
