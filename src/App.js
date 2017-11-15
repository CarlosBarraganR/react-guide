import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Pepe', age: 10 },
      { name: 'Pks', age: 11 }    
    ], 
    showPersons: false
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

  nameChangeHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: 'Max', age: 22 },
          { name: event.target.value, age: 44 }  
        ]
      }
    )
  }

  tooglePersons = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({
      showPersons: !doesShowPersons
    });
  }

  render() {

    const customButton = {
      backgroundColor: 'aqua',
      font: 'inherit',
      border: '1px solid #eee',
      padding: '15px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        {/* The inneficient way to bind data */}
        <button style={customButton} onClick={this.tooglePersons}>Show Persons</button>
        { this.state.showPersons ? //this is how you show stuff like ng-if in angular
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              // This is the best way tho bind data
              click={this.switchNameHandler.bind(this , 'MADMAX')}>This is a children Text!</Person>
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              changeName={this.nameChangeHandler}/>
          </div>: null
        }
      </div>
    );
  }
}

export default App;
