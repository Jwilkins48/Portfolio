import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import profilePicture from "../../assets/profilePictureEdit.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "../layout/Carousel";

function About() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div id="about" className="skillContainer z-[2] lg:h-screen pb-5">
      <div className="skillHeaderContainer ">
        <h1 data-aos="fade" data-aos-duration="1000" className="skillHeader ">
          About me
        </h1>
      </div>

      <div className="aboutMainContentContainer ml-7 mt-[-18px] lg:mt-[55px]">
        <ScrollToTop
          className="flex items-center justify-center"
          color="green"
          top={995}
          smooth
        />
        <div
          data-aos="fade"
          data-aos-duration="1500"
          className="aboutTopInfo flex flex-col md:flex-row lg:flex-row"
        >
          <img
            className="profilePicture w-80 lg:w-[390px] lg:h-[390px] lg:mb-0 mb-8"
            src={profilePicture}
            alt="profile"
          ></img>

          <div className="aboutMeContainer p-4 lg:p-[30px] lg:h-[410px] ml-[-26px] lg:ml-0 overflow-hidden lg:w-[900px]">
            <p className="aboutMe lg:text-[20px] text-center lg:text-start">
              Hello, My name is Jenna Wilkins. I started doing front end web
              development because of my strong desire for a career in problem
              solving and to have the opportunity to learn about and create
              projects that I can feel proud of. I currently have an Associates
              Degree in Web and Mobile Development and outside of working I
              spend all my free time creating as many new projects as I can. I
              have been working with and am fairly experienced in{" "}
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

        <Carousel />
      </div>
    </div>
  );
}

export default About;
