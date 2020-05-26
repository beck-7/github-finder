import React from "react";
import { Container } from "@material-ui/core";

import { Search } from "../components/layout/Search";
import { SearchTabs } from "../components/layout/SearchTabs";

export const Home = () => {
  return (
    <Container maxWidth="md">
      <Search />
      <SearchTabs />
    </Container>
  );
};
