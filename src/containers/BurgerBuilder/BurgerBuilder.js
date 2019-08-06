import React, { Component } from "react";
import BurgerGraphic from "../../components/Burger/BurgerGraphic/BurgerGraphic";
import Aux from "../../hoc/Aux";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import prices from "../../assets/prices";
import "./BurgerBuilder.css";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    },
    price: 2.5
  };

  addIngredients = e => {
    this.setState((state, props) => ({
      ingredients: {
        ...state.ingredients,
        [e]: state.ingredients[e] + 1
      },
      price: state.price + prices[e]
    }));
  };

  removeIngredients = e => {
    if (this.state.ingredients[e] === 0) return;
    this.setState((state, props) => ({
      ingredients: {
        ...state.ingredients,
        [e]: state.ingredients[e] - 1
      },
      price: state.price - prices[e]
    }));
  };

  render() {
    return (
      <Aux>
        <BurgerGraphic ingredients={this.state.ingredients} />
        <BuildControls
          {...this.state}
          addIngredients={ing => this.addIngredients(ing)}
          removeIngredients={ing => this.removeIngredients(ing)}
        />
      </Aux>
    );
  }
}
