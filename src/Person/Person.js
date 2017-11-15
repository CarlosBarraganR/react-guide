import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am {props.name} and I'm {props.age} years old, also a person.</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;