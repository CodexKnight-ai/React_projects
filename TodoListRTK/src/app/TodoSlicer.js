import { createSlice, nanoid } from "@reduxjs/toolkit";

// Define the initial state with an empty array of todos
const initialState = {
  todos: [{id:1,text:"Hello everyone"}], // This should be an array to store multiple todos
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Reducer to add a new todo item
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // Generate a unique ID for each todo
        text: action.payload, // Text of the todo passed via action
      };
      state.todos.push(todo); // Add the new todo to the array
    },

    // Reducer to remove a todo item by its ID
    removeTodo: (state, action) => {
      // Filter out the todo with the matching ID
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Export the actions
export const { addTodo, removeTodo } = todoSlice.actions;

// Export the reducer
export default todoSlice.reducer;
