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
import SplashPageContainer from './splashPage/SplashPageContainer';
import EditBlogPageContainer from './editBlogPage/EditBlogPageContainer';

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <main>
              <Navigation />
              <SplashPageContainer toPath="/login" />
            </main>
          </Route>
          <Route exact path="/editblog">
            <main>
              <Navigation />
              <EditBlogPageContainer />
            </main>
          </Route>
          <Route path="/bands">
            <main>
              <Navigation />
              <div>Bands coming soon!</div>
            </main>
          </Route>
          <Route path="/shows">
            <main>
              <Navigation />
              <div>New shows coming soon!</div>
            </main>
          </Route>
          <Route path="/login">
            <main>
              <Navigation />
              <div>Signup coming soon!</div>
            </main>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
