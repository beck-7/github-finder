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
import StarRateIcon from "@material-ui/icons/StarRate";

export const RepoItem = ({ repo }) => {
  const classes = useStyles();

  const {
    full_name: fullName,
    html_url: htmlUrl,
    language,
    stargazers_count: stargazersCount,
  } = repo;

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography color="primary" variant="h5">
            {fullName}
          </Typography>
          <Typography variant="subtitle1">{language}</Typography>
          {stargazersCount > 0 && (
            <Typography variant="body2" className={classes.starsCount}>
              {starsCount(stargazersCount)}
              <StarRateIcon color="secondary" />
            </Typography>
          )}
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Link
            href={htmlUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={classes.card}
            tabIndex={-1}
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

const starsCount = (n) => {
  if (n > 10000) return `${Math.round(n / 1000)}k`;

  if (n > 1000) return `${Math.round(n / 100) / 10}k`;

  return n;
};

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
  cardContent: {
    paddingBottom: 0,
  },
  cardActions: {
    paddingTop: 0,
  },
  starsCount: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
}));
