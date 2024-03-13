import axios from 'axios';
// import { Config } from 'react-native-config';
import {strings} from '@/localization';
import {API_BASE_URL} from '@/constants/apiConstants';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(
  config => {
    if (config?.data instanceof FormData) {
      // set headers for FormData
      config.headers = {
        ...config?.headers,
        'Content-Type': 'multipart/form-data',
      };
    } else {
      // set headers for JSON data
      config.headers = {...config?.headers, 'Content-Type': 'application/json'};
    }

    return config;
  },
  error => Promise.reject(error),
);

client.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      return Promise.reject(error.response.data);
    } else if (error.request) {
      return Promise.reject({error: strings.common.connectionError});
    } else {
      return Promise.reject(error);
    }
  },
);

const setAuthorization = token => {
  client.defaults.headers.common.authorization = `Bearer ${token}`;
};

const clearAuthorization = () => {
  delete client.defaults.headers.common.authorization;
};

export const HttpClient = {...client, setAuthorization, clearAuthorization};
