import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import RfqService from '../Services/RfqService';

export const getRfqJob = createAsyncThunk(
  'rfq/getrfqjob',
  async (token, thunkAPI) => {
    try {
      const response = await RfqService.getRfQJobService(token);
      return response;
    } catch (error) {
      console.log(error, 'from getjob');
      const {message} = error;
      // console.log(error.response.data.error[0].msg, 'from getmmaterial');

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

export const postRfqJob = createAsyncThunk(
  'rfq/postrfqjob',
  async (data, thunkAPI) => {
    try {
      return await RfqService.postRfQJobService(data);
    } catch (error) {
      console.log(error.response.status, 'status');

      console.log(error.response.data, 'error');
      const {message} = error;
      // console.log(error.response.data || message)

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

export const postRfqMaterial = createAsyncThunk(
  'rfq/postrfqmaterial',
  async (data, thunkAPI) => {
    try {
      return await RfqService.postRfQMaterialService(data);
    } catch (error) {
      console.log(error, 'error');
      const {message} = error;
      // console.log(error.response.data || message)

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

export const postRfqVendor = createAsyncThunk(
  'rfq/postrfqjob',
  async (data, thunkAPI) => {
    try {
      return await RfqService.postRfQVendorService(data);
    } catch (error) {
      console.log(error, 'error rfq ');
      const {message} = error;
      // console.log(error.response.data || message)

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

export const getRfqVendor = createAsyncThunk(
  'vendor/CreateVendorAction',
  async (user, thunkAPI) => {
    try {
      return await AuthService.CreateVendorApi(user);
    } catch (error) {
      console.log(error, 'error');
      const {message} = error;
      return thunkAPI.rejectWithValue(error.response.data || message);
    }
  },
);

//   Client Select Items interested in from each vendor

export const clientSelectItems = createAsyncThunk(
  'vendor/postselectAction',
  async (user, thunkAPI) => {
    try {
      return await RfqService.selectItemServices(user);
    } catch (error) {
      // console.log(
      //   error.response.data,
      //   'error selectIjjjjjtemServicesselectItemServices',
      // );
      const {message} = error;
      return thunkAPI.rejectWithValue(error.response.data.error || message);
    }
  },
);

const initialState = {
  allrfq: [],
  jobRfq: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  refresh: null,
};

export const RfqSlice = createSlice({
  name: 'createfq',
  initialState,
  reducers: {
    dispatchRouteData: (state, {payload}) => {
      state.jobRfq = payload;
    },
  },

  extraReducers: {
    [getRfqJob.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getRfqJob.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.allrfq = action.payload;
    },
    [getRfqJob.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
    [postRfqJob.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postRfqJob.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.jobRfq = action.payload.data;
      state.refresh = action.payload.data.status;
      // state.job.push(action.payload.data);
    },
    [postRfqJob.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
    [postRfqMaterial.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postRfqMaterial.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.jobRfq = action.payload.data;
      state.refresh = action.payload.data.status;
      // state.job.push(action.payload.data);
    },
    [postRfqMaterial.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
    [postRfqVendor.pending]: (state, action) => {
      state.isLoading = true;
    },
    [postRfqVendor.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.jobRfq = action.payload.data;
      state.refresh = action.payload.data.status;
      // state.job.push(action.payload.data);
    },
    [postRfqVendor.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {dispatchRouteData} = RfqSlice.actions;

const {reducer} = RfqSlice;
export default reducer;
