import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import darkTheme from './styles/theme';
import SplashPageContainer from './splashPage/splashPageContainer';

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <main className="container" id="app-outer-div">
        <h1 id="title" className="header-text">Bandayd</h1>
        <SplashPageContainer />
      </main>
    </ThemeProvider>
  );
}
