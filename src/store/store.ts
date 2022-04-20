import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todos/todoSlice';
import postReducer from '../features/sk-posts/PostsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    todos: todoReducer,
    postsState: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
