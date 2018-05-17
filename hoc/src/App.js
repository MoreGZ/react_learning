import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CountDown from './other/countDown';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <CountDown startCount={10}>
          {
            (count) => <p className="App-intro">
              {
                count > 0 ? count : "To get started, edit src/App.js and save to reload."
              }
            </p>
          }
        </CountDown>
      </div>
    );
  }
}

export default App;
