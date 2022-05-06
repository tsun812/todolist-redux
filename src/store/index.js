import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer";
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
export default store;
