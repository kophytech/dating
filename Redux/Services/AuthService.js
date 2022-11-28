import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {baseUrl} from '../Constant/Constants';
import instance from './ApiServices';

const API_URL = `${baseUrl}/`;

const register = userData => {
  return axios.post(API_URL + 'register', userData);
};

const login = userData => {
  return axios.post(API_URL + 'login', userData).then(response => {
    if (response.data) {
      AsyncStorage.setItem('user', response.data.token);
      return response.data;
    }
    return response.data;
  });
};

const refreshTokenApi = async () => {
  let tokens = await AsyncStorage.getItem('refreshToken');
  return axios({
    url:
      'https://demo-server-quotesconnect.herokuapp.com/api/v1.1/client/login',
    method: 'get',
    headers: {
      refreshToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTcwMWViMTZhYWUzNTJhYjZmOTVjYSIsImlhdCI6MTY1OTE5Mjc3OSwiZXhwIjoxNjYwNDAyMzc5fQ.PXMEIxpOeSeDIY9bBECD_goM9Q9wZPYZtsWd-bHjgQQ',
      'Content-Type': 'application/json',
    },
  });

  // return axios({
  //   method: 'get',
  //   url: 'https://demo-server-quotesconnect.herokuapp.com/api/v1.1/client/login',
  //   headers: {
  //     refreshToken:
  //       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTcwMWViMTZhYWUzNTJhYjZmOTVjYSIsImlhdCI6MTY1OTE5MTM0MywiZXhwIjoxNjYwNDAwOTQzfQ.a03ryPoJJHHzgkhIjigGr2Br3JNssnrtgVH9DdIVSXA',
  //   },
  // });
  // return axios.get(
  //   API_URL + 'login',
  //   {},
  //   {
  //     headers: {
  //       refreshToken: tokens,
  //     },
  //   },
  // );
};

const reset_password_api = email => {
  return axios.post(API_URL + 'forgot', email).then(response => {
    console.log(response, 'reset password');
  });
};

const reset_password_otp = email => {
  return axios.post(API_URL + 'confirmation/token', email).then(response => {
    console.log(response, 'reset password');
  });
};

// // auth/reset_password
const getVendorApi = userData => {
  return instance.get('/vendor/all-vendors').then(response => {
    console.log(response, 'response vendor');

    return response.data;
  });
};

const CreateVendorApi = vendorData => {
  return instance.post('/vendor', vendorData).then(response => {
    getVendorApi();
    return response.data;
  });
};

const UpdateVendorApi = vendorData => {
  const {id, ...rest} = vendorData;
  console.log(vendorData?.id, 1234567890);
  return instance
    .put(`/vendor/${vendorData?.id}`, vendorData)
    .then(response => {
      return response.data;
    });
};

const deleteVendorApi = vendorData => {
  return instance.delete(`/vendor/${vendorData?.id}`).then(response => {
    console.log(response, 'r1111111121');

    return response.data;
  });
};

const GetUserInfoApi = vendorData => {
  return instance.get('/client/info', vendorData).then(response => {
    return response.data;
  });
};

const otpApi = userData => {
  return axios.post(API_URL + 'confirmation/token', userData).then(response => {
    if (response.data) {
      AsyncStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });
};

const uploadUserDetailsApi = details => {
  return instance.put('/client/info', details).then(response => {
    return response.data;
  });
};

const logout = () => {
  AsyncStorage.removeItem('user');
};

const AuthService = {
  register,
  login,
  logout,
  reset_password_api,
  CreateVendorApi,
  reset_password_otp,
  getVendorApi,
  GetUserInfoApi,
  otpApi,
  uploadUserDetailsApi,
  UpdateVendorApi,
  deleteVendorApi,
  refreshTokenApi,
};

export default AuthService;
