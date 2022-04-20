import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import ChessImg from '../../assets/chess-img.jpeg';

interface PostsData {
  id: string;
  description: string;
  date: string;
  heading: string;
  img: any;
}

interface InitialState {
  arrData: PostsData[];
  redirectPostData: {
    id: string;
    description: string;
    date: string;
    heading: string;
    img: any;
  };
}

const initialState: InitialState = {
  arrData: [
    {
      id: uuid(),
      date: new Date().toLocaleString(),
      heading:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eveniet.',
      description: 'dummy text...',
      img: ChessImg,
    },
    {
      id: uuid(),
      date: new Date().toLocaleString(),
      heading:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eveniet.',
      description: 'dummy description text...',
      img: ChessImg,
    },
    {
      id: uuid(),
      date: new Date().toLocaleString(),
      heading:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eveniet.',
      description: 'dummy description text...',
      img: ChessImg,
    },
    {
      id: uuid(),
      date: new Date().toLocaleString(),
      heading:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eveniet.',
      description: 'dummy description text...',
      img: ChessImg,
    },
  ],
  redirectPostData: {
    id: '',
    description: '',
    date: '',
    heading: '',
    img: '',
  },
};

const postsSlice = createSlice({
  name: 'postsslice',
  initialState,
  reducers: {
    handleRedirectPostData(state, action) {
      state.redirectPostData = action.payload;
    },
  },
});

export default postsSlice.reducer;
