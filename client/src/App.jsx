import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import darkTheme from './styles/theme';
import Navigation from './navigation/NavBar';
const TourList = lazy(() => import('./tours/TourList'));
const SplashPage = lazy(() => import('./splashPage/SplashPageContainer'));
const EditBlogPage = lazy(() => import('./editBlogPage/EditBlogPageContainer'));
const BandPage = lazy(() => import('./components/artistBandPage/BandPage'));
const renderLoader = () => <p>Loading...</p>;

export default function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Suspense fallback={renderLoader()}>
              <SplashPage toPath="/login" />
            </Suspense>
          </Route>
          <Route exact path="/editblog">
            <Suspense fallback={renderLoader()}>
              <EditBlogPage />
            </Suspense>
          </Route>
          <Route path="/bands">
            <Suspense fallback={renderLoader()}>
              <div>Bands page coming soon!</div>
            </Suspense>
          </Route>
          <Route path="/shows">
            <Suspense fallback={renderLoader()}>
              <TourList />
            </Suspense>
          </Route>
          <Route path="/login">
            <Suspense fallback={renderLoader()}>
              <div>Signup coming soon!</div>
            </Suspense>
          </Route>
          <Route path="/band">
            <Suspense fallback={renderLoader()}>
              <BandPage />
            </Suspense>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
