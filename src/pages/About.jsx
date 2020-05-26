import React from "react";
import { Container, Typography, Link, Box } from "@material-ui/core";

export const About = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4">
        <Box fontWeight="fontWeightBold" mb={2}>
          About
        </Box>
      </Typography>
      <Typography variant="h6">
        App to search Github profiles and repositories
      </Typography>
      <Typography variant="subtitle1">
        Created by Berdibek Iskenderbekov
      </Typography>
      <Typography variant="subtitle1">
        <Link
          href="https://github.com/beck-7"
          target="_blank"
          rel="relnooper relnoreferrer"
        >
          Github
        </Link>
      </Typography>
    </Container>
  );
};
