import {API_BASE_URL, API_END_POINTS} from '@/constants/apiConstants';
import {strings} from '@/localization';
import {HttpClient} from '.';
import Toast from 'react-native-toast-message';
import {navigate} from '@/navigation/NavigationRef';
import {NAVIGATION} from '@/constants';
import {restAllData} from '@/redux/commonActions';
import {useDispatch} from 'react-redux';

export class UserController {
  static async login(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_BASE_URL + API_END_POINTS.login;
      const body = data;
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
          Toast.show({
            text2: err.message,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 6000,
          });

          reject(new Error(err));
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
            text2: res?.message,
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
          reject(new Error(err));
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
          // navigate(NAVIGATION.login);
          Toast.show({
            type: 'success_toast',
            text2: res?.message,
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
          reject(new Error(err));
        });
    });
  }

  static async resendOtp(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_BASE_URL + API_END_POINTS.resendOtp;
      const body = data;
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
          Toast.show({
            text2: err.message,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          reject(new Error(err));
        });
    });
  }

  static async forgotPassword(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_BASE_URL + API_END_POINTS.forgotPassword;
      const body = data;
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
          Toast.show({
            text2: err.message,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          reject(new Error(err));
        });
    });
  }

  static async verifyForgotPasswordOtp(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_BASE_URL + API_END_POINTS.verifyForgotPasswordOtp;
      const body = data;
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
          Toast.show({
            text2: err.message,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          reject(new Error(err));
        });
    });
  }

  static async resendForgotPasswordOtp(data) {
    return new Promise((resolve, reject) => {
      const endpoint = API_BASE_URL + API_END_POINTS.resendForgotPasswordOtp;
      const body = data;
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
          Toast.show({
            text2: err.message,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          reject(new Error(err));
        });
    });
  }

  static async createNewPassword(body) {
    return new Promise((resolve, reject) => {
      const endpoint = API_BASE_URL + API_END_POINTS.createNewPassword;
      HttpClient.post(endpoint, body)
        .then(res => {
          resolve(res);
          navigate(NAVIGATION.login);
          Toast.show({
            type: 'success_toast',
            text2: res?.message,
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
          reject(new Error(err));
        });
    });
  }

  static async getRidePrice(body) {
    return new Promise((resolve, reject) => {
      const endpoint = API_BASE_URL + API_END_POINTS.getRidePrice;
      HttpClient.post(endpoint, body)
        .then(res => {
          resolve(res);
          navigate(NAVIGATION.chooseVehicle);
          Toast.show({
            type: 'success_toast',
            text2: res?.message,
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
          reject(new Error(err));
        });
    });
  }

  static async bookRide(body) {
    return new Promise((resolve, reject) => {
      const endpoint = API_BASE_URL + API_END_POINTS.bookRide;
      HttpClient.post(endpoint, body)
        .then(res => {
          resolve(res);
          // navigate(NAVIGATION.chooseVehicle);
          Toast.show({
            type: 'success_toast',
            text2: res?.message,
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
          reject(new Error(err));
        });
    });
  }

  static async addCards(body) {
    return new Promise((resolve, reject) => {
      const endpoint = API_BASE_URL + API_END_POINTS.addCards;
      HttpClient.post(endpoint, body)
        .then(res => {
          resolve(res);
          console.log('response add card', res);
          Toast.show({
            type: 'success_toast',
            text2: res?.message,
            position: 'bottom',
            visibilityTime: 1500,
          });
        })
        .catch(err => {
          console.log('shsdhg', err);
          Toast.show({
            text2: err.message,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          reject(new Error(err));
        });
    });
  }

  static async getCards() {
    return new Promise((resolve, reject) => {
      const endpoint = API_BASE_URL + API_END_POINTS.getCards;
      HttpClient.get(endpoint)
        .then(res => {
          Toast.show({
            type: 'success_toast',
            text2: res?.message,
            position: 'bottom',
            visibilityTime: 1500,
          });
          console.log('djfsdf', res);
          resolve(res);
        })
        .catch(err => {
          console.log('djfsdf', err);

          Toast.show({
            text2: err.message,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          reject(new Error(err));
        });
    });
  }

  static async getBookings(data) {
    return new Promise((resolve, reject) => {
      const endpoint = `${API_BASE_URL + API_END_POINTS.getBookings}?status=${data}`
      HttpClient.get(endpoint)
        .then(res => {
          Toast.show({
            type: 'success_toast',
            text2: res?.message,
            position: 'bottom',
            visibilityTime: 1500,
          });
          console.log('djfsdf', res);
          resolve(res);
        })
        .catch(err => {
          console.log('djfsdf', err);

          Toast.show({
            text2: err.message,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          reject(new Error(err));
        });
    });
  }

  static async logout() {
    return new Promise((resolve, reject) => {
      const endpoint = API_BASE_URL + API_END_POINTS.logout;
      HttpClient.get(endpoint)
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
          Toast.show({
            text2: err.message,
            position: 'bottom',
            type: 'error_toast',
            visibilityTime: 1500,
          });
          reject(new Error(err));
        });
    });
  }
}
