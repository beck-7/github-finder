import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import Search from "../layout/Search";
import SearchTabs from "../layout/SearchTabs";

const Home = () => {
  const users = useSelector((state) => state.gh.users);
  const repos = useSelector((state) => state.gh.repos);

  return (
    <Container maxWidth="md">
      <Search />
      {(users.length > 0 || repos.length > 0) && <SearchTabs />}
    </Container>
  );
};

export default Home;
