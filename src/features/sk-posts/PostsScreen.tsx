/* eslint-disable operator-linebreak */
import React, { FC, useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
// import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import PostScreen from './PostScreen';
// import { useAppSelector } from '../../store/hooks';
import { db } from '../../firebase-config';
// import ChessImg from '../../assets/chess-img.jpeg';

const Header = styled.h1`
  text-transform: uppercase;
  font-size: 20px;

  @media (max-width: 767px) {
    text-align: center;
  }
`;
const Div = styled.div`
  margin: 5px 0;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 10px 0;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  padding: 10px;
`;

const PostsScreen: FC = () => {
  const [aktivnosti, setAktivnosti] = useState([]);
  const [najavePosts, setNajavePosts] = useState([]);
  const [skolaSahaPosts, setSkolaSahaPosts] = useState([]);

  const aktivnostiCollectionRef = collection(db, 'aktivnosti');
  const najaveCollectionRef = collection(db, 'najave');
  const skolaCollectionRef = collection(db, 'skola');

  const qa = query(aktivnostiCollectionRef, orderBy('createdAt', 'desc'));
  const qn = query(najaveCollectionRef, orderBy('createdAt', 'desc'));
  const qs = query(skolaCollectionRef, orderBy('createdAt', 'desc'));

  useEffect(() => {
    const getAktivnostiPosts = async () => {
      const aktivnostiData = await getDocs(qa);
      setAktivnosti(
        aktivnostiData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })),
      );
    };

    const getNajavePosts = async () => {
      const najaveData = await getDocs(qn);
      setNajavePosts(
        najaveData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })),
      );
    };
    const getSkolaSahaPosts = async () => {
      const skolaSahaData = await getDocs(qs);
      setSkolaSahaPosts(
        skolaSahaData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })),
      );
    };

    getAktivnostiPosts();
    getNajavePosts();
    getSkolaSahaPosts();
  }, []);

  return (
    <>
      <Div>
        <Header>Najave Turnira</Header>
        <Wrapper>
          {najavePosts &&
            najavePosts.map((post) => <PostScreen post={post} key={post.id} />)}
        </Wrapper>

        <Header>Nase aktivnosti</Header>
        <Wrapper>
          {aktivnosti.map((post) => (
            <PostScreen post={post} key={post.id} />
          ))}
        </Wrapper>

        <Header>Skola saha</Header>
        <Wrapper>
          {skolaSahaPosts &&
            skolaSahaPosts.map((post) => (
              <PostScreen post={post} key={post.id} />
            ))}
        </Wrapper>
      </Div>
    </>
  );
};
export default PostsScreen;
