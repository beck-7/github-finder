import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextField, Button, makeStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import {
  searchUsers,
  searchRepos,
  clearUsers,
  clearRepos,
} from "../../actions/githubActions";
import { setAlert } from "../../actions/alertActions";

const Search = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const users = useSelector((state) => state.gh.users);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      dispatch(setAlert("Please enter something"));
    } else {
      dispatch(searchUsers(text));
      dispatch(searchRepos(text));
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  const handleClear = () => {
    dispatch(clearUsers(text));
    dispatch(clearRepos(text));
  };

  const useStyles = makeStyles(() => ({
    input: {
      margin: "0 0 20px 0",
    },
    searchBtn: {
      backgroundColor: "#333",
      color: "#fff",
      marginBottom: 10,
      "&:hover": {
        backgroundColor: "#484848",
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <form onSubmit={onSubmit} autoComplete="off">
        <TextField
          label="Search..."
          fullWidth={true}
          onChange={onChange}
          value={text}
          className={classes.input}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          className={classes.searchBtn}
        >
          Search
        </Button>
      </form>
      {users.length > 0 && (
        <Button
          onClick={handleClear}
          variant="contained"
          fullWidth={true}
          color="secondary"
        >
          Clear
        </Button>
      )}
    </>
  );
};

export default Search;
