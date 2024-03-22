import {createSlice} from '@reduxjs/toolkit';
import {
  addCards,
  bookRide,
  getBookings,
  getCards,
  getNotification,
  getRideDetailBookings,
  getRidePrice,
} from '../actions/authActions';
import {USER} from '../types';
import {restAllData} from '../commonActions';

const initialState = {
  loading: false,
  error: {},
  ridePrice: {},
  bookRideDetail: {},
  cardsDetails: {},
  addCardDetails: {},
  rideBookings: {},
  notification: {},
  rideDetailBookings: {},
};

const userSlice = createSlice({
  name: USER,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(restAllData, () => initialState);
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

    //getCards
    builder
      .addCase(getCards.pending, state => {
        state.loading = true;
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.loading = false;
        state.cardsDetails = action.payload;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    //adCards
    builder
      .addCase(addCards.pending, state => {
        state.loading = true;
      })
      .addCase(addCards.fulfilled, (state, action) => {
        state.loading = false;
        state.addCardDetails = action.payload;
      })
      .addCase(addCards.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    //getBooking
    builder
      .addCase(getBookings.pending, state => {
        state.loading = true;
      })
      .addCase(getBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.rideBookings = action.payload;
      })
      .addCase(getBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    //getBooking
    builder
      .addCase(getNotification.pending, state => {
        state.loading = true;
      })
      .addCase(getNotification.fulfilled, (state, action) => {
        state.loading = false;
        state.notification = action.payload;
      })
      .addCase(getNotification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    //getRideDetailBooking
    builder
      .addCase(getRideDetailBookings.pending, state => {
        state.loading = true;
      })
      .addCase(getRideDetailBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.rideDetailBookings = action.payload;
      })
      .addCase(getRideDetailBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userSlice.reducer;
