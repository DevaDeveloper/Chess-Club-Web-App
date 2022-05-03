/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { handleRedirectPostData } from './PostsSlice';
import { useAppDispatch } from '../../store/hooks';

interface Post {
  post: PostData;
}
export interface PostData {
  id: string;
  date: string;
  heading: string;
  description: string;
  img: string;
  imgTwo: any;
  imgThree: any;
  imgFour: any;
  imgFive: any;
  imgSix: any;
  imgSeven: any;
  imgEight: any;
  imgNine: any;
  imgTen: any;
}

const PostHolder = styled.div`
  border: none;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 30px;
  margin: 10px 0;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  max-height: 200px;
  min-width: 900px;

  @media (max-width: 1024px) {
    min-width: auto;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
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
const Img = styled.div`
  transition: all 0.4s ease;
  overflow: hidden;
  flex: 0 0 20%;
  display: flex;
  align-items: center;

  img {
    width: 170px;
    height: 170px;
  }

  :hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
const FirstPart = styled.div`
  flex: 0 0 70%;
`;

const PostScreen: FC<Post> = ({ post }) => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleRedirectToPost = () => {
    dispatch(handleRedirectPostData(post));
    history.push(`/objava/${post.id}`);
  };

  return (
    <PostHolder onClick={() => handleRedirectToPost()}>
      <FirstPart>
        <Date>{post.date}</Date>
        <Heading dangerouslySetInnerHTML={{ __html: post.heading }} />
        <Description dangerouslySetInnerHTML={{ __html: post.description }} />
      </FirstPart>
      <Img>
        <img src={post.img} alt="img" />
      </Img>
    </PostHolder>
  );
};
export default PostScreen;
