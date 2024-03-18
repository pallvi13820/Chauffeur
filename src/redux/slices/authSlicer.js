import {createSlice} from '@reduxjs/toolkit';
import {
  forgotPassword,
  login,
  logout,
  resendForgotPasswordOtp,
  signUp,
  verifyForgotPasswordOtp,
  verifyOtp,
} from '../actions/authActions';
import {AUTH} from '../types';

const initialState = {
  loading: false,
  user: {},
  register: {},
  forgotPasswordDetail: {},
  logoutUser: {},
  error: {},
  verifyForgotPassword: {},
  verifyUser: {},
  resendForgotPassword: {},
};

const authSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {},
  extraReducers: builder => {
    // login
    builder
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Signup
    builder
      .addCase(signUp.pending, state => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.register = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // forgot
    builder
      .addCase(forgotPassword.pending, state => {
        state.loading = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.forgotPasswordDetail = action.payload;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // verifyOtp
    builder
      .addCase(verifyForgotPasswordOtp.pending, state => {
        state.loading = true;
      })
      .addCase(verifyForgotPasswordOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.verifyForgotPassword = action.payload;
      })
      .addCase(verifyForgotPasswordOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // verifyUserOtp
    builder
      .addCase(verifyOtp.pending, state => {
        state.loading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.verifyUser = action.payload;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // resendForgotPasswordOTP
    builder
      .addCase(resendForgotPasswordOtp.pending, state => {
        state.loading = true;
      })
      .addCase(resendForgotPasswordOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.resendForgotPassword = action.payload;
      })
      .addCase(resendForgotPasswordOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // logout
    builder
      .addCase(logout.pending, state => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.logoutUser = action.payload;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
