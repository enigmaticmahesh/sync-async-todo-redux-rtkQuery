import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../slices/synchronousTodosSlice';
import Todo from './Todo';

export default function SynchronousTodos() {
  // state.<slice_name>.<slice_state_object_key>
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');

  const handleTodosList = () => {
    if (!todos.length) {
      return <p>There are no Todos to show. Please, add one.</p>;
    }

    return (
      <>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} index={index} />
        ))}
      </>
    );
  };

  const handleAddTodo = () => {
    dispatch(addTodo(newTodo));
    setNewTodo('');
  };

  return (
    <section>
      <h2>Synchronous Store</h2>
      <div className="input__wrapper">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      {handleTodosList()}
      <hr />
    </section>
  );
}
