import React from "react";
import { Container } from "@material-ui/core";
import Search from "../layout/Search";
import Users from "../users/Users";

const Home = () => (
  <Container maxWidth="md">
    <Search />
    <Users />
  </Container>
);

export default Home;
