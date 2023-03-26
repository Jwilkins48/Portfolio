function LeftSideBar() {
  return (
    <div className="leftIconInfo z-[1] lg:z-[3] left-2  lg:left-[23px] hidden sm:block">
      <ul>
        <li className="">
          <a href="https://github.com/Jwilkins48">
            <i className="devicon-github-original" />
          </a>
        </li>
        <li>
          <a href="mailto: Jenna48071@gmail.com">
            <i className="fa-regular fa-envelope mb-1" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jenna-wilkins-109aa126b/">
            <i className="devicon-linkedin-plain" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default LeftSideBar;
