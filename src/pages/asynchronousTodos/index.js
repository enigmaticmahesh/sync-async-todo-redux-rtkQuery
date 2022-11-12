import React, { useReducer, useRef, useState } from 'react';
import {
  useCreateMovieMutation,
  useDeleteMovieMutation,
  useGetMoviesQuery,
  useUpdateMovieMutation,
} from '../../apis/moviesApi';
import {
  INITIAL_STATE,
  movieReducer,
  ACTIONS,
} from '../../reducers/movieReducer';
import Movie from './Movie';

export default function AsynchronousTodos() {
  const { data: movies, isError, isLoading } = useGetMoviesQuery();
  const [createMovie, result] = useCreateMovieMutation();
  const [deleteMovie, deleteResult] = useDeleteMovieMutation();
  const [updateMovie, updateResult] = useUpdateMovieMutation();
  const [state, dispatch] = useReducer(movieReducer, INITIAL_STATE);

  const [isUpdating, setIsUpdating] = useState(false);
  const movieID = useRef('');

  const handleInput = (e) => {
    const movieReducerData = {
      type: ACTIONS.CHANGE_INPUT,
      payload: { name: e.target.name, value: e.target.value },
    };
    dispatch(movieReducerData);
  };

  const handleCreateMovie = () => {
    const newMovie = {
      title: state.title,
      isbn: state.isbn,
      director: {
        firstname: state.firstname,
        lastname: state.lastname,
      },
    };
    createMovie(newMovie);
    dispatch({ type: ACTIONS.RESET_INPUTS });
  };

  const handleDelete = (id) => {
    deleteMovie(id);
  };

  const toggleUpdate = (movieIndex) => {
    const existingMovie = {
      ...movies[movieIndex],
      firstname: movies[movieIndex].director.firstname,
      lastname: movies[movieIndex].director.lastname,
    };
    movieID.current = movies[movieIndex].id;
    const movieReducerData = {
      type: ACTIONS.FILL_MOVIE,
      payload: existingMovie,
    };
    dispatch(movieReducerData);
    setIsUpdating(true);
  };

  const handleUpdate = () => {
    const existingMovie = {
      id: movieID.current,
      title: state.title,
      isbn: state.isbn,
      director: {
        firstname: state.firstname,
        lastname: state.lastname,
      },
    };
    updateMovie(existingMovie);
    dispatch({ type: ACTIONS.RESET_INPUTS });
    setIsUpdating(false);
  };

  if (
    isError ||
    result.isError ||
    deleteResult.isError ||
    updateResult.isError
  ) {
    return <p>Error while fetching Movies</p>;
  }

  if (
    isLoading ||
    result.isLoading ||
    deleteResult.isLoading ||
    updateResult.isLoading
  ) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h2>Asynchronous Store</h2>
      <div>
        <input
          type="text"
          name="title"
          value={state.title}
          onChange={handleInput}
          placeholder="Movie Title"
        />
        <input
          type="text"
          name="isbn"
          value={state.isbn}
          onChange={handleInput}
          placeholder="Movie ISBN"
        />
        <input
          type="text"
          name="firstname"
          value={state.firstname}
          onChange={handleInput}
          placeholder="Director's Firstname"
        />
        <input
          type="text"
          name="lastname"
          value={state.lastname}
          onChange={handleInput}
          placeholder="Director's Lastname"
        />
        <button
          type="button"
          onClick={isUpdating ? handleUpdate : handleCreateMovie}
        >
          {isUpdating ? 'Update Movie' : 'Create Movie'}
        </button>
      </div>
      {movies.map((movie, index) => (
        <Movie
          key={index}
          movie={movie}
          getDeleteId={handleDelete}
          getUpdateIndex={toggleUpdate}
          movieIndex={index}
        />
      ))}
    </section>
  );
}
