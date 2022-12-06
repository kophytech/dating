import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

export const BASE_URL = "https://naijaconnect.ng/app";
const instance = Axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

instance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@token');
    console.log(token, 'toksen');
    if (token) {
      config.headers.Authorization = 'Bearer ' + token;
    }
    config.headers.Accept = '*/*';
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);
// Omis123
instance.interceptors.response.use(
  async response => {
    return response;
  },
  err => {
    return Promise.reject(err);
  },
);

export default instance;
