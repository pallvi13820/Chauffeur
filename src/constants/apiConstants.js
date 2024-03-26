export const BASE_URL = 'http://chauffeur-service.itechnolabs.co.in/';

export const API_BASE_URL = BASE_URL + 'api/v1/';

export const API_END_POINTS = {
  login: 'user/login',
  signUp: 'user/register',
  verifyOtp: 'user/verifyOtp',
  resendOtp: 'user/resendOtp',
  forgotPassword: 'user/forgotPassword',
  resendForgotPasswordOtp: 'user/resendForgotPasswordOtp',
  verifyForgotPasswordOtp: 'user/verifyForgotPasswordOtp',
  getRidePrice: 'user/getRidePrice',
  createNewPassword: 'user/resetPassword',
  logout: 'user/logout',
  bookRide: 'user/bookRide',
  getCards: 'user/getCards',
  addCards: 'user/addCard',
  getBookings: 'user/getBookings',
  getRideDetailBookings: 'user/rideDetails',
  getNotification: 'user/notification',
  getUpdateProfile: 'user/updateProfile'
};
