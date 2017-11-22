import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    //CAN STILL BE USED BUT ES6 IMPLEMENTS IT BY DEFAULT AND YOU ONLY NEED TO DECLARE THE STATE

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 2,
        }
    }

    render(){
        return (
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </div>
        );
    }
}

export default BurgerBuilder;