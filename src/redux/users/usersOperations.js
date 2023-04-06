import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerNewUser = createAsyncThunk(
  'users/signup',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      console.log(response.data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('users/login', credentials);
      if (response.statusText === 'OK') console.log('hahaha');
      console.log(response);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
