import { searchUsers, searchRepos, getUser, getUserRepos } from '../asyncThunks';

export const reducers = {
    setLoading(state) {
      state.loading = true
    },
    clearUsers(state) {
      state.users = []
    },
    clearRepos(state) {
      state.repos = []
    }
  }

export const extraReducers = {
    [searchUsers.pending]: (state) => {
      state.loading = true
    },
    [searchUsers.fulfilled]: (state, {payload}) => {
      state.users = payload
      state.loading = false
    },
    [searchRepos.pending]: (state) => {
      state.loading = true
    },
    [searchRepos.fulfilled]: (state, {payload}) => {
      state.repos = payload
      state.loading = false
    },
    [getUser.pending]: (state) => {
      state.loading = true
    },
    [getUser.fulfilled]: (state, {payload}) => {
      state.user = payload
      state.loading = false
    },
    [getUserRepos.pending]: (state) => {
      state.loading = true
    },
    [getUserRepos.fulfilled]: (state, {payload}) => {
      state.userRepos = payload
      state.loading = false
    }
  }