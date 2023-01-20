import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from '../Services/AuthService';
// const user = JSON.parse(AsyncStorage.getItem("user"));

export const register = createAsyncThunk(
  'auth/register',
async (userData, thunkAPI) => {
    try {
      const response = await AuthService.register(userData);
      // console.log(response, 'response');
      return response.data;
    } catch (error) {
     console.log(error, 'from register');
      const {message} = error;
      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(error.response.data || message);
    }
  },
);

export const login = createAsyncThunk('/auth/login', async (user, thunkAPI) => {
  try {
    return await AuthService.login(user);
  } catch (error) {
    console.log('====================================');
    console.log(error, 'from login');
    console.log('====================================');
    const {message} = error;
    return thunkAPI.rejectWithValue(error.response.data || message);
  }
});

export const forgotPassword = createAsyncThunk(
  '/auth/login',
  async (user, thunkAPI) => {
    try {
      return await AuthService.forgot_password_api(user);
    } catch (error) {
      console.log('====================================');
      console.log('====================================');
      const {message} = error;
      return thunkAPI.rejectWithValue(error.response.data || message);
    }
  },
);

export const ResetPasswordAction = createAsyncThunk(
  'auth/reset_password',
  async (user, thunkAPI) => {
    try {
      return await AuthService.reset_password_api(user);
    } catch (error) {
      // console.log(error, 'error');
      const {message} = error;
      // console.log(error.response.data || message)

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(error.response.data.error || message);
    }
  },
);

export const OtpResetPassword = createAsyncThunk(
  'auth/otp_password',
  async (user, thunkAPI) => {
    try {
      return await AuthService.reset_password_otp(user);
    } catch (error) {
      // console.log(error.response.data.error[0].msg, 'error');
      const {message} = error;
      return thunkAPI.rejectWithValue(error.response.data.error[0].msg);
    }
  },
);

export const getUserInfoAction = createAsyncThunk(
  'auth/reset_password',
  async (user, thunkAPI) => {
    try {
      return await AuthService.GetUserInfoApi(user);
    } catch (error) {
      console.log(error, 'error');
      const {message} = error;
      return thunkAPI.rejectWithValue(error.response.data.error || message);
    }
  },
);

export const confirmOtp = createAsyncThunk(
  'auth/reset_password',
  async (user, thunkAPI) => {
    try {
      return await AuthService.GetUserInfoApi(user);
    } catch (error) {
      console.log(error, 'error');
      const {message} = error;
      return thunkAPI.rejectWithValue(error.response.data.error || message);
    }
  },
);

export const UploadUserDetails = createAsyncThunk(
  'auth/uploadimage',
  async (photo, thunkAPI) => {
    try {
      return await AuthService.uploadUserDetailsApi(photo);
    } catch (error) {
      console.log(error, 'erroxxxr');
      const {message} = error;
      return thunkAPI.rejectWithValue(error.response.data.error || message);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  isLoadingOtp: false,
  userInfo: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: (state, action) => {
      state.isLoading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = 'Something went wrong. try again';
      state.user = null;
    },
    [login.pending]: (state, action) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },

    // ResetPasswordAction
    [ResetPasswordAction.pending]: (state, action) => {
      state.isLoading = true;
      state.isLoadingOtp = true;
    },
    [ResetPasswordAction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
      state.isLoadingOtp = false;
    },
    [ResetPasswordAction.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
      state.isLoadingOtp = false;
    },

    [OtpResetPassword.pending]: (state, action) => {
      state.isLoading = true;
    },
    [OtpResetPassword.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    },
    [OtpResetPassword.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },

    [getUserInfoAction.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getUserInfoAction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userInfo = action.payload;
    },
    [getUserInfoAction.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },

    [UploadUserDetails.pending]: (state, action) => {
      state.isLoading = true;
    },
    [UploadUserDetails.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userInfo = action.payload;
    },
    [UploadUserDetails.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },
  },
});

const {reducer} = authSlice;
export default reducer;
