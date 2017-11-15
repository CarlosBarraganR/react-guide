import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <Person name="Carlos" age="25"/>
      </div>
    );
  }
}

export default App;
