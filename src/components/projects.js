import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Projects = () => {
  const classes = useStyles();
  return (
    <div className="container">
      <div className="projects-grid">
        <div className="project-item">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require("../static/coroneye.PNG")}
                title="Covid-19 Tracker"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  CoronEye
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A live COVID-19 trackers which displays the live statistics of
                  the the cases, recovery and deceased count. It has a section
                  for India specific data.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link
                  target="_blank"
                  href="http://coroneye.herokuapp.com/"
                  color="inherit"
                >
                  <Typography variant="small">View Live</Typography>
                </Link>
              </Button>
              <Button size="small" color="primary">
                <Link
                  target="_blank"
                  href="https://github.com/firered322/coronEye"
                  color="inherit"
                >
                  <Typography variant="small">View Code</Typography>
                </Link>
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="project-item">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require("../static/movieszzapp.PNG")}
                title="Movies and actors database"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Moviezzz
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A web app which shows the data for movies and actors from the
                  TMDB API. It provides a search functionality to search for
                  movies and actors and displayes data for them accordingly.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link
                  target="_blank"
                  href="https://moviezzzapp.herokuapp.com/"
                  color="inherit"
                >
                  <Typography variant="small">View Live</Typography>
                </Link>
              </Button>
              <Button size="small" color="primary">
                <Link
                  target="_blank"
                  href="https://github.com/firered322/movieApp"
                  color="inherit"
                >
                  <Typography variant="small">View Code</Typography>
                </Link>
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="project-item">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require("../static/storybook.PNG")}
                title="Story based blogs"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  StoryBook
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A social media platform on which users can sign in using OAuth
                  and add stories to share. The user can make a story public or
                  private which is accessible to everyone accordingly.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                <Link
                  target="_blank"
                  href="https://github.com/firered322/storybook"
                  color="inherit"
                >
                  <Typography variant="small">View Code</Typography>
                </Link>
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
