import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import profileService from '../Services/ProfileServices';
import randomService from '../Services/RandomServices';

import StepService from '../Services/StepService';

export const profileSlice = createAsyncThunk(
  'material/profile',
  async thunkAPI => {
    try {
      return await profileService.profilePerson();
    } catch (error) {
      const {message} = error;
      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

// Payment

export const PaymentSlice = createAsyncThunk(
  'material/step2',
  async (data, thunkAPI) => {
    try {
      return await profileService.Payment(data);
    } catch (error) {
      console.log('====================================');
      console.log(error.response, 'eeererer');
      console.log('====================================');
      const {message} = error;
      // console.log(error.response.data || message)

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

export const getMembershipPriceSlice = createAsyncThunk(
  'material/step2',
  async (data, thunkAPI) => {
    try {
      return await profileService.getMembershipPrice(data);
    } catch (error) {
      console.log('====================================');
      console.log(error.response, 'eeererer');
      console.log('====================================');
      const {message} = error;
      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

// getCreditPayment

export const creditPaymentSlice = createAsyncThunk(
  'material/step2',
  async (data, thunkAPI) => {
    try {
      return await profileService.creditPayment(data);
    } catch (error) {
      console.log('====================================');
      console.log(error.response, 'eeererer');
      console.log('====================================');
      const {message} = error;
      // console.log(error.response.data || message)

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

export const PaystackSlice = createAsyncThunk(
  'material/step2',
  async (data, thunkAPI) => {
    try {
      return await profileService.paystack_get_ref(data);
    } catch (error) {
      console.log('====================================');
      console.log(error.response.data, 'eeererer');
      console.log('====================================');
      const {message} = error;
      // console.log(error.response.data || message)

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

// paystack_get_ref

// creditPayment

const initialState = {
  profile: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  creditList: [],
};

const materialSlice = createSlice({
  name: 'material',
  initialState,
  extraReducers: {
    [profileSlice.pending]: (state, action) => {
      state.isLoading = true;
    },
    [profileSlice.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.profile = action.payload;
    },
    [profileSlice.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [profileSlice.pending]: (state, action) => {
      state.isLoading = true;
    },

    [PaymentSlice.pending]: (state, action) => {
      state.isLoading = true;
    },
    [PaymentSlice.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.profile = action.payload;
    },
    [PaymentSlice.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [PaymentSlice.pending]: (state, action) => {
      state.isLoading = true;
    },

    [getMembershipPriceSlice.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getMembershipPriceSlice.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.creditList = action.payload;
    },
    [getMembershipPriceSlice.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    // getMembershipPriceSlice
  },
});

const {reducer} = profileSlice;
export default reducer;
