import React from "react";
import "./App.css";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "react-particles-js";

import { Link } from "react-router-dom";
import Routes from "./components/routes";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className="navbar-header">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Atul Singh
          </Typography>
          <Button color="inherit" component={Link} to="/portfolio">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/aboutme">
            About Me
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button>
          <Button color="inherit" component={Link} to="/resume">
            Resume
          </Button>
        </Toolbar>
      </AppBar>
      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 60,
            },
            size: {
              value: 1,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default App;
