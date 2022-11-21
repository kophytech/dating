import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import randomService from '../Services/RandomServices';

import StepService from '../Services/StepService';

export const randomSlice = createAsyncThunk(
  'material/random',
  async thunkAPI => {
    try {
      return await randomService.randomPerson();
    } catch (error) {
      console.log(error.response.data, 'er11ror');
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
