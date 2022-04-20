import * as React from 'react';
import { FC } from 'react';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { PrimaryCard } from '../../components/cards';
import { IPost } from './models';

interface PostProps {
  post: IPost;
}

const PostCard: FC<PostProps> = ({ post }) => (
  <PrimaryCard>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="span">
          {post.title}
        </Typography>
        <Typography component="span" variant="body2">
          <div
            style={{
              border: '1px solid green',
              margin: '10px',
              padding: '5px',
            }}
          >
            {`${post.id}. | ${post.body}`}
          </div>
        </Typography>
      </CardContent>
    </CardActionArea>
  </PrimaryCard>
);

export default PostCard;
