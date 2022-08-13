import React from "react";
import logo from "/mr-icon.png";
import linkedin from "/linkedin.png";
import github from "/github-small.png";
import twitter from "/twitter.png";
import email from "/email.png";

function Footer() {
  return (
    <footer className="section has-background-info is-small has-text-centered">
      <div className="container is-narrow">
        <a href="/">
          <img src={logo} alt="Michael Reyna's initials" className="mr-logo" />
        </a>
        <div className="columns is-centered">
          <div className="column is-one-third">
            <h2 className="title is-size-4 my-2 mx-auto under-logo-text has-text-weight-normal">
              Coding, learning, &amp; growing each and every day.
            </h2>
          </div>
        </div>
        <div className="social-icons mb-6">
          <div className="field">
            <a
              className="social-logo-container button is-medium mr-4"
              href="https://www.linkedin.com/in/michaelpreyna/"
              target="_blank"
            >
              <span className="icon">
                <img src={linkedin} alt="LinkedIn logo" />
              </span>
            </a>
            <a
              className="social-logo-container button is-medium mr-4"
              href="https://github.com/MReyna12"
              target="_blank"
            >
              <span className="icon">
                <img src={github} alt="Github logo" />
              </span>
            </a>
            <a
              className="social-logo-container button is-medium mr-4"
              href="https://twitter.com/michaelpreyna"
              target="_blank"
            >
              <span className="icon">
                <img src={twitter} alt="Twitter logo" />
              </span>
            </a>
            <a
              className="social-logo-container button is-medium"
              href="mailto:mreyna12@live.com"
            >
              <span className="icon">
                <img src={email} alt="Email logo" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
