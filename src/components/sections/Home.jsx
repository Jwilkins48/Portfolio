import { Link } from "react-router-dom";
import "../../css/homeBackground.css";
import RightSidebar from "../layout/RightSideBar";

function Home() {
  return (
    <div id="mainPage" className="mainContainer">
      <div className="circleContainer">
        <RightSidebar />

        <div className="messageContainer">
          <h1 className="helloMessage ml-3 lg:ml-[252px] font-bold animate__animated animate__fadeIn">
            Hello, I'm Jenna{" "}
          </h1>
          <div className="welcomeMessage ml-2 lg:ml-[250px]">
            <h1 className="font-bold text-[35px] lg:text-[52px]">
              Front End Web Developer
            </h1>
          </div>
        </div>

        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
