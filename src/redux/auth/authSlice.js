import { createSlice } from '@reduxjs/toolkit';
import {
  userRegister,
  userLogin,
  userLogout,
  userRefresh,
} from './authOperations';

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

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: {
    [userRegister.fulfilled]: authSuccessState,
    [userLogin.fulfilled]: authSuccessState,
    [userRefresh.pending](state) {
      state.isLoggedIn = true;
    },
    [userRefresh.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
    },
    [userRefresh.pending](state) {
      state.isLoggedIn = false;
    },
    [userLogout.fulfilled](state) {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
      state.token = null;
    },
  },
});

export const { authInProgres, authSuccess, authRejected } = authSlice.actions;
export const authReducer = authSlice.reducer;
