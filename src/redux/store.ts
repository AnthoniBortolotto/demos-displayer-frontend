import { configureStore } from '@reduxjs/toolkit'
import { selectedFrameSlice } from './slices/selectedFrameSlice'
import { selectedDemoSlice } from './slices/selectedDemoSlice'

export const store = configureStore({
  reducer: {
    selectedFrame: selectedFrameSlice.reducer,
    selectedDemo: selectedDemoSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch