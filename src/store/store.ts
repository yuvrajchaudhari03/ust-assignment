import { configureStore } from "@reduxjs/toolkit";
import machinesReducer from "../slices/machinesSlice";
import filterReducer from "../slices/filterSlice";

const store = configureStore({
  reducer: {
    machines: machinesReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
