import { createSlice } from '@reduxjs/toolkit';
import { filterByCathegory } from '../constants';

const cathegoryFilterInitialState = filterByCathegory.all;

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filterName: '',
    filterCathegory: cathegoryFilterInitialState,
  },
  reducers: {
    showContactsByName: {
      reducer: (state, { payload }) => {
        return { ...state, filterName: payload };
      },
    },
    setStatusFilter: {
      reducer: (state, { payload }) => {
        return { ...state, filterCathegory: payload };
      },
    },
  },
});

export const { showContactsByName, setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
