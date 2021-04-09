import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Card,
} from '../../styles/globalStyles';

export default function BandBlogPostItem({ name }) {
  return (
    <Post>
      <PostName>{name}</PostName>
    </Post>
  );
}
BandBlogPostItem.propTypes = {
  name: PropTypes.string.isRequired,
};
const Post = styled(Card)`
  justify-content: flex-start;
  align-items: left;
  margin: 0.5rem;
  padding: 0.5rem;
  flex-direction: column;
`;
const PostName = styled.p`
  font-weight: 600;
  margin-left: 0.5rem;
  margin-right: 2rem;
`;
