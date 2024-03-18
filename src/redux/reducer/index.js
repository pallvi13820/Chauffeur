import {combineReducers} from '@reduxjs/toolkit';
import authSlicer from '../slices/authSlicer';
import userSlicer from '../slices/userSlicer';

const rootReducer = combineReducers({
  auth: authSlicer,
  user: userSlicer
});

export default rootReducer;
