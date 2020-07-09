import React from "react";
import PropTypes from "prop-types";
import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Particles from "react-particles-js";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";
import Routes from "./components/routes";

const styles = {
  list: {
    width: 250,
  },
  paper: {
    background: "#1f3b4d",
  },
};

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

function App(props) {
  const classes = useStyles();

  const [toggleState, setToggleState] = React.useState(false);

  const toggleDrawer = () => {
    setToggleState(!toggleState);
    console.log("hi", toggleState);
  };

  return (
    <div>
      <AppBar position="static" className="navbar-header">
        <Toolbar>
          <IconButton
            onClick={toggleDrawer}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Atul Singh
          </Typography>
          <Box display={{ xs: "none", md: "block" }}>
            <Button color="inherit" component={Link} to="/portfolio">
              Home
            </Button>
          </Box>
          <Box display={{ xs: "none", md: "block" }}>
            <Button color="inherit" component={Link} to="/aboutme">
              About Me
            </Button>
          </Box>
          <Box display={{ xs: "none", md: "block" }}>
            <Button color="inherit" component={Link} to="/projects">
              Projects
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{ paper: props.classes.paper }}
        color="primary"
        open={toggleState}
      >
        <div>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon fontSize="large" style={{ color: "white" }} />
          </IconButton>
        </div>
        <div className="drawerIcons">
          <Button
            onClick={toggleDrawer}
            color="inherit"
            component={Link}
            to="/portfolio"
          >
            Home
          </Button>
          <br />
          <Button
            onClick={toggleDrawer}
            color="inherit"
            component={Link}
            to="/aboutme"
          >
            About Me
          </Button>
          <br />
          <Button
            onClick={toggleDrawer}
            color="inherit"
            component={Link}
            to="/projects"
          >
            Projects
          </Button>
        </div>
      </Drawer>
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

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
