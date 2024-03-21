import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {UserController} from '@/controllers';
import {
  ADD_CARDS,
  AUTH,
  AUTH_CREATE_NEW_PASSWORD,
  AUTH_FORGOT_PASSWORD,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_RESEND_FORGOT_PASSWORD_OTP,
  AUTH_RESEND_OTP,
  AUTH_SIGNUP,
  AUTH_VERIFY_FORGOT_PASSWORD_OTP,
  AUTH_VERIFY_OTP,
  BOOK_RIDE,
  GET_BOOKINGS,
  GET_CARDS,
  USER_GET_RIDE_PRICE,
} from '../types';
import {useDispatch} from 'react-redux';
import {navigate} from '@/navigation/NavigationRef';
import {NAVIGATION} from '@/constants';

export const login = createAsyncThunk(
  AUTH_LOGIN,
  async (body, {rejectWithValue}) => {
    try {
      const res = await UserController.login(body);
      return res;
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

export const signUp = createAsyncThunk(
  AUTH_SIGNUP,
  async (body, {rejectWithValue}) => {
    try {
      const res = await UserController.signUp(body);
      return res;
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

export const verifyOtp = createAsyncThunk(
  AUTH_VERIFY_OTP,
  async (body, {rejectWithValue}) => {
    try {
      const res = await UserController.verifyOtp(body);
      return res;
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

export const resendOtp = createAsyncThunk(
  AUTH_RESEND_OTP,
  async (body, {rejectWithValue}) => {
    try {
      const res = await UserController.resendOtp(body);
      return res;
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

export const forgotPassword = createAsyncThunk(
  AUTH_FORGOT_PASSWORD,
  async (body, {rejectWithValue}) => {
    try {
      const res = await UserController.forgotPassword(body);
      return res;
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

export const verifyForgotPasswordOtp = createAsyncThunk(
  AUTH_VERIFY_FORGOT_PASSWORD_OTP,
  async (body, {rejectWithValue}) => {
    try {
      const res = await UserController.verifyForgotPasswordOtp(body);
      return res;
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

export const resendForgotPasswordOtp = createAsyncThunk(
  AUTH_RESEND_FORGOT_PASSWORD_OTP,
  async (body, {rejectWithValue}) => {
    try {
      const res = await UserController.resendForgotPasswordOtp(body);
      return res;
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

export const createNewPassword = createAsyncThunk(
  AUTH_CREATE_NEW_PASSWORD,
  async (body, {rejectWithValue}) => {
    try {
      const res = await UserController.createNewPassword(body);
      return res;
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

export const getRidePrice = createAsyncThunk(
  USER_GET_RIDE_PRICE,
  async (body, {rejectWithValue}) => {
    try {
      const res = await UserController.getRidePrice(body);
      return res;
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

export const bookRide = createAsyncThunk(
  BOOK_RIDE,
  async (body, {rejectWithValue}) => {
    try {
      const res = await UserController.bookRide(body);

      return res;
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

export const addCards = createAsyncThunk(
  ADD_CARDS,
  async (body, {rejectWithValue}) => {
    try {
      const res = await UserController.addCards(body);

      return res;
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

export const getCards = createAsyncThunk(
  GET_CARDS,
  async (body, {rejectWithValue}) => {
    try {
      const res = await UserController.getCards(body);
      return res;
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

export const getBookings = createAsyncThunk(
  GET_BOOKINGS,
  async (data, {rejectWithValue}) => {
    try {
      const res = await UserController.getBookings(data);
      return res;
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  },
);

export const logout = createAsyncThunk(
  AUTH_LOGOUT,
  async (params, {rejectWithValue}) => {
    try {
      const res = await UserController.logout(params);
      return res;
    } catch (error) {
      return rejectWithValue(JSON.stringify(error));
    }
  },
);
