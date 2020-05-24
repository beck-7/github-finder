import {
  SEARCH_USERS,
  SEARCH_REPOS,
  CLEAR_USERS,
  CLEAR_REPOS,
  GET_USER,
  GET_USER_REPOS,
  SET_LOADING,
} from "./types";

export const searchUsers = (text) => async (dispatch) => {
  dispatch(setLoading());
  const res = await fetch(
    `https://api.github.com/search/users?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
  );
  const data = await res.json();
  dispatch({
    type: SEARCH_USERS,
    payload: data.items,
  });
};

export const searchRepos = (text) => async (dispatch) => {
  dispatch(setLoading());
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${text}&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
  );
  const data = await res.json();
  dispatch({
    type: SEARCH_REPOS,
    payload: data.items,
  });
};

export const getUser = (username) => async (dispatch) => {
  dispatch(setLoading());
  const res = await fetch(
    `https://api.github.com/users/${username}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
  );
  const data = await res.json();
  dispatch({
    type: GET_USER,
    payload: data,
  });
};

export const getUserRepos = (username) => async (dispatch) => {
  dispatch(setLoading());

  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=&sort=created:asc&client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
  );
  const data = await res.json();
  dispatch({
    type: GET_USER_REPOS,
    payload: data,
  });
};

export const clearUsers = () => ({ type: CLEAR_USERS });

export const clearRepos = () => ({ type: CLEAR_REPOS });

export const setLoading = () => ({ type: SET_LOADING });
