function Projects() {
  return (
    <div id="projects" className="projectContainer">
      <h1 className="projectTitle">Projects</h1>

      <div className="allProjectContainer">
        <div className="topRow">
          <div className="project">
            <a href="">
              {/* <img
                className="projectPicture"
                src={picture1}
                alt="profile"
              ></img> */}
              <div className="projectDescription">
                <p>
                  <span className="projectNameDesc">Twitter Clone</span> - HTML5
                  - CSS3 - React
                </p>
              </div>
            </a>
          </div>

          <div className="project">
            <a href="">
              {/* <img
                className="projectPicture"
                src={picture2}
                alt="profile"
              ></img> */}
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

          <div className="project">
            <a href="">
              {/* <img
                className="projectPicture"
                src={picture3}
                alt="profile"
              ></img> */}
              <div className="projectDescription">
                <p>
                  <span className="projectNameDesc">Clothing Store</span> -
                  HTML5 - CSS3 - React - Firebase
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="bottomRow">
          <div className="project">
            <a href=" https://jwilkins48.github.io/memory-game/">
              {/* <img
                className="projectPicture"
                src={picture4}
                alt="profile"
              ></img> */}
              <div className="projectDescription">
                <p>
                  <span className="projectNameDesc">Pet Adoption</span> - HTML5
                  - CSS3 - React - API
                </p>
              </div>
            </a>
          </div>

          <div className="project">
            <a href="">
              {/* <img
                className="projectPicture"
                src={picture5}
                alt="profile"
              ></img> */}
              <div className="projectDescription">
                <p>
                  <span className="projectNameDesc">Personal Blog</span> - HTML5
                  - CSS3 - React - Firebase
                </p>
              </div>
            </a>
          </div>

          <div className="project">
            <a href="">
              {/* <img
                className="projectPicture"
                src={picture6}
                alt="profile"
              ></img> */}
              <div className="projectDescription">
                <p>
                  <span className="projectNameDesc">To Do List</span> - HTML5 -
                  CSS3 - React
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
