import React from "react";
import { Typography, Divider, Paper, Link } from "@material-ui/core";
import Tilt from "react-tilt";

const Aboutme = () => {
  return (
    <div className="container">
      <div className="aboutme-main">
        <Typography className="text-center" variant="h3">
          Hi, I am Atul
        </Typography>
        <Divider />
        <div className="about-info">
          <Typography variant="body1">
            I am a Software Developer based in Mumbai. I hold a bachelors in
            Electronics and Communication Engineering from SRM Institute of
            Science and Technology and have over 2 years of professional
            experience.
          </Typography>
          <br />
          <Typography variant="body1">
            I have worked in a startup environment as well medium sized
            corporation. In my career I have developed, maintained and launched
            multiple projects from scratch or improved an existing code base. I
            like to share my knowledge with others. Therefore, I also try to
            share most of my projects via{" "}
            <a href="https://github.com/firered322" target="blank">
              Github
            </a>
            .
          </Typography>
          <br />
          <Typography variant="body1">
            I do Full Stack Development using MongoDB, Express, React, Node.js
            (MERN) and Django. I am experienced in building CRUD applications,
            RESTful APIs using Node.js and Express, User Authentication with
            OAuth using PassportJS. My common libraries of use are Axios,
            Mongoose and Express. Common UI libraries: Bootstrap, Tailwind CSS
            and MaterialUI.
          </Typography>
        </div>
      </div>
      <Divider />
      <div className="text-center contact-section">
        <Typography className="text-center" variant="h5">
          Get in touch
        </Typography>
        <div className="contact-holder">
          <div className="contact-field">
            <Tilt className="Tilt" options={{ max: 40 }}>
              <div className="Tilt-inner">
                {" "}
                <Paper elevation={2} style={{ padding: 40 }}>
                  <Typography variant="h6">Phone:</Typography>
                  <br />
                  <i
                    style={{ color: "#512da8" }}
                    class="fa fa-phone fa-2x"
                    aria-hidden="true"
                  ></i>
                  <hr />
                  <Typography variant="body1">(91) 9791-147-004:</Typography>
                </Paper>{" "}
              </div>
            </Tilt>
          </div>
          <div className="contact-field">
            <Tilt className="Tilt" options={{ max: 40 }}>
              <div className="Tilt-inner">
                {" "}
                <Paper elevation={2} style={{ padding: 40 }}>
                  <Typography variant="h6">LinkedIn</Typography>
                  <br />
                  <i
                    style={{ color: "#2e73ab" }}
                    class="fab fa-linkedin fa-2x"
                    aria-hidden="true"
                  ></i>
                  <hr />
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/atul-singh-464265128/"
                    color="inherit"
                  >
                    <Typography variant="body1">LinkedIn Profile</Typography>
                  </Link>
                </Paper>{" "}
              </div>
            </Tilt>
          </div>
          <div className="contact-field">
            <Tilt className="Tilt" options={{ max: 40 }}>
              <div className="Tilt-inner">
                {" "}
                <Paper elevation={2} style={{ padding: 40 }}>
                  <Typography variant="h6">E-mail:</Typography>
                  <br />
                  <i
                    style={{ color: "#f44336" }}
                    class="fas fa-envelope fa-2x"
                  ></i>
                  <hr />
                  <Typography variant="body1">
                    atulsingh1396@gmail.com
                  </Typography>
                </Paper>{" "}
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
