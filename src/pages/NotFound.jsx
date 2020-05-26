import React from "react";

import { Container, Typography, Box } from "@material-ui/core";

export const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4">
        <Box fontWeight="fontWeightBold" mb={2}>
          Not Found
        </Box>
      </Typography>
      <Typography variant="h6">
        The page you are looking for doesn't exist
      </Typography>
    </Container>
  );
};
