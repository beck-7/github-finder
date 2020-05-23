import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import GitHubIcon from "@material-ui/icons/GitHub";

import { ButtonAppBar } from "./ButtonAppBar";

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.link} tabIndex="-1">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <GitHubIcon />
            </IconButton>
          </Link>
          <Typography variant="h5" className={classes.title}>
            <Link to="/" className={classes.link} tabIndex="-1">
              <IconButton edge="start" color="inherit" aria-label="menu">
                Github Finder
              </IconButton>
            </Link>
          </Typography>
          <div className={classes.nav}>
            <Link to="/" className={classes.link} tabIndex="-1">
              <Button className={classes.buttonText}>Home</Button>
            </Link>
            <Link to="/about" className={classes.link} tabIndex="-1">
              <Button className={classes.buttonText}>About</Button>
            </Link>
          </div>
          <ButtonAppBar />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 100,
  },
  toolbar: {
    minHeight: 75,
    margin: "0 25px",
    [theme.breakpoints.down("xs")]: {
      margin: 0,
    },
  },
  nav: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
}));
