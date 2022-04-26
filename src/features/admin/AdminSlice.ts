/* eslint-disable operator-linebreak */
import { createSlice } from '@reduxjs/toolkit';
import { AdminStore } from './adminmodel';

const initialState: AdminStore = {
  username1: 'skkozara',
  password1: 'kozaragradiska2022',
  adminPanelData: {
    username: '',
    password: '',
  },
};
const adminSlice = createSlice({
  name: 'adminSlice',
  initialState,
  reducers: {
    validationData(state, action) {
      state.adminPanelData = action.payload;
    },
  },
});

export const { validationData } = adminSlice.actions;
export default adminSlice.reducer;
