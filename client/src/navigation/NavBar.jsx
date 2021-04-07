import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';
import { Button, Card, Tile } from '../styles/globalStyles';

const Navigation = () => {
  const [isLoggedIn, logIn] = useState(false);
  const [listOpen, setListOpen] = useState(false);

  return (
    <NavBar>
      <LeftColumn>
        <h1>Bandayd</h1>
      </LeftColumn>
      <RightColumn>
        <NavList>
          <NavItem><StyledNavLink to="/">Home</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="/bands">Bands</StyledNavLink></NavItem>
          <NavItem><StyledNavLink to="/shows">Shows</StyledNavLink></NavItem>
          <NavItem onClick={() => setListOpen(isLoggedIn && !listOpen)}>
            {isLoggedIn ? (
              <DropDownContainer>
                <StyledNavLink to="/" onClick={() => setListOpen(!listOpen)}>Account</StyledNavLink>
                { listOpen ? <Dropdown /> : null }
              </DropDownContainer>
            )
              : <Button onClick={() => logIn(!isLoggedIn)}>Log In</Button>}
          </NavItem>
        </NavList>
      </RightColumn>
    </NavBar>
  );
};

// style list with styled components
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
`;

export const NavItem = styled.li`
  display: inline-flex;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 14px 14px;
  color: ${({ theme }) => theme.primary_text};
  background-color: ${({ theme }) => theme.background};

  &:hover {
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.primary_text};
  }
`;

const DropDownContainer = styled.div`
  display: block;
  position: relative;
  z-index: 1;
`;

export default Navigation;
