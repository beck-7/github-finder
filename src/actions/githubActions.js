import {
  SEARCH_USERS,
  SEARCH_REPOS,
  CLEAR_USERS,
  CLEAR_REPOS,
  GET_USER,
  SET_LOADING,
} from "./types";

// Search Users
export const searchUsers = (text) => async (dispatch) => {
  dispatch(setLoading());
  const res = await fetch(
    `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  );
  const data = await res.json();
  dispatch({
    type: SEARCH_USERS,
    payload: data.items,
  });
};

// Search Repos
export const searchRepos = (text) => async (dispatch) => {
  dispatch(setLoading());
  const res = await fetch(
    `https://api.github.com/search/repositories?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  );
  const data = await res.json();
  dispatch({
    type: SEARCH_REPOS,
    payload: data.items,
  });
};

// Get User
export const getUser = (username) => async (dispatch) => {
  dispatch(setLoading());
  const res = await fetch(
    `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  );
  const data = await res.json();
  dispatch({
    type: GET_USER,
    payload: data,
  });
};

// Clear Users
export const clearUsers = () => ({ type: CLEAR_USERS });

// Clear Repos
export const clearRepos = () => ({ type: CLEAR_REPOS });

// Set Loading
export const setLoading = () => ({ type: SET_LOADING });
