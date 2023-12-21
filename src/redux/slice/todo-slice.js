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
      state.activeTasks = [action.payload.data, ...state.activeTasks];
      state.message = action.payload.message;
    },
    errorMessage(state, action) {
      state.message = action.payload;
    }
  }
});

export const { setTasks, newTask, errorMessage } = todoSlice.actions;

// get task from local storage
export const getTasks = () => {
  const data = JSON.parse(localStorage.getItem('tasks'));
  const res = { message: 'Success' };

  if (data) {
    // separating tasks into two states
    const active = data.filter((v) => v.isCompleted === false);
    const completed = data.filter((v) => v.isCompleted === true);

    res.active = active
    res.completed = completed;

    return setTasks(res);
  } else {
    res.message = 'Error';
    return errorMessage(res.message);
  };
};

// add new task
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

export const editCheck = (id, status) => {
  const { payload: { active, completed, message } } = getTasks();

  if (message === 'Success') {
    if (!status) {
      const index = active.findIndex(v => v.id === id); // find data

      active[index].isCompleted = true;
      completed.push(active[index]); // add data to completed array

      const arrActive = active.filter(v => v.id !== id); // delete data from active array
      const data = arrActive.concat(completed);
      localStorage.setItem('tasks', JSON.stringify(data));

      const res = { active: arrActive, completed, message: 'Success' };
      return setTasks(res);
    } else {
      const index = completed.findIndex(v => v.id === id);

      completed[index].isCompleted = false;
      active.push(completed[index]); // add data to active array

      const arrCompleted = completed.filter(v => v.id !== id); // delete data from completed array
      const data = active.concat(arrCompleted);
      localStorage.setItem('tasks', JSON.stringify(data));

      const res = { active, completed: arrCompleted, message: 'Success' };
      return setTasks(res);
    };
  } else {
    return errorMessage(message);
  };
};

// edit task and edit completion status
// export const editTask = (id, params) => {
//   const { payload: { active, completed, message } } = getTasks();
//   let arr = [];

//   if (message === 'Success') {
//     arr = active.concat(completed);
//     const index = arr.indexOf(v => v.id === id); // return task index

//     arr[index].task = params.task ? params.task : arr[index].task;
//     arr[index].isCompleted = params.isCompleted ? params.isCompleted : arr[index].isCompleted;

//     localStorage.setItem('tasks', JSON.stringify(arr)); // replace data in local storage

//     // gimana cara biar bisa kepisah lagi datanya cative dan completed?

//     // const res = { data, message: 'Success' };
//     // return setTasks(res);
//   } else {
//     return errorMessage(message);
//   };
// };

// delete task
export const deleteTask = (id) => {
  const { payload: { active, completed, message } } = getTasks();

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