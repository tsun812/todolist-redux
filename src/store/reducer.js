import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { value: ["1", "2", "3"] },
  reducers: {},
});
export default todoSlice.reducer;
// Will handle the action type `'counter/increment'`
