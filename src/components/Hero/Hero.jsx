import React from "react";
import michael from "/reyna-michael.jpg";

function Hero() {
  return (
    <section className="hero is-white has-text-centered">
      <div className="hero-body">
        <div className="container">
          <div className="">
            <div className=" is-flex is-flex-direction-column is-align-items-center">
              <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
                Developer &amp; Former Attorney
              </h1>
              <h2 className="subtitle is-size-4-tablet">
                Solution focused and detail-oriented software engineer
              </h2>
              <figure className="headshot">
                <img
                  src={michael}
                  alt="Headshot of Michael Reyna smiling while wearing a navy-colored suit and red tie with blue stripes throughout"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
