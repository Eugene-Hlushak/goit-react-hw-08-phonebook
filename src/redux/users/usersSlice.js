import { createSlice } from '@reduxjs/toolkit';
import { registerNewUser, loginUser } from './usersOperations';

const initialState = {
  user: { name: '', email: '' },
  token: '',
  isLoggedIn: false,
};

const authSuccessState = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const userSlice = createSlice({
  name: 'users',
  initialState: initialState,
  extraReducers: {
    [registerNewUser.fulfilled]: authSuccessState,
    [loginUser.fulfilled]: authSuccessState,
  },
});

export const { authInProgres, authSuccess, authRejected } = userSlice.actions;
export const userReducer = userSlice.reducer;
