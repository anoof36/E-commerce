import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducer';

const store = configureStore({
  reducer: {
    auth: authReducer, // Linking reducer(s) to the store
  },
});

export default store;
