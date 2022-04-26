import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
// import { PostData } from './PostScreen';

const PostHolder = styled.div`
  border: none;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 30px;
  margin: 10px 0;
`;
const Heading = styled.h4`
  color: darkorange;
`;

const Date = styled.p`
  color: red;
`;
const Description = styled.p`
  color: #000;
`;
const Img = styled.div``;

// interface Data extends PostData {}

const OnePostScreen = () => {
  const dataFromHomeScreen = useAppSelector(
    (state) => state.postsState.redirectPostData,
  );

  return (
    <PostHolder>
      <Date>{dataFromHomeScreen.date}</Date>
      <Heading>{dataFromHomeScreen.heading}</Heading>
      <Description>{dataFromHomeScreen.description}</Description>
      <Img>
        <img src={dataFromHomeScreen.img} alt="img" />
      </Img>
    </PostHolder>
  );
};

export default OnePostScreen;
