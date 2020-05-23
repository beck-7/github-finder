import React from "react";
import spinner from "../../assets/spinner.gif";

export const Spinner = () => {
  return <img src={spinner} alt="Loading indicator" style={spinnerStyle} />;
};

const spinnerStyle = {
  width: "200px",
  margin: "auto",
  display: "block",
};
