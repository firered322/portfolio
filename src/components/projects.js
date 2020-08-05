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
    height: 250,
  },
});

const Projects = () => {
  const classes = useStyles();
  return (
    <div className="project-holder">
      <div className="project-heading">
        <Typography className="text-center" variant="h4">
          Here are some of my creations
        </Typography>
      </div>

      <div className="project-container">
        <div className="projects-grid">
          <div className="project-item">
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={require("../static/hackernews.PNG")}
                  title="Hacker News clone"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Hackernewzzz
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    A hacker news clone made using React and the Hacker News
                    API. It uses infinity scrolling to render components.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <Link
                    target="_blank"
                    href="https://hackernewzzz.herokuapp.com/"
                    color="inherit"
                  >
                    <Typography className="black-text" variant="small">
                      View Live
                    </Typography>
                  </Link>
                </Button>
                <Button size="small" color="primary">
                  <Link
                    target="_blank"
                    href="https://github.com/firered322/hackerNews"
                    color="inherit"
                  >
                    <Typography
                      className="black-text"
                      variant="small black-text"
                    >
                      View Code
                    </Typography>
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
                  image={require("../static/coroneye.PNG")}
                  title="Covid-19 Tracker"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    CoronEye
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    A live COVID-19 trackers which displays the live statistics
                    of the the cases, recovery and deceased count. It has a
                    section for India specific data.
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
                    <Typography className="black-text" variant="small">
                      View Live
                    </Typography>
                  </Link>
                </Button>
                <Button size="small" color="primary">
                  <Link
                    target="_blank"
                    href="https://github.com/firered322/coronEye"
                    color="inherit"
                  >
                    <Typography className="black-text" variant="small">
                      View Code
                    </Typography>
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    A web app which shows the data for movies and actors from
                    the TMDB API. It provides a search functionality to search
                    for movies and actors and displayes data for them
                    accordingly.
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
                    <Typography className="black-text" variant="small">
                      View Live
                    </Typography>
                  </Link>
                </Button>
                <Button size="small" color="primary">
                  <Link
                    target="_blank"
                    href="https://github.com/firered322/movieApp"
                    color="inherit"
                  >
                    <Typography className="black-text" variant="small">
                      View Code
                    </Typography>
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    A social media platform on which users can sign in using
                    OAuth and add stories to share. The user can make a story
                    public or private which is accessible to everyone
                    accordingly.
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
                    <Typography className="black-text" variant="small">
                      View Code
                    </Typography>
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
