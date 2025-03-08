import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FrameMode, FrameType } from "../../helpers/types/frames";

export type FrameState = {
  frame: FrameType | null;
  mode: FrameMode;
  FrameEdittedHtml: string | null;
};

const initialState: FrameState = {
  frame: null,
  mode: "view",
  FrameEdittedHtml: null,
};

export const selectedFrameSlice = createSlice({
  name: "frame",
  initialState,
  reducers: {
    setSelectedFrame: (state, action: PayloadAction<FrameType>) => {
      state.frame = action.payload;
      state.mode = "view";
      state.FrameEdittedHtml = action.payload.html;
    },
    cleanSelectedFrame: (state) => {
      state.frame = null;
      state.mode = "view";
    },
    setFrameMode: (state, action: PayloadAction<FrameMode>) => {
      state.mode = action.payload;
    },
    setFrameEdditedHtml: (state, action: PayloadAction<string>) => {
      state.FrameEdittedHtml = action.payload;
    },
  },
});

export const {
  cleanSelectedFrame,
  setSelectedFrame,
  setFrameMode,
  setFrameEdditedHtml,
} = selectedFrameSlice.actions;

export default selectedFrameSlice.reducer;
