import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../Slice/AuthSlice';
import ChatReducer from '../Slice/ChatSlice';

const reducer = {
  auth: authReducer,
  chat: ChatReducer,
};

export const store = configureStore({
  reducer: reducer,
});
