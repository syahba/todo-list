import { createSlice } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    activeTasks: [],
    completedTasks: [],
    message: 'Success' // Success | Error
  },
  reducers: {
    setTasks(state, action) {
      state.activeTasks = [...action.payload.active];
      state.completedTasks = [...action.payload.completed];
      state.message = action.payload.message;
    },
    newTask(state, action) {
      state.activeTasks = [action.payload.data, ...state.activeTasks];
      state.message = action.payload.message;
    },
    errorMessage(state, action) {
      state.message = action.payload;
    }
  }
});

export const { setTasks, newTask, errorMessage } = todoSlice.actions;

// get task from local storage to redux state
export const getTasks = () => {
  const data = JSON.parse(localStorage.getItem('tasks'));
  const res = { message: 'Success' };
  
  if (data) {
    // separating active and completed tasks to two states
    const active = data.filter((v) => v.isCompleted === false);
    const completed = data.filter((v) => v.isCompleted === true);

    res.active = active
    res.completed = completed;

    return setTasks(res);
  } else {
    res.message = 'Error'; // error handling no data
    return errorMessage(res.message);
  };
};

// add new task to local storage and redux state
export const addTask = (task) => {
  const { payload: { active, completed, message } } = getTasks();
  let arr = [];

  if (message === 'Success') {
    arr = active.concat(completed); // insert existing data to array
  };

  const data = {
    id: new Date().getTime(),
    task,
    isCompleted: false
  };
  arr.push(data); // insert new data to array

  localStorage.setItem('tasks', JSON.stringify(arr)); // replace data in local storage

  const res = { data, message: 'Success' };
  return newTask(res);
};

// function edit dan check list pakai id, panggil get one task function lalu save lagi ke redux dan local storage

// delete task in redux state and local storage
export const deleteTask = (id) => {
  const { payload: { active, completed, message }} = getTasks();

  if (message === 'Success') {
    const arrCompleted = completed.filter(v => v.id !== id);
    const arrActive = active.filter(v => v.id !== id);

    const data = arrActive.concat(arrCompleted);
    localStorage.setItem('tasks', JSON.stringify(data)); // replace data

    const res = { active: arrActive, completed: arrCompleted, message: 'Success' };
    return setTasks(res);
  } else {
    return errorMessage(message);
  };
};

export default todoSlice.reducer;