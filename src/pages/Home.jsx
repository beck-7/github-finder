import React from "react";
// import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";

import { Search } from "../components/layout/Search";
import { SearchTabs } from "../components/layout/SearchTabs";

export const Home = () => {
  // const [users, repos] = useSelector((state) => [
  //   state.gh.users,
  //   state.gh.repos,
  // ]);

  return (
    <Container maxWidth="md">
      <Search />
      <SearchTabs />
      {/* {(users.length > 0 || repos.length > 0) && <SearchTabs />} */}
    </Container>
  );
};
