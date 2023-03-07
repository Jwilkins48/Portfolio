import React from "react";
import "animate.css";

function RightSidebar() {
  return (
    <div className="scrollMessage animate__animated animate__bounceIn">
      <span className="flex gap-2">
        Scroll Down{" "}
        <p className="flex mr-[5px]">
          <i className="fa-solid fa-arrow-down arrow " />
        </p>
      </span>
    </div>
  );
}

export default RightSidebar;
