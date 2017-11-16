import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Pepe', age: 10 },
      { name: 'Jesus', age: 100 },
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

    let persons = null;

    //condition to render the Persons component
    if(this.state.showPersons) {
      persons = (
        <div>
          {
            //this is how you render the whole persons inside the array
            this.state.persons.map(person => {
              return <Person
                name = {person.name}
                age = {person.age}/>
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        {/* The inneficient way to bind data */}
        <button style={customButton} onClick={this.tooglePersons}>Show Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
