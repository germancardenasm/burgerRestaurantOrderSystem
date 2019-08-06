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
    price: 2.5,
    purchaseAvailable: false
  };

  addIngredients = e => {
    this.setState(
      (state, props) => ({
        ingredients: {
          ...state.ingredients,
          [e]: state.ingredients[e] + 1
        },
        price: state.price + prices[e]
      }),
      () => this.setPurchaseAvailability()
    );
  };

  removeIngredients = e => {
    if (this.state.ingredients[e] === 0) return;
    this.setState(
      (state, props) => ({
        ingredients: {
          ...state.ingredients,
          [e]: state.ingredients[e] - 1
        },
        price: state.price - prices[e]
      }),
      () => this.setPurchaseAvailability()
    );
  };

  setPurchaseAvailability = () => {
    const ingredients = Object.keys(this.state.ingredients).reduce(
      (acc, curr) => {
        return acc + this.state.ingredients[curr];
      },
      0
    );
    if (ingredients) {
      this.setState({ purchaseAvailable: true });
    } else {
      this.setState({ purchaseAvailable: false });
    }
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
