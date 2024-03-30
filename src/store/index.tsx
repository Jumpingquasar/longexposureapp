import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'

export const store = configureStore(
  {
    reducer: {
      user: authReducer
    }
  }
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;