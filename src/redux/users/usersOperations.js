import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerNewUser = createAsyncThunk(
  'users/signup',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', user);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
