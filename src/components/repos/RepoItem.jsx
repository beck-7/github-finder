import React from "react";
import {
  Button,
  Typography,
  Link,
  Card,
  CardActions,
  CardContent,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  card: {
    margin: "0 auto",
    textAlign: "center",
    paddingTop: 15,
    textDecoration: "none",
  },
}));

const starsCount = (n) => {
  if (n > 10000) {
    return `${Math.round(n / 1000)}k`;
  } else if (n > 1000) {
    return `${Math.round(n / 100) / 10}k`;
  } else {
    return n;
  }
};

const RepoItem = ({ repo }) => {
  const classes = useStyles();
  const { full_name, html_url, language, stargazers_count } = repo;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent style={{ paddingBottom: 0 }}>
          <Typography color="primary" variant="h5">
            {full_name}
          </Typography>
          <Typography variant="subtitle1">{language}</Typography>
          {stargazers_count > 0 && (
            <Typography variant="body1">
              {starsCount(stargazers_count)} stars
            </Typography>
          )}
        </CardContent>
        <CardActions style={{ paddingTop: 0 }}>
          <Link
            href={html_url}
            target="_blank"
            rel="noreferrer"
            className={classes.card}
          >
            <Button size="small" color="primary" variant="contained">
              View Code
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default RepoItem;
