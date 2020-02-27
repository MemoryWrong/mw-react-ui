// src/App.js

import React, { Component } from 'react';
import { Button } from './components';
import { Demo } from './components';

// this is an container to show the example of the components
class App extends Component {
  render() {
    return (
      <div className="App">
        <Button text={'button'}></Button>
        <Demo text={'demo'}></Demo>
      </div>
    );
  }
}

export default App
