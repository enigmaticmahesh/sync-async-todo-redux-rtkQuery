import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  todos: [],
};

export const synchronousTodosSlice = createSlice({
  name: 'todos',
  initialState: INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
    updateTodo: (state, { payload: { index, updatedTodo } }) => {
      state.todos[index] = updatedTodo;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } =
  synchronousTodosSlice.actions;
export default synchronousTodosSlice.reducer;
