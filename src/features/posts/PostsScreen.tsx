import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPostsAsync } from './postsSlice';

import PostCard from './PostCard';
import { IPost } from './models';

const PostsScreen: FC = () => {
  const posts = useAppSelector((state) => state.posts.postsList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);
  return (
    <div>
      {posts.map((post: IPost) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsScreen;
