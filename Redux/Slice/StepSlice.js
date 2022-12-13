import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import StepService from '../Services/StepService';

export const step1Material = createAsyncThunk(
  'material/step1',
  async (data, thunkAPI) => {
    try {
      return await StepService.postStep1Service(data);
    } catch (error) {
      console.log(error, 'e991111199ror');
      const {message} = error;
      // console.log(error.response.data || message)

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);


export const step2Material = createAsyncThunk(
  'material/step2',
  async (data, thunkAPI) => {
    try {
      return await StepService.postStep2Service(data);
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

export const step3Material = createAsyncThunk(
  'material/step3',
  async (data, thunkAPI) => {
    try {
      return await StepService.postStep3Service(data);
    } catch (error) {
      console.log('====================================');
      console.log(error.response);
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

const initialState = {
  step1: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  refresh: null,
};

const materialSlice = createSlice({
  name: 'material',
  initialState,

  extraReducers: {
    [step1Material.pending]: (state, action) => {
      state.isLoading = true;
    },
    [step1Material.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.step1 = action.payload;
      state.refresh = action.payload.msg;
    },
    [step1Material.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [step1Material.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

const {reducer} = materialSlice;
export default reducer;
