import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// create the new JSX element
const Navigation = (props) => (
  // create an unordered list
  <>
    <NavBar>
      <LeftColumn>
        <h1>Bandayd</h1>
      </LeftColumn>
      <RightColumn>
        <NavList>
          <NavItem><StyledNavLink to="/">Home</StyledNavLink></NavItem>
          <NavItem><StyledNavLink>Bands</StyledNavLink></NavItem>
          <NavItem><StyledNavLink>Shows</StyledNavLink></NavItem>
          <NavItem><StyledNavLink>Sign Up | Login</StyledNavLink></NavItem>
        </NavList>
      </RightColumn>
    </NavBar>
  </>
  // Add link tags for each item
);


// style list with styled components

// Export
export const NavBar = styled.nav`
  height: 7rem;
  display: flex;
  align-items: center;
  `;

export const LeftColumn = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: flex-start;
  width: 30%;
`;

export const RightColumn = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-end;
  width: 70%;
`;

export const NavList = styled.ul`
  margin: 0 15px;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
`;

export const NavItem = styled.li`
  display: inline-flex;
`;

export const StyledNavLink = styled(Link)`
  display: block;
  text-decoration: none;
  padding: 14px 14px;
  color: ${({ theme }) => theme.primary_text};
  background-color: ${({ theme }) => theme.background};

  &:hover {
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.primary_text};
  }
`

export default Navigation;