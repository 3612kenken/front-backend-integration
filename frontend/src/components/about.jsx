import React from "react";
import Nav from "./nav";
import Footer from "./footer";

export default function About() {
  return (
    <>
      <section>
        <br />
        <br /> <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <span className="text-muted">Kenz's Story</span>
              <h2 className="display-5 fw-bold">About Us</h2>
              <p className="lead">
                I am a software engineer with a passion for building web
                applications.
              </p>
            </div>
            <div className="col-md-6 offset-md-1">
              <p className="lead">
                I have experience in various programming languages and
                frameworks, and I enjoy learning new technologies. I am always
                looking for opportunities to improve my skills and contribute to
                exciting projects.
              </p>
              <p className="lead">
                I am currently working on a project that involves building a web
                application using React and Node.js. I am excited to share my
                progress and learn from others in the community.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </section>

      <Footer />
    </>
  );
}
