import React from "react";
import { Card, CardTitle, Button, CardActions, CardText } from "react-mdl";

const Projects = () => {
  return (
    <div className="container">
      <div className="projects-grid">
        <div className="project-item">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle style={{ color: "#000", height: "176px" }}>
              React{" "}
            </CardTitle>
            <CardText>
              Hello this is a sample react project description. This is dummy
              text and actually does not have any meaning of its own.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
        </div>
        <div className="project-item">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle style={{ color: "#000", height: "176px" }}>
              React{" "}
            </CardTitle>
            <CardText>
              Hello this is a sample react project description. This is dummy
              text and actually does not have any meaning of its own.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
        </div>
        <div className="project-item">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle style={{ color: "#000", height: "176px" }}>
              React{" "}
            </CardTitle>
            <CardText>
              Hello this is a sample react project description. This is dummy
              text and actually does not have any meaning of its own.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
