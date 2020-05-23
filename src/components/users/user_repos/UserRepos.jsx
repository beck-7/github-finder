import React from "react";
import { UserRepoItem } from "./UserRepoItem";

export const UserRepos = ({ userRepos }) => {
  return userRepos.map((userRepo) => (
    <UserRepoItem userRepo={userRepo} key={userRepo.id} />
  ));
};
