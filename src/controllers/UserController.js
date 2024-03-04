import {API_END_POINTS} from '@/constants/apiConstants';
import {strings} from '@/localization';
import {HttpClient} from '.';

export class UserController {
  static async login(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_END_POINTS.login;
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
          reject(new Error(strings.login.invalidCredentials));
        });
    });
  }

  static async signUp(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_END_POINTS.signUp;
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

          reject(new Error(strings.login.invalidCredentials));
        });
    });
  }

  static async verifyOtp(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_END_POINTS.verifyOtp;
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
          reject(new Error(strings.login.invalidCredentials));
        });
    });
  }

  static async resendOtp(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_END_POINTS.resendOtp;
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
          reject(new Error(strings.login.invalidCredentials));
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
          reject(new Error(strings.login.invalidCredentials));
        });
    });
  }

  static async verifyForgotPasswordOtp(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_END_POINTS.verifyForgotPasswordOtp;
      const body = data;
      HttpClient.post(endpoint, body)
        .then(res => {
          console.log('asgjasgjfgas', res);
          resolve(res);
        })
        .catch(err => {
          // showMessage({
          //   message: err?.message,
          //   type: 'danger',
          // });
          console.log('ahdkhas', err);
          alert(err?.message);
          reject(new Error(strings.login.invalidCredentials));
        });
    });
  }

  static async resendForgotPasswordOtp(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_END_POINTS.resendForgotPasswordOtp;
      const body = data;
      HttpClient.post(endpoint, body)
        .then(res => {
          console.log('asgjasgjfgas', res);
          resolve(res);
        })
        .catch(err => {
          // showMessage({
          //   message: err?.message,
          //   type: 'danger',
          // });
          console.log('ahdkhas', err);
          alert(err?.message);
          reject(new Error(strings.login.invalidCredentials));
        });
    });
  }

  static async logout() {
    return new Promise(resolve => {
      setTimeout(resolve, 500);
    });
  }
}
