import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import Search from "../layout/Search";
import SearchTabs from "../layout/SearchTabs";

const Home = () => {
  const users = useSelector((state) => state.gh.users);

  return (
    <Container maxWidth="md">
      <Search />
      {users.length > 0 && <SearchTabs />}
    </Container>
  );
};

export default Home;
