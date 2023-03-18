import React, { useState } from "react";
import "../../css/hamburgerMenu.css";
import "animate.css";
import Carousel from "./Carousel";

function Navbar() {
  //Checkbox toggle
  const [checked, setChecked] = useState(false);
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
    <nav
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
      {/* DESKTOP */}
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

      {/* MOBILE */}
      <div className="sm:hidden flex">
        <label>
          <input
            className="mr-5 mt-5 h-20 w-7 block invisible cursor-pointer"
            type="checkbox"
            checked={checked}
            onClick={() => setChecked(!checked)}
          />
          <span className="menu">
            <span className="hamburger"></span>
          </span>
          <ul className={checked ? "block" : "hidden"}>
            <li>
              <a
                onClick={() => setChecked(false)}
                className="hamburgerItem one"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => setChecked(false)}
                className="hamburgerItem two"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => setChecked(false)}
                className="hamburgerItem three"
                href="#"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                onClick={() => setChecked(false)}
                className="hamburgerItem four"
                href="#contactMe"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
