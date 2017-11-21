import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    //CAN STILL BE USED BUT ES6 IMPLEMENTS IT BY DEFAULT AND YOU ONLY NEED TO DECLARE THE STATE

    state = {
        ingredients: {
            salad: 1,
            bacon: 0,
            cheese: 0,
            meat: 0,
        }
    }

    render(){
        return (
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Controls Comp</div>
            </div>
        );
    }
}

export default BurgerBuilder;