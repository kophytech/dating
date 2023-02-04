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
  async (data, thunkAPI) => {
    try {
      return await ChatService.chatWithOtherServices(data);
    } catch (error) {
      console.log('====================================');
      console.log(error, 'backend error');
      console.log('====================================');
      const {message} = error;
      console.log(error.response.data || message);

      // const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString() || error.response.data

      return thunkAPI.rejectWithValue(
        error.response.data.error[0].msg || message,
      );
    }
  },
);

export const sendMessage = createAsyncThunk(
  'Liking/sendMessageServices',
  async (data, thunkAPI) => {
    try {
      return await ChatService.sendMessageServices(data);
    } catch (error) {
      console.log('====================================');
      console.log(error, 'backend error');
      console.log('====================================');
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

const ChatSlice = createSlice({
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

    [chatWithOtherUser.pending]: (state, action) => {
      state.isLoading = true;
    },
    [chatWithOtherUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.chat = action.payload;
    },
    [chatWithOtherUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    },

    [chatWithOtherUser.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

const {reducer} = ChatSlice;
export default reducer;
