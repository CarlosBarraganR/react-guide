import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    //In this case our props we receive are an object not an array so we have to cast to an array like this:
    let transformedIngredients = Object.keys(props.ingredients)
        .map( ingredientsKey => {
            return [...Array(props.ingredients[ingredientsKey])].map((_, index) => {
                return <BurgerIngredient key={ingredientsKey + index} type={ingredientsKey}/>
            });
        })
        .reduce( (acum, current) => { return acum.concat(current) }, [] );

        if ( transformedIngredients.length === 0){
            transformedIngredients = <p>Please add some Ingredients</p>
        }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;