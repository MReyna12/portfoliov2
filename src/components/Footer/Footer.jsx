import React from "react";
import logo from "/mr-icon.png";

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
        <div className="social-icons">
          <p className="field">
            <a
              className="button is-medium"
              href="https://twitter.com/farleymatters"
              target="_blank"
            >
              <span className="icon is-small"></span>
            </a>
            <a
              className="button is-medium"
              href="https://dribbble.com/mattfarley"
              target="_blank"
            >
              <span className="icon is-small">
                <i className="fab fa-dribbble fa-fw"></i>
              </span>
            </a>
            <a
              className="button is-medium"
              href="https://linkedin.com/in/matthew-farley-32526014/"
              target="_blank"
            >
              <span className="icon is-small">
                <i className="fab fa-linkedin-in fa-fw"></i>
              </span>
            </a>
            <a
              className="button is-medium"
              href="https://indiehackers.com/mattfarley"
              target="_blank"
            >
              <span className="icon is-small">
                <i className="fak fa-indie-hackers fa-fw"></i>
              </span>
            </a>
            <a
              className="button is-medium"
              href="https://indiehackers.com/mattfarley"
              target="_blank"
            >
              <span className="icon is-small">
                <i className="fab fa-product-hunt fa-fw"></i>
              </span>
            </a>
            <a className="button is-medium" href="mailto:mattfarley@hey.com">
              <span className="icon is-small">
                <i className="far fa-envelope fa-fw"></i>
              </span>
            </a>
          </p>
        </div>
        <div className="copyright">
          Handcrafted by me
          <span className="icon has-white-text">
            <i className="far fa-copyright"></i>
          </span>
          twentytwentytwo
        </div>
      </div>
    </footer>
  );
}

export default Footer;
