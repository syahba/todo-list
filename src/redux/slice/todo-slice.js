import { createSlice } from "@reduxjs/toolkit";

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
      state.activeTasks = [...state.activeTasks, action.payload.active];
      state.message = action.payload.message;
    },
    errorMessage(state, action) {
      state.message = action.payload.message;
    }
  }
});

export const { setTasks, newTask, errorMessage } = todoSlice.actions;

// get task from local storage to redux state
export const getTasks = () => {
  const data = JSON.parse(localStorage.getItem('tasks'));
  const res = { message: 'Success' };
  
  if (data) {
    const active = data.filter((v) => v.isCompleted === false);    
    const completed = data.filter((v) => v.isCompleted === true);

    res.active = active
    res.completed = completed;

    return setTasks(res);
  } else {
    res.message = 'Error'; // error handling no data
    return errorMessage(res);
  }
};

// function get one task pakai index array

// function add task buat save ke local storage
export const addTask = (data) => {
  localStorage.setItem('') // not done
}

// function edit pakai id, panggil get one task function lalu save lagi ke redux dan local storage

// dunction delete pakai id, panggil get one task function lalu save lagi data tanpa deleted ke redux dan local storage

export default todoSlice.reducer;