import {
  SEARCH_USERS,
  SEARCH_REPOS,
  CLEAR_USERS,
  CLEAR_REPOS,
  GET_USER,
  GET_USER_REPOS,
  SET_LOADING,
} from "./types";

const BASE_URL = "https://api.github.com";

export const searchUsers = (text) => async (dispatch) => {
  dispatch(setLoading());

  const res = await fetch(`${BASE_URL}/search/users?q=${text}`);

  const data = await res.json();

  dispatch({
    type: SEARCH_USERS,
    payload: data.items,
  });
};

export const searchRepos = (text) => async (dispatch) => {
  dispatch(setLoading());

  const res = await fetch(`${BASE_URL}/search/repositories?q=${text}`);

  const data = await res.json();

  dispatch({
    type: SEARCH_REPOS,
    payload: data.items,
  });
};

export const getUser = (username) => async (dispatch) => {
  dispatch(setLoading());

  const res = await fetch(`${BASE_URL}/users/${username}`);

  const data = await res.json();

  dispatch({
    type: GET_USER,
    payload: data,
  });
};

export const getUserRepos = (username) => async (dispatch) => {
  dispatch(setLoading());

  const res = await fetch(`${BASE_URL}/users/${username}/repos?&sort=created`);

  const data = await res.json();

  dispatch({
    type: GET_USER_REPOS,
    payload: data,
  });
};

export const clearUsers = () => ({ type: CLEAR_USERS });

export const clearRepos = () => ({ type: CLEAR_REPOS });

export const setLoading = () => ({ type: SET_LOADING });
