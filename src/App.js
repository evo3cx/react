import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Root from './container/Root'
import Header from './components/Header'
import HeaderButton from './components/HeaderButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// import logo from '/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
            <Header></Header>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <HeaderButton></HeaderButton>
        </MuiThemeProvider>
        <Root></Root>
      </div>
    );
  }
}

export default App;
