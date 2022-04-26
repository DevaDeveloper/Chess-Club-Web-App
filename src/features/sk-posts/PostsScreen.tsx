/* eslint-disable operator-linebreak */
import React, { FC, useState } from 'react';
// import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import PostScreen from './PostScreen';
import { useAppSelector } from '../../store/hooks';
// import ChessImg from '../../assets/chess-img.jpeg';

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

const PostsScreen: FC = () => {
  const allPostsData = useAppSelector((state) => state.postsState.arrData);
  const [posts] = useState(allPostsData);
  return (
    <>
      <Div>
        <Header>Nase aktivnosti</Header>
        <Wrapper>
          {posts &&
            posts.map((post) => <PostScreen post={post} key={post.id} />)}
        </Wrapper>
      </Div>
    </>
  );
};
export default PostsScreen;
