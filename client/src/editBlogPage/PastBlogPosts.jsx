import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  ListTile,
  Button,
  ListItem,
} from '../styles/globalStyles';

export default function PastBlogPosts({ onPostClick = () => {}, posts }) {
  console.log('rerendering');
  console.log(posts);
  return (
    <PastBlogPostContainer>
      <h3> Past Blog Posts </h3>
      <Button onClick={() => onPostClick({
        postTitle: 'new',
        postText: '',
      })}
      >
        Create New
      </Button>
      {
        posts.map((post) => (
          <ListItem
            onClick={() => onPostClick({
              postTitle: post.title,
              postText: post.text,
            })}
            key={post.title}
          >
            <p>{post.title}</p>
          </ListItem>
        ))
      }
    </PastBlogPostContainer>
  );
}
PastBlogPosts.propTypes = {
  onPostClick: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf.isRequired,
};

const PastBlogPostContainer = styled(ListTile)`
  width: 32%;
  > ${ListItem} {
    cursor: pointer;
  }
  height: 100%;
  overflow: auto;
`;
