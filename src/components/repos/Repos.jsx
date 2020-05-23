import React from "react";
import { useSelector } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";

import { RepoItem } from "./RepoItem";
import { Spinner } from "../layout/Spinner";

export const Repos = () => {
  const classes = useStyles();

  const [repos, loading] = useSelector((state) => [
    state.gh.repos,
    state.gh.loading,
  ]);

  if (loading) return <Spinner />;

  return (
    <Grid container spacing={0} className={classes.grid}>
      {repos.map((repo) => (
        <Grid item xs={12} sm={6} lg={6} xl={3} key={repo.id}>
          <RepoItem repo={repo} />
        </Grid>
      ))}
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  grid: {
    margin: "20px 0",
  },
}));
