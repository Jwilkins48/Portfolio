import picture1 from "../../assets/projectImgs/ClothingStore.png";
import picture2 from "../../assets/projectImgs/PetAdoption.png";
import picture3 from "../../assets/projectImgs/Rosas.png";
import picture4 from "../../assets/projectImgs/blog.png";
import picture5 from "../../assets/projectImgs/Recipe.png";
import picture6 from "../../assets/projectImgs/TwitterClone.png";
import { useEffect, useState } from "react";
import SideMenu from "../layout/SideMenu";

function Projects() {
  const [formData, setFormData] = useState({
    name: "",
    src: "",
    description: "",
    languagesUsed: "",
    website: "",
  });
  const onClickProject = (name, src, description, languagesUsed, website) => {
    setSideBar(!sideBar);
    setFormData((prevState) => ({
      ...prevState,
      name: name,
      src: src,
      description: description,
      languagesUsed: languagesUsed,
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
    <section id="projects relative" className="projectContainer pb-16">
      <div
        className={
          sideBar
            ? "bg-[#335458] h-[110vh] w-[32rem] opacity-1 z-20 fixed top-0 right-0 open"
            : "w-0 open"
        }
      >
        {sideBar ? <SideMenu formData={formData} /> : ""}
      </div>
      <h1 className="projectTitle text-[40px] md:text-[60px] underline text-center mt-20 mb-12 lg:mt-40 lg:mb-12 lg:ml-[33rem] lg:w-full lg:flex justify-start ">
        Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-80 lg:mt-2 lg:mb-28">
        <div
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="300"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <div
            onClick={() =>
              onClickProject(
                "Clothing Store",
                picture1,
                "Daisies is an e-commerce website designed to display the latest in fashion",
                ["HTML5", "CSS3", "TAILWIND", "REACT", "FIREBASE"]
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
          data-aos-duration="1500"
          data-aos-delay="600"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <div
            onClick={() =>
              onClickProject(
                "Pet Adoption",
                picture2,
                "Using the PetFinder API to search and display animals currenly up for adoption",
                ["HTML5", "CSS3", "TAILWIND", "REACT", "API"]
              )
            }
          >
            <img className="projectPicture" src={picture2} alt="profile"></img>
            <div className="projectDescription">
              <p>
                <span className="projectNameDesc">Pet Adoption</span> - HTML5 -
                CSS3 - Tailwind - React - API
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="300"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <div
            onClick={() =>
              onClickProject(
                " Recreated Restaurant Page",
                picture3,
                "Recreation of Rosa's Cafe homePage using vanilla CSS",
                ["HTML5", "CSS3", "REACT"]
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
          data-aos-duration="1500"
          data-aos-delay="600"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <div
            onClick={() =>
              onClickProject(
                "Personal Blog",
                picture4,
                "Sign up and begin posting on your blog!",
                ["HTML5", "CSS3", "TAILWIND", "REACT", "FIREBASE"]
              )
            }
          >
            <img className="projectPicture" src={picture4} alt="profile"></img>
            <div className="projectDescription">
              <p>
                <span className="projectNameDesc">Personal Blog</span> - HTML5 -
                CSS3 - Tailwind - React - Firebase
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="300"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <div
            onClick={() =>
              onClickProject(
                "Recipe Page",
                picture5,
                "Search Recipes from the Spoontacular API",
                ["HTML5", "CSS3", "REACT", "API"]
              )
            }
          >
            <img className="projectPicture" src={picture5} alt="profile"></img>
            <div className="projectDescription">
              <p>
                <span className="projectNameDesc">Recipe Page</span> - HTML5 -
                CSS3 - React - API
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="600"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <div
            onClick={() =>
              onClickProject(
                "Twitter Clone",
                picture6,
                "Recreation of the twitter homepage using vanilla CSS",
                ["HTML5", "CSS3", "REACT"]
              )
            }
          >
            <img className="projectPicture" src={picture6} alt="profile"></img>
            <div className="projectDescription">
              <p>
                <span className="projectNameDesc">Twitter Clone</span> - HTML5 -
                CSS3 - React
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
