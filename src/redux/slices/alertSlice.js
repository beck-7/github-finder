import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: null,
  reducers: {
    setAlert(state, {payload}) {
      return payload;
    },
    removeAlert() {
      return null;
    }
  }
})

export default alertSlice.reducer;
export const { setAlert, removeAlert } = alertSlice.actions;

