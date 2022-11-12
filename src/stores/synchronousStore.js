import { configureStore } from '@reduxjs/toolkit';
import synchronousTodosSlice from '../slices/synchronousTodosSlice';

export const synchronousStore = configureStore({
  reducer: {
    todos: synchronousTodosSlice,
  },
});
