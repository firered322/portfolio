import React from "react";
import { Tooltip } from "react-mdl";

const Landing = () => (
  <div>
    <div className="landing-container">
      <h2>Hi, I am Atul</h2>
      <h3>I am a Full Stack Developer</h3>
      <h4>
        JavaScript | NodeJS | Express | React | MongoDB | Python | PostgreSQL
      </h4>
    </div>
    <div className="social-media-holder">
      <Tooltip label="LinkedIn">
        <a
          href="https://www.linkedin.com/in/atul-singh-464265128/"
          target="blank"
        >
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
      </Tooltip>
      <Tooltip label="Github">
        <a href="https://github.com/firered322" target="blank">
          <i class="fab fa-github fa-2x"></i>
        </a>
      </Tooltip>
      <Tooltip label="Email">
        <a href="mailto:atulsingh1396@gmail.com" target="blank">
          <i class="fas fa-envelope fa-2x"></i>
        </a>
      </Tooltip>
    </div>
  </div>
);

export default Landing;
