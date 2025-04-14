// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import roleReducer from '../Slice/StateSlice';

const store = configureStore({
  reducer: {
    role: roleReducer,
  },
});

export default store;