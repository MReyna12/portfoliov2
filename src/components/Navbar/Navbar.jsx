import React from "react";
import { useState } from "react";
import logo from "/mr-icon.png";

function Navbar() {
  // Manage the active state of the hamburger menu so as to display the X instead of the three lines
  // and the resume button when the hamburger button is clicked
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-info is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="MR initials" />
          </a>

          <a
            onClick={() => setIsActive(!isActive)}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a
                  href="/resume.pdf"
                  download="/resume.pdf"
                  className="button is-primary"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
