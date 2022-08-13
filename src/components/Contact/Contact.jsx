import React from "react";

function Contact() {
  return (
    <section className="section call-to-action is-primary has-text-centered has-background-info">
      <div className="container is-narrow">
        <div className="box">
          <div className="columns level">
            <div className="column level-item">
              <h2 className="title">Contact me</h2>
            </div>
            <div className="column level-item">
              <p>Interested in chatting? Let's setup a time to talk.</p>
            </div>
            <div className="column level-item">
              <a
                className="button is-success is-outlined is-rounded is-medium"
                href="mailto:mreyna12@live.com"
              >
                <span>Coffee Time</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
