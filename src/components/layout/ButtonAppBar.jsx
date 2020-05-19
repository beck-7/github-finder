import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  makeStyles,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    boxShadow: "none",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  buttonText: {
    color: "#000",
    fontWeight: "normal",
  },
}));

const ButtonAppBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <IconButton onClick={handleClick}>
        <HomeIcon />
      </IconButton>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose} keepMounted>
        <MenuItem onClose={handleClose}>
          <Link to="/" className={classes.link} onClose={handleClose}>
            <Button className={classes.buttonText}>Home</Button>
          </Link>
        </MenuItem>
        <MenuItem onClose={handleClose}>
          <Link to="/about" className={classes.link}>
            <Button className={classes.buttonText}>About</Button>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ButtonAppBar;
