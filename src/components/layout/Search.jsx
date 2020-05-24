import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, TextField, Button, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {
  searchUsers,
  searchRepos,
  clearUsers,
  clearRepos,
} from "../../actions/githubActions";
import { setAlert } from "../../actions/alertActions";

export const Search = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const [users, repos] = useSelector((state) => [
    state.gh.users,
    state.gh.repos,
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return dispatch(setAlert("Please enter something"));
    }
    dispatch(searchUsers(text));
    dispatch(searchRepos(text));
    setText("");
  };

  const onChange = (e) => setText(e.target.value);

  const handleClear = () => {
    dispatch(clearUsers(text));
    dispatch(clearRepos(text));
  };

  const classes = useStyles();

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={9} sm={11} lg={11} xl={11}>
          <TextField
            label="Search..."
            fullWidth={true}
            onChange={onChange}
            value={text}
            className={classes.input}
          />
        </Grid>
        <Grid item xs={3} sm={1} lg={1} xl={1}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth={true}
            className={classes.searchBtn}
          >
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
      {(users.length > 0 || repos.length > 0) && (
        <Button
          onClick={handleClear}
          color="secondary"
          className={classes.clearBtn}
        >
          Clear
        </Button>
      )}
    </form>
  );
};

const useStyles = makeStyles(() => ({
  input: {
    margin: "0 0 20px 0",
  },
  searchBtn: {
    color: "#fff",
    marginBottom: 10,
  },
  clearBtn: {
    float: "right",
    marginTop: 6,
  },
}));
