import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import darkTheme from './styles/theme';
import Navigation from './navigation/NavBar';
import SplashPageContainer from './splashPage/splashPageContainer';

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <main>
              <Navigation />
              <SplashPageContainer />
            </main>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
