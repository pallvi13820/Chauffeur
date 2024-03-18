import {createSlice} from '@reduxjs/toolkit';
import {bookRide, getRidePrice} from '../actions/authActions';
import {USER} from '../types';

const initialState = {
  loading: false,
  error: {},
  ridePrice: {},
  bookRideDetail: {},
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

    //BookRide
    builder
      .addCase(bookRide.pending, state => {
        state.loading = true;
      })
      .addCase(bookRide.fulfilled, (state, action) => {
        state.loading = false;
        state.bookRideDetail = action.payload;
      })
      .addCase(bookRide.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
