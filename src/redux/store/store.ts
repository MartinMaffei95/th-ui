import { configureStore } from '@reduxjs/toolkit';
import appSlice from '../slices/appSlice';
import imageSlice from '../slices/imageSlice';
import settingToolsSlice from '../slices/settingTools.slice';

export const store = configureStore({
  reducer: {
    settingTools: settingToolsSlice,
    image: imageSlice,
    app: appSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
