// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import roleReducer from '../Slice/StateSlice'; // Correct import

export const store = configureStore({
  reducer: {
    role: roleReducer,
  },
});

// Define RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;