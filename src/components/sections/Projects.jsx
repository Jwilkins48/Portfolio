import picture1 from "../../assets/projectImgs/ClothingStore.png";
import picture2 from "../../assets/projectImgs/PetAdoption.png";
import picture3 from "../../assets/projectImgs/Rosas.png";
import picture4 from "../../assets/projectImgs/blog.png";
import picture5 from "../../assets/projectImgs/Recipe.png";
import picture6 from "../../assets/projectImgs/TwitterClone.png";

function Projects() {
  return (
    <section id="projects" className="projectContainer">
      <h1
        // data-aos="fade"
        // data-aos-duration="1000"
        className="projectTitle text-[30px] md:text-[42px] text-center sm:text-start my-10 lg:mt-28 lg:mb-12 lg:mr-[50.5rem] underline"
      >
        Some Things I've Been Working On...
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-80 lg:mt-2 lg:mb-28">
        <div
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="300"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <a href="">
            <img className="projectPicture" src={picture1} alt="profile"></img>
            <div className="projectDescription">
              <p>
                <span className="projectNameDesc">Clothing Store</span> - HTML5
                - CSS3 - React - Firebase
              </p>
            </div>
          </a>
        </div>

        <div
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="600"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <a href="">
            <img className="projectPicture" src={picture2} alt="profile"></img>
            <div className="projectDescription">
              <p>
                <span className="projectNameDesc">Pet Adoption</span> - HTML5 -
                CSS3 - React - API
              </p>
            </div>
          </a>
        </div>

        <div
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="300"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <a href="">
            <img className="projectPicture" src={picture3} alt="profile"></img>
            <div className="projectDescription">
              <p>
                <span className="projectNameDesc">
                  Recreated Restaurant Page
                </span>{" "}
                - HTML5 - CSS3 - React
              </p>
            </div>
          </a>
        </div>

        <div
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="600"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <a href="">
            <img className="projectPicture" src={picture4} alt="profile"></img>
            <div className="projectDescription">
              <p>
                <span className="projectNameDesc">Personal Blog</span> - HTML5 -
                CSS3 - React - Firebase
              </p>
            </div>
          </a>
        </div>

        <div
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="300"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <a href="">
            <img className="projectPicture" src={picture5} alt="profile"></img>
            <div className="projectDescription">
              <p>
                <span className="projectNameDesc">Recipe Page</span> - HTML5 -
                CSS3 - React - API
              </p>
            </div>
          </a>
        </div>

        <div
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="600"
          className="project w-[21rem] h-[9rem] m-auto lg:w-[37rem] lg:h-[20rem]"
        >
          <a href="">
            <img className="projectPicture" src={picture6} alt="profile"></img>
            <div className="projectDescription">
              <p>
                <span className="projectNameDesc">Twitter Clone</span> - HTML5 -
                CSS3 - React
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
