import React, { useState } from "react";

function Navbar() {
  //Navbar change on scroll
  const [color, setColor] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 65) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  return (
    <div
      className={
        color ? "headerContainer headerContainer-bg" : "headerContainer"
      }
    >
      <a className="leftInfo animate__animated animate__fadeIn" href="/">
        Jenna
      </a>
      <div className="rightInfo">
        <a
          className="navBarLinks animate__animated animate__fadeIn"
          href="#about"
        >
          About
        </a>
        <a
          className="navBarLinks animate__animated animate__fadeIn"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="navBarLinks animate__animated animate__fadeIn"
          href="mailto: Jenna48071@gmail.com"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Navbar;
