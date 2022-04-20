import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTodos } from './TodoService';
import { ITodo } from './models';

interface InitialState {
  isLoading: boolean;
  todosList: ITodo[];
}

const initialState: InitialState = {
  isLoading: false,
  todosList: [],
};
export const getTodosAsync = createAsyncThunk<ITodo[]>(
  'todos/fetchTodos',
  async (): Promise<ITodo[]> => getTodos(),
);

const todosSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodosAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTodosAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todosList = action.payload;
      });
  },
});

export default todosSlice.reducer;
