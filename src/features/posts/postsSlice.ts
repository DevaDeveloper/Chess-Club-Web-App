import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IPost } from './models';
import { getPosts } from './PostService';

interface InitialState {
  isLoading: boolean;
  postsList: IPost[];
}

const initialState: InitialState = {
  isLoading: false,
  postsList: [],
};
export const getPostsAsync = createAsyncThunk<IPost[]>(
  'posts/fetchPosts',
  async (): Promise<IPost[]> => getPosts(),
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPostsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postsList = action.payload;
      });
  },
});

export default postsSlice.reducer;
