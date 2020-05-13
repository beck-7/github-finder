import React, { useState } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";

const Search = () => {
  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value);

  const useStyles = makeStyles(() => ({
    input: {
      margin: "10px 0 20px 0",
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
      <form autoComplete="off">
        <TextField
          label="Search Users..."
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
      <Button variant="contained" fullWidth={true} color="secondary">
        Clear
      </Button>
    </>
  );
};

export default Search;
