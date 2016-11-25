import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './container/Root'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Root></Root>
      </div>
    );
  }
}

export default App;
