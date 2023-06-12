import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6479fff8a455e257fa642cc1.mockapi.io/';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('users');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const refreshFollowings = createAsyncThunk(
  'users/refreshFollowings',
  async (user, thunkAPI) => {
    try {
      const response = await axios.put(`users/${user.id}`, { ...user });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
