import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import darkTheme from './styles/theme';
import SplashPageContainer from './splashPage/splashPageContainer';

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
      </ThemeProvider>
      <Switch>
        <Route exact path="/">
          <main>
            <h1>Bandayd</h1>
            <SplashPageContainer />
          </main>
        </Route>
      </Switch>
    </Router>
  );
}
