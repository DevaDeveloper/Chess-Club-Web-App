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
  naseAktivnosti: PostsData[];
  najaveTurnira: PostsData[];
  skolaSaha: PostsData[];
  redirectPostData: {
    id: string;
    description: string;
    date: string;
    heading: string;
    img: any;
    img_2: any;
    img_3: any;
    img_4: any;
    img_5: any;
    img_6: any;
    img_7: any;
    img_8: any;
    img_9: any;
    img_10: any;
  };
}

const initialState: InitialState = {
  naseAktivnosti: [
    {
      id: uuid(),
      date: new Date().toLocaleString(),
      heading:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eveniet.',
      description: 'dummy description about post, description text...',
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
  skolaSaha: [
    {
      id: uuid(),
      date: new Date().toLocaleString(),
      heading:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eveniet.',
      description: 'dummy description about post, description text...',
      img: ChessImg,
    },
  ],

  najaveTurnira: [
    {
      id: uuid(),
      date: new Date().toLocaleString(),
      heading:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eveniet.',
      description: 'dummy description about post, description text...',
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
    img_2: '',
    img_3: '',
    img_4: '',
    img_5: '',
    img_6: '',
    img_7: '',
    img_8: '',
    img_9: '',
    img_10: '',
  },
};

// const aktivnostiCollectionRef = collection(db, 'aktivnosti');
// const najaveCollectionRef = collection(db, 'najave');
// const skolaCollectionRef = collection(db, 'skola');

// const addPostToDatabase = createAsyncThunk(
//   'postsslice/addPostToDatabase',
//   async (data) => {
//     await addDoc(aktivnostiCollectionRef, data);
//   },
// );

const postsSlice = createSlice({
  name: 'postsslice',
  initialState,
  reducers: {
    handleRedirectPostData(state, action) {
      state.redirectPostData = action.payload;
    },
    AddNewPost(state, action) {
      if (action.payload.tag === 'najave') {
        state.najaveTurnira = [action.payload, ...state.najaveTurnira];
      } else if (action.payload.tag === 'aktivnosti') {
        state.naseAktivnosti = [action.payload, ...state.naseAktivnosti];
      } else {
        state.skolaSaha = [action.payload, ...state.skolaSaha];
      }
    },
  },
});

export const { handleRedirectPostData, AddNewPost } = postsSlice.actions;
export default postsSlice.reducer;
