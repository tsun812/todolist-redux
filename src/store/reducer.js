import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    { id: "1", title: "todo1", completed: false },
    { id: "2", title: "todo2", completed: false },
    { id: "3", title: "todo3", completed: false },
  ],
  reducers: {
    add: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
      console.log(state);
    },
  },
});
export const { add } = todoSlice.actions;
export default todoSlice.reducer;
// Will handle the action type `'counter/increment'`
