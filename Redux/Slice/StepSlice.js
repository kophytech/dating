import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import MaterialService from '../Services/materialService';
import StepService from '../Services/StepService';

export const step1Material = createAsyncThunk(
  'material/step1',
  async (data, thunkAPI) => {
    try {
      return await StepService.postStep1Service(data);
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
