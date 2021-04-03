import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { Button } from './styles/globalStyles';
import darkTheme from './styles/theme';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEslintWorking: true,
    };
  }

  render() {
    const { isEslintWorking } = this.state;
    return (
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <main className="container" id="app-outer-div">
          <h1 id="title" className="header-text">Bandayd</h1>
          <div>
            { isEslintWorking ? 'Hello world!' : '' }
          </div>
          <Button>?</Button>
        </main>
      </ThemeProvider>
    );
  }
}

export default App;
