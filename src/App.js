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

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'NewName'; 
    this.setState(
      {
        persons: [
          { name: newName, age: 22 },
          { name: 'SusyQ', age: 44 }  
        ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        {/* The inneficient way to bind data */}
        <button onClick={() => this.switchNameHandler('MadMax!!!')}>Swap Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          // This is the best way tho bind data
          click={this.switchNameHandler.bind(this , 'MADMAX')}>This is a children Text!</Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
      </div>
    );
  }
}

export default App;
