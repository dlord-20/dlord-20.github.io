import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import checkboxReducer from '../features/checkbox/checkboxSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    checkbox: checkboxReducer
  },
});
