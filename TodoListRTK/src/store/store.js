import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../app/TodoSlicer.js";

const store = configureStore({
  reducer: todoReducer,
});

export default store;
