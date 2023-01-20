import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../Slice/AuthSlice';
import ChatReducer from '../Slice/ChatSlice';
import profileReducer from '../Slice/ProfileSlice';

const reducer = {
  auth: authReducer,
  chat: ChatReducer,
  profile: profileReducer,
};

export const store = configureStore({
  reducer: reducer,
});
