import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Container,
  Button,
  Link,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Chip,
  makeStyles,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

import { getUser, getUserRepos } from "../actions/githubActions";
import { Spinner } from "../components/layout/Spinner";
import { UserRepos } from "../components/users/user_repos/UserRepos";

export const User = ({ match }) => {
  const dispatch = useDispatch();

  const [user, userRepos, loading] = useSelector((state) => [
    state.gh.user,
    state.gh.userRepos,
    state.gh.loading,
  ]);

  const classes = useStyles();

  useEffect(() => {
    dispatch(getUser(match.params.login));
    dispatch(getUserRepos(match.params.login));
  }, [dispatch, match]);

  const {
    name,
    company,
    avatar_url: avatarUrl,
    location,
    bio,
    blog,
    login,
    html_url: htmlUrl,
    followers,
    following,
    public_repos: publicRepos,
    public_gists: publicGists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Container>
      <div className={classes.root}>
        <RouterLink to="/" className={classes.link} tabIndex={-1}>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            Back to Search
          </Button>
        </RouterLink>
        <Typography
          variant="subtitle2"
          display="inline"
          className={classes.hire}
        >
          <span>Hirable:</span>
          {hireable ? (
            <CheckCircleIcon className={classes.checkIcon} alt="Hirable" />
          ) : (
            <CancelIcon color="secondary" alt="Not hirable" />
          )}
        </Typography>
        <Card className={classes.card}>
          <Grid container spacing={0} justify="center" alignItems="center">
            <Grid item xs={12} sm={6} lg={6} xl={6} align="center">
              <CardMedia
                component="img"
                image={avatarUrl}
                className={classes.cardMedia}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="h5">
                  <span className={classes.fwBold}>{name}</span>
                </Typography>
                <Typography variant="subtitle1">
                  Location: {location}
                </Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={6} lg={6} xl={6}>
              {bio && (
                <div className={classes.bio}>
                  <Typography variant="h5">
                    <span className={classes.fwBold}>Bio</span>
                  </Typography>
                  <Typography variant="subtitle1">{bio}</Typography>
                </div>
              )}
              <CardActions className={classes.cardActions}>
                <Link
                  href={htmlUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  tabIndex={-1}
                >
                  <Button
                    size="medium"
                    color="primary"
                    variant="contained"
                    className={classes.button}
                  >
                    Visit Github Profile
                  </Button>
                </Link>
              </CardActions>
              <List component="ul">
                <ListItem className={classes.listItem}>
                  <ListItemText>
                    <span className={classes.fwBold}>Username: </span>
                    {login}
                  </ListItemText>
                </ListItem>

                {company && (
                  <ListItem className={classes.listItem}>
                    <ListItemText>
                      <span className={classes.fwBold}>Company: </span>
                      {company}
                    </ListItemText>
                  </ListItem>
                )}

                {blog && (
                  <ListItem className={classes.listItem}>
                    <ListItemText>
                      <span className={classes.fwBold}>Website: </span>
                      <Link
                        href={blog}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        {blog}
                      </Link>
                    </ListItemText>
                  </ListItem>
                )}
              </List>
            </Grid>
          </Grid>
        </Card>
        <Card className={classes.cardBadge}>
          <Chip label={`Followers: ${followers}`} color="secondary" />
          <Chip label={`Following: ${following}`} color="primary" />
          <Chip label={`Public Repos: ${publicRepos}`} color="secondary" />
          <Chip label={`Public Gists: ${publicGists}`} />
        </Card>
        <UserRepos userRepos={userRepos} />
      </div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0),
    },
  },
  link: {
    textDecoration: "none",
  },
  button: {
    textTransform: "capitalize",
  },
  hire: {
    display: "inline-flex",
    alignItems: "center",
    marginLeft: 10,
    "&>*": {
      marginRight: 5,
    },
  },
  card: {
    margin: "20px auto",
    padding: " 20px 5%",
  },
  cardContent: {
    paddingBottom: 0,
  },
  cardBadge: {
    margin: "20px auto",
    padding: " 20px 5%",
    textAlign: "center",
    "& >*": {
      margin: theme.spacing(1),
    },
  },
  cardMedia: {
    height: 160,
    width: 160,
    borderRadius: "50%",
  },
  cardActions: {
    paddingLeft: 0,
  },
  listItem: {
    padding: 0,
  },
  bio: {
    marginTop: 10,
  },
  checkIcon: {
    color: "#28a745",
  },
  fwBold: {
    fontWeight: "bold",
  },
}));
