import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../apis/moviesApi';

export const asynchronousStore = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
