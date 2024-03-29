import picture1 from "../../assets/projectImgs/ClothingStoreWebp.webp";
import picture2 from "../../assets/projectImgs/PetAdoption.webp";
import picture3 from "../../assets/projectImgs/Rosas.png";
import picture4 from "../../assets/projectImgs/movie1.webp";
import { useEffect, useState } from "react";
import SideMenu from "../layout/SideMenu";

function Projects() {
  const [formData, setFormData] = useState({
    name: "",
    src: "",
    description: "",
    languagesUsed: "",
    gitHub: "",
    website: "",
  });
  const onClickProject = (
    name,
    src,
    description,
    languagesUsed,
    gitHub,
    website
  ) => {
    setSideBar(!sideBar);
    setFormData((prevState) => ({
      ...prevState,
      name: name,
      src: src,
      description: description,
      languagesUsed: languagesUsed,
      gitHub: gitHub,
      website: website,
    }));
  };
  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    sideBar
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [sideBar]);
  return (
    <section id="projects" className="projectContainer pb-16 relative">
      <div
        className={
          sideBar
            ? "bg-[#335458] h-[110vh] w-full lg:w-[32rem] opacity-1 z-20 fixed top-0 right-0 animate__animated animate__fadeInRight h-screen"
            : ""
        }
      >
        {sideBar ? (
          <SideMenu
            sideBar={sideBar}
            setSideBar={setSideBar}
            formData={formData}
          />
        ) : (
          ""
        )}
      </div>
      <div className={sideBar ? "overlay" : ""}></div>

      <h1
        data-aos="fade"
        data-aos-duration="1500"
        className="projectTitle text-[40px] md:text-[60px] underline text-center mt-20 mb-12 lg:mt-40 lg:mb-12 lg:ml-[33rem] lg:w-full lg:flex justify-start "
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-80 lg:mt-2 lg:mb-28">
        <div
          data-aos="fade"
          data-aos-duration="1500"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <div
            htmlFor="my-drawer-4"
            onClick={() =>
              onClickProject(
                "Clothing Store",
                picture1,
                "Daisies is an e-commerce website that displays the latest in fashion. Start by signing in and adding items to your wishlist. When you're ready to check out just visit the cart to see your total!",
                [" HTML5 ", " CSS3 ", " React ", " Firebase ", " Tailwind "],
                "https://github.com/Jwilkins48/Clothing-Store",
                "https://clothing-store-psi.vercel.app/"
              )
            }
          >
            <img className="projectPicture" src={picture1} alt="profile"></img>
            <div className="projectDescription">
              <p>
                <span className="projectNameDesc">Clothing Store</span> - HTML5
                - CSS3 - Tailwind - React - Firebase
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade"
          data-aos-delay="400"
          data-aos-duration="1500"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <div
            onClick={() =>
              onClickProject(
                "Furry Friends Pet Adoption",
                picture2,
                "Pet Adoption website using the PetFinder API.",
                [" HTML5 ", " CSS3 ", " React ", " API ", "Tailwind"],
                "https://github.com/Jwilkins48/Pet-Adoption",
                "https://furry-friends-tan.vercel.app/"
              )
            }
          >
            <img
              className="projectPicture h-[11rem] lg:h-[21rem] w-[21rem] lg:w-auto"
              src={picture2}
              alt="profile"
            ></img>
            <div className="projectDescription">
              <p>
                <span className="projectNameDesc">
                  Furry Friends Pet Adoption
                </span>{" "}
                - HTML5 - CSS3 - React - API - Tailwind
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade"
          data-aos-duration="1500"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <div
            onClick={() =>
              onClickProject(
                " Recreated Restaurant Page",
                picture3,
                "Recreation of Rosa's Cafe home page using vanilla CSS",
                [" HTML5 ", " CSS3 ", " React "],
                "https://github.com/Jwilkins48/mock-restaurant",
                "https://mock-restaurant.vercel.app/"
              )
            }
          >
            <img className="projectPicture" src={picture3} alt="profile"></img>
            <div className="projectDescription">
              <p>
                <span className="projectNameDesc">
                  Recreated Restaurant Page
                </span>{" "}
                - HTML5 - CSS3 - React
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade"
          data-aos-duration="1600"
          data-aos-delay="400"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <div
            onClick={() =>
              onClickProject(
                "Movie Rating App",
                picture4,
                "Simple Movie App using Firebase. Sign in and begin adding movies to your personal watch list. After finishing just click watched to give it a rating.",
                [
                  " HTML5 ",
                  " CSS3 ",
                  " React ",
                  " TypeScript ",
                  " Firebase ",
                  " Tailwind",
                ],
                "https://github.com/Jwilkins48/Movie-Rating",
                "https://movie-rating-orpin.vercel.app/"
              )
            }
          >
            <img
              className="projectPicture h-[11rem] lg:h-[21rem]"
              src={picture4}
              alt="profile"
            ></img>
            <div className="projectDescription">
              <p>
                <span className="projectNameDesc">Movie Rating App</span> -
                HTML5 - CSS3 - React - TypeScript - Firebase - Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
