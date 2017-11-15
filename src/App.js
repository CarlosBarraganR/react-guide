import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Pepe', age: 10 },
      { name: 'Pks', age: 11 }    
    ]
  }

  switchNameHandler = () => {
    // DON'T DO THIS: this.state.persons[0].name = 'NewName'; 
    this.setState(
      {
        persons: [
          { name: 'Mac', age: 22 },
          { name: 'SusyQ', age: 44 }  
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Swap Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>This is a children Text!</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>This is a children Text!</Person>
      </div>
    );
  }
}

export default App;
