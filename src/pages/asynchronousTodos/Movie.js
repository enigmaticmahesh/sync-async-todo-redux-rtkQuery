import React from 'react';

export default function Movie({
  movie,
  getDeleteId,
  movieIndex,
  getUpdateIndex,
}) {
  const handleDelete = () => {
    getDeleteId(movie.id);
  };
  const handleUpdate = () => {
    getUpdateIndex(movieIndex);
  };
  return (
    <div>
      <span>{movie.title}</span>
      <button type="button" onClick={handleUpdate}>
        Update
      </button>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
