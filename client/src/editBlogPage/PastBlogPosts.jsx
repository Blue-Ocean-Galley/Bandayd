import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  ListTile,
  Button,
  ListItem,
} from '../styles/globalStyles';

export default function PastBlogPosts({ onPostClick = () => {}, posts }) {
  const handleClick = (post) => {
    onPostClick(post);
  };

  return (
    <PastBlogPostContainer>
      <h3> Past Blog Posts </h3>
      <Button onClick={() => onPostClick({
        name: '',
        post: '',
      })}
      >
        Create New
      </Button>
      {
        posts.map((post) => (
          <ListItem
            onClick={() => handleClick(post)}
            key={post.id}
          >
            <p>{post.name}</p>
          </ListItem>
        ))
      }
    </PastBlogPostContainer>
  );
}
PastBlogPosts.propTypes = {
  onPostClick: PropTypes.func.isRequired,
  posts: PropTypes.instanceOf(Array),
};
PastBlogPosts.defaultProps = {
  posts: [],
};

const PastBlogPostContainer = styled(ListTile)`
  width: 32%;
  > ${ListItem} {
    cursor: pointer;
  }
  height: 100%;
  overflow: auto;
`;
