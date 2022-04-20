import React from 'react';
import styled from 'styled-components';
import Page from '../Page';
import PostsScreen from '../../features/sk-posts/PostsScreen';

export const Content = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const HomePage = () => (
  <Page>
    <Content>
      <PostsScreen />
    </Content>
  </Page>
);

export default HomePage;
