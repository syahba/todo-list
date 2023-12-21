import { configureStore } from "@reduxjs/toolkit";
import todo from './slice/todo-slice';
import modal from './slice/modal-slice';

const store = configureStore({
  reducer: {
    todo,
    modal
  }
});

export default store;