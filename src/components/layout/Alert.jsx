import React from "react";
import { useSelector } from "react-redux";
import { Alert as MuiAlert } from "@material-ui/lab";
import { Container, makeStyles } from "@material-ui/core";

export const Alert = () => {
  const classes = useStyles();

  const alert = useSelector((state) => state.alert);

  if (alert === null) return null;

  return (
    <Container maxWidth="md">
      <MuiAlert severity="error" className={classes.alert}>
        {alert.msg}
      </MuiAlert>
    </Container>
  );
};

const useStyles = makeStyles(() => ({
  alert: {
    margin: "30px 0 15px 0",
  },
}));
