import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICE = {
    salad: 0.4,
    bacon: 0.6,
    cheese: 0.6,
    meat: 0.9
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    setPurchasingStatus= () => {
        this.setState({purchasing: true});
    }

    setPurchaseStatus(isPurchasable) {
        
        const ingredients  = {
            ...isPurchasable
        }
        
        const sumIngredients = Object.keys(ingredients)
            .map(ingredientsKey => {
                return ingredients[ingredientsKey];
            })
            .reduce((sum, newElement) => {
                return sum + newElement;
            }, 0);

        this.setState({purchasable: sumIngredients > 0});
    }

    addIngredients = (type) => {

        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;

        const addedIngredients = {
            ...this.state.ingredients
        }

        addedIngredients[type] = newCount;

        const newPrice = INGREDIENTS_PRICE[type] + this.state.totalPrice;

        this.setState({
            totalPrice: newPrice,
            ingredients: addedIngredients
        });

        this.setPurchaseStatus(addedIngredients);

    }

    removeIngredients = (type) => {

        const oldCount = this.state.ingredients[type];
        const newCount = oldCount - 1;

        if(oldCount <= 0) {return} //So you dont try to access -1 index in array

        const removedIngredients = {
            ...this.state.ingredients
        }

        removedIngredients[type] = newCount;

        const newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];

        this.setState({
            totalPrice: newPrice,
            ingredients: removedIngredients
        })

        this.setPurchaseStatus(removedIngredients);

    }

    render(){

        const disabledIngredients = {
            ...this.state.ingredients
        }

        for(let key in disabledIngredients){
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }

        return (
            <div>
                <Modal visible={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients = { this.state.ingredients }/>
                <BuildControls 
                    ingredientAdded = { this.addIngredients } 
                    ingredientRemoved = { this.removeIngredients }
                    ingredientsDisabled = { disabledIngredients }
                    purchasing = { this.setPurchasingStatus }
                    totalPrice = { this.state.totalPrice.toFixed(2) }
                    purchasable = {this.state.purchasable}/>
            </div>
        );
    }
}

export default BurgerBuilder;