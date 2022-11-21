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
      // console.log(error.response.data || message)

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

const initialState = {
  profile: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
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
  },
});

const {reducer} = profileSlice;
export default reducer;
