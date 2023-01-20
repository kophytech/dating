import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import profileService from '../Services/ProfileServices';
import randomService from '../Services/RandomServices';

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
  'material/payment',
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
  'material/membership',
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
  'material/credit',
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
  'material/paystack',
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

export const AllNotificationMessages = createAsyncThunk(
  'material/message',
  async (data, thunkAPI) => {
    try {
      return await profileService.getAllNotifications();
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

export const PeopleILiked = createAsyncThunk(
  'material/people',
  async (data, thunkAPI) => {
    try {
      return await profileService.getPeopleILikedService();
    } catch (error) {
      console.log('====================================');
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

export const getCountry = createAsyncThunk(
  'material/country',
  async (data, thunkAPI) => {
    try {
      return await profileService.getCountryServices();
    } catch (error) {
      const {message} = error;
      return thunkAPI.rejectWithValue(error.response.data.error || message);
    }
  },
);

export const getCountryState = createAsyncThunk(
  'material/country',
  async (data, thunkAPI) => {
    try {
      return await profileService.getCountryStateServices(data);
    } catch (error) {
      console.log('====================================');
      console.log(error.response);
      console.log('====================================');
      const {message} = error;
      return thunkAPI.rejectWithValue(error.response.data.error || message);
    }
  },
);

export const updateProfileSlice = createAsyncThunk(
  'material/payment',
  async (data, thunkAPI) => {
    try {
      return await profileService.updateProfileService(data);
    } catch (error) {
      console.log('====================================');
      console.log(error, 'eeererer');
      console.log('====================================');
      const {message} = error;
      // console.log(error.response.data || message)

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(error.response.data || message);
    }
  },
);

// getCountryState

const initialState = {
  profile: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  creditList: [],
  error: {},
  country: [],
  stateCountry: [],
  peopleILiked: [],
};

const profileSlices = createSlice({
  name: 'profile',
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

    [getCountry.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCountry.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.country = action.payload;
    },
    [getCountry.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
    // getCountryState,
    [getCountryState.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCountryState.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.stateCountry = action.payload;
    },
    [getCountryState.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },

    [PeopleILiked.pending]: (state, action) => {
      state.isLoading = true;
    },
    [PeopleILiked.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.peopleILiked = action.payload;
    },
    [PeopleILiked.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});

const {reducer} = profileSlices;
export default reducer;
