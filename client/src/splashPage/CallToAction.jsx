import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Link } from 'react-router-dom'; //not needed with modal
import { Button, Tile } from '../styles/globalStyles';
import Login from '../modals/login';

export default function CallToAction() {
  return (
    <Container>
      <p>
        Ready to get  started?
      </p>
      <div>
        <Button> Sign Up </Button>
        <Login />
      </div>
    </Container>
  );
}

// CallToAction.propTypes = {  //removed since log in is a modal
//   toPath: PropTypes.string.isRequired,
// };

const Container = styled(Tile)`
  min-height: 30rem;
  background-color: ${({ theme }) => theme.primary};
  justify-content: space-around;
  align-items: center;
  > div {
    padding: 2rem;
    width: 25rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  > p {
    width: max-content;
    font-size: 3rem;
  }
`;
