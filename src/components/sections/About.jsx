import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import profilePicture from "../../assets/projectImgs/Jenna-compressed.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "../layout/Carousel";

function About() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section id="about" className="skillContainer z-[2] lg:h-screen pb-5">
      <div className="skillHeaderContainer ">
        <h1 data-aos="fade" data-aos-duration="1000" className="skillHeader ">
          About me
        </h1>
      </div>

      <div className="aboutMainContentContainer mt-[-18px] lg:mt-[55px]">
        <ScrollToTop
          className="flex items-center justify-center"
          color="green"
          top={995}
          smooth
        />
        <div
          data-aos="fade"
          data-aos-duration="1500"
          className="aboutTopInfo flex flex-col md:flex-row lg:flex-row justify-center items-center "
        >
          <div>
            <img
              className="profilePicture lg:ml-[0px] lg:mr-[30px] w-full h-auto md:max-w-[390px] max-w-[320px] mr-3 lg:mb-5 mb-8"
              src={profilePicture}
              alt="profile"
            ></img>
          </div>

          <div className="aboutMeContainer m-[12px] lg:m-0 lg:w-[900px] lg:h-[410px] p-4 lg:p-[30px] overflow-hidden">
            <p className="aboutMe text-[15px] lg:text-[25px]">
              Hello, My name is Jenna! I currently have an Associates Degree in
              Web and Mobile Development and outside of working I spend all my
              free time creating as many new projects as I can. I have been
              working with and am experienced in{" "}
              <span className="text-green-400">
                {" "}
                HTML5, CSS3, JavaScript and ReactJS.
              </span>{" "}
              I have recently been working on projects using{" "}
              <span className="text-green-400">MERN Stack </span>
              to strengthen my experience and knowledge as a developer.
            </p>
          </div>
        </div>

        <Carousel />
      </div>
    </section>
  );
}

export default About;
