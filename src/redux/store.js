import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsFetchSlice';
import { filterReducer } from './filter/filterSlice';
import { userReducer } from './users/usersSlice';

const rootReducer = combineReducers({
  users: userReducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
