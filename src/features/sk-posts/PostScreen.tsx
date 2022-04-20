/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface Post {
  post: PostData;
}
interface PostData {
  id: string;
  date: string;
  heading: string;
  description: string;
  img: string;
}

const PostHolder = styled.div`
  border: none;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 30px;
  margin: 10px 0;
  cursor: pointer;
  overflow: hidden;
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

  :hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

const PostScreen: FC<Post> = ({ post }) => {
  const history = useHistory();

  const handleRedirectToPost = () => {
    history.push(`/objava/${post.id}`);
  };

  return (
    <PostHolder onClick={() => handleRedirectToPost()}>
      <Date>{post.date}</Date>
      <Heading>{post.heading}</Heading>
      <Description>{post.description}</Description>
      <Img>
        <img src={post.img} alt="img" />
      </Img>
    </PostHolder>
  );
};
export default PostScreen;
