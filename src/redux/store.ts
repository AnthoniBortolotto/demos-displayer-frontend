import { configureStore } from '@reduxjs/toolkit'
import { selectedFrameSlice } from './slices/selectedFrameSlice'
import { selectedDemoSlice } from './slices/selectedDemoSlice'
import { loadingDataSlice } from './slices/loadingDataSlice'

export const store = configureStore({
  reducer: {
    selectedFrame: selectedFrameSlice.reducer,
    selectedDemoSlice: selectedDemoSlice.reducer,
    loadingDataSlice: loadingDataSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch