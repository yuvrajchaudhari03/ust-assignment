import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { statuses } from "../data/statuses";
import { Status } from "../interfaces/types";

const initialState: Status = statuses[0];

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<Status>) => action.payload,
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
