import React from 'react';

const cockpit = (props) => {

    const customButton = {
        backgroundColor: 'aqua',
        font: 'inherit',
        border: '1px solid #eee',
        padding: '15px',
        cursor: 'pointer'
    }

    return(
        <div>
            <h1>{props.titleApp}</h1>
            <button style={customButton} onClick={props.clicked}>Show Persons</button>
        </div>
    );
}

export default cockpit;