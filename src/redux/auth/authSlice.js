import { createSlice } from '@reduxjs/toolkit';
import { registerNewUser, loginUser, logoutUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSuccessState = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const userSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: {
    [registerNewUser.fulfilled]: authSuccessState,
    [loginUser.fulfilled]: authSuccessState,
    [logoutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { authInProgres, authSuccess, authRejected } = userSlice.actions;
export const userReducer = userSlice.reducer;
