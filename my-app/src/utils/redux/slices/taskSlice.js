import { v4 as uuid } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    incompleteTasks: [],
    completedTasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      const taskId = uuid();
      state.incompleteTasks.push({ id: taskId, ...action.payload.task });
    },
    markDone: (state, action) => {
      state.incompleteTasks = state.incompleteTasks.filter(
        (item) => item.id !== action.payload.task.id
      );
      state.completedTasks.push(action.payload.task);
    },
  },
});

export const { addTask, markDone } = taskSlice.actions;
export default taskSlice.reducer;
