import React, { Component } from 'react';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  render() {
    // return this.state.fontLoaded ? <Routes /> : <AppLoading />;
    return <Routes />;
  }
}

export default App;
