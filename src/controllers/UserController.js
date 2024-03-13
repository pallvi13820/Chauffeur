import {API_BASE_URL, API_END_POINTS} from '@/constants/apiConstants';
import {strings} from '@/localization';
import {HttpClient} from '.';
import Toast from 'react-native-toast-message';
import {navigate} from '@/navigation/NavigationRef';
import {NAVIGATION} from '@/constants';

export class UserController {
  static async login(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_END_POINTS.login;
      const body = data;
      HttpClient.post(endpoint, body)
        .then(res => {
          Toast.show({
            type: 'success_toast',
            text2: strings.login.signup,
            position: 'bottom',
            visibilityTime: 1500,
          });
          resolve(res);
          navigate(NAVIGATION.home);
        })
        .catch(err => {
          Toast.show({
            text2: err.message,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 6000,
          });

          // reject(new Error(strings.login.invalidCredentials));
        });
    });
  }

  static async signUp(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_BASE_URL + API_END_POINTS.signUp;
      const body = data;
      HttpClient.post(endpoint, body)
        .then(res => {
          Toast.show({
            type: 'success_toast',
            text2: strings.login.signup,
            position: 'bottom',
            visibilityTime: 1500,
          });
          resolve(res);
        })
        .catch(err => {
          Toast.show({
            text2: err.message,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          // reject(new Error(strings.login.invalidCredentials));
        });
    });
  }

  static async verifyOtp(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_BASE_URL + API_END_POINTS.verifyOtp;
      const body = data;
      HttpClient.post(endpoint, body)
        .then(res => {
          resolve(res);
          Toast.show({
            type: 'success_toast',
            text1: strings.login.signup,
            position: 'bottom',
            visibilityTime: 1500,
          });
        })
        .catch(err => {
          Toast.show({
            text2: err.message,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });

          // reject(new Error(strings.login.invalidCredentials));
        });
    });
  }

  static async resendOtp(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_END_POINTS.resendOtp;
      const body = data;
      HttpClient.post(endpoint, body)
        .then(res => {
          Toast.show({
            type: 'success_toast',
            text1: strings.login.signup,
            position: 'top',
            visibilityTime: 1500,
          });
          resolve(res);
        })
        .catch(err => {
          // showMessage({
          //   message: err?.message,
          //   type: 'danger',
          // });
          alert(err?.message);
          // reject(new Error(strings.login.invalidCredentials));
        });
    });
  }

  static async forgotPassword(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_END_POINTS.forgotPassword;
      const body = data;
      HttpClient.post(endpoint, body)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          // showMessage({
          //   message: err?.message,
          //   type: 'danger',
          // });
          alert(err?.message);
          // reject(new Error(strings.login.invalidCredentials));
        });
    });
  }

  static async verifyForgotPasswordOtp(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_END_POINTS.verifyForgotPasswordOtp;
      const body = data;
      HttpClient.post(endpoint, body)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          // showMessage({
          //   message: err?.message,
          //   type: 'danger',
          // });
          alert(err?.message);
          // reject(new Error(strings.login.invalidCredentials));
        });
    });
  }

  static async resendForgotPasswordOtp(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_END_POINTS.resendForgotPasswordOtp;
      const body = data;
      HttpClient.post(endpoint, body)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          // showMessage({
          //   message: err?.message,
          //   type: 'danger',
          // });
          alert(err?.message);
          // reject(new Error(strings.login.invalidCredentials));
        });
    });
  }

  static async getRidePrice(body) {
    return new Promise((resolve, reject) => {
      const endpoint = API_BASE_URL + API_END_POINTS.getRidePrice;
      console.log('sdjgkldsjg', endpoint);
      HttpClient.post(endpoint, body)
        .then(res => {
          Toast.show({
            type: 'success_toast',
            text2: res?.message,
            position: 'bottom',
            visibilityTime: 1500,
          });
          resolve(res);
        })
        .catch(err => {
          console.log('dgjdflgjdf', err);
          Toast.show({
            text2: err.message,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          // reject(new Error(strings.login.invalidCredentials));
        });
    });
  }

  static async logout() {
    return new Promise(resolve => {
      setTimeout(resolve, 500);
    });
  }
}
