import React, { Component } from 'react';
import './App.css';

import { view as TodoList } from './todos'
import { view as Filter } from './filter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList></TodoList>
        <Filter></Filter>
        test
      </div>
    );
  }
}

export default App;
