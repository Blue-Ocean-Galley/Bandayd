import React from 'react';
import styled from 'styled-components';
import {
  Card,
} from '../../styles/globalStyles';

export default function BandBlogPostItem({ name, post }) {
  return (
    <Post>
      <p>{name}</p>
      <p>{post}</p>
    </Post>
  );
}
const Post = styled(Card)`

`;
