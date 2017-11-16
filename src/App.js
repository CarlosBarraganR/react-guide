import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id:'A0001', name: 'Pepe', age: 10 },
      { id:'A0002', name: 'Jesus', age: 100 },
      { id:'A0003', name: 'Pks', age: 11 }    
    ], 
    showPersons: false
  }

  //1. Fetch and create new state object 2. Delete the item in the index of the object 3. Set New State
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons; BAD PRACTICE BECAUSE WE NEED TO CREATE A COPY OF THE STATE PERSONS OBJECT
    //const persons = this.state.persons.splice(); COMMON PRACTICE
    const persons = [...this.state.persons]; //Spread Operator ftw
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  //1. Find index of Person you wanna change the name 2. Fetch and create new index state object 3. Set new Name in DOM
  //4. Fetch and create new state object 5. put new value to the object 6. Set New State with new value 7. PROFIT
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person_to_change => {
      return person_to_change.id === id;
    })

    const person = {
      ...this.state.persons[personIndex] 
    };
    //const person = Object.assign({}, this.state.persons[personIndex]); //Another Aproach instead of spread operator

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });

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

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key = {person.id}
                click = {() => this.deletePersonHandler(index)}
                name = {person.name}
                age = {person.age}
                changed = {(event) => this.nameChangeHandler(event, person.id)} />
            })
          } 
        </div>
      );
    }

    const custom_class = [];
    if(this.state.persons.length <= 2) { custom_class.push('red'); }
    if(this.state.persons.length <= 1) { custom_class.push('blue'); }

    return (
      <div className="App">
        <h1 className={custom_class.join(' ')}>Hi I'm a React App</h1>
        <button style={customButton} onClick={this.tooglePersons}>Show Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
