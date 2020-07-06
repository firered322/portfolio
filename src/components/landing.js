import React from "react";
import { Tooltip, Typography } from "@material-ui/core";

const Landing = () => (
  <div>
    <div className="landing-container">
      <Typography variant="h2">Hi, I am Atul</Typography>
      <br />
      <Typography variant="h3">I am a Full Stack Developer</Typography>
      <br />
      <Typography variant="h4">
        JavaScript | NodeJS | Express | React | MongoDB | Python | PostgreSQL
      </Typography>
    </div>
    <div className="social-media-holder">
      <Tooltip title="LinkedIn">
        <a
          href="https://www.linkedin.com/in/atul-singh-464265128/"
          target="blank"
        >
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
      </Tooltip>
      <Tooltip title="Github">
        <a href="https://github.com/firered322" target="blank">
          <i class="fab fa-github fa-2x"></i>
        </a>
      </Tooltip>
      <Tooltip title="Email">
        <a href="mailto:atulsingh1396@gmail.com" target="blank">
          <i class="fas fa-envelope fa-2x"></i>
        </a>
      </Tooltip>
    </div>
  </div>
);

export default Landing;
