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
        color
          ? "headerContainer w-full headerContainer-bg "
          : "headerContainer w-full "
      }
    >
      <a
        className="leftInfo ml-1 lg:ml-[65px] animate__animated animate__fadeIn"
        href="/"
      >
        Jenna
      </a>
      <div className="rightInfo lg:m-[5px] lg:mr-[45px]">
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
