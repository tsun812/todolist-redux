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
    //action for (un)marking complete task
    toggleComplete: (state, action) => {
      const index = state.findIndex(
        (element) => element.id === action.payload.id
      );
      state[index].completed = action.payload.completed;
    },
  },
});
export const { add, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
// Will handle the action type `'counter/increment'`
