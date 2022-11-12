import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../../slices/synchronousTodosSlice';

export default function Todo({ todo, index }) {
  const dispatch = useDispatch();
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState('');
  const handleDelete = () => {
    dispatch(deleteTodo(index));
  };
  const toggleUpdate = () => {
    setUpdatedTodo(todo);
    setIsUpdating(true);
  };
  const handleUpdate = () => {
    dispatch(updateTodo({ index, updatedTodo }));
    setIsUpdating(false);
  };
  return (
    <div>
      {isUpdating ? (
        <div>
          <input
            type="text"
            onChange={(e) => setUpdatedTodo(e.target.value)}
            value={updatedTodo}
          />
          <button type="button" onClick={handleUpdate}>
            Update
          </button>
        </div>
      ) : (
        <div>
          <span>{todo}</span>&nbsp;
          <button type="button" onClick={toggleUpdate}>
            Update
          </button>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
