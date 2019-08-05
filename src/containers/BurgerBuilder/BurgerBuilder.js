import React, { Component } from "react";
import BurgerGraphic from "../../components/Burger/BurgerGraphic/BurgerGraphic";
import Aux from "../../hoc/Aux";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import "./BurgerBuilder.css";

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0
    }
  };

  render() {
    return (
      <Aux>
        <BurgerGraphic ingredients={this.state.ingredients} />
        <BuildControls ingredients={this.state.ingredients} />
      </Aux>
    );
  }
}
