import React from "react";
import teachers from "/teacher.png";
import quizzical from "/quizzical.png";
import nba from "/nba.png";
import github from "/github.png";
import businessCard from "/business-card.png";

function Project() {
  return (
    <section className="section projects is-medium is-white has-text-centered">
      <div className="container is-narrow">
        <h1 className="title is-spaced is-size-2-desktop is-size-4-mobile">
          Projects
        </h1>
        <p className="subtitle is-size-4-desktop">
          Please take a look at some of my recent projects.
        </p>
        <div className="project-grid">
          <div className="columns is-multiline is-mobile">
            <div className="column is-half-tablet">
              <figure className="project-figures image is-3by2">
                <img
                  className="project-thumbnail"
                  src={teachers}
                  alt="Screenshot of the home page of texas teacher salaries website"
                />
                <figcaption className="project-figcaption">
                  <h3 className="title is-size-5 is-size-4-widescreen has-text-light">
                    New hire teacher salary and school distriction information
                    for Texas school districts.
                  </h3>
                  <a
                    className="button is-primary is-outlined has-text-white is-rounded my-0 mx-auto"
                    href="https://texas-teacher-salaries.vercel.app/"
                    target="_blank"
                  >
                    <span>Visit Website</span>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="column is-half-tablet">
              <figure className="project-figures image is-3by2">
                <img
                  className="project-thumbnail"
                  src={quizzical}
                  alt="screenshot of the quizzical trivia game website"
                />
                <figcaption className="project-figcaption">
                  <h3 className="title is-size-5 is-size-4-widescreen has-text-light">
                    Trivia quiz game that asks users to answer five questions
                    covering a variety of topics.
                  </h3>
                  <a
                    className="button is-primary is-outlined is-rounded has-text-white my-0 mx-auto"
                    href="https://quizzical-mr.netlify.app/"
                    target="_blank"
                  >
                    <span>Visit Website</span>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="column is-half-tablet">
              <figure className="project-figures image is-3by2">
                <img
                  className="project-thumbnail"
                  src={businessCard}
                  alt="Screenshot of the a digital business card for Michael Reyna"
                />
                <figcaption className="project-figcaption">
                  <h3 className="title is-size-5 is-size-4-widescreen has-text-light">
                    Simple digital business card built with React.
                  </h3>
                  <a
                    className="button is-primary is-outlined has-text-white is-rounded my-0 mx-auto"
                    href="https://michael-reyna-digital-business-card.netlify.app/"
                    target="_blank"
                  >
                    <span>Visit Website</span>
                  </a>
                </figcaption>
              </figure>
            </div>
            <div className="column is-half-tablet">
              <figure className="project-figures image is-3by2">
                <img className="project-thumbnail" src={nba} />
                <figcaption className="project-figcaption">
                  <h3 className="title is-size-5 is-size-4-widescreen has-text-white">
                    Find 2021-2022 regular season NBA stats for the starting
                    five of all 30 NBA teams.
                  </h3>
                  <a
                    className="button is-primary is-outlined is-rounded has-text-white my-x mx-auto"
                    href="https://mreyna12.github.io/nbaStats/"
                    target="_blank"
                  >
                    <span>Visit Website</span>
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column mb-6">
            <a
              className="button is-primary is-outlined is-rounded is-medium"
              href="https://github.com/MReyna12"
            >
              <span className="icon">
                <img src={github} alt="" />
              </span>
              <span>See more on Github</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
