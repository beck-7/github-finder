import React from "react";
import { useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";
import UserItem from "./UserItem";

const Users = () => {
  const useStyles = makeStyles(() => ({
    grid: {
      margin: "20px 0",
    },
  }));
  const classes = useStyles();

  const users = useSelector((state) => state.gh.users);

  return (
    <Grid container spacing={0} className={classes.grid}>
      {users.map((user) => (
        <Grid item xs={12} sm={6} lg={4} xl={3} key={user.id}>
          <UserItem user={user} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Users;
