import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../Slice/AuthSlice';

const reducer = {
  auth: authReducer,
};

export const store = configureStore({
  reducer: reducer,
});
