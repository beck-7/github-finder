import React, { useState } from "react";
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
          <Button className={classes.buttonText}>Home</Button>
        </MenuItem>
        <MenuItem onClose={handleClose}>
          <Button className={classes.buttonText}>About</Button>
        </MenuItem>
        <MenuItem onClose={handleClose}>
          <Button className={classes.buttonText}>Sign In</Button>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ButtonAppBar;
