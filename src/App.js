// src/App.js

import React, { Component } from 'react';
import { Button } from './components';

// this is an container to show the example of the components
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          mw-react-ui
        </h1>
        <Button text={'button'}></Button>
      </div>
    );
  }
}

export default App
