import { createSlice } from '@reduxjs/toolkit';
import { reducers, extraReducers } from '../reducers';

const initialState = {
  users: [],
  repos: [],
  user: {},
  userRepos: [],
  loading: false,
};

const githubSlice = createSlice({
  name: 'github',
  initialState,
  reducers,
  extraReducers
})

export default githubSlice.reducer;
export const { clearUsers, clearRepos } = githubSlice.actions;