import { createAsyncThunk } from '@reduxjs/toolkit';


const BASE_URL = "https://api.github.com";

export const searchUsers = createAsyncThunk(
  'github/searchUsers',
  async (text) => {
    try {
      const response = await fetch(`${BASE_URL}/search/users?q=${text}`);
      const data = await response.json();
      return data.items;
    } 
    catch (err) {
      console.error(err);
    }
  }
)

export const searchRepos = createAsyncThunk(
    'github/searchRepos',
    async (text) => {
      try {
        const response = await fetch(`${BASE_URL}/search/repositories?q=${text}`);
        const data = await response.json();
        return data.items;
      } 
      catch (err) {
        console.error(err);
      }
    }
)

export const getUser = createAsyncThunk(
    'github/getUser',
    async (username) => {
      try {
        const response = await fetch(`${BASE_URL}/users/${username}`);
        const data = await response.json();
        return data;
      } 
      catch (err) {
        console.error(err);
      }
    }
)

export const getUserRepos = createAsyncThunk(
    'github/getUserRepos',
    async (username) => {
      try {
        const response = await fetch(`${BASE_URL}/users/${username}/repos?&sort=created`);
        const data = await response.json();
        return data;
      } 
      catch (err) {
        console.error(err);
      }
    }
)