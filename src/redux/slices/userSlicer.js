import {createSlice} from '@reduxjs/toolkit';
import {getRidePrice} from '../actions/authActions';
import {USER} from '../types';

const initialState = {
  loading: false,
  error: {},
  ridePrice: {},
};

const userSlice = createSlice({
  name: USER,
  initialState,
  reducers: {},
  extraReducers: builder => {
    // RidePrice
    builder
      .addCase(getRidePrice.pending, state => {
        state.loading = true;
      })
      .addCase(getRidePrice.fulfilled, (state, action) => {
        state.loading = false;
        state.ridePrice = action.payload;
      })
      .addCase(getRidePrice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
