import React from 'react';

const orderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients).map(ingredientsKey => {
        return (
            <li key={ingredientsKey}>
                <span style={{textTransform: 'capitalize'}}> { ingredientsKey } </span>
                {props.ingredients[ingredientsKey]}
            </li>
        );
    });
    
    return (
        <div>
            <h3>Your Order:</h3>
            <p>The Following Ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
        </div>
    );
};

export default orderSummary;