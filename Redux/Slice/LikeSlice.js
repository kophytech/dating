import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import LikingService from '../Services/LikeServices';

export const LikeServices = createAsyncThunk('Liking/liked', async thunkAPI => {
  try {
    return await LikingService.likePerson(id);
  } catch (error) {
    console.log(error, 'er11ro11r');
    const {message} = error;
    console.log(error.response.data || message);

    // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

    return thunkAPI.rejectWithValue(
      error.response.data.error[0].msg || message,
    );
  }
});

const initialState = {
  like: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const materialSlice = createSlice({
  name: 'Liking',
  initialState,
  extraReducers: {
    [LikeServices.pending]: (state, action) => {
      state.isLoading = true;
    },
    [LikeServices.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.like = action.payload;
    },
    [LikeServices.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [LikeServices.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

const {reducer} = LikeServices;
export default reducer;
