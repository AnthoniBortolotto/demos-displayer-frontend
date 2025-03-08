import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DemoType } from "../../helpers/types/demo";

export type DemoState = {
  demo: DemoType | null;
};

const initialState: DemoState = {
  demo: null,
};

export const selectedDemoSlice = createSlice({
  name: "selectedDemo",
  initialState,
  reducers: {
    setSelectedDemo: (state, action: PayloadAction<DemoType>) => {
      state.demo = action.payload;
    },
    cleanSelectedDemo: (state) => {
      state.demo = null;
    },
  },
});

export const { setSelectedDemo, cleanSelectedDemo } = selectedDemoSlice.actions;

export default selectedDemoSlice.reducer;
