import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} and I'm {props.age} years old, also a person.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name}/>
        </div>
    )
}

export default person;