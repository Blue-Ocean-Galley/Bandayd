import React from 'react';

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
      <main className="container" id="app-outer-div">
        <h1 id="title" className="header-text">Bandayd</h1>
        <div>
          { isEslintWorking ? 'Hello world!' : '' }
        </div>
      </main>
    );
  }
}

export default App;
