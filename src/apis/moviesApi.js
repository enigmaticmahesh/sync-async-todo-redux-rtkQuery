import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001/' }),
  tagTypes: ['Movies'],
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => 'movies',
      providesTags: ['Movies'],
    }),
    createMovie: builder.mutation({
      query: (newMovie) => ({
        url: 'movies',
        method: 'POST',
        body: newMovie,
      }),
      invalidatesTags: ['Movies'],
    }),
    deleteMovie: builder.mutation({
      query: (id) => ({
        url: 'movies',
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: ['Movies'],
    }),
    updateMovie: builder.mutation({
      query: (updatedMovie) => ({
        url: 'movies',
        method: 'PUT',
        body: updatedMovie,
      }),
      invalidatesTags: ['Movies'],
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useCreateMovieMutation,
  useDeleteMovieMutation,
  useUpdateMovieMutation,
} = moviesApi;
