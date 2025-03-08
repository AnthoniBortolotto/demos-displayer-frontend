import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FrameType } from "../../helpers/types/frames";

export type FrameState = {
  frame: FrameType | null;
};

const initialState: FrameState = {
  frame: null,
};

export const selectedFrameSlice = createSlice({
  name: "frame",
  initialState,
  reducers: {
    setSelectedFrame: (state, action: PayloadAction<FrameType>) => {
      state.frame = action.payload;
    },
    cleanSelectedFrame: (state) => {
      state.frame = null;
    },
  },
});

export const { cleanSelectedFrame, setSelectedFrame} = selectedFrameSlice.actions;

export default selectedFrameSlice.reducer;
