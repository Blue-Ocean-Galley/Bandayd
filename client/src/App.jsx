import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import darkTheme from './styles/theme';
import Navigation from './navigation/NavBar';
import SplashPageContainer from './splashPage/SplashPageContainer';
import EditBlogPageContainer from './editBlogPage/EditBlogPageContainer';

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <NavBar>
          <LeftColumn>
            <h1>Bandayd</h1>
          </LeftColumn>
          <RightColumn>
            <NavList>
              <NavItem><StyledNavLink to="/">Home</StyledNavLink></NavItem>
              <NavItem><StyledNavLink to="/bands">Bands</StyledNavLink></NavItem>
              <NavItem><StyledNavLink to="/shows">Shows</StyledNavLink></NavItem>
              <NavItem><StyledNavLink to="/login">Sign Up | Login</StyledNavLink></NavItem>
            </NavList>
          </RightColumn>
        </NavBar>
        <Switch>
          <Route exact path="/">
            <main>
              <SplashPageContainer toPath='/login' />
            </main>
          </Route>
          <Route exact path="/editblog">
            <main>
              <Navigation />
              <EditBlogPageContainer />
            </main>
          <Route path="/bands">
            <div>Bands coming soon!</div>
          </Route>
          <Route path="/shows">
            <div>New shows coming soon!</div>
          </Route>
          <Route path="/login">
            <div>Signup coming soon!</div>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

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
  overflow: hidden;
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
