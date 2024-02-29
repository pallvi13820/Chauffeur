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
          console.log('asgjasgjfgas', res);
          resolve(res);
        })
        .catch(err => {
          // showMessage({
          //   message: err?.message,
          //   type: 'danger',
          // });
          console.log('ahdkhas', err);
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
