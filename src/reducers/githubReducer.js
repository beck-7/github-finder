import {
  SEARCH_USERS,
  SEARCH_REPOS,
  CLEAR_USERS,
  CLEAR_REPOS,
  GET_USER,
  SET_LOADING,
} from "../actions/types";

const initState = {
  users: [],
  user: {},
  repos: [],
  userRepos: [],
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SEARCH_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case CLEAR_REPOS:
      return {
        ...state,
        repos: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
