import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  cardMedia: {
    height: 70,
    width: 70,
    borderRadius: "50%",
    margin: "0 auto",
  },
  cardContent: {
    margin: "0 auto",
    textAlign: "center",
    paddingTop: 15,
    textDecoration: "none",
  },
}));

const UserItem = (props) => {
  const classes = useStyles();
  const { login, avatar_url } = props.user;
  return (
    <div className={classes.root}>
      <Card className={classes.cardContent}>
        <CardMedia image={avatar_url} className={classes.cardMedia} />
        <CardContent style={{ paddingBottom: 0 }}>
          <Typography variant="h5">{login}</Typography>
        </CardContent>
        <CardActions style={{ paddingTop: 0 }}>
          <Link to={`/user/${login}`} className={classes.cardContent}>
            <Button size="small" color="primary" variant="contained">
              More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default UserItem;
