import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import darkTheme from './styles/theme';
import SplashPageContainer from './splashPage/splashPageContainer';

import Login from './modals/login';

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <main>
        <Login />
        <h1>Bandayd</h1>
        <SplashPageContainer />
      </main>
    </ThemeProvider>
  );
}
