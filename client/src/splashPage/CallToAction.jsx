import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Tile } from '../styles/globalStyles';
import Login from '../modals/login';

export default function CallToAction({ toPath }) {
  return (
    <Container>
      <p>
        Ready to get  started?
      </p>
      <Link to={toPath}>
        <Button> Sign Up </Button>
        <Login />
      </Link>
    </Container>
  );
}

CallToAction.propTypes = {
  toPath: PropTypes.string.isRequired,
};

const Container = styled(Tile)`
  min-height: 30rem;
  background-color: ${({ theme }) => theme.primary};
  justify-content: space-around;
  align-items: center;
  > a {
    padding: 2rem;
    width: max-content;
  }
  > p {
    width: max-content;
  }
`;
