import React, { FC, useState } from 'react';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import PostScreen from './PostScreen';
import ChessImg from '../../assets/chess-img.jpeg';

const Header = styled.h1`
  text-transform: uppercase;
  font-size: 20px;
`;
const Div = styled.div`
  margin: 5px 0;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 10px 0;
`;

const DUMMY_POSTS = [
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
];

const PostsScreen: FC = () => {
  const [posts] = useState(DUMMY_POSTS);
  return (
    <>
      <Div>
        <Header>Nase aktivnosti</Header>
        <Wrapper>
          {posts.map((post) => (
            <PostScreen post={post} key={post.id} />
          ))}
        </Wrapper>
      </Div>
    </>
  );
};
export default PostsScreen;
