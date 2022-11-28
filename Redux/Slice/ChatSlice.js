import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import ChatService from '../Services/ChatServices';
import LikingService from '../Services/LikeServices';

export const getPrevious = createAsyncThunk('Liking/liked', async thunkAPI => {
  try {
    return await ChatService.previousMessages();
  } catch (error) {
    const {message} = error;
    console.log(error.response.data || message);

    // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

    return thunkAPI.rejectWithValue(
      error.response.data.error[0].msg || message,
    );
  }
});

export const chatWithOtherUser = createAsyncThunk(
  'Liking/liked',
  async thunkAPI => {
    try {
      console.log(data, '303030303030');
      return await ChatService.chatWithOtherServices(data);
    } catch (error) {
      const {message} = error;
      console.log(error.response.data || message);

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);
const initialState = {
  chat: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

const materialSlice = createSlice({
  name: 'Chat',
  initialState,
  extraReducers: {
    [getPrevious.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getPrevious.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.chat = action.payload;
    },
    [getPrevious.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [getPrevious.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

const {reducer} = getPrevious;
export default reducer;
