import React from "react";
import { Tooltip, Typography } from "@material-ui/core";

const Landing = () => (
  <div className="landing-holder">
    <div className="landing-container">
      <Typography variant="h3">Hi, I am Atul</Typography>
      <br />
      <Typography variant="h4">I am a Full Stack Developer</Typography>
      <br />
      <Typography variant="h5">
        JavaScript | NodeJS | Express | React | MongoDB | Python | PostgreSQL
      </Typography>
    </div>
    <div className="social-media-holder">
      <Tooltip title="LinkedIn">
        <a
          href="https://www.linkedin.com/in/atul-singh-464265128/"
          target="blank"
        >
          <i style={{ color: "#2e73ab" }} className="fab fa-linkedin fa-2x"></i>
        </a>
      </Tooltip>
      <Tooltip title="Github">
        <a href="https://github.com/firered322" target="blank">
          <i style={{ color: "#000000" }} className="fab fa-github fa-2x"></i>
        </a>
      </Tooltip>
      <Tooltip title="Email">
        <a href="mailto:atulsingh1396@gmail.com" target="blank">
          <i style={{ color: "#f44336" }} className="fas fa-envelope fa-2x"></i>
        </a>
      </Tooltip>
    </div>
  </div>
);

export default Landing;
