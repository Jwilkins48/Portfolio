import React, { useState } from "react";
import "../../css/hamburgerMenu.css";

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
        className="leftInfo ml-4 lg:ml-[65px] animate__animated animate__fadeIn name"
        href="/"
      >
        Jenna
      </a>
      <div className="rightInfo lg:m-[5px] lg:mr-[45px] hidden sm:flex">
        <a
          className="navBarLinks animate__animated animate__fadeInDown one"
          href="#about"
        >
          About
        </a>
        <a
          className="navBarLinks animate__animated animate__fadeInDown two"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="navBarLinks animate__animated animate__fadeInDown three"
          href="mailto: Jenna48071@gmail.com"
        >
          Contact Me
        </a>
      </div>

      <div className="sm:hidden flex">
        <label>
          <input type="checkbox" />
          <span className="menu">
            <span className="hamburger"></span>
          </span>
          <ul>
            <li>
              <a className="hamburgerItem" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hamburgerItem" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="hamburgerItem" href="#">
                Resume
              </a>
            </li>
            <li>
              <a className="hamburgerItem" href="#contactMe">
                Contact Me
              </a>
            </li>
          </ul>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
