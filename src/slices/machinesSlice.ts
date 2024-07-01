import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { machines } from "../data/machineList";
import { Machine } from "../interfaces/types";

interface MachinesState {
  machines: Machine[];
}

const initialState: MachinesState = {
  machines,
};

const machinesSlice = createSlice({
  name: "machines",
  initialState,
  reducers: {
    // Define any reducers if needed
  },
});

export const {} = machinesSlice.actions;
export default machinesSlice.reducer;
