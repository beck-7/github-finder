import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
  makeStyles,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import { getUser } from "../../actions/githubActions";
import Spinner from "../layout/Spinner";

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
  },
  card1: {
    margin: "20px auto 0 auto",
    padding: " 25px 10% 10px 10%",
  },
  cardMedia: {
    height: 170,
    width: 170,
    borderRadius: "50%",
  },
  listItem: {
    padding: 0,
  },
  fwBold: {
    fontWeight: "bold",
  },
}));

const User = ({ match }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.gh.user);
  const loading = useSelector((state) => state.gh.loading);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getUser(match.params.login));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;
  return (
    <Container maxWidth="md">
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
          <span style={{ marginRight: 5 }}>Hirable:</span>
          {hireable ? <CheckCircleIcon /> : <CancelIcon color="secondary" />}
        </Typography>
        <Card className={classes.card1}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} lg={6} xl={6}>
              <CardMedia
                component="img"
                image={avatar_url}
                className={classes.cardMedia}
              />
              <CardContent style={{ paddingBottom: 0 }}>
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
                <>
                  <Typography variant="h5">
                    <span className={classes.fwBold}>Bio</span>
                  </Typography>
                  <Typography variant="subtitle1">{bio}</Typography>
                </>
              )}
              <CardActions style={{ paddingLeft: 0 }}>
                <Link href={html_url} target="_blank" rel="noreferrer">
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
                      <Link href={blog} target="_blank" rel="noreferrer">
                        {blog}
                      </Link>
                    </ListItemText>
                  </ListItem>
                )}
              </List>
            </Grid>
          </Grid>
        </Card>
      </div>
    </Container>
  );
};

export default User;
