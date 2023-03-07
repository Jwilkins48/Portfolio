import "../../css/homeBackground.css";
import RightSidebar from "../layout/RightSideBar";

function Home() {
  return (
    <div id="mainPage" className="mainContainer">
      <div className="circleContainer">
        <RightSidebar />

        <div className="messageContainer">
          <h1 className="helloMessage font-bold animate__animated animate__fadeIn">
            Hello, I'm Jenna{" "}
          </h1>
          <div className="welcomeMessage">
            <h1 className="font-bold">Front End Web Developer</h1>
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
