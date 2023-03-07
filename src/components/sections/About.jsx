import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import profilePicture from "../../assets/profilePictureEdit.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="about" className="skillContainer">
      <div className="skillHeaderContainer ">
        <h1 data-aos="fade" data-aos-duration="1000" className="skillHeader ">
          About me
        </h1>
      </div>

      <div className="aboutMainContentContainer">
        <ScrollToTop
          className="flex items-center justify-center"
          color="green"
          top={995}
          smooth
        />
        <div data-aos="fade" data-aos-duration="1500" className="aboutTopInfo">
          <img
            className="profilePicture"
            src={profilePicture}
            alt="profile"
          ></img>

          <div className="aboutMeContainer">
            <p className="aboutMe">
              Hello, My name is Jenna Wilkins. I started doing front end web
              development because of my strong desire for a career in problem
              solving where I can learn about and create projects that I can
              feel proud of. I currently have an Associates Degree in Web and
              Mobile Development and outside of working I spend all my free time
              creating as many new projects as I can. I have been working with
              and am fairly experienced in{" "}
              <span className="text-green-400">
                {" "}
                HTML, CSS, JavaScript and ReactJS.
              </span>{" "}
              I have recently been working on creating projects using{" "}
              <span className="text-green-400">Firebase </span>
              so that I can strengthen my experience when working with a
              database and authentication. Below you will find other languages I
              have been working on as well as some of my recent projects!
            </p>
          </div>
        </div>

        <div className="workingOnContainer">
          <div className="workingOnIcons">
            <i className="devicon-html5-plain-wordmark"></i>
          </div>
          <div className="workingOnIcons">
            <i className="devicon-css3-plain-wordmark"></i>
          </div>
          <div className="workingOnIcons">
            <i className="devicon-react-original"></i>
          </div>
          <div className="workingOnIcons">
            <i className="devicon-nodejs-plain"></i>
          </div>
          <div className="workingOnIcons">
            <i className="devicon-javascript-plain"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
