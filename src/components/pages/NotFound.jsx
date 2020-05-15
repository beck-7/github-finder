import React from "react";
import { Container } from "@material-ui/core";

const NotFound = () => {
  return (
    <Container maxWidth="md">
      <h1>Not Found</h1>
      <p className="lead">The page u're looking for doesn't exist...</p>
    </Container>
  );
};

export default NotFound;
