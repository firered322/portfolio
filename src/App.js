import React from "react";
import "./App.css";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
    <div className="demo-big-content">
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
      <div>
        <div className="page-content"></div>
        <Routes />
      </div>
    </div>
  );
}

export default App;
