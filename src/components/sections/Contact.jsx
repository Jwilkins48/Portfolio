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
            <a href="mailto: JwilkinsDev@gmail.com">Send me an email</a> or
            check out my socials below
          </p>
        </div>

        <div className="contactIconContainer">
          <a target="_blank" href="https://github.com/Jwilkins48">
            <i className="devicon-github-original" />
          </a>
          <a target="_blank" href="mailto: JwilkinsDev@gmail.com">
            <i className="fa-regular fa-envelope mb-1" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/jenna-wilkins-109aa126b/"
          >
            <i className="devicon-linkedin-plain" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
