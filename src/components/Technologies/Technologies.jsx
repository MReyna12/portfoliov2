import React from "react";
import jsIcon from "/js.png";
import html from "/html.png";
import css from "/css.png";
import reactLogo from "/react.png";
import nodeLogo from "/node.png";
import postman from "/postman.png";
import bulmaLogo from "/bulma.png";
import mongoLogo from "/mongo.png";
import github from "/github.png";
import git from "/git.png";
import vite from "/vite.png";

function Technologies() {
  return (
    <section className="section has-text-centered shift-up">
      <div className="container">
        <div className="box has-background-danger-light p-6">
          <div className="content">
            <h1 className="title is-2">Familiar Technologies</h1>
            <div className="columns is-centered">
              <div className="column">
                <h2 className="title is-size-4 is-spaced">Core</h2>
                <img src={jsIcon} alt="JavaScript icon" />
                <img src={html} alt="HTML5 icon" />
                <img src={css} alt="CSS3 icon" />
              </div>
              <div className="column">
                <h2 className="title is-size-4 is-spaced">Frontend</h2>
                <img src={reactLogo} alt="React icon" />
              </div>
              <div className="column">
                <h2 className="title is-size-4 is-spaced">Styling</h2>
                <img src={bulmaLogo} alt="Bulma icon" />
              </div>
              <div className="column">
                <h2 className="title is-size-4 is-spaced">Backend</h2>
                <img src={nodeLogo} alt="Node icon" />
                <img src={postman} alt="Postman icon" />
                <img src={mongoLogo} alt="MongoDB icon" />
              </div>
              <div className="column">
                <h2 className="title is-size-4 is-spaced">Utilities</h2>
                <img src={github} alt="Github icon" />
                <img src={git} alt="Git icon" />
                <img src={vite} alt="Vite icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
