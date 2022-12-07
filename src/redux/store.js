import {configureStore} from '@reduxjs/toolkit';
import {reducerHomeSlice} from '../HomeScreen/HomeSlice';
import {reducerLoginSlice} from '../LoginScreen/LoginSlice';

export const store = configureStore({
  reducer: {
    reducerHome: reducerHomeSlice.reducer,
    reducerLogin: reducerLoginSlice.reducer,
  },
});
