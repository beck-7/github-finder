import React from "react";
import { useSelector } from "react-redux";
import { Alert as MuiAlert } from "@material-ui/lab";
import { Container, makeStyles } from "@material-ui/core";

const Alert = () => {
  const useStyles = makeStyles(() => ({
    alert: {
      marginTop: 30,
    },
  }));
  const classes = useStyles();

  const alert = useSelector((state) => state.alert);

  return (
    alert !== null && (
      <Container maxWidth="md">
        <MuiAlert severity="error" className={classes.alert}>
          {alert.msg}
        </MuiAlert>
      </Container>
    )
  );
};

export default Alert;
