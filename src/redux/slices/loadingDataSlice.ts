import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type loadingState = {
  isLoading: boolean;
};

const initialState: loadingState = {
  isLoading: true,
};

export const loadingDataSlice = createSlice({
  name: "loadingData",
  initialState,
  reducers: {
    setLoadingData: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoadingData } = loadingDataSlice.actions;

export default loadingDataSlice.reducer;
