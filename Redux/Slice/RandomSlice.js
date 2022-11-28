import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import randomService from '../Services/RandomServices';

import StepService from '../Services/StepService';

export const randomSlice = createAsyncThunk(
  'material/random',
  async thunkAPI => {
    try {
      return await randomService.randomPerson();
    } catch (error) {
      const {message} = error;

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response || error.response.data.error[0].msg,
      );
    }
  },
);

export const filterSlice = createAsyncThunk(
  'material/random',
  async thunkAPI => {
    try {
      return await randomService.filterPerson();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log(message, '1111111111111');
      // console.log(error.response.data || message)

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(message);
    }
  },
);
const initialState = {
  random: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const materialSlice = createSlice({
  name: 'material',
  initialState,

  extraReducers: {
    [randomSlice.pending]: (state, action) => {
      state.isLoading = true;
    },
    [randomSlice.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.random = action.payload;
    },
    [randomSlice.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [randomSlice.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

const {reducer} = randomSlice;
export default reducer;
