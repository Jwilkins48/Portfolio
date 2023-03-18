import React from "react";

function Contact() {
  return (
    <section id="contactMe" className="contactContainer h-screen">
      <div className="contactBox w-[21rem] md:pb-0 h-[25rem] mx-1 lg:w-[45rem]">
        <h1 className="contactHeader text-[40px] lg:text-[70px] font-bold">
          Interested?
        </h1>
        <div className="contactHeadersContainer">
          <p>
            <a href="mailto: Jenna48071@gmail.com">Send me an email</a> or check
            out my socials below
          </p>
        </div>

        <div className="contactIconContainer">
          <a href="https://github.com/Jwilkins48">
            <i className="devicon-github-original"></i>
          </a>
          <a href="mailto: Jenna48071@gmail.com">
            <i className="fa-regular fa-envelope mb-1"></i>
          </a>
          <a href="https://twitter.com/Jenna682">
            <i className="devicon-twitter-original"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
