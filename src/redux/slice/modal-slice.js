import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    status: false,
    input: '',
    activity: 'Add' // Add | Edit
  },
  reducers: {
    setModal(state, action) {
      state.status = action.payload.status;
      state.input = action.payload.input;
      state.activity = action.payload.activity;
    }
  }
});

export const { setModal } = modalSlice.actions;

export const getInput = (params) => {
  const res = {
    status: params.status,
    input: params.input,
    activity: params.activity
  };

  return setModal(res);
};

export default modalSlice.reducer;