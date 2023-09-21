import { createSlice } from "@reduxjs/toolkit";

let tasks = localStorage.getItem("taskCreated");

const initialState = {
  tasksFromLocalStorage: tasks,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    placeTasks: (state, action) => {
      state.tasksFromLocalStorage = action.payload;
    },
  },
});

export const { placeTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
