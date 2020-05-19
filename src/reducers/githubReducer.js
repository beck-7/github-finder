import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  SET_LOADING,
} from "../actions/types";

const initState = {
  users: [],
  user: {},
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
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
