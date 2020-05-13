import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 100,
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  toolbar: {
    minHeight: 75,
    margin: "0 25px",
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

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <GitHubIcon />
          </IconButton>

          <Typography variant="h5" className={classes.title} tabIndex="-1">
            <IconButton edge="start" color="inherit" aria-label="menu">
              Github Finder
            </IconButton>
          </Typography>
          <div>
            <Button className={classes.buttonText}>Home</Button>
            <Button className={classes.buttonText}>About</Button>
            <Button className={classes.buttonText}>Sign In</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
