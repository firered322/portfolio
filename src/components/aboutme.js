import React from "react";

const Aboutme = () => (
  <div className="container">
    <h2 className="text-center">Hi, I am Atul</h2>
    <hr />
    <div className="about-info">
      <p>
        I am a Software Developer based in Mumbai. I hold a bachelors in
        Electronics and Communication Engineering from SRM Institute of Science
        and Technology and have over 2 years of professional experience.
      </p>
      <p>
        I have worked in a startup environment as well medium sized corporation.
        In my career I have developed, maintained and launched multiple projects
        from scratch or improved an existing code base. I like to share my
        knowledge with others. Therefore, I also try to share most of my
        projects via{" "}
        <a href="https://github.com/firered322" target="blank">
          Github
        </a>
        .
      </p>
      <p>
        I do Full Stack Web Developer using MongoDB, Express, React, Node.js
        (MERN) and Django. I am experienced in building CRUD applications,
        RESTful APIs using Node.js and express, User Authentication with with
        OAuth using PassportJS. My common libraries of use are Axios, Mongoose
        and Express. Common UI libraries: Bootstrap, Tailwind CSS and
        Materialize.
      </p>
      <div className="text-center">
        <h3 className="text-center">CONTACT ME</h3>
        <div className="contact-holder">
          <div className="contact-field">
            <p>Phone:</p>
            <i class="fa fa-phone fa-2x" aria-hidden="true"></i>
            <p>(91) 9791-147-004</p>
          </div>
          <div className="contact-field">
            <p>E-mail:</p>
            <i class="fas fa-envelope fa-2x"></i>
            <p>atulsingh1396@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Aboutme;
